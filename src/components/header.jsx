import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import CustomThemeSwitcher from "./customThemeSwitcher";
import classNames from "classnames";

function Header() {
  const tabs=["Home","About","Services","Contact"]
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
      <nav className={classNames("bg-white dark:bg-gray-900 p-4 shadow-md ",theme==="custom"&&"custom-theme")}>
      <div className="container mx-auto flex justify-between items-center">
        <div className={classNames("text-2xl font-bold text-gray-800 dark:text-gray-200 ",theme==="custom"&&"custom-theme")}>
          MyApp
        </div>

        <ul className={classNames("flex space-x-4 text-gray-600 dark:text-gray-300 ",theme==="custom"&&"custom-theme")}>
          {tabs.map((tab)=>
          <li key={tab}>
            <a href="#" className={("hover:text-indigo-600 dark:hover:text-indigo-400 ",theme==="custom"&&"custom-theme")}>{tab}</a>
          </li>)}
        </ul>
        <div className="flex space-x-4">
        <button
          onClick={()=>toggleTheme(theme==="light"?"dark":"light")}
          className={classNames("ml-4 px-3 py-2 bg-indigo-600 text-white rounded-lg focus:outline-none hover:bg-indigo-700 transition-all custom:--custom-bg-color",theme==="custom"&&"custom-theme")}
        >
          {theme}
        </button>
        <CustomThemeSwitcher/>
        </div>
      </div>
    </nav>
  )
}

export default Header