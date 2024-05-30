import React from 'react'
import GenreList from '../Components/GenreList'

function Homepage() {
  return (
    <div className='grid grid-cols-4'>

      {/**imports genrelists from components and services folder
       * any changes made in GenreList.jsx will render here
      */}
      <div className='bg-red-500 h-full hidden md:block'>
        <GenreList/>
      </div>

      <div className=' col-span-4 md:col-span-3 bg-cyan-500'>Movie & Series List</div>

    </div>
  )
}

export default Homepage