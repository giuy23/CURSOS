import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

const inithialTheme = "light";
const inithialLanguaje = "es";
const inithialAuth = null;

const translations = {
  es: {
    headerTitle: "Mi aplicacion SIN Context Api",
    headerSubtitle: "Mi Cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesion",
    buttonLogout: "Cerrar Sesion",
    mainWelcome: "Bienvenido",
    mainHello: "Hola usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de pagina",
  },
  en: {
    headerTitle: "My application WITHOUT Context Api",
    headerSubtitle: "My Header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Close Session",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello user",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPage = () => {
  const [theme, setTheme] = useState(inithialTheme);
  const [languaje, setLanguaje] = useState(inithialLanguaje);
  const [texts, setTexts] = useState(translations[languaje]);
  const [auth, setAuth] = useState(inithialAuth)

  const handleTheme = (e) => {
    console.log(e.target.value);
    e.target.value === "light" ? setTheme("light") : setTheme("dark");
  };

  const handleLanguaje = (e) => {
    console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguaje("es");
      setTexts(translations.es);
    } else {
      setLanguaje("en");
      setTexts(translations.en);
    }
  }

  const handleAuth = (e) => {
    console.log(e.target.value);
    auth ? setAuth(null) : setAuth(true)
  }

  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme} texts={texts} handleLanguaje={handleLanguaje} auth={auth} handleAuth={handleAuth} />

      <Main theme={theme} texts={texts} auth={auth} />

      <Footer theme={theme} texts={texts} />
    </div>
  );
};

export default MyPage;
