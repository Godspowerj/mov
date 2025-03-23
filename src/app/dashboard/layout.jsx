import React from 'react';
import Navbar from './navbar';
import Sidebar from '../component/sidebar';

const Layout = ({ children }) => {
    return (
        <div className='flex h-screen w-full'>
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-y-auto bg-color scrollbar-hide ml-64">
                <Navbar />
                {children}
            </div>
        </div >



    );
};

export default Layout;