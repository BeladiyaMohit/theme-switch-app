
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Router from './Router/router'

function App() {

  return (
    <>
      <ThemeProvider>
        <Router/>
      </ThemeProvider>
    </>
  )
}

export default App
