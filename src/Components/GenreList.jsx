import React, { useEffect } from 'react'

function GenreList() {


  const getGenreList = ()=>{
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c7e5e005fe52947a29f48774c04e5309")
    .then(res => res.json())
    .then(json => console.log(json))
  }

  useEffect(()=>{
    getGenreList()
  })


  return (
    <div>GenreList</div>
  )
}

export default GenreList