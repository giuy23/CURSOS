import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import SongTable from "./SongTable";
import SongPage from "../pages/SongPage";

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    console.log(mySongs);
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
    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  const handleSaveSong = () => {
    alert("Canción guardada");
    let currentSong = {
      search,
      lyric,
      bio
    }

    let songs = [...mySongs, currentSong]
    setMySongs(songs);
    setSearch(null);
    localStorage.setItem("mySongs", JSON.stringify(songs));
  };

  const handleDeleteSong = (id) => {
    // alert("Canción eliminada" + id);
    let isDelete = confirm("Estas seguro de eliminar la canción");

    if (isDelete) {
      let songs = mySongs.filter((el, index) => index !== id);
      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  };
  return (
    <div>
      <HashRouter>
        <header>
          <h2>Song Search</h2>
          <Link to="/">HOME DE CANCIONES</Link>
        </header>
        {loading && <Loader></Loader>}
        <article className="grid-1-2">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SongForm handleSearch={handleSearch} handleSaveSong={handleSaveSong} ></SongForm>
                  <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong} />
                  {search && !loading && (
                    <SongDetails
                      search={search}
                      lyric={lyric}
                      bio={bio}
                    ></SongDetails>
                  )}
                </>
              }
            />
            <Route
              path="/canciones/:id"
              element={<SongPage mySongs={mySongs} />}
            />
            <Route path="*" element={<Error404></Error404>} />
          </Routes>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;
