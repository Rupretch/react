// App avec useState
import NewTodoComponent2 from "./NewTodoComponent/NewTodoComponent2.jsx";
import TodoListComponent2 from "./TodoListComponent/TodoListComponent2.jsx";
// On importe la fonction useState pour gérer les états
import { useState } from "react";

function App2() {

    // On crée un état pour le tableau d'objets de todos
    const [todos, setTodos] = useState([ { id: crypto.randomUUID(), text: "Aller à l'épicerie" } ]);

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

    return (
        <div className="container">
            {/* On passe la fonction handleSubmitTodo à NewTodoComponent2 */}
            <NewTodoComponent2 onClick={handleSubmitTodo}/>
            <h1 className="h1">&#39;Todo&#39; liste</h1>
            {/* On passe la liste des todos et la fonction removeTodo à TodoListComponent2 */}
            <TodoListComponent2 todos={todos} onClick={removeTodo}/>
        </div>
    );
}

export default App2;