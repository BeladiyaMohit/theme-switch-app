import  {useState,createContext,useEffect}from "react"

export const ThemeContext=createContext()

export const ThemeProvider=({children})=>{
    const defaultTheme=localStorage.getItem("theme")||"light"
    const [theme,setTheme]=useState(defaultTheme)
    
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === "light" ? "dark" : "light");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return(
    <>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    </>
    )
}