import React from 'react';
import '../styles/AlbumDetails.css'

const AlbumDetails = ({ album }) => {
  return (
    <div className="album-details">
      <h2>Detalhes do Álbum</h2>
      {album && (
        <div>
          <h3>{album.name}</h3>
          <ul>
            {album.tracks.map((track, index) => (
              <li key={index}>{track}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AlbumDetails;
