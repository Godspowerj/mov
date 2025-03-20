import React from 'react';
import Navbar from './navbar';
import Sidebar from '../component/sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            <div className='flex h-screen'>
                <Sidebar />
                <div className='flex w-full h-screen '>
                    <div className='bg-color w-full flex-1 md:px-10 px-4 pt-6'>
                        <Navbar />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;