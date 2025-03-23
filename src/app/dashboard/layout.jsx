import React from 'react';
import Navbar from './navbar';
import Sidebar from '../component/sidebar';

const Layout = ({ children }) => {
    return (
        <div className='overflow-hidden w-screen'>
            <Sidebar />
            <div className='flex flex-col  overflow-y-auto bg-color h-screen scrollbar-hide'>
                <Navbar />
                {children}
            </div>
        </div>


    );
};

export default Layout;