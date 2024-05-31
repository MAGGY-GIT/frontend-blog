import React, { useEffect, useState } from 'react';
import GenreList from '../Components/GenreList'
import Trending from '../Components/Trending';


function Homepage() {
  const [allMovieList, setAllMovieList]=useState();
  useEffect(() => {
    getMovieList();

  }, []); // Empty dependency array to run once on mount

  const getMovieList = () => {
      /**will fetch movies list from tmdb database* */
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=c7e5e005fe52947a29f48774c04e5309")
    .then(res => res.json())
    .then(json => setAllMovieList(json.results));
      /**shows the lists of movies*/
  }
  
  return (
    <div className='grid grid-cols-4 px-5'>

      {/**imports genrelists from components and services folder
       * any changes made in GenreList.jsx will render here
      */}

      <div className='hidden md:block'>
        <GenreList/>
      </div>

      <div className='col-span-4 md:col-span-3'>
        
        {allMovieList?.length > 0 ? (
          <div>
           <Trending movieList={allMovieList} />
          </div>
        ) : null}
        
      </div>

      <div className=' col-span-4 md:col-span-3 text-[30px] font-bold '></div>
     
     
    </div>
  )
}

export default Homepage