import React, { useState } from 'react';
import '../styles/EditAlbumForm.css'

const EditAlbumForm = ({ album, onSave }) => {
  const [editedAlbumName, setEditedAlbumName] = useState(album.name);

  const handleChange = (event) => {
    setEditedAlbumName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(album.id, editedAlbumName);
  };

  return (
    <form className="edit-album-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={editedAlbumName}
        onChange={handleChange}
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default EditAlbumForm;
