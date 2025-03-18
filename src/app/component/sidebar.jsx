import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className="">
            <h2>Sidebar</h2>
            <ul>
                 <li><Link href="/dashboard/music">Home</Link></li>
                <li>Movies</li>
                <li>TV Shows</li>
                <li>Favorites</li>
                <li>Settings</li>
            </ul>
        </div>
    );
};

export default Sidebar;