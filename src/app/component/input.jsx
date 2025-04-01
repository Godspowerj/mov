import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const Input = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);


    const handleSearch = () => {
        if (query.trim() !== '') {
            alert(`Searching for: ${query}`);
            setSearchHistory((prevHistory) => [query, ...prevHistory]);
            alert(`Searching for: ${query}`);
            setQuery('');
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div className='px-3 space-y-4'>
            <div className='flex items-center gap-10 w-full justify-between border-none'>
                {/* Search Bar */}
                <div className='relative flex items-center w-full bg-transparent  border-gray-700 rounded-lg py-2'>
                    <div className="w-full max-w-lg bg-gray-800 p-2 rounded-lg flex items-center">
                        <IoSearchOutline className="text-[23px] text-white" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search movies..."
                            className="w-full outline-none border-none bg-transparent text-[18px] text-white pl-2"
                            onFocus={() => {
                                router.prefetch('/dashboard/search');
                                router.push('/dashboard/search');
                            }}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>
                <div className='md:flex items-center gap-2 px-4 hidden rounded-full whitespace-nowrap text-white '>
                    <MdHistory className='text-5xl' />
                    <p>Watch history</p>
                </div>
            </div>

            {searchHistory.length > 0 && (
                <div className="bg-gray-700 text-white p-2 rounded-lg mt-4">
                    <h3>Search History:</h3>
                    <ul>
                        {searchHistory.map((search, index) => (
                            <li key={index} className="py-1">{search}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Input;