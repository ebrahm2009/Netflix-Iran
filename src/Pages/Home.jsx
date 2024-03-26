import React from 'react'
import Hero from '../Components/Hero';
import Movierow from '../Components/Movierow';
import endpoints from '../Services/movieServices';

const Home = () => {
  return (
    <>
    <Hero />
    <Movierow title='upcoming' url={endpoints.upcoming}/>
    <Movierow title='trending' url={endpoints.trending}/>
    <Movierow title='popular' url={endpoints.popular}/>
    <Movierow title='top rated' url={endpoints.topRated}/>
    <Movierow title='comedy' url={endpoints.comedy}/>
    
    
    
    </>
  );
};

export default Home