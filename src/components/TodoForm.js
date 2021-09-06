import React, {useState, useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'

const TodoForm = (props) => {
    const [title, setTitle] = useState('');

    const onTitleChange = event => {
        setTitle(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.addTodo({
            id: 4,
            title,
        })
    }

    const {theme} = useContext(ThemeContext)
    const {isLightTheme, light, dark} = theme
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
