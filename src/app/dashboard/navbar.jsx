import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul className='flex items-center bg-amber-950'>
                <li><a href="/">Home</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;