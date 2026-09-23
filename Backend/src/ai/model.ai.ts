import { ChatMistralAI } from "@langchain/mistralai"
import { ChatCohere } from "@langchain/cohere"
import { ChatGroq } from "@langchain/groq"
import { ChatOpenRouter } from "@langchain/openrouter"
import config from "../config/config.js"


export const openRouterModel = new ChatOpenRouter({
    model: "openrouter/free",
    apiKey: config.OPENROUTER_API_KEY,
})

export const mistralModel = new ChatMistralAI({
    model: "mistral-small-latest",
    apiKey: config.MISTRAL_API_KEY,
})

export const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: config.COHERE_API_KEY,
})

export const groqModel = new ChatGroq({
    model: "openai/gpt-oss-20b",
    apiKey: config.GROQ_API_KEY,
})