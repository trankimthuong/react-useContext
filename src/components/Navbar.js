import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext'

const Navbar = () => {
    // const style = {
    //     background: 'rgb(240,240,240',
    //     color: 'black'
    // }

    // const testContext = useContext(ThemeContext)
    // console.log(testContext)

    const {theme} = useContext(ThemeContext)
    const {isLightTheme, light, dark} = theme
    const style = isLightTheme ? light : dark

    return (
        <div className="navBar" style={style}>
            <h1>My To Do List</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Navbar