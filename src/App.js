import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import AddAlbumForm from './components/AddAlbumForm';

const App = () => {
  const [albums, setAlbums] = useState([
    { id: 1, name: 'Álbum 1' },
    { id: 2, name: 'Álbum 2' },
    { id: 3, name: 'Álbum 3' },
  ]);

  const handleSearch = (keyword) => {
    // Implemente a lógica de busca aqui, se necessário
    // ...
  };

  const handleAddAlbum = (albumName) => {
    // Implemente a lógica para adicionar álbuns aqui, se necessário
    // ...
  };

  const handleDeleteAlbum = (albumId) => {
    setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== albumId));
  };

  return (
    <div className="App">
      <NavBar />
      <SearchBar onSearch={handleSearch} />
      <AddAlbumForm onAddAlbum={handleAddAlbum} />
      <div className="album-list">
        <h2>Lista de Álbuns:</h2>
        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              {album.name}
              <button onClick={() => handleDeleteAlbum(album.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
