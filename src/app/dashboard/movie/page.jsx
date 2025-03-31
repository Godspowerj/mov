'use client'
import React from 'react';
import { useState,useEffect } from 'react';
const Movies= () => {
    const [movieList, setMovieList] = useState([]);
    
      const getMovieProduct = () => {
        let movies = []; // Store all movies
    
        for (let i = 1; i <= 5; i++) { // Fetch page 1 and 2
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
            <div className="grid lg:grid-cols-8 grid-cols-3 gap-1 w-full md:w-auto">
              {movieList.map((movie, index) => (
                <div
                  key={index}
                  className=""
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`Movie ${index}`}
                    className="w-[100px] h-[150px] lg:w-[150px] lg:h-[200px] 2xl:w-[600px] 2xl:h-[800px] object-cover rounded-lg"
                  />
                  <p className="text-white text-sm md:text-base 2xl:text-5xl">
                    {movie.title.length > 15 ? `${movie.title.slice(0, 15)}...` : movie.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default Movies;