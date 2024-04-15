// App avec signals
// https://preactjs.com/guide/v10/signals
import NewTodoComponent from "./NewTodoComponent/NewTodoComponent.jsx";
import TodoListComponent from "./TodoListComponent/TodoListComponent.jsx";

function App() {

    return (
    <>
        <div className="container">
            <NewTodoComponent />
            <h1 className="h1">&#39;Todo&#39; liste</h1>
            <TodoListComponent />
        </div>
    </>
    );
}

export default App;