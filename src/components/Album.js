import React from 'react';

const Album = ({ album }) => {
  return (
    <div className="album">
      <h3>{album.title}</h3>
      <p>Artist: {album.artist}</p>
      <p>Genre: {album.genre}</p>
      {/* Adicione outros detalhes do álbum aqui */}
    </div>
  );
};

export default Album;