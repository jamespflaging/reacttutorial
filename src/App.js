import React from "react"
//import Header from "./components/Header"
//import MainContent from "./components/MainContent"
//import Footer from "./components/Footer"
import ToDoItem from "./components/ToDoItem"
import todosData from "./todosData.js"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState( oldState => {
            const updatedTodos = oldState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        }) 
    }

    render () {
        const ToDoItems = this.state.todos.map(item => <ToDoItem item={item} key={item.id} handleChange = {this.handleChange}/>)
        return (
            <div>
                {ToDoItems}
            </div>
        )
    }
}

export default App