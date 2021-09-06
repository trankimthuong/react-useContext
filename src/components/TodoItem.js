import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext' 
import {TodoContext} from '../contexts/TodoContext'


const TodeItem = (props) => {
    const todo = props.todo
    // const deleteTodo = props.deleteTodo

    // const style = {
    //     background: 'rgb(240,240,240',
    //     color: 'black'
    // }

    const {theme} = useContext(ThemeContext)
    const {isLightTheme, light, dark} = theme
    const style = isLightTheme ? light : dark
    const {deleteTodo} = useContext(TodoContext)


    return (
        <div>
            <li onClick={() => {deleteTodo(todo.id)}} style={style}>{todo.title}</li>
        </div>
    )
}

export default TodeItem
