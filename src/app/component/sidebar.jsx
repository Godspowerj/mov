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
import { usePathname} from 'next/navigation';

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
    const isActive = (href) => {
        return pathname === href ? " transition-all duration-200 transform scale-105 text-white bg-gray-800 rounded-full py-2" : "text-gray-400";
    };


    // const [showSearch, setShowSearch] = useState(false);
    // const searchRef = useRef(null);
    
    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (searchRef.current && !searchRef.current.contains(event.target)) {
    //             setShowSearch(false);
    //         }
    //     }
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);

    return (

        <div className='fixed md:top-0 md:left-0 bg-sidebar h-full  flex items-center justify-center 2xl:justify-start md:w-64 min-h-screen text-base py-2 flex-col '>
            <div className="text-white text-2xl font-semibold absolute hidden md:flex top-6 2xl:hidden">MovStream</div>

            <ul className="flex flex-col space-y-6 mt-12">
                {menuitems.map((item, index) => (
                    <Link key={index} href={item.path}>
                        <li className={`flex items-center space-x-4 md:px-6 px-5 hover:text-white ${isActive(item.path)}`}>
                            <span className="text-xl">{item.icons}</span>
                            <p className={`text-[20px] 2xl:text-2xl hidden md:flex`}>{item.title}</p>
                        </li>
                    </Link>
                ))}
            </ul>


            <div className="absolute bottom-6 pl-5">
                <button className="text-red-500 text-2xl"><MdOutlineLogout /></button>
            </div>
        </div>

    );
};

export default Sidebar;