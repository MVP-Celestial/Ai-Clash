import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { ChatCohere } from "@langchain/cohere"
import { ChatMistralAI } from "@langchain/mistralai"
import config from "../config/config.js"

export const geminiModel = new ChatGoogleGenerativeAI({
    model: "gemini-flash-latest",
    apiKey: config.GOOGLE_API_KEY,
})

export const geminiSolutionModel = new ChatMistralAI({
    model: "mistral-large-latest",
    apiKey: config.MISTRAL_API_KEY,
})

export const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: config.COHERE_API_KEY,
})