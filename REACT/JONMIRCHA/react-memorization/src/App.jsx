import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Contador from "./components/Contador";

function App() {
  return (
    <>
      <h1>MEMORIZACIÓN</h1>
      <hr />
      <h2>Teoría</h2>
      <h3>memo</h3>
      <ul>
        <li>Se encarga de memorizar un componente</li>
        <li>
          Lo vuelve a memorizar al momento de sus <b>props</b> cambian
        </li>
        <li>Evita re-renderizados</li>
        <li>
          Hay que evitarlo en la medida de lo posible, pues podría ser más
          costosa la tarea de memorización que el re-renderizado del componente.
        </li>
        <li>
          {" "}
          Usalo cuando:
          <ul>
            <li>Tenemos muchos elementos renderizados en una lista</li>
            <li>Llamamos datos de una APIs</li>
            <li>Un componente se vuelve muy pesado. </li>
            <li>Salen alertas de rendimineto en la consola</li>
          </ul>
        </li>
      </ul>

      <br />
      <br />
      <h3>USeCallback</h3>
      <ul>
        <li>Memoriza una función, para no volverla a definir en cada render</li>
        <li>
          Úsalo siempre que se pase una función como <b>prop</b> a un componente
          memorizado
        </li>
        <li>
          Úsalo siempre que se pase una función como parámetro de un efecto
        </li>
      </ul>

      <br />
      <br />
      <h3>UseMemo</h3>
      <ul>
        <li>Memoriza un valor calculado, es decir, el resultado de una función</li>
        <li>Genera propiedades computadas</li>
        <li>Úsalo en procesos pesados</li>
      </ul>
      <hr />
      <Contador />
    </>
  );
}

export default App;
