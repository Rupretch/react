import { signal } from "@preact/signals-react";

// On crée un module Signals qui contient nos signaux
export default class Signals {
    // Un signal pour la liste des tâches
    static todos = signal([
        { id: crypto.randomUUID(), text: "Aller à l'épicerie" },
    ]);

    // Un signal pour le texte de la nouvelle tâche (input)
    static text = signal("");

    // Une méthode pour ajouter une nouvelle tâche (qui sera appelée lorsqu'on clique sur le bouton Ajouter)
    static handleSubmitTodo(evt) {
        // Si l'événement est une touche et que c'est autre chose que la touche Entrée, on ne fait rien
        if (evt.type === "keydown" && evt.key !== "Enter") return;

        const item = document.getElementById('inputForNewTodo');
        Signals.text.value = item.value;
        Signals.todos.value = [...Signals.todos.value, { id: crypto.randomUUID(), text: Signals.text.value }];
        // On vide le champ de l'input
        item.value = "";
    }

    // Une méthode pour supprimer une tâche (qui sera appelée lorsqu'on clique sur le bouton Supprimer)
    static removeTodo(todo) {
        Signals.todos.value = Signals.todos.value.filter(t => t !== todo);
    }
}