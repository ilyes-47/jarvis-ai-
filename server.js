const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
    res.send("JARVIS backend is online.");
});

app.post("/chat", async (req, res) => {
    try {
        const message = req.body.message;

        if (!message) {
            return res.status(400).json({
                error: "No message provided."
            });
        }

        const response = await client.responses.create({
            model: "gpt-5",
            instructions:
                "You are JARVIS, a calm, intelligent and respectful AI assistant. Address the user as Sir. Be natural, helpful and concise when appropriate.",
            input: message
        });

        res.json({
            reply: response.output_text
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "JARVIS encountered an error."
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`JARVIS is running on port ${PORT}`);
});
