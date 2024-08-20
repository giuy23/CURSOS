import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

import Message from "./Message";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;
  console.log(bio.artists[0].strWebsite === undefined);
  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError"  ? (
        <Message msg={`Error no existe la canción ${search.song}`} bgColor="#dc3545"></Message>
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics}></SongLyric>
      )}
      {bio.artists ? <SongArtist artist={bio.artists[0]}></SongArtist> : <Message msg={`Error no existe el artista ${search.artist}`} bgColor="#dc3545"></Message>}
    </>
  );
};

export default SongDetails;
