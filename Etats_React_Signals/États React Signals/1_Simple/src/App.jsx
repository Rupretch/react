// App avec signals
// https://preactjs.com/guide/v10/signals
// On importe signal
import { signal } from "@preact/signals-react";

// On crée un signal pour une variable text (initialisée à "")
const text = signal("Text mais avec signal");

// On crée une fonction pour gérer l'ajout d'un élément à la liste
function handleSubmitTodo() {
    const item = document.getElementById('inputForNewTodo');
    text.value = item.value;
    item.value = '';
}

// Notre composante App
function App() {

    return (<>
        <div className="container">
            <div className="form-row">
                <label htmlFor="inputForNewTodo" className="form-label">Champ pour l&apos;ajout d&apos;événement à la &apos;Todo&apos; Liste</label>
                <input type="text" id="inputForNewTodo" className="form-control" />
            </div>

            <div className="d-grid gap-2">
                {/* On met un listener sur le clic du bouton */}
                <button onClick={handleSubmitTodo} id="btnAddTodo" type="button" className="btn btn-primary m-1">Ajouter</button>
            </div>
            <h1 className="h1">&apos;Todo&apos; liste</h1>

            <ul>
                {/* On affiche la valeur de la variable text (via sa propriété value) */}
                <li>{text.value}</li>
            </ul>
        </div>
    </>);
}

export default App;