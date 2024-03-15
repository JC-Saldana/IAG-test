
export default function Todo({ todo, removeTodo }) {
    return (
        <div>
            <input type="checkbox" id="cbox1" value="first_checkbox" />
            {todo}
            <button onClick={() => removeTodo(todo)}>Eliminar</button>
        </div>
    )
}