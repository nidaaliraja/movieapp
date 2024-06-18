import { useState, useEffect } from "react";

const useMovieData = (searchTerm) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?t=${searchTerm}&apikey=97d49417`)
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [searchTerm]);

  return movieData;
};

export default useMovieData;
