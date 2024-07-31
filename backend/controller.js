const { DataAPIClient } = require("@datastax/astra-db-ts");
const { RecursiveCharacterTextSplitter } = require("@langchain/textsplitters");
const sampleData = require("./json/user-data.json");
const { HfInference } = require("@huggingface/inference");

require("dotenv").config();

const model = new HfInference(process.env.HF_TOKEN);

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);

const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, {
  namespace: process.env.ASTRA_DB_NAMESPACE,
});

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

const createCollection = async () => {
  try {
    await db.createCollection("myportfolio1", {
      vector: {
        dimension: 384,
      },
    });
  } catch (error) {
    console.log("Collection Already Exists", error);
  }
};

const loadData = async () => {
  const collection = await db.collection("myportfolio1");
  for (const { id, info, description } of sampleData) {
    const chunks = await splitter.splitText(description);
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];

      const data = await model.featureExtraction({
        model: "sentence-transformers/all-MiniLM-L6-v2",
        inputs: chunk,
      });

      await collection.insertOne({
        document_id: id,
        $vector: data,
        info,
        description: chunk,
      });
    }
  }

  console.log("Data added");
};

const createAndLoadEmbedding = () =>
  createCollection().then(loadData).catch(console.error);

const ChatController = async (req, res) => {
  try {
    const { message } = req.body;
    let docContext = "";

    const data = await model.featureExtraction({
      model: "sentence-transformers/all-MiniLM-L6-v2",
      inputs: message,
    });

    const collection = await db.collection("myportfolio1");

    const cursor = collection.find(null, {
      sort: {
        $vector: data,
      },
      limit: 5,
    });

    const documents = await cursor.toArray();

    docContext = `
        START CONTEXT
        ${documents?.map((doc) => doc.description).join("\n")}
        END CONTEXT
        `;

    const ragPrompt = [
      {
        role: "system",
        content: `
            You are an AI assistant answering questions as Surya teja in my Portfolio App. 
            Format responses using markdown where applicable.
            ${docContext}
            question: ${message}. Answer this question. As an ai, you should give answers in sentence. You should be professional and polite.
            Dont give vague answers. 
            If the answer is not provided in the context, the AI assistant will say, 
            "I'am sorry, I do not know the answer".
            `,
      },
    ];

    const onStreamParse = fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-base/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
        },
        body: JSON.stringify({
          // model: "mistralai/Mistral-Nemo-Instruct-2407",
          inputs: ragPrompt[0].content,
          // stream: false,
        }),
      }
    );

    const response = await (await onStreamParse).json();

    console.log("response", {
      response,
      prompt: ragPrompt,
    });
    return res.send({
      response,
      prompt: ragPrompt,
    });
  } catch (error) {
    console.log("error", error);
    return res.json({ error: error });
  }
};

module.exports = {
  ChatController,
  createAndLoadEmbedding,
};
