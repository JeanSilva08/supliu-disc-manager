import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(keyword);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome do álbum..."
        value={keyword}
        onChange={handleChange}
      />
      <button type="submit">Procurar</button>
    </form>
  );
};

export default SearchBar;
