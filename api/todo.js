import {Router} from "express";
import {v4 as uuid} from "uuid"

import todos from "../data.js"

const todoRouter = Router()

todoRouter.get('/', (req, res) => {
    res.json(todos)
})

todoRouter.post('/', (req, res) => {
    const {title, description, completed, priority, dueDate} = req.body
    if(!title) return res.status(400).json({message: "Title is required"})
    const newTodo = {
        id: uuid(),
        title,
        description,
        completed,
        priority,
        dueDate
    }
    todos.push(newTodo)
    res.status(201).json(newTodo)
})

todoRouter.get('/:id', (req, res) => {
    const {id} = req.params
    const todo = todos.find(todo => todo.id === id)
    if(todo) res.json(todo)
    return res.status(404).json({message: "Todo not found"})
})

todoRouter.put('/:id', (req, res) => {
    const {id} = req.params
    const todo = todos.find(todo => todo.id === id)

    if(!todo) return res.status(404).json({message: "Todo not found"})

    const {title, description, completed, priority, dueDate} = req.body
    todo.title = title ? title : todo.title
    todo.description = description ? description : todo.description
    todo.completed = completed ? completed : todo.completed
    todo.priority = priority ? priority : todo.priority
    todo.dueDate = dueDate ? dueDate : todo.dueDate
    res.json(todo)
})

todoRouter.delete('/:id', (req, res) => {
    const {id} = req.params
    const todo = todos.find(todo => todo.id === id)

    if(!todo) return res.status(404).json({message: "Todo not found"})

    todos.splice(todos.indexOf(todo), 1)
    res.json({message: "Todo deleted"})
})
export default todoRouter
