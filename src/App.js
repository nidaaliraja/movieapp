import React, { useState } from "react";
import MovieSearch from "./MovieSearch";
import MovieData from "./MovieData";
import useMovieData from "./useMovieData";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("Avengers");

  const movieData = useMovieData(searchTerm);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };

  return (
    <div>
      <header>
        <h1>React IMDB</h1>
        <nav>
          <a href="#">TMDB</a>
          <a href="#">GitHub</a>
        </nav>
      </header>
      <div className="search-bar">
        <MovieSearch
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
        />
      </div>
      {movieData ? (
        movieData.Response === "True" ? (
          <div className="movie-details">
            <MovieData movieData={movieData} />
          </div>
        ) : (
          <p>Movie not found. Please try another search.</p>
        )
      ) : (
        <div>Loading...</div>
      )}
      <div className="search-results">{/* Render search results here */}</div>
    </div>
  );
}

export default App;
