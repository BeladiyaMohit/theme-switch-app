import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import CustomThemeSwitcher from "./customeThemeSwitcher";

function Header() {
  const tabs=["Home","About","Services","Contact"]
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
      <nav className="bg-white dark:bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MyApp
        </div>

        <ul className="flex space-x-4 text-gray-600 dark:text-gray-300">
          {tabs.map((tab)=>
          <li key={tab}>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">{tab}</a>
          </li>)}
        </ul>
        <div className="flex space-x-4">
        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-2 bg-indigo-600 text-white rounded-lg focus:outline-none hover:bg-indigo-700 transition-all"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
        <CustomThemeSwitcher/>
        </div>
      </div>
    </nav>
  )
}

export default Header