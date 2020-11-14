import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSong,
  songs,
}) => {
  const handleSelectSong = () => {
    const newSongs = songs.map((item) => {
      if (item.id === song.id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setSong(newSongs);
    setCurrentSong(song);
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={handleSelectSong}
    >
      <img src={song.cover} />
      <div className="song-description">
        <h3> {song.name}</h3>
        <h4> {song.artist} </h4>
      </div>
    </div>
  );
};

export default LibrarySong;
