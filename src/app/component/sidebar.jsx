'use client'
import Link from 'next/link';
import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaTv } from "react-icons/fa";
import { IoIosHeadset } from "react-icons/io";
import { MdOutlineLocalMovies } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCircleHelp } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Sidebar = ({ isOpen }) => {
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
            icons: <IoMdPerson />,
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
    const isActive = (href) => {
        return pathname === href ? " transition-all duration-200 transform scale-105 text-white bg-gray-800 rounded-full py-2" : "text-gray-400";
    };



    return (

        <div className="fixed md:top-0 md:left-0 bg-sidebar h-full flex flex-col items-center md:justify-center 2xl:justify-start md:w-64 min-h-screen text-base py-2">
        
        <div className=" items-center space-x-2 text-white text-2xl md:flex font-semibold absolute hidden top-0 2xl:hidden">
          <Image src='/lolo.png' width={70} height={70} alt='logo' />
          <span>MovStream</span>
        </div>
        {/* Main Sidebar Menu (Always visible on larger screens) */}
        <ul className="hidden md:flex flex-col space-y-6 mt-12">
          {menuitems
            .map((item, index) => (
              <Link key={index} href={item.path}>
                <li className={`flex items-center space-x-4 md:px-6 px-5 hover:text-white ${isActive(item.path)}`}>
                  <span className="text-xl">{item.icons}</span>
                  <p className="text-[18px] 2xl:text-2xl">{item.title}</p>
                </li>
              </Link>
            ))}
        </ul>
      
         {/* Bottom Navbar Visible only on smaller screens */}
        <div className="fixed max-md:bottom-0 left-0 w-full bg-sidebar flex md:hidden justify-around py-3">
          {menuitems
            .slice(0, 5) // Show only the first 5 items in the bottom navbar
            .map((item, index) => (
              <Link key={index} href={item.path} className={`flex flex-col items-center text-gray-400 }`}>
                <div>
                  <span className="text-xl">{item.icons}</span>
                </div>
              </Link>
            ))}
        </div>
      
        {/* Logout Button (Remains at the bottom in both cases) */}
        <div className="absolute md:bottom-6 bottom-2 pl-5">
          <button className="text-red-500 text-2xl">
            <MdOutlineLogout />
          </button>
        </div>
      </div>
      


    );
};

export default Sidebar;