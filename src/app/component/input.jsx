import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { MdCancel } from "react-icons/md";
import { useState } from 'react';
const Input = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);

    const handleSearch = () => {
        if (query.trim() !== '') {
            setSearchHistory((prevHistory) => [query, ...prevHistory]);
            setQuery('');
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div className='px-2 '>
            <div className='flex items-center gap-10 w-full justify-between border-none'>
                {/* Search Bar */}
                <div className='relative flex items-center w-full bg-transparent  border-gray-700 rounded-lg focus-within:ring focus-within:ring-gray-500 focus-within:border-sm focus-within:border-gray-500'>
                    <div className="w-full max-w-lg bg-gray-800 p-2 rounded-lg flex items-center">
                        <IoSearchOutline className="text-[23px] text-white" />
                        <input
                            type="text"  
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search movies..."
                            className="w-full outline-none border-none bg-transparent text-[18px]  text-white pl-2 "
                            onFocus={() => {
                                router.prefetch('/dashboard/search');
                                router.push('/dashboard/search');
                            }}
                            onKeyDown={handleKeyDown}
                        />
                        {
                            query && (
                                <div className='text-gray-500 cursor-pointer' onClick={() => setQuery('')}>
                                    <MdCancel />
                                </div>
                            )
                        }
                        
                    </div>
                </div>
                <div className='md:flex items-center gap-2 px-4 hidden rounded-full whitespace-nowrap text-white '>
                    <MdHistory className='text-5xl' />
                    <p>Watch history</p>
                </div>
            </div>
              

            {/* Search History List */}
            {searchHistory.length > 0 && (
                <div className="py-3">
                    <p className="text-white font-bold mb-2">Recent Searches:</p>
                    <ul className=' flex items-center justify-between'>
                        <div className='space-x-3 text-center'>
                          {searchHistory.map((item, index) => (
                            <li key={index} className=" inline-flex gap-2 text-sm text-center  items-center text-gray-300 p-1 hover:bg-gray-700 rounded-full bg-gray-800  px-3 ">
                                {item}
                                <p className='text-sm' onClick={() => setQuery('')}><MdCancel /></p>
                            </li>
                            
                        ))}  
                        </div>
                        
                        <div>
                            <button className='text-red-500' onClick={() => setSearchHistory([])}>Clear All</button>
                        </div>
                    </ul>
                </div>
            )}

        </div>
    );
};

export default Input;