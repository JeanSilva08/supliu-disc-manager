import React from 'react';

const AlbumDetails = ({ album }) => {
  return (
    <div className="album-details">
      <h2>Detalhes do Álbum</h2>
      {album && (
        <div>
          <h3>{album.name}</h3>
          {/* Adicione aqui outras informações do álbum, se necessário */}
        </div>
      )}
    </div>
  );
};

export default AlbumDetails;