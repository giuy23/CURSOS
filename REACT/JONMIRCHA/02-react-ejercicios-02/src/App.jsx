import React from "react";
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";
import SelectsAnidados from "./components/SelectsAnidados";
import ContactForm from "./components/ContactForm";
import Modals from "./components/Modals";

function App() {
  return (
    <>
      <div className="">
        <h1>EJERCICIOS CON REACT</h1>
        <hr />
        <Modals></Modals>
        {/* <hr />
        <SelectsAnidados></SelectsAnidados> */}
        <hr />
        <ContactForm></ContactForm>
        <hr />
        <div className="">Selects Anidados</div>
        <hr />
        <SongSearch></SongSearch>
        <hr />
        <CrudApi></CrudApi>
        <hr />
        <CrudApp></CrudApp>
      </div>
    </>
  );
}

export default App;
