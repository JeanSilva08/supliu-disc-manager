import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import AddAlbumForm from './components/AddAlbumForm';
import AlbumDetails from './components/AlbumDetails';
import EditAlbumForm from './components/EditAlbumForm';

import './styles/App.css'

const updateAlbumsInLocalStorage = (albums) => {
  localStorage.setItem('albums', JSON.stringify(albums));
};

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isEditFormVisible, setEditFormVisible] = useState(false);
  const [selectedAlbumDetails, setSelectedAlbumDetails] = useState(null);


  useEffect(() => {
    const storedAlbums = JSON.parse(localStorage.getItem('albums')) || [];
    setAlbums(storedAlbums);
  }, []);


  useEffect(() => {
    updateAlbumsInLocalStorage(albums);
  }, [albums]);

  const fetchAlbums = async () => {
    try {
      const response = await fetch('http://api.example.com/albums'); // Substitua pela URL da sua API
      if (!response.ok) {
        throw new Error('Failed to fetch albums from API');
      }
      const data = await response.json();
      setAlbums(data);
    } catch (error) {
      console.error(error);
    }
  };

  

  const handleSearch = (keyword) => {
    const filteredAlbums = albums.filter((album) =>
      album.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setAlbums(filteredAlbums);
  };

  const handleAddAlbum = (albumName) => {
    if (albumName.trim() !== '') {
      const newAlbum = {
        id: albums.length + 1,
        name: albumName,
        tracks: [],
      };
      const updatedAlbums = [...albums, newAlbum];
      setAlbums(updatedAlbums);
    }
  };

  const handleDeleteAlbum = (albumId) => {
    setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== albumId));

    if (selectedAlbum && selectedAlbum.id === albumId) {
      setSelectedAlbum(null);
      setEditFormVisible(false);
      setSelectedAlbumDetails(null);
    }
  };

  const handleEditAlbum = (albumId, editedName) => {
    setAlbums((prevAlbums) =>
      prevAlbums.map((album) =>
        album.id === albumId ? { ...album, name: editedName } : album
      )
    );
    setEditFormVisible(false);
  };

  const handleAddTrack = (albumId, trackName) => {
    if (trackName.trim() !== '' && selectedAlbum) {
      const updatedAlbums = albums.map((album) =>
        album.id === albumId ? { ...album, tracks: [...album.tracks, trackName] } : album
      );
      setAlbums(updatedAlbums);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

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
              <button onClick={() => setEditFormVisible(true)}>Editar</button>
            </li>
          ))}
        </ul>
      </div>
      {selectedAlbumDetails && <AlbumDetails album={selectedAlbumDetails} />}
      {selectedAlbum && isEditFormVisible && (
        <EditAlbumForm album={selectedAlbum} onSave={handleEditAlbum} />
      )}
    </div>
  );
};

export default App;