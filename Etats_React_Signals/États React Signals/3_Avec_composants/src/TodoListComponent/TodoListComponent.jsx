import Signals from "../Signals";

function TodoListComponent() {
  return (
    <>
      <ul className="list-group">
        {Signals.todos.value.map((todo) => {
          return (
            <label
              key={todo.id}
              className="list-group-item d-flex gap-2 align-items-center"
            >
              <input className="form-check-input me-1" type="checkbox" />
              {todo.text}
              <button
                onClick={() => {
                  Signals.removeTodo(todo);
                }}
                type="button"
                className="btn btn-danger ms-auto"
              >
                Supprimer
              </button>
            </label>
          );
        })}
      </ul>
    </>
  );
}

export default TodoListComponent;