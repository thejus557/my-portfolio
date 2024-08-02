const express = require("express");
const bp = require("body-parser");
const cors = require("cors");
const app = express();
const { createAndLoadEmbedding, ChatController } = require("./controller");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(bp.json());
app.use(cors());
app.options("*", cors());

app.post("/chat", ChatController);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  // createAndLoadEmbedding(); // to load the embedding in to the astra db
  console.log(`Server running on port ${PORT}`);
});
