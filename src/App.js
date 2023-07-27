import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

const App = () => {
  // Simule uma lista de álbuns para teste
  const [albums, setAlbums] = useState([
    { id: 1, name: 'Álbum 1' },
    { id: 2, name: 'Álbum 2' },
    { id: 3, name: 'Álbum 3' },
    // Adicione mais álbuns aqui para teste
  ]);

  const handleSearch = (keyword) => {
    // Filtrar a lista de álbuns com base na keyword
    const filteredAlbums = albums.filter((album) =>
      album.name.toLowerCase().includes(keyword.toLowerCase())
    );
    // Atualizar a lista de álbuns com os álbuns filtrados
    setAlbums(filteredAlbums);
  };

  return (
    <div className="App">
      <NavBar />
      <SearchBar onSearch={handleSearch} /> {/* Passar a função de filtro */}
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