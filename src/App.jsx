
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import AllRouter from './Router/router'

function App() {

  return (
    <>
      <ThemeProvider >
        <AllRouter/>
      </ThemeProvider>
    </>
  )
}

export default App
