import { useState, useEffect } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState(null)
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.__theme) {
      setTheme(theme || window.__theme)
      setAvatar(window.__avatar)
    }
  }, [theme])

  const toggleTheme = (isSwitchOn) => {
    if (isSwitchOn) {
      setTheme('dark')
      window.__setPreferredTheme('dark')
    } else {
      setTheme('light')
      window.__setPreferredTheme('light')
    }
  }

  return [theme, avatar, toggleTheme]
}

export default useDarkMode
