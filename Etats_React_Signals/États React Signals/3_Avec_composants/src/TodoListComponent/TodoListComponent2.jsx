

function TodoListComponent2(props) {
    return (
        <ul className="list-group list-unstyled">
            {props.todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        <label className="list-group-item d-flex gap-2 align-items-center">
                            <input className="form-check-input me-1" type="checkbox" />
                            {todo.text}
                            {/* On passe la fonction removeTodo à TodoListComponent2, et on utilise la notation fonctionnelle
                                () => {} afin de passer le todo en argument */}
                            <button onClick={() => props.onClick(todo)} type="button" className="btn btn-danger ms-auto">
                                Supprimer
                            </button>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoListComponent2;