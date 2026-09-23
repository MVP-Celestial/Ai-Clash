import express from "express"
import runGraph from "./ai/graph.ai.js"

const app = express()

app.get('/', async (req, res)=> {

    const result = await runGraph("tell me about ur fav anime .")

    res.json(result);
    console.log(result)
     
   
})

export default app

