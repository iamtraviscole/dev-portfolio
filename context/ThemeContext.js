import { createContext, useContext, useState, useEffect} from 'react' 

const Context = createContext()

export function ThemeContext({ children }) {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    } else {
      setTheme(document.documentElement.getAttribute('data-theme'))
    }
  }, [theme])

  return (
    <Context.Provider value={{theme, setTheme}}>
      {children}
    </Context.Provider>
  )
}

export function useThemeContext() {
  return useContext(Context)
}

