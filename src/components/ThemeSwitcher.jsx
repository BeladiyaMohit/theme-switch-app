import {useContext} from "react"
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSwitcher() {
      const { theme, setTheme } = useContext(ThemeContext);
     const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div>
        <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
    </div>
  )
}
