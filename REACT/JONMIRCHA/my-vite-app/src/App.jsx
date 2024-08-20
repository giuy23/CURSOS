import { useState } from 'react';
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Component from './components/Component';
import Components from './components/Components';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import Eventos from './components/Eventos';
import { EventosES7, MasSobreEventos } from './components/EventosES7';
import { Padre } from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';


import ContadorHooks from './components/Hooks/ContadorHooks';
import { ScrollHooks } from './components/Hooks/ScrollHooks';
import RelojHooks from './components/Hooks/RelojHooks';
import AjaxHooks from './components/Hooks/AjaxHooks';
import HooksPersonalizados from './components/Hooks/HooksPersonalizados';
import Referencias from './components/Referencias';

import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import ComponentesEstilizados from './components/ComponentesEstilizados';

function App() {
  const [count, setCount] = useState(0)
  const [cont, setCount2] = useState(0)
  let name = "Antoni";
  let estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount2((cont) => cont + 1)}>{cont}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        HOLA MUNDO :v
      </p>
      <h1>
        {name}
      </h1>
      <ul>
        {estaciones.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>

      <section>
        <Component msg="Hola soy un componente desde una PROP 2"></Component>
        <Components msg="Components2"></Components>
        <hr />
        <Propiedades cadena="Esto es una cadena"
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: "Jon", correo: "jonmircha@" }}
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={<Component msg="Soy un componente pasado como PROP"></Component>}
        ></Propiedades>

        <hr />
        <Estado></Estado>

        <hr />
        <RenderizadoCondicional></RenderizadoCondicional>

        <hr />
        <RenderizadoElementos></RenderizadoElementos>

        <hr />
        <Eventos></Eventos>

        <hr />
        <EventosES7></EventosES7>

        <hr />
        <MasSobreEventos></MasSobreEventos>

        <hr />
        <Padre></Padre>

        <hr />
        <CicloVida></CicloVida>

        <hr />
        <AjaxApis></AjaxApis>
      </section>

      <section>
        <hr />
        <ContadorHooks></ContadorHooks>

        <hr />
        <ScrollHooks></ScrollHooks>

        <hr />
        <RelojHooks></RelojHooks>

        <hr />
        <AjaxHooks></AjaxHooks>

        <hr />
        <HooksPersonalizados></HooksPersonalizados>

        <hr />
        <Referencias></Referencias>
      </section>

      <section>
        <hr />
        <Formularios></Formularios>

        <hr />
        <Estilos></Estilos>

        <hr />
        <ComponentesEstilizados></ComponentesEstilizados>
      </section>
    </>
  )
}

export default App
