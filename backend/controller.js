const { DataAPIClient } = require("@datastax/astra-db-ts");
const { RecursiveCharacterTextSplitter } = require("@langchain/textsplitters");
// const sampleData = require("./json/user-data.json");
const sampleData = [
  {
    id: 1,
    text: "full name / name / user / developer name: Surya Teja Kandukuru / surya teja / surya / surya teja kandukuru",
  },
  {
    id: 2,
    text: "role / designation / profession / working as: Frontend Engineer",
  },
  {
    id: 3,
    text: "contact via linkedin: linkedin.com/in/suryateja",
  },
  {
    id: 4,
    text: "contact via github: github.com/thejus557",
  },
  {
    id: 5,
    text: "contact via email: suryatejakandukuru8@gmail.com",
  },
  {
    id: 7,
    text: "about user summary 1: A visionary Frontend Engineer with expertise in crafting sophisticated, user-focused interfaces for web and mobile platforms.",
  },
  {
    id: 7.1,
    text: "about user summary 2: Expert in harnessing the latest technologies to engineer seamless and intuitive user experiences.",
  },
  {
    id: 7.2,
    text: "about user summary 3: A passionate open-source contributor, contributing to the global tech community to foster innovation.",
  },
  {
    id: 8,
    text: "technologies known / used technical languages / programming languages / skills / skills set: JavaScript, TypeScript",
  },
  {
    id: 9,
    text: "frontend tech stack / full stack tech stack / skills / skills set: React, Angular 2+",
  },
  {
    id: 10,
    text: "backend tech stack / full stack tech stack / skills / skills set: Node.js, Express.js, MongoDB",
  },
  {
    id: 11,
    text: "popular libraries used while working on applications / full stack tech stack / skills / skills set: React, Redux-toolkit, Material UI, Angular Material, RXJS, NGRX, HTML, CSS, Tailwind",
  },
  {
    id: 12,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Frontend Engineer at Techolution, HYD from 2020 to present, Full-time. Led a team of 5 to modernize an outdated JavaScript-based Cordova app, migrating it to Capacitor and utilizing Ionic web components to achieve the latest iOS UI design.",
  },
  {
    id: 12.1,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Directed a crucial AI book translator project, implementing features like CKEditor integration, sync scroll, and performance optimization, resulting in a 60% faster page rendering and ensuring project success and client satisfaction.",
  },
  {
    id: 12.2,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Independently engineered a dynamic admin dashboard for MobileMerch Solutions, incorporating tracking of merchandisers, organizational management, visualization, pending payments oversight, etc., ensuring unparalleled efficiency and operational transparency.",
  },
  {
    id: 12.3,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Implemented robust security measures, including authentication and role-based authorization functionalities, ensuring 100% data confidentiality and access control.",
  },
  {
    id: 12.4,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Implemented a comprehensive suite of performance optimization strategies, resulting in a 75% improvement in system efficiency, faster load times, and smoother user interactions, ultimately enhancing overall application performance and user experience.",
  },
  {
    id: 12.5,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Actively participated in cross-functional collaboration and brainstorming sessions, contributing insights that led to cohesive design strategies and seamless integration of user interface elements with backend functionality, enhancing overall project cohesion and success.",
  },
  {
    id: 12.6,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Played a proactive role in mentoring interns and supporting fellow developers, fostering a culture of continuous learning and improvement within the team.",
  },
  {
    id: 13,
    text: "open source contributions / contributions to open source / open source projects / open source work: PR #4745, PR #4717, PR #4713, PR #4702, PR #4703",
  },
  {
    id: 14,
    text: "education / bachelor's degree / degree / college / university / graduation year / background: B.Tech in Computer Science and Engineering from 2016 to 2020",
  },
  {
    id: 15,
    text: "clients surya worked with / companies surya worked with / projects surya worked on / projects surya contributed to: Centra Water Authority Mauritius, Brooklyn Hospital, Yodeco Mobile Merchandising Solutions, Harper Collins Phase, Techolution, I Heart Media, Globus Medicals, Ovens and Minors, Dataguise",
  },
  {
    id: 16,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Senior UI Developer at Techolution from Aug 2022 - Present. Led the design and implementation of dynamic user interfaces, improving user engagement and application performance.",
  },
  {
    id: 16.1,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Managed cross-functional teams to deliver high-quality UI components, adhering to best practices and design guidelines.",
  },
  {
    id: 16.2,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Enhanced application scalability and efficiency by leveraging advanced technologies and optimizing code.",
  },
  {
    id: 16.3,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Associate UI Developer at Techolution from Mar 2021 - Aug 2022. Collaborated with design and development teams to convert complex UI/UX requirements into functional, user-friendly interfaces.",
  },
  {
    id: 16.4,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Implemented responsive design elements to improve user experience across various devices and platforms.",
  },
  {
    id: 16.5,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Assisted in debugging and troubleshooting to maintain application stability and performance.",
  },
  {
    id: 16.6,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: UI Intern at Techolution from Sep 2020 - Mar 2021. Supported the development and styling of web pages, gaining practical experience with modern web technologies.",
  },
  {
    id: 16.7,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Assisted senior developers in creating and testing user interfaces, following best practices in UI development.",
  },
  {
    id: 16.8,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Contributed to project documentation and participated in code reviews to enhance technical skills.",
  },
  {
    id: 16.9,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: MEAN Stack Developer Intern at SmartX Connected Products from Jan 2020 - Mar 2020. Contributed to the development of full-stack applications using the MEAN stack (MongoDB, Express.js, Angular, Node.js).",
  },
  {
    id: 16.1,
    text: "what role does surya played / what is that work surya is doing / what is surya experience / what is surya expertise / what is surya known for: Engaged in coding, debugging, and testing to ensure robust and scalable web solutions. Collaborated with the development team to meet project requirements and deliver high-quality features.",
  },
  {
    id: 17,
    text: "contact me / contact surya / contact surya teja / contact surya teja kandukuru: Contact Me at suryatejakandukuru8@gmail.com",
  },
];

