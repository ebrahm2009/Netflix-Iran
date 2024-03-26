import axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoints, { createImageUrl } from '../Services/movieServices';

const Hero = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios.get(endpoints.popular).then((Response) => {
      const movies = Response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)]
      setMovie(randomMovie);
    });
  }, []);

  const truncate = (str, length) => {
    if (!str) return ''
    return str.length > length ? str.slice(0, length) + ' ...' : str;
  }

  if (!movie)
    return (
      <>
        <p>fetching movie...</p>
      </>
    );
  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-t from-black" />
        <img className= " w-full h-full object-cover object-top" src={createImageUrl(backdrop_path, "original")} alt={title} />
      </div>
      <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
        <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
      <div className="mt-8 mb-4">
        <button className="capitalize hover:bg-gradient-to-t from-red-700 py-2 px-4  rounded-md ">play</button>
        <button className="capitalize hover:bg-gradient-to-r from-red-700  py-2 px-4 ml-4 rounded-md ">watch later</button>
      </div>
      <p className= "bg-gradient-to-r from-white via-red-600 to-white inline-block text-transparent bg-clip-text ">{release_date}</p>
      <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncate(overview, 100)}</p>
      </div>
      
    </div>

  )
}

export default Hero