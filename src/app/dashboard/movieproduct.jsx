'use client';
import React, { useEffect, useState } from 'react';
import { IoChevronForwardSharp } from "react-icons/io5";

const MovieProduct = () => {
    const [movieList, setMovieList] = useState([]);
    const [tvList, setTvList] = useState([]);
    const [upComingList, setUpComingList] = useState([]);
    const [topRatedList, setTopRatedList] = useState([]);
    const apiKey = process.env.NEXT_PUBLIC_MOVIE_API_KEY;
    
    console.log("API Key:", apiKey);

    const getMovieProduct = async () => {
        let movies = [];
        for (let i = 1; i <= 2; i++) {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${i}`);
            const data = await res.json();
            movies = movies.concat(data.results);
        }
        setMovieList(movies);
    };

    const getTvProduct = async () => {
        let tvShows = [];
        for (let i = 1; i <= 2; i++) {
            const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${i}`);
            const data = await res.json();
            tvShows = tvShows.concat(data.results);
        }
        setTvList(tvShows);
    };

    const getUpcomingProduct = async () => {
        let upComing = [];
        for (let i = 1; i <= 2; i++) {
            const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${i}`);
            const data = await res.json();
            upComing = upComing.concat(data.results);
        }
        setUpComingList(upComing);
    };

    // const getTopRatedProduct = async () => {
    //     let topRated = [];
    //     for (let i = 1; i <= 2; i++) {
    //         const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${i}`);
    //         const data = await res.json();
    //         topRated = topRated.concat(data.results);
    //     }
    //     setTopRatedList(topRated);
    // };

    useEffect(() => {
        getMovieProduct();
        getTvProduct();
        getUpcomingProduct();
        // getTopRatedProduct();
    }, []);

    return (
        <div className="space-y-10 md:space-y-13 2xl:space-y-20">
            <Section title="Trending ❤️‍🔥" items={movieList} />
            {/* <Section title="Top Rated ❤️‍🔥" items={topRatedList} /> */}
            <Section title="Popular TV Shows" items={tvList} />
            <Section title='Upcoming Movies' items={upComingList} />
            <p className='text-gray-500 text-center'>----------- no more content ------------</p>
        </div>
    );
};

// Section Component
const Section = ({ title, items }) => (
    <div className="w-full space-y-6 xl:space-y-8 2xl:space-y-10">
        <div className="flex justify-between items-center px-4">
            <p className="text-base md:text-[24px]  2xl:text-5xl text-white font-medium ">{title}</p>
            <p className="flex items-center gap-2 primary-color text-base xl:text-lg 2xl:text-6xl cursor-pointer">
                more <IoChevronForwardSharp />
            </p>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 w-full md:w-auto">
                {items.map((item, index) => (
                    <div key={index} className="flex-none flex flex-col items-center gap-2 rounded-lg">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={`Item ${index}`}
                            className="w-[100px] h-[150px] lg:w-[150px] lg:h-[200px] 2xl:w-[600px] 2xl:h-[800px] object-cover rounded-lg"
                        />
                        <p className="text-white text-sm md:text-base 2xl:text-5xl">
                            {(item.title || item.name)?.slice(0, 15)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default MovieProduct;
