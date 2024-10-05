import  {useState,createContext,useEffect}from "react"

export const ThemeContext=createContext()

export const ThemeProvider=({children})=>{
    const defaultTheme=localStorage.getItem("theme")||"light"
    const [theme,setTheme]=useState(defaultTheme)
    
    useEffect(() => {
        localStorage.setItem("theme",theme)
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme]);

    return(
    <>
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    </>
    )
}