import React from 'react'
import GenreList from '../Components/GenreList'
import MovieList from '../Components/MovieList'

function Homepage() {
  return (
    <div className='grid grid-cols-4 px-5'>

      {/**imports genrelists from components and services folder
       * any changes made in GenreList.jsx will render here
      */}
      <div className='hidden md:block'>
        <GenreList/>
        <MovieList/>
      </div>

      <div className=' col-span-4 md:col-span-3 bg-gray-200 text-[30px] font-bold rounded-lg'>Movie List</div>
     
     
    </div>
  )
}

export default Homepage