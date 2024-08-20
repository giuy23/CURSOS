import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  matchPath,
  Outlet,
  Route,
} from "react-router-dom";
import Topic from "./Topic";

const ReactTopics = () => {
  let path = "/react";
  // let match = matchPath( {
  //     path: "/users/:id",
  //     caseSensitive: false, // las partes estáticas de `path` deben coincidir con mayúsculas y minúsculas
  //     end: true, // Optional, `true` == el patrón debe coincidir con la ruta URL completa
  //   },
  //   "/users/react");
  // console.log(match);
  console.log(<Outlet></Outlet>);
  return (
    <>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="props">PROPS</Link>
        </li>
        <li>
          <Link to="estado">ESTADO</Link>
        </li>
        <li>
          <Link to="componente">COMPONENTE</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<h2>Elige un tema</h2>}></Route>
        <Route path=":topic" element={<Topic />} />
      </Routes>
    </>
  );
};

export default ReactTopics;
