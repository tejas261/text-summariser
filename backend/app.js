import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/summarize", async (req, res) => {
  const { text } = req.body;
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mixtral-8x7b-instruct",
        messages: [
          {
            role: "system",
            content: "You are a helpful summarizer.",
          },
          {
            role: "user",
            content: `Summarize the following article preserving key events, names, and causes in not more than 20 lines:\n\n${text}`,
          },
        ],
      }),
    }
  );

  const data = await response.json();
  res.json(data.choices[0].message.content);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
