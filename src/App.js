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
    const filteredAlbums = albums.filter((album) =>
      album.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setAlbums(filteredAlbums);
  };

  const handleAddAlbum = (albumName) => {
    const newAlbum = {
      id: albums.length + 1,
      name: albumName,
    };
    setAlbums([...albums, newAlbum]);
  };

  return (
    <div className="App">
      <NavBar />
      <SearchBar onSearch={handleSearch} />
      <AddAlbumForm onAddAlbum={handleAddAlbum} /> {/* Novo componente para adicionar álbuns */}
      <div className="album-list">
        <h2>Lista de Álbuns:</h2>
        <ul>
          {albums.map((album) => (
            <li key={album.id}>{album.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
