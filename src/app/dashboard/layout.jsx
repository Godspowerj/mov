import React from 'react';
import Navbar from './navbar';
import Sidebar from '../component/sidebar';

const Layout = ({ children }) => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <div className='flex w-full md:pl-80 overflow-y-auto bg-color h-screen scrollbar-hide'>
                <Sidebar />
                {children}
            </div>
        </div>


    );
};

export default Layout;