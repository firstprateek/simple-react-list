export default function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
    return <li key={id}>
                <label>
                    <input 
                        type="checkbox" 
                        checked={completed} 
                        onChange={toggleTodo.bind(null, id)}
                    />
                    {title}
                </label>
                <button 
                    onClick={deleteTodo.bind(null, id)}
                    className="btn btn-danger"
                >Delete</button>
            </li>
}