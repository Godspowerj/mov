'use client';
import React, { useEffect, useState } from 'react';
import { IoChevronForwardSharp } from "react-icons/io5";

const MovieProduct = () => {
    const [movieList, setMovieList] = useState([]);
    const [tvList, setTvList] = useState([]);
    const [upComingList, setUpComingList] = useState([]);
    const [topRatedList, setTopRatedList] = useState([]);

    const fetchAllData = async () => {
        try {
            const res = await fetch('/api/movies'); 
            const data = await res.json();
            console.log(data);
            

            setMovieList(data.popularMovies);
            setTopRatedList(data.topRatedMovies); 
            setTvList(data.popularTVShows);
            setUpComingList(data.upcomingMovies); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <div className="space-y-10 md:space-y-13 2xl:space-y-20">
            <Section title="Trending ❤️‍🔥" items={movieList} />
            <Section title="Top Rated ❤️‍🔥" items={topRatedList} />
            <Section title="Popular TV Shows" items={tvList} />
            <Section title="Upcoming Movies" items={upComingList} />
        </div>
    );
};

// Section Component
const Section = ({ title, items }) => (
    <div className="w-full space-y-6 xl:space-y-8 2xl:space-y-10">
        <div className="flex justify-between items-center px-4">
            <p className="text-base md:text-[24px] 2xl:text-5xl text-white font-medium">{title}</p>
            <p className="flex items-center gap-2 primary-color text-base xl:text-lg 2xl:text-6xl cursor-pointer">
                more <IoChevronForwardSharp />
            </p>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 w-full md:w-auto ">
                {items.map((item, index) => (
                    <div key={index} className="flex-none flex flex-col bg-gray-900 items-start gap-1 rounded-lg">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={`Item ${index}`}
                            className="w-[200px] h-[150px] lg:w-[150px] lg:h-[200px] 2xl:w-[600px] 2xl:h-[800px] object-cover rounded-lg"
                        />
                        <div className='flex flex-col gap-1 px-2 py-1'>
                           <span className='text-gray-300 text-[12px] '>
                            {item.release_date || item.first_air_date}
                            <p>⭐ {item.vote_average.toFixed(1)}</p>
                        </span>
                        <p className="text-white text-sm md:text-base 2xl:text-5xl">
                            {(item.title || item.name)?.slice(0, 15)}
                        </p> 
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default MovieProduct;