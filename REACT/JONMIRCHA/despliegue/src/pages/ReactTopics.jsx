import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Topic from "./Topic";

const ReactTopics = () => {
  return (
    <>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to="/react/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/react/props">PROPS</Link>
        </li>
        <li>
          <Link to="/react/estado">ESTADO</Link>
        </li>
        <li>
          <Link to="/react/componente">COMPONENTE</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/react/" element={<h2>Elige un tema</h2>} />
        <Route path=":topic" element={<Topic />} />
      </Routes>
    </>
  );
};

export default ReactTopics;
