import express from "express"
import runGraph from "./ai/graph.ai.js"

const app = express()

app.get('/', async (req, res)=> {

    const result = await runGraph("write a program to calculate a factorial of a number")

    res.json(result);
    console.log(result)
     
   
})

export default app

