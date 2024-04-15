// On récupère le module signal + nos signaux dans le fichier Signals.jsx
import Signals from "../Signals";

function NewTodoComponent() {

  return (
    <>
      <div className="form-row">
        <label htmlFor="inputForNewTodo" className="form-label">
          Champ pour l&#39;ajout d&#39;événement à la &#39;Todo&#39; Liste
        </label>
        <input type="text" id="inputForNewTodo" className="form-control" onKeyDown={Signals.handleSubmitTodo} />
      </div>

      <div className="d-grid gap-2">
        <button
          onClick={Signals.handleSubmitTodo}
          id="btnAddTodo"
          type="button"
          className="btn btn-primary m-1"
        >
          Ajouter
        </button>
      </div>
    </>
  );
}

export default NewTodoComponent;