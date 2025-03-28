'use client'
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
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const menuitems = [
        {
            icons: <IoHomeOutline />,
            path: "/dashboard",
            title: "Home"
        },
        {
            icons: <FaTv />,
            path: "/dashboard/tvShows",
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
    const pathname = usePathname();
    console.log("Current Pathname:", pathname);
    const isActive = (href) => {
      return  pathname === href ? " transition-all duration-200 transform scale-105 text-white bg-gray-800 rounded-full py-2" : "text-gray-400";
    };
    return (

        <div className='fixed top-0 left-0 bg-sidebar h-full md:flex items-center justify-center md:w-64 min-h-screen text-base py-2 flex-col hidden '>

            <div className="text-white text-2xl font-semibold absolute top-6">MovStream</div>

            <ul className="flex flex-col space-y-6 mt-12">
                {menuitems.map((item, index) => (
                    <li key={index} className={`flex items-center space-x-4 px-6 hover:text-white ${isActive(item.path)}`}>
                        <span className="text-xl">{item.icons}</span>
                        <Link href={item.path}  className={`text-[20px]`}>{item.title}</Link>
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