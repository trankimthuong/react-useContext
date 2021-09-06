import React, {useState, useContext } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import {TodoContext} from '../contexts/TodoContext'

const Todos = () => {
    // const [todos, setTodos] = useState([
    //     {id: 1, title: 'viec 1'},
    //     {id: 2, title: 'viec 2'},
    //     {id: 3, title: 'viec 3'}
    // ])

    // const addTodo = todo => {
    //     setTodos([...todos, todo])
    // }

    // const deleteTodo = id => {
    //     setTodos(todos.filter(todo => todo.id !== id))
    // }

    //load data
    const {todos} = useContext(TodoContext);

    return (
        <div className='todo-list'>
            <TodoForm/>
            <ul>
                {
                    todos.map(todo => (
                        <TodoItem todo={todo} key={todo.id}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todos
