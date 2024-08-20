import React from 'react'
import SongDetails from '../components/SongDetails'
import { useParams } from 'react-router-dom'

const SongPage = ({mySongs}) => {
    let {id} = useParams();
    let currentSong = mySongs[id];
    let {search, lyric, bio} = currentSong;
    console.log(id);
  return (
    <SongDetails search={search}
    lyric={lyric}
    bio={bio}/>
  )
}

export default SongPage