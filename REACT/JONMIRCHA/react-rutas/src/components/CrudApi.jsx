import React, { useState, useEffect } from "react";

import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import { helpHttp } from "../helpers/helpHttp";
import {
  BrowserRouter,
  HashRouter,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Error404 from "../pages/Error404";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";
  //CARGA O INICIALIZA LA BASE DE DATOS
  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      // console.log(res);
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }

      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    data.id = Date.now();
    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = confirm("Estas seguro de eliminar el registro?");

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <article className="grid-1-2">
        {/* <HashRouter basename="santos"> */}
        <HashRouter>
          <h2>CRUD API</h2>
          <NavLink to="/">SAINT SEYIA</NavLink>
          <NavLink to="/agregar">Agregar</NavLink>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {loading && <Loader></Loader>}
                  {error && (
                    <Message
                      msg={`Error ${error.status}: ${error.statusText}`}
                      bgColor="#dc3545"
                    ></Message>
                  )}
                  {db && (
                    <CrudTable
                      data={db}
                      deleteData={deleteData}
                      setDataToEdit={setDataToEdit}
                    ></CrudTable>
                  )}
                </>
              }
            />
            <Route
              path="agregar"
              element={
                <CrudForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                ></CrudForm>
              }
            />
            <Route
              path="editar/:id"
              element={
                <CrudForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                ></CrudForm>
              }
            />
            <Route path="*" element={<Error404></Error404>} />
          </Routes>
        </HashRouter>
      </article>
    </div>
  );
};

export default CrudApi;
