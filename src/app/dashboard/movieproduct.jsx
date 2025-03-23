'use client';
import React, { useEffect,useState } from 'react';
import { IoChevronForwardSharp } from "react-icons/io5";

const MovieProduct = () => {
    const movieProduct = [
        { image: 'imh.jpg', title: 'Movie 1' },
        { image: 'imh.jpg', title: 'Movie 2' },
        { image: 'imh.jpg', title: 'Movie 3' },
        { image: 'imh.jpg', title: 'Movie 4' },
        { image: 'imh.jpg', title: 'Movie 5' },
        { image: 'imh.jpg', title: 'Movie 6' },
        { image: 'imh.jpg', title: 'Movie 4' },
        { image: 'imh.jpg', title: 'Movie 5' },
        { image: 'imh.jpg', title: 'Movie 6' },
        { image: 'imh.jpg', title: 'Movie 4' },
    ];
    
    const [movieList, setMovieList] = useState([]);
    const getMovieProduct = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=c0ebac5ff2fd75ab2eb0202a38c61031')
        .then(response => response.json())
        .then(data => setMovieList(data.results))
    }
    useEffect(() => {
        getMovieProduct();
    }, []);

    return (
        <div className=" md:space-y-13 space-y-10 ">
            <div className="w-full space-y-6">
                <div className='flex justify-between items-center px-3'>
                    <p className='md:text-[24px] text-base text-white  font-medium'>Trending Videos</p>
                    <p className='flex items-center gap-2 primary-color text-base'>more<IoChevronForwardSharp /></p>
                </div>
                <div className='overflow-x-auto scrollbar-hide '>
                    <div className="flex gap-4 w-max">
                        {movieList.map((movie, index) => (
                            <div key={index} className="flex-none flex flex-col items-center gap-2 rounded-lg">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` }
                                    alt={`Movie ${index}`}
                                    className="md:w-[150px] md:h-[200px] w-[100px] h-[150px] object-cover rounded-lg"
                                />
                                <p className="text-white">{movie.title.slice(0,15)}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="w-full space-y-6">
                <div className='flex justify-between items-center px-3'>
                    <p className='md:text-[24px] text-base text-white  font-medium'>Recommended movies</p>
                    <p className='flex items-center gap-2 primary-color text-base'>more<IoChevronForwardSharp /></p>
                </div>
                <div className='overflow-x-auto scrollbar-hide '>
                    <div className="flex gap-4 w-max">
                        {movieList.map((movie, index) => (
                            <div key={index} className="flex-none flex flex-col items-center gap-2 rounded-lg">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` }
                                    alt={`Movie ${index}`}
                                    className="md:w-[150px] md:h-[200px] w-[100px] h-[150px] object-cover rounded-lg"
                                />
                                <p className="text-white">{movie.title.slice(0,15)}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>



            <div className="w-full space-y-6">
                <div className='flex justify-between items-center px-3'>
                    <p className='md:text-[24px] text-base text-white  font-medium'>Suggestions</p>
                    <p className='flex items-center gap-2 primary-color text-base'>more<IoChevronForwardSharp /></p>
                </div>
                <div className='overflow-x-auto scrollbar-hide '>
                    <div className="flex gap-4 w-max">
                        {movieList.map((movie, index) => (
                            <div key={index} className="flex-none flex flex-col items-center gap-2 rounded-lg">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` }
                                    alt={`Movie ${index}`}
                                    className="md:w-[150px] md:h-[200px] w-[100px] h-[150px] object-cover rounded-lg"
                                />
                                <p className="text-white">{movie.title.slice(0,15)}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MovieProduct;
