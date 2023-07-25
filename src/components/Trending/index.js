import React from 'react';
import MovieCard from './MovieCard';
import movieData from './movieData'; // Sử dụng default import

const Index = () => {
  return (
    <>
      <h3 className='border-b border-primary mt-12 mb-6 pb-4'>Trending</h3>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12'>
        {movieData.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className='flex justify-center'>
        <button className='btn hover:scale-125 transition ease-out duration-500'>
          Load more
        </button>
      </div>
    </>
  );
};

export default Index;
