import React, { useEffect, useState } from 'react';

function GenreList() {
  /**will call on genres listand store it in this variable below* */
  const [genreList, setGenreList] = useState([]);

  const getGenreList = () => {
    /**will call on genres listand store it in this variable below* */
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c7e5e005fe52947a29f48774c04e5309")
      .then(res => res.json())
      .then(json => setGenreList(json.genres));
      /**shows the 19 genres specifically out of the class genres * 
    */
  }

  useEffect(() => {
    getGenreList();
  }, []); // Empty dependency array to run once on mount

  console.log(genreList);
  /**display list in console log */

  return (
    <div>
      <h2 className='text-[30px] font-bold'>Genres</h2>

      {genreList.map((genre) => (
        /**iterate and design the genre list here */
        <div key={genre.id} className='items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg
          group'>

          <h3 className='group-hover:font-bold transition-all-ease-out duration-300'>{genre.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;


