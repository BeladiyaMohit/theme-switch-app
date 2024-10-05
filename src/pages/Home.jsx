import { useContext } from "react";
import Header from "../components/header";
import { ThemeContext } from "../context/ThemeContext";
import classNames from "classnames";

export default function Home() {
  const {theme}=useContext(ThemeContext)
  return (
    <div className={classNames("min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-white transition-colors duration-300 ",theme==="custom"&&"custom-theme")}>
      <Header/>
      <h1 className="text-3xl font-bold pt-10 text-center">Dynamic Theme Switcher</h1>
      <main className="container mx-auto py-6">
          <h1 className="text-4xl text-center">Welcome to MyApp</h1>
          <p className="mt-4 text-center">This is a sample application with a theme switcher.</p>
        </main>
    </div>
  )
}
