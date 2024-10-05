import  { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function CustomThemeSwitcher  () {
  const { setTheme } = useContext(ThemeContext);
  const [customColors, setCustomColors] = useState({
    background: "#ffffff",
    text: "#000000",
  });

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setCustomColors((prev) => ({ ...prev, [name]: value }));
  };

  const applyCustomTheme = () => {
    document.documentElement.style.setProperty("--custom-bg-color", customColors.background);
    document.documentElement.style.setProperty("--custom-text-color", customColors.text);
    setTheme("custom");
  };

  return (
    <div className=" space-x-4 ">
      <input
        type="color"
        name="background"
        value={customColors.background}
        onChange={handleColorChange}
        className="border rounded "
      />
      <input
        type="color"
        name="text"
        value={customColors.text}
        onChange={handleColorChange}
        className="border"
      />
      <button
        onClick={applyCustomTheme}
        className={`px-4 py-2 rounded-lg`}
        style={{backgroundColor:customColors.background,color:customColors.text}}
      >
        Apply Custom Theme
      </button>
    </div>
  );
};