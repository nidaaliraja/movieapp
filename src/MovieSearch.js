import React from "react";

const MovieSearch = ({ query, setQuery, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearch;
