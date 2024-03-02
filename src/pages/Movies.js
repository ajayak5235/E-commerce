import React, { useState, useEffect, useCallback } from "react";
import { Button, Card } from "react-bootstrap";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(null);

  useEffect(() => {
    fetchHandler();

    return () => {
      if (retry) {
        clearInterval(retry);
      }
    };
  },[]);

  const fetchHandler = useCallback( async () => {
    try {
      fetch("https://swapi.dev/api/films")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          setMovies(data.results);
          setError(null); // Reset error if fetch is successful
        })
        .catch((error) => {
          setError("Something went wrong... Retrying");
          setRetry(setInterval(fetchHandler, 5000));
        });
    } catch (error) {
      setError("Failed to fetch data");
    }
  }
  ,[]);

  const cancelRetry = () => {
    setError(null);
    clearInterval(retry);
  };

  return (
    <div>
      <h1>Movies</h1>
      {error && <p>{error}</p>}
      <ul>
        {movies.map((movie, index) => (
          <Card key={index}>
            <li>{movie.title}</li>
            <li>{movie.episode_id}</li>
            <p>{movie.opening_crawl}</p>
          </Card>
        ))}
      </ul>
      <Button onClick={cancelRetry}>Cancel</Button>
    </div>
  );
};

export default Movies;
