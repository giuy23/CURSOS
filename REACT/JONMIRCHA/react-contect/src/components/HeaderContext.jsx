import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguajeContext from "../context/LanguajeContext";
import AuthenticationContext from "../context/AuthenticationContext";

const HeaderContext = () => {

  const {theme, handleTheme} = useContext(ThemeContext);
  const {texts, handleLanguaje} = useContext(LanguajeContext);
  const {auth, handleAuth}= useContext(AuthenticationContext)

  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name="languaje" onChange={handleLanguaje}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="ligth-context"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light-context">{texts.headerLight}</label>

      <input
        type="radio"
        name="theme"
        id="dark-context"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark-context">{texts.headerDark}</label>
      <button onClick={handleAuth} >{auth ? texts.buttonLogout : texts.buttonLogin}</button>
    </header>
  );
};

export default HeaderContext;
