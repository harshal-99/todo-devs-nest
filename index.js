import express from "express"
import {v4 as uuid} from "uuid"

import todoRouter from "./api/todo.js";

const app = express()

app.get('/api', (req, res) => {
    const path = `/api/item/${uuid()}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
})

app.use('/api/todo', todoRouter);

app.listen(3000, () => console.log('Server running'))
