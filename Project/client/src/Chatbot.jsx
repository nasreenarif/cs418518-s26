import { useState } from "react";

export default function Chatbot() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    async function handleSendMessage() {
        if (!input.trim()) return;

        const userMessage = {
            role: "user",
            content: input,
        };

        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);

        try {
            const res = await fetch(import.meta.env.VITE_API_KEY + "openai/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();

            if (res.ok) {
                const botMessage = {
                    role: "assistant",
                    content: data.data.reply,
                };

                setMessages((prev) => [...prev, botMessage]);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Error calling OpenAI route:", error);
        } finally {
            setLoading(false);
            setInput("");
        }
    }

    return (
        <div>
            <h2>Chatbot</h2>

            <div>
                {messages.map((msg, index) => (
                    <p key={index}>
                        <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
                    </p>
                ))}
            </div>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message"
            />

            <button onClick={handleSendMessage} disabled={loading}>
                {loading ? "Sending..." : "Send"}
            </button>
        </div>
    );
}