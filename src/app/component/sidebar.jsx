import Link from 'next/link';
import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaTv } from "react-icons/fa";
import { IoIosHeadset } from "react-icons/io";
import { MdOutlineLocalMovies } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCircleHelp } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
    const menuitems = [
        {
            icons: <IoHomeOutline />,
            path: "/dashboard",
            title: "Home"
        },
        {
            icons: <FaTv />,
            path: "/dashboard/tv-shows",
            title: "TV Shows"
        },
        {
            icons: <IoIosHeadset />,
            path: "/dashboard/music",
            title: "Music"
        },
        {
            icons: <MdOutlineLocalMovies />,
            path: "/dashboard/movies",
            title: "Movies"
        },
        {
            icons: <AiOutlineAppstore />,
            path: "/dashboard/app",
            title: "App"
        },
        {
            icons: <IoSettingsOutline />,
            path: "/dashboard/settings",
            title: "Settings"
        },
        {
            icons: <LuCircleHelp />,
            path: "/dashboard/help",
            title: "Help"
        }
    ];
    return (
        <div className='fixed top-0 left-0 bg-sidebar h-full  md:flex  items-center justify-center md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-2 flex flex-col'>

        <div className="text-white text-2xl font-semibold absolute top-6">MovStream</div>
   
        <ul className="flex flex-col space-y-6 mt-12">
            {menuitems.map((item, index) => (
                <li key={index} className="flex items-center space-x-4 px-6 text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-105">
                    <span className="text-xl">{item.icons}</span>
                    <Link href={item.path} className="text-[20px]">{item.title}</Link>
                </li>
            ))}
        </ul>
    

        <div className="absolute bottom-6">
            <button className="text-red-500 text-2xl"><MdOutlineLogout /></button>
        </div>
    </div>
    
    );
};

export default Sidebar;