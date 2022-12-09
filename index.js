import express from "express"

import todoRouter from "./api/todo.js";
import {resetTodo} from "./data.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/todo', todoRouter);
app.use('/api/reset', (req, res) => {
    resetTodo()
    res.status(200).json({message: "Todo reset"})
})

const PORT  = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
