import React from "react";
import { useNavigate } from "react-router-dom";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = el;
  const navigate = useNavigate();

  const handleEdit = () => {
    setDataToEdit(el);
    navigate(`editar/${id}`);
    // navigate.push(`editar/${id}`)
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteData(id)}>Elimnar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
