import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Productos = () => {
  //   let location = useLocation();
  //   console.log(location);
    let {search} = useLocation();//SEARCH es un dato del objeto USELOCATION
    let query = new URLSearchParams(search);
    console.log(query);

    const LIMIT = 20;
    let start = parseInt(query.get('inicio')) || 1;
    let end = parseInt(query.get('fin')) || LIMIT;
    //console.log(start+" - "+end);

    let history = useNavigate();
    console.log(history);

    const handlePrev = (e) => {
        history.push({search: `?incio=${start - LIMIT}&fin${end - LIMIT}`});
    }
    const handleNext = (e) => {
        history.push({search: `?incio=${start + LIMIT}&fin${end + LIMIT}`});
    }
  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando Productos del <b> {start}</b> al <b> {end} </b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Productos;
