import React from 'react'

const ThemeContext = React.createContext({ 
  theme: '',
  avatar: null,
  toggleTheme: () => {},
})

export {
  ThemeContext
}