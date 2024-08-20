import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fecthData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      //   let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      let songUrl = `https://private-anon-e9527ebbf3-lyricsovh.apiary-mock.com/v1/${artist}/${song}`;

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
        // fetch(songUrl).then((res) => res.json()),
      ]);

      console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fecthData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div>
      <h2>Song Search</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch}></SongForm>
        {loading && <Loader></Loader>}
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio}></SongDetails>
        )}
      </article>
    </div>
  );
};

export default SongSearch;
