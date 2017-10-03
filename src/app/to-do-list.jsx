import React from 'react';

import css from './css/index.css';

import AddItem from './add-item.jsx';
import ListItem from './list-item.jsx';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['eat', 'sleep', 'drink', 'buy stuff'],
            age: 30
        };
    }
    //Event handlers
    onDelete(item) {
        let updatedToDos = this.state.todos.filter((elem) =>{
            return item !== elem;
        });
        this.setState({todos: updatedToDos});
    }
    onAdd(item) {
        let updatedToDos = this.state.todos;
        updatedToDos.push(item);
        this.setState({todos: updatedToDos});
    }
    render() {
        let todos = this.state.todos.map((item, index) => {
            return(
                <ListItem item={item} key={index} onDelete={this.onDelete}/>
            );
        }, this);
        return (
            <div id="todo-list">
            <p>To Do List</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    }
}

export default ToDoList;
