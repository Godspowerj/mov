import React from 'react';
import Navbar from './navbar';
import Sidebar from '../component/sidebar';
import Footer from '../component/footer';

const Layout = ({ children }) => {
    return (
        <div className='flex h-screen w-full max-w-screen-lg flex-col'>
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-y-auto bg-color scrollbar-hide ml-0 md:ml-64">
                <Navbar />
                {children}
                
            </div>
        </div >
    );
};

export default Layout;