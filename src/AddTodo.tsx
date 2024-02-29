import "./AddTodo.css"

interface IAddTodoProps {
    handleSubmit: (event:React.FormEvent<HTMLFormElement>) => void
}

const AddTodo = (props:IAddTodoProps) => {
    return ( 

    <div id="app">
        <h1>Todo List</h1>
            <form id="form" onSubmit={(event) => props.handleSubmit(event)}>
                <input type="text" id="newTodoInput" placeholder="Add a new todo"/>
                <input type="text" id="author" placeholder="Author"/>
                <button type="submit" className="submit" >Add ToDo</button>
            </form>
        <ul id="todoList"></ul>
    </div>

     );
}
 
export default AddTodo;

