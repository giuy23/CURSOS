import React, { useContext } from 'react'
import ThemeContext from "../context/ThemeContext";
import LanguajeContext from '../context/LanguajeContext';

const FooterContext = () => {
  const {theme} = useContext(ThemeContext);
  const {texts} = useContext(LanguajeContext);
  return (
    <footer className={ theme } >
          <h4>{texts.footerTitle}</h4>
    </footer>
  )
}

export default FooterContext