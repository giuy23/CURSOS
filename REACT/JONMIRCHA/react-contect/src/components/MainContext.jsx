import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguajeContext from "../context/LanguajeContext";
import AuthenticationContext from "../context/AuthenticationContext";

const MainContext = () => {
  const {theme} = useContext(ThemeContext);
  const {texts} = useContext(LanguajeContext);
  const {auth} = useContext(AuthenticationContext)
  
  return (
    <main className={ theme } >
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p> }      
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default MainContext;
