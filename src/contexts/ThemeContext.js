import React, {createContext, useState} from 'react';

export const ThemeContext = createContext() //gọi cái hàm create context này lên

const ThemeContextProvider = ({children}) => {
    //state
    const [theme, setTheme] = useState({
        isLightTheme: false,
        light: {
            background: 'rgb(240,240,240)',
            color: 'black'
        },
        dark: {
            background: 'rgb(39,39,39)',
            color: 'white'
        },
    })

    //function to toggle theme
    const toggleTheme = () => {
        setTheme({
            ...theme, 
            isLightTheme: !theme.isLightTheme
        })
    }
        
    //context data
    const themeContextData = {
        theme,
        toggleTheme,
    }

    //return provider
    return (
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider