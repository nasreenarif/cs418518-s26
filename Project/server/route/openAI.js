import { Router } from "express";
import OpenAI from "openai";

const openAIRouter = Router();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

openAIRouter.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message || !message.trim()) {
            return res.status(400).json({
                status: 400,
                message: "Message is required",
                data: null,
            });
        }

        const response = await client.responses.create({
            model: "gpt-5.4-mini",
            input: `
You are a helpful assistant for a web programming course.
Answer clearly and simply.
Student question: ${message}
      `.trim(),
        });

        return res.status(200).json({
            status: 200,
            message: "Response generated successfully",
            data: {
                reply: response.output_text,
            },
        });
    } catch (error) {
        console.error("OpenAI route error:", error);

        return res.status(500).json({
            status: 500,
            message: "Failed to get response from OpenAI",
            data: null,
        });
    }
});

export default openAIRouter;