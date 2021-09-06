import React, {useState, useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import {TodoContext} from '../contexts/TodoContext'

const TodoForm = () => {

    const {theme} = useContext(ThemeContext)
    const {isLightTheme, light, dark} = theme

    //load context
    const {addTodo} = useContext(TodoContext)

    const [title, setTitle] = useState('');

    const onTitleChange = event => {
        setTitle(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        addTodo({
            id: 4,
            title,
        })
    }

    
    const style = isLightTheme ? light : dark

    // const style = {
    //     background: 'rgb(240,240,240',
    //     color: 'black'
    // }

    return (
        <form onSubmit={handleSubmit}>
           <input 
           type='text' 
           name='title' 
           placeholder='Enter a new todo...' 
           onChange={onTitleChange}
           value={title} 
           required
           />
           <input type='submit' value='Add' style={style} />
        </form>
    )
}

export default TodoForm
