import aiAssistant from "../assets/projects/ai-learning-assistant.png";
import chatreact from "../assets/projects/chatreact.png";

export const projects = [
  {
    title: "AI Learning Assistant",
    image: aiAssistant,

    description:
      "Full-stack AI learning platform where users upload PDFs and receive AI-generated summaries, flashcards, and quizzes using RAG, vector search, and Groq LLMs. Built with React, Node.js, MongoDB, JWT authentication, and deployed on Vercel & Render.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Generative AI",
      "RAG",
      "Vector Embeddings",
      "Tailwind",
      "Groq AI",
      "Vercel",
      "Render",
    ],

    github:
      "https://github.com/haniigupta/ai-learning-assistant",

    live:
      "https://ai-learning-assistant-kohl-iota.vercel.app/",
  },

  {
    title: "ChatReact AI",
    image: chatreact,

    description:
      "AI chatbot powered by Groq API with a modern chat interface and real-time responses.",

    tech: [
      "React",
      "JavaScript",
      "Tailwind",
      "Groq AI",
    ],

    github:
      "https://github.com/haniigupta/ChatReact",

    live:
      "https://chat-react-ebon-sigma.vercel.app/",
  },
];