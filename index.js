import express from "express"

import todoRouter from "./api/todo.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/todo', todoRouter);

const PORT  = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
