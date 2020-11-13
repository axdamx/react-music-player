import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSong,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2> Library </h2>
      <div className="library-songs">
        {songs.map((item) => (
          <LibrarySong
            song={item}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSong={setSong}
            songs={songs}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
