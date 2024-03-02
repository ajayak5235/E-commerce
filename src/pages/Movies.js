import React, { useState } from "react";
import { Button ,Card} from "react-bootstrap";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  async function fetchHandler() {
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setMovies(data.results); // Assuming 'results' contains the movie data
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie, index) => {
          return <Card>
            <li key={index}>{movie.title}</li>
            <li key={index}>{movie.episode_id}</li>
           <p>{movie.opening_crawl}</p>
            </Card>
        }
          
         
        )}
      </ul>
      <Button onClick={fetchHandler}>Fetch</Button>
    </div>
  );
};

export default Movies;
