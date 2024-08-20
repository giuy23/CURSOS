import React from "react";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import FooterContext from "./FooterContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguajeProvider } from "../context/LanguajeContext";
import { AuthenticationProvider } from "../context/AuthenticationContext";

const MyPageContext = () => {
  return (
    <ThemeProvider>
      <LanguajeProvider>
        <AuthenticationProvider>
          <div className="my-page">
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </div>
        </AuthenticationProvider>
      </LanguajeProvider>
    </ThemeProvider>
  );
};

export default MyPageContext;
