import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { useDispatch, useSelector } from "react-redux";
import { createAction, deleteAction, noAction, readAllAction, updateAction } from "../actions/crudActions";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {

  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // const { db } = state.crud;
  const {db} = useSelector((state) => state.crud);


  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";
  
  //CARGA O INICIALIZA LA BASE DE DATOS
  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        dispatch(readAllAction(res));
        setError(null);
      } else {
        dispatch(noAction());
        setError(res);
      }

      setLoading(false);
    });
  }, [url, dispatch]);

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    //CREATE ID FAKE
    data.id = `${Date.now()}`;

    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        dispatch(createAction(res));
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
        dispatch(updateAction(res));
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = confirm("Estas seguro de eliminar el registro?");
    console.log(`${url}/${id}`);

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        console.log(res);
        if (!res.err) {
          dispatch(deleteAction(id));
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  const data = {
    db,
    error,
    loading,
    dataToEdit,
    createData,
    setDataToEdit,
    updateData,
    deleteData,
  };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
