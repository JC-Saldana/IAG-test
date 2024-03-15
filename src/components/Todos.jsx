import { useState } from "react"
import Todo from "./Todo"

export default function Todos() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")
    const handleInputChange = e => {
        const val = e.target.value
        setInputValue(val)
    }
    const handleAddTodo = () => {
        setTodos([...todos, inputValue])
    }
    const removeTodo = (removedTodo) => {
        const updatedTodos = todos.filter(todo => todo === removedTodo)
        setInputValue(updatedTodos)
    }

    return (
        <>
            <div>
                <input onChange={e => handleInputChange(e)} />
                <button onClick={() => handleAddTodo()}>Añadir</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {todos.map(todo => <Todo key={todo} todo={todo} />)}
            </div>
        </>
    )
}