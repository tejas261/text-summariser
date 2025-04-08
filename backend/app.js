import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/summarize", async (req, res) => {
  const { text } = req.body;

  const response = await fetch(
    "https://api-inference.huggingface.co/models/csebuetnlp/mT5_multilingual_XLSum",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
      },
      body: JSON.stringify({
        inputs: `summarize this text in pointers if possible in the same language as you receive it: ${text}`,
        parameters: {
          max_length: 500,
          min_length: 40,
          do_sample: false,
        },
      }),
    }
  );

  const data = await response.json();
  res.json(data);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
