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
        <div className="bg-sidebar h-full w-80 md:flex flex-col items-center hidden justify-center">
            <div className="text-white text-2xl font-semibold mb-6 absolute top-6">MovStream</div>
            <ul className="flex flex-col space-y-6">
                {menuitems.map((item, index) => (
                    <li key={index} className="flex items-center space-x-4 px-6 text-gray-400 hover:text-white duration-100 transition-all transform hover:scale-110">
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