const { HfInference } = require("@huggingface/inference");

require("dotenv").config();

const model = new HfInference(process.env.HF_TOKEN);

const model1 = "sentence-transformers/all-MiniLM-L6-v2";
const model2 = "sentence-transformers/paraphrase-MiniLM-L6-v2";
const modelCollection = "paraphrase";

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
    await db.createCollection(modelCollection, {
      vector: {
        dimension: 384,
      },
    });
  } catch (error) {
    console.log("Collection Already Exists", error);
  }
};

const loadData = async () => {
  const collection = await db.collection(modelCollection);
  for (const { id, text } of sampleData) {
    const chunks = await splitter.splitText(text);
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];

      const data = await model.featureExtraction({
        model: model2,
        inputs: chunk,
      });

      await collection.insertOne({
        document_id: id,
        $vector: data,
        text: chunk,
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
      model: model2,
      inputs: message,
    });

    const collection = await db.collection(modelCollection);

    const cursor = collection.find(null, {
      sort: {
        $vector: data,
      },
      limit: 5,
    });

    const documents = await cursor.toArray();

    docContext = `
        START CONTEXT
        ${documents?.map((doc) => doc.text).join("\n")}
        END CONTEXT
        `;

    const ragPrompt = [
      {
        role: "system",
        content: `
        You are an AI assistant answering questions as Surya Teja in my Portfolio App. 
        Use the context provided below to answer the questions. 
        Format responses using markdown where applicable.
        
        Context:
        ${docContext}
        
        Your task is to answer the following question:
        
        Question: ${message}
        
        Answer this question professionally and politely in a straightforward sentence. Use markdown formatting where necessary. Avoid yes/no answers and ensure the response is clear and concise.
        
        If the answer is not provided in the context, respond with:
        "I am sorry, I do not know the answer."
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
      docContext,
      question: message,
    });
    return res.send({
      response,
      docContext,
      question: message,
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
