import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  HashRouter,
  Link,
} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import MenuConceptos from "./MenuConceptos";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>CONCEPTOS HASH (HORA DE PRODUCCIÓN)</h2>
      {/* <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/acerca" element={<Acerca></Acerca>} />
          <Route path="/contacto" Component={Contacto} />
          <Route path="*" element={<Error404></Error404>} />
        </Routes>
      </HashRouter> */}
      <hr />
      <h2>Conceptos Básicos</h2>

      <HashRouter>
        <MenuConceptos></MenuConceptos>
        <Routes>
          <Route path="/" element={<Home></Home>} />

          <Route path="/acerca" element={<Acerca></Acerca>} />

          <Route path="/contacto" Component={Contacto} />
          <Route
            path="/usuario/:username"
            element={<Usuario></Usuario>}
          ></Route>

          <Route path="/productos" element={<Productos></Productos>}></Route>

          <Route path="/about" element={<Navigate to="/acerca" />}></Route>

          <Route
            path="/contact"
            element={<Navigate to="/contacto"></Navigate>}
          ></Route>

          <Route path="/react" element={<ReactTopics></ReactTopics>}></Route>

          <Route path="/login" Component={Login}></Route>

          {/* <Route path="/dashboard" Component={Dashboard}></Route> */}
          {/* <Route path="/dashboard" element={<PrivateRoute props={Dashboard}></PrivateRoute>}></Route> */}
          {/* <Route
            exact
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          /> */}
          <Route
            exact
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />

          <Route path="*" element={<Error404></Error404>} />
        </Routes>
      </HashRouter>
      {/* <PrivateRoute Component={Dashboard}></PrivateRoute> */}
    </div>
  );
};

// const ConceptosBasicos = () => {
//     return (
//       <div>
//         <h2>Conceptos Básicos</h2>
//         <Router>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <h3>Home</h3> <p>Bienvenid@s al tema de Rutas en React</p>
//                 </>
//               }
//             />

//             <Route path="/acerca" element={<Acerca></Acerca>} />

//             <Route
//               path="/contacto"
//               Component={Contacto}
//               // element={
//               //   <>
//               //     <h3>Contacto</h3> <Contacto></Contacto>{" "}
//               //   </>
//               // }
//             />

//           </Routes>
//         </Router>
//       </div>
//     );
//   };

export default ConceptosBasicos;
