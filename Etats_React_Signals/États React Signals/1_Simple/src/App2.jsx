// App avec useState
// On import useState
import { useState } from "react";

function App2() {

    // On déclare une variable text et une fonction setText pour la modifier
    // avec la fonction useState qui initialise la variable à "Texte original"
    const [text, setText] = useState("Texte original");

    // On crée une fonction pour gérer la mise a jour dde élément à la liste
    function handleSubmitTodo() {
        const item = document.getElementById('inputForNewTodo');
        setText(item.value);
        item.value = '';
    }

    return (
    <>
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
                {/* On affiche la valeur de la variable text */}
                <li>{text}</li>
            </ul>
        </div>
    </>
    );
}

export default App2;