import { createContext, useState } from "react";

const ThemeContext = createContext();

const inithialTheme = "light";

// PROVIDER
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(inithialTheme);

  const handleTheme = (e) => {
    console.log(e.target.value);
    e.target.value === "light" ? setTheme("light") : setTheme("dark");
  };
  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
