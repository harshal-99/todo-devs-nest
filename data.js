const initialTodos = [
    {
        "id": "123",
        "title": "Play Red Dead Redemption 2",
        "description": "Really interesting game.",
        "completed": false,
        "priority": 3,
        "dueDate": Date()
    },
    {
        "id": "124",
        "title": "Play Just Cause 4",
        "description": "A fun game.",
        "completed": false,
        "priority": 2,
        "dueDate": Date()
    },
    {
        "id": "125",
        "title": "Play Valorant",
        "description": "Really addictive game.",
        "completed": false,
        "priority": 5,
        "dueDate": Date()
    }
]

let todos = [
    {
        "id": "123",
        "title": "Play Red Dead Redemption 2",
        "description": "Really interesting game.",
        "completed": false,
        "priority": 3,
        "dueDate": Date()
    },
    {
        "id": "124",
        "title": "Play Just Cause 4",
        "description": "A fun game.",
        "completed": false,
        "priority": 2,
        "dueDate": Date()
    },
    {
        "id": "125",
        "title": "Play Valorant",
        "description": "Really addictive game.",
        "completed": false,
        "priority": 5,
        "dueDate": Date()
    }
]

export const resetTodo = () => {
    todos = initialTodos
}
export default todos
