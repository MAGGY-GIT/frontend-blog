import React, { useEffect, useState } from 'react';


function MovieList() {
    /**will call on genres listand store it in this variable below* */
  const [movieList, setMovieList] = useState([]);

    const getMovieList = () => {
        /**will call on genres listand store it in this variable below* */
        fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=c7e5e005fe52947a29f48774c04e5309")
      .then(res => res.json())
      .then(json => setMovieList(json.results));
      /**shows the 19 genres specifically out of the class genres * 
        */
    }

    useEffect(() => {
        getMovieList();
    }, []); // Empty dependency array to run once on mount

  console.log(movieList);
  /**display list in console log */

  return (
    <div>
        
    </div>
  )
}

export default MovieList