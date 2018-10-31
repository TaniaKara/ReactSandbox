import React from 'react';
import ReactDOM from 'react-dom';

const todoList = ['Item1', 'Item2'];

function ToDoList(props) {        
    return (
        <div>           
            {props.todoList.map((item, index) => <li key = {index}>{item}</li>)}            
        </div>
    );
};

function AddItem() {
    function addNewItem() {
        // todo
    }
    return(
        <div>
            <input type = "text" name = "newItem" />
            <button type = "button" onClick = {() => addNewItem()}>Add new Item</button>
        </div>
    );
};

function ToDo() {
    return(
        <div>
            <ToDoList todoList = {todoList} />
            <br/><br/><br/>
            <AddItem />
        </div>
    );
}

ReactDOM.render(
    <ToDo />,
    document.getElementById('root')
);