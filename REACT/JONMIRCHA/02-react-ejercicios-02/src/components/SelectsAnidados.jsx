import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  const TOKEN = "3d48f8ff-4c04-44d2-8adf-33743b25214e";
  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>Mexico</h3>
      <SelectList
        title="estado"
        url= {`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        // url = "https://api.copomex.com/query/get_estados?token=pruebas"
        handleChange={(e) => {
          setState(e.target.value);
        }}
      ></SelectList>
      {state && (
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        ></SelectList>
      )}
      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        ></SelectList>
      )}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
