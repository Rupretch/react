

function NewTodoComponent2(props) {

  return (
    <>
      <div className="form-row">
        <label htmlFor="inputForNewTodo" className="form-label">
          Champ pour l&#39;ajout d&#39;événement à la &#39;Todo&#39; Liste
        </label>
        <input type="text" id="inputForNewTodo" className="form-control" onKeyDown={props.onClick}/>
      </div>

      <div className="d-grid gap-2">
        <button
          onClick={props.onClick}
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

export default NewTodoComponent2;