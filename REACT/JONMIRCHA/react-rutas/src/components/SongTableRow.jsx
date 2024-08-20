import React from "react";
import { useNavigate } from "react-router-dom";

const SongTableRow = ({ id, el, handleDeleteSong }) => {
  let {bio, search} = el;
  let avatar = bio.artists[0].strArtistThumb;

  let navigate = useNavigate();

  const handleView = () => {
    navigate(`/canciones/${id}`);
  };

  return (
    <tr>
      <td>
        <img src={avatar} alt={search.artist} style={{width : "40px", height: "40px"}} />
      </td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={handleView}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
