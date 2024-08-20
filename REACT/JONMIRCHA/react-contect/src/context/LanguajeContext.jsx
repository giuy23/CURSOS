import { createContext, useState } from "react";

const LanguajeContext = createContext();

const inithialLanguaje = "es";
const translations = {
  es: {
    headerTitle: "Mi aplicacion CON Context Api",
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
    headerTitle: "My application WITH Context Api",
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

const LanguajeProvider = ({ children }) => {
  const [languaje, setLanguaje] = useState(inithialLanguaje);
  const [texts, setTexts] = useState(translations[languaje]);

  const handleLanguaje = (e) => {
    console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguaje("es");
      setTexts(translations.es);
    } else {
      setLanguaje("en");
      setTexts(translations.en);
    }
  };

  const data = { texts, handleLanguaje };

  return (
    <LanguajeContext.Provider value={data}>{children}</LanguajeContext.Provider>
  );
}

export { LanguajeProvider };
export default LanguajeContext;
