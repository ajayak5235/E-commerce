import React, { useState } from "react";
import { Button ,Card} from "react-bootstrap";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  async function fetchHandler() {
    setIsLoading(true)
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setMovies(data.results); // Assuming 'results' contains the movie data
      setIsLoading(false)
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {!isLoading  &&  movies.map((movie, index) => {
          return <Card>
            <li key={index}>{movie.title}</li>
            <li key={index}>{movie.episode_id}</li>
           <p>{movie.opening_crawl}</p>
            </Card>
        }
        
         
         
        )}
        {isLoading && <p>Please Wait Loading.....</p>}
      </ul>
      <Button onClick={fetchHandler}>Fetch</Button>
    </div>
  );
};

export default Movies;
