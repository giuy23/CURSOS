import React from "react";
import SongTableRow from "./SongTableRow";

const SongTable = ({ mySongs, handleDeleteSong }) => {
    // console.log(mySongs);
  return (
    <div>
      <h3>CANCIONES FAVORITAS</h3>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Artista</th>
            <th>Canción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el, index) => (
              <SongTableRow
                key={index}
                el={el}
                id={index}
                handleDeleteSong={handleDeleteSong}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">Sin canciones favoritas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;
