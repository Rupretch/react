// App avec useState
import { useState } from "react";

function App2() {

    // On crée un état pour le tableau d'objets de todos
    const [todos, setTodos] = useState([
        { id: crypto.randomUUID(), text: "Aller à l'épicerie" }
    ]);

    // On crée un état pour le texte de l'input
    const [text, setText] = useState("");

    // On crée une fonction pour gérer l'ajout d'un élément à la liste
    function handleSubmitTodo(evt) {
        // Si l'événement est une touche et que c'est autre chose que la touche Entrée, on ne fait rien
        if (evt.type === "keydown" && evt.key !== "Enter") return;

        // On récupère l'élément de l'input
        const item = document.getElementById('inputForNewTodo');
        setText(item.value);
        // On ajoute un nouvel élément à la liste
        // L'opérateur spread (...) permet de copier le tableau et d'ajouter un nouvel élément
        setTodos([...todos, { id: crypto.randomUUID(), text: item.value }]);
        // On vide le champ de l'input
        item.value = "";
    }
    
    // On crée une fonction pour gérer la suppression d'un élément de la liste
    function removeTodo(todo) {
        // On filtre les éléments pour garder ceux sui sont différents de celui à supprimer
        setTodos(todos.filter(t => t !== todo)); 
    }

    return (<>
        <div className="container">
            <div className="form-row">
                <label htmlFor="inputForNewTodo" className="form-label">Champ pour l&#39;ajout d&#39;événement à la &#39;Todo&#39; Liste</label>
                <input type="text" id="inputForNewTodo" className="form-control" onKeyDown={handleSubmitTodo} />
            </div>

            <div className="d-grid gap-2">
                <button onClick={handleSubmitTodo} id="btnAddTodo" type="button" className="btn btn-primary m-1">Ajouter</button>
            </div>
            <h1 className="h1">&#39;Todo&#39; liste</h1>

            <ul className="list-group list-unstyled">
            {todos.map((todo) => {
                return (
                <li key={todo.id} >
                    <label className="list-group-item d-flex gap-2 align-items-center">
                        <input className="form-check-input me-1" type="checkbox" />
                        {todo.text}
                        <button onClick={() => { removeTodo(todo) }} type="button" className="btn btn-danger ms-auto">Supprimer</button>
                    </label>
                </li>
                );
            })}
            </ul>
        </div>
    </>)
}

export default App2;