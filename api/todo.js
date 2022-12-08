import {Router} from "express";

const todoRouter = Router()

todoRouter.get('/', (req, res) => {
    res.json({message: 'Hello from todo!'})
})
export default todoRouter
