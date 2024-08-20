import React from "react";

const SongArtist = ({artist}) => {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt="" />
      <p>{artist.intBornYear} - {artist.intDiedYear || 'Presente'}</p>
      <p>{artist.strCountry}</p>
      <p>{artist.strGenre} - {artist.strStyle}</p>
      {artist.srtWebsite === undefined ? <div className="">No existe sitio web </div> : (<a href={`https://${artist.srtWebsite}`} target="_blank" rel="noreferrer">SITIO WEB OFICIAL</a>)}
      
      <p>{artist.strBiographyEN}</p>
    </section>
  );
};

export default SongArtist;
