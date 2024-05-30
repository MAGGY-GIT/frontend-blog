import React from 'react'

function Homepage() {
  return (
    <div className='grid grid-cols-4'>
      <div className='bg-red-500 h-full hidden md:block'>Genre</div>
      <div className=' col-span-4 md:col-span-3 bg-cyan-500'>Movie & Series List</div>
    </div>
  )
}

export default Homepage