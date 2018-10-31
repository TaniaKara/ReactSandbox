import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    // lifecycle methods
    // componentDidMount()  runs after the component output has been rendered to the DOM
    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(), 
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
                date: new Date()
        });
    }
    render() {
        return(    
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
    )};
}

function ActionLink(){
    function handleClick(e){
        //e.preventDefault();
        console.log('The link was clicked');
    }
    return(
        <a href="https://www.google.com" onClick={handleClick}> Link </a>
    );
}

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
         // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(
            state => ({
                isToggleOn: !state.isToggleOn
            })
        );
    }
    render(){
        return(
            <button onClick = {this.handleClick}>
                {this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
        );
    }
}

function Result(){
    return(
        <div>
            <Clock />
            <ActionLink /><br/>
            <Toggle />
        </div>
    );
}




ReactDOM.render(
    <Result />,
    document.getElementById('root')
  )













// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
