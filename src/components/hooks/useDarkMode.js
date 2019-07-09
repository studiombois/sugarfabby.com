import { useState, useEffect } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    storedTheme && setTheme(storedTheme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = (isSwitchOn) => {
    if (isSwitchOn) {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return [theme, toggleTheme]
}

export default useDarkMode