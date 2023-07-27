// src/App.js
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import AddAlbumForm from './components/AddAlbumForm';
import AlbumDetails from './components/AlbumDetails'; 

const App = () => {
  const [albums, setAlbums] = useState([
    { id: 1, name: 'Álbum 1' },
    { id: 2, name: 'Álbum 2' },
    { id: 3, name: 'Álbum 3' },
  ]);

  const [selectedAlbum, setSelectedAlbum] = useState(null); 

  const handleSearch = (keyword) => {
    
  };

  const handleAddAlbum = (albumName) => {
    
  };

  const handleDeleteAlbum = (albumId) => {
    setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== albumId));
    
    if (selectedAlbum && selectedAlbum.id === albumId) {
      setSelectedAlbum(null);
    }
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
            <li key={album.id} onClick={() => setSelectedAlbum(album)}>
              {album.name}
              <button onClick={() => handleDeleteAlbum(album.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
      <AlbumDetails album={selectedAlbum} /> {/* Passa o álbum selecionado para o componente AlbumDetails */}
    </div>
  );
};

export default App;
