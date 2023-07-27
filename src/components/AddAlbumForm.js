import React, { useState } from 'react';

const AddAlbumForm = ({ onAddAlbum }) => {
  const [albumName, setAlbumName] = useState('');

  const handleChange = (event) => {
    setAlbumName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (albumName.trim() !== '') {
      onAddAlbum(albumName);
      setAlbumName('');
    }
  };

  return (
    <form className="add-album-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome do novo álbum..."
        value={albumName}
        onChange={handleChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddAlbumForm;
