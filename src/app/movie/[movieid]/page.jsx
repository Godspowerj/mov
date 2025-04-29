
// import Footer from '@/app/component/footer';
// import Movies from '@/app/dashboard/movies/page';
import Footer from '@/app/component/footer';
import Sidebar from '@/app/component/sidebar';
import Image from 'next/image';
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronForwardSharp } from "react-icons/io5";
import { RiMovie2Line } from "react-icons/ri";
import Movies from '@/app/dashboard/movies/page';


const Moviepage = async ({ params }) => {

  const { movieid } = await params;
  console.log(movieid);

  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieid}`, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGViYWM1ZmYyZmQ3NWFiMmViMDIwMmEzOGM2MTAzMSIsIm5iZiI6MTc0Mjc2NzQ4NS43NTMsInN1YiI6IjY3ZTA4NTdkMzBlNjVlN2JlZWM3MzMzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dqFzTKF9pwNT_xc1yG4LllFFhlaecJV1LTXUzrMbjRI' } })

    if (!res.ok) {
      throw new Error('Failed to fetch movie details');
    }

    const data = await res.json()
    console.log(data)

    return (
      <>
        <Sidebar />
        <div className='bg-color min-h-screen'>
          <div className='flex bg-color  items-center justify-between fixed left-0 right-0 top-0 z-50 shadow-2xl py-3'>
            <div className="flex items-center space-x-2 text-white text-2xl md:flex font-semibold">
              <RxHamburgerMenu className='text-white text-2xl md:flex hidden' />
              <Image src='/lolo.png' width={40} height={40} alt='logo' />
              <span>MovStream</span>
            </div>
          </div>

          <div className=' md:px-20 md:pt-20 pt-15  mx-auto'>
            <div className="relative mx-auto  md:flex block justify-center items-center h-full">
              <div>
                <div className='text-white py-4'>
                  <h1 className=''>Home/{data.title}</h1>
                </div>

                <img
                  src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                  alt={`${data.title}`}
                  className="w-[800px] h-auto "
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-gray-200 bg-opacity-0 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="true"
                      viewBox="0 0 24 24"
                      width="40"
                      height="40"

                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className='py-4 '>
              <div className='flex items-center text-center '>
                <h1 className="text-2xl font-bold text-white">{data.title}</h1>
                <IoChevronForwardSharp className='text-gray-400' />
              </div>
              {data.genres.map((genre) => (
                <span key={genre.id} className="text-gray-300 text-[12px] space-x-2">
                  {genre.name},
                </span>
              ))}
              <span className='flex items-center text-gray-300 text-[14px] '>
                <RiMovie2Line />|
                {data.release_date || data.first_air_date} |
                <p>⭐ {data.vote_average.toFixed(1)}</p>
              </span>
              <p className="text-gray-700 hidden">{data.overview}</p>
              <Movies />
            </div>
          </div>
  <Footer />
        </div>

      </>
    )

  } catch (error) {
    console.error('Error fetching movie data:', error);
    return <p>Error loading movie data</p>;
  }

}

export default Moviepage