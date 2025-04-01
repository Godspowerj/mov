'use client'
import React from 'react'
import { useState, useEffect } from 'react';

const Search = () => {
  const [movieList, setMovieList] = useState([]);
  const navbarItems = [
    'All', 'Series', 'Movies',
  ];
  const getMovieProduct = () => {
    let movies = []; // Store all movies

    for (let i = 1; i <= 4; i++) { // Fetch page 1 and 2
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c0ebac5ff2fd75ab2eb0202a38c61031&page=${i}`)
        .then(response => response.json())
        .then(data => {
          movies = movies.concat(data.results); // Add movies to list
          setMovieList([...movies]); // Update state
        });
    }
  };

  useEffect(() => {
    getMovieProduct();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="">
        <div className='overflow-hidden '>
          <ul className='flex items-center lg:text-base overflow-x-auto md:gap-10 gap-5 px-4 scrollbar-hide py-4 text-white px- whitespace-nowrap'>
            {navbarItems.map((title, index) => (
              <li key={index} className='shrink-0'>{title}</li>
            ))}
          </ul>
        </div>

        <div className="grid lg:grid-cols-8 grid-cols-3 2xl:space-y-10 py-3 xl:gap-4 gap-2 pt-2 space-y-2 w-full md:w-auto">
          {movieList.map((movie, index) => (
            <div
              key={index}
              className=""
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`Movie ${index}`}
                className="w-[150px] h-[150px]  lg:w-[150px] lg:h-[200px] 2xl:w-[600px] 2xl:h-[800px] object-cover rounded-lg"
              />
              <p className="text-white text-sm md:text-base 2xl:text-5xl">
                {movie.title.length > 15 ? `${movie.title.slice(0, 10)}...` : movie.title}
              </p>
              <div className='text-center text-white 2xl:w-44 mt-4 bg-amber-700 rounded-md py-1'>
                <button className='text-center'>Watch now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search