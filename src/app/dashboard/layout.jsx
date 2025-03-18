import React from 'react';
import Navbar from './navbar';
import Sidebar from '../component/sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <Navbar />
                <div className='flex w-full'>
                    <Sidebar />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;