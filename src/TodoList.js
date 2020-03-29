import React, {Component} from 'react';
import ListItem from "./ListItem";
import NewItem from "./NewItem"
import './App.css'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoList:[
                {content:'Go to class', done:true},
                {content:'Learn web development', done:false},
                {content:'Read novels', done:false},
                {content:'Go out to play', done:false},
            ]
        }
    }
    addNewItem = (newItemContent) =>{
        const newList = [...this.state.todoList, {content:newItemContent, done:false}];
        this.setState({
            todoList: newList
        })
    }

    render() {
        
        return (
            <div>
                {
                    this.state.todoList.map(item => <ListItem key={item.content} item = {item}/>)
                }
                    <NewItem addItem={this.addNewItem}></NewItem>
            </div>
        );
    }
}
export default TodoList;
    