import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Menú con enlaces html (NO RECOMENDADO) </span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
          <a href="/aboutUs">Sobre Nosotros</a>
        </li>

        <li>
          <span>Componente LINK </span>
          <Link to={"/"}>Home</Link>
          <Link to={"/Acerca"}>Acerca</Link>
          <Link to={"/contacto"}>Contacto</Link>
        </li>

        <li>
          <span>Componente NAVLINK </span>
          <NavLink to={'*' } className="active">Error 404</NavLink>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/acerca"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Acerca
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Contacto
          </NavLink>
        </li>

        <li>
            <span>Parámetros:</span>
            <Link to='/usuario/jonmircha'>JONMIRCHA</Link>
            <Link to='/usuario/kenai'>KENAI</Link>
        </li>

        <li>
          <span>Parámetros de consulta </span>
          <Link to='/productos'>Productos</Link>
        </li>

        <li>
          <span>Redirecciones</span>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </li>

        <li>
          <span>Rutas Anidadas: </span>
          <Link to='/react'>React</Link>
        </li>

        <li>
          <span>Rutas Privadas</span>
          <Link to='/login'>Login</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
