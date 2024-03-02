import "./AddTodo.css";
import { ChangeEvent, FormEvent, useState } from "react";

// Define the type for the object to be added as a new todo
export interface ITodoInfo {
    text: string;
    author: string;
}

// Define the type for props for the component
interface IAddTodoProps {
    addNewTodo: (todoInfo: ITodoInfo) => void;
}

const AddTodo = (props: IAddTodoProps) => {
    // Define state for text and author
    const [text, setText] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    // Function to handle changes in the text input
    const handleText = (event: ChangeEvent<HTMLInputElement>): void => {
        setText(event.target.value);
    };

    // Function to handle changes in the author input
    const handleAuthor = (event: ChangeEvent<HTMLInputElement>): void => {
        setAuthor(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Create an object with information about the new todo and send it to parent via prop
        const newTodoInfo: ITodoInfo = {
            text,
            author
        };
        props.addNewTodo(newTodoInfo);
        // Reset the fields after the form has been submitted
        setText("");
        setAuthor("");
    };

    return (
        <div id="app">
            <h1>Todo List</h1>
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" id="newTodoInput" value={text} onChange={handleText} placeholder="Add a new todo" />
                <input type="text" id="author" value={author} onChange={handleAuthor} placeholder="Author" />
                <button type="submit" className="submit">Add ToDo</button>
            </form>
            <ul id="todoList"></ul>
        </div>
    );
};

export default AddTodo;
