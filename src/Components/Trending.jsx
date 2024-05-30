import React, { useEffect } from 'react'

function Trending({movieList}) {

    useEffect(()=>{
        console.log(movieList)
    },[])
    /**display movielists on console log */

    return (
        <div className='mt-5 hidden md:block'>
            <h2 className='text-[30px] font-bold'>Trending Movies</h2>
            {/**make the images horizontal */
            /**the 4 cols will appear on large screens while it will disappear on smaller screens*/}
            <div className=' md:grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {movieList.map((movie,index)=>index<4&&(
                    /**give a condition to display four movies */
                    <div className='bg-blue-800 rounded-lg p-2'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='rounded-lg'/>
                        {/** used these ` instead of '*/}
                        <h2 className='font-bold text-[20px] mt-2'>{movie.original_title}</h2>
                    </div>
                ))}
            
            </div>
        </div>
    )
}

export default Trending