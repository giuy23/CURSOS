import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props){
    return (
    <div className="">
        <h1>{props.porDefecto}</h1>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.booleano ? "Verdadero" : "Falso"}</li>
            <li>{props.numero}</li>
            <li>{props.arreglo.join(" , ")}</li>
            <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
            <li>{props.elementoReact}</li>
            <li>{props.arreglo.map(props.funcion).join(" - ")}</li>
            <li>{props.componenteReact}</li>
        </ul>
    </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: "PROPS :<"
}

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired,
}