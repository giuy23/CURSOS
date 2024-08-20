import { createContext, useEffect, useReducer, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { crudInitialState, crudReducer } from "../reducers/crudReducer";
import { TYPES } from "../actions/crudActions";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  // const [db, setDb] = useState(null);

  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const {db} = state;
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
        // setDb(res);
        dispatch({type: TYPES.READ_ALL_DATA, payload : res})
        setError(null);
      } else {
        // setDb(null);
        dispatch({type: TYPES.NO_DATA})
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
    //CREATE ID FAKE
    data.id = `${Date.now()}`;

    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        dispatch({type: TYPES.CREATE_DATA, payload: res})
        // setDb([...db, res]);
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
        //let newData = db.map((el) => (el.id === data.id ? data : el));
        // setDb(newData);
        dispatch({type: TYPES.UPDATE_DATA, payload: data})
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
          // let newData = db.filter((el) => el.id !== id);
          // setDb(newData);
          dispatch({type: TYPES.DELETE_DATA, payload: id})
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  const data = { db, error, loading, dataToEdit, createData, setDataToEdit, updateData, deleteData };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
