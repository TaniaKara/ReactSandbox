'use strict'

import React from 'react';
import ReactDOM from 'react-dom';



class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false,
            itemStyle: {
                "textDecoration": ""
            }
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(!this.state.isDone) {
            this.setState({
                isDone: !this.state.isDone,
                itemStyle: {"textDecoration": "line-through"}
            });            
        } else {
            this.setState({
                isDone: !this.state.isDone,
                itemStyle: {"textDecoration": ""}
            });
        }
    }

    render() {
        return (
            <ul               
                style = {this.state.itemStyle}
                onClick = {this.handleClick}
            >
                {this.props.item}
            </ul>
        );
    }
}

class NewItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewItemTextChange = this.handleNewItemTextChange.bind(this);
        this.handleAddNewItemClick = this.handleAddNewItemClick.bind(this);
    }

    handleNewItemTextChange(e) {
        this.props.onNewItemTextChange(e.target.value);
    }

    handleAddNewItemClick(e) {
        return;
    }

    render() {
        return(
            <form>
                <input 
                    type = "text" 
                    placeholder = "New Item..." 
                    value = {this.props.newItemText}
                    onChange = {this.handleNewItemTextChange}
                />
                <button 
                    type = "submit"
                    onClick = {this.handleAddNewItemClick}
                >
                    Add
                </button>
            </form>
        );
    }
}

class ToDoItemList extends React.Component {     
    render() {
        const items = this.props.items;   
        const toDoList = [];
        
        for(let item of items) {
            if(item){
                toDoList.push(
                    <Item 
                        item = {item} 
                        key = {items.indexOf(item)}                        
                    />
                );
            }
        }
            return(
            <div>
                {toDoList}
            </div>
        );
    }
}

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItemText: ''
        }

        this.handleNewItemTextChange = this.handleNewItemTextChange.bind(this);
    }

    handleNewItemTextChange(newItemText) {
        this.setState({
            newItemText: newItemText
        });
    }
    
    render() {
        return(
            <div>
                <NewItem 
                    newItemText = {this.state.newItemText}
                    onNewItemTextChange = {this.handleNewItemTextChange} />
                <ToDoItemList items = {this.props.items} />
            </div>
        );
    }
}

const ITEMS = [
    'Item1',
    'Item2',
    'Item3'
];

ReactDOM.render(
    <ToDoList items = {ITEMS}/>,
    document.getElementById('root')
);