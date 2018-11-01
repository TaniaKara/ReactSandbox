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

    handleClick(e) {
        (!this.state.isDone) ? this.setState({itemStyle : {"textDecoration": "line-through"}}) 
                             : this.setState({itemStyle: {"textDecoration": ""}});

        this.setState({isDone: !this.state.isDone});        
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
        // push new item to the products list
    }

    render() {
        return(
            <form>
                <input type = "text" 
                    placeholder = "New Item..." 
                    value = {this.props.newItemText}
                    onChange = {this.handleNewItemTextChange}
                />
                <button type = "submit"
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
        let toDoList = [];
        
        toDoList = this.props.items.map((item, index) => 
             <Item item = {item} key = {index}/> 
        );

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
                <NewItem newItemText = {this.state.newItemText}
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