
// import Footer from '@/app/component/footer';
// import Movies from '@/app/dashboard/movies/page';
import Image from 'next/image';
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";


const Moviepage = async ({ params }) => {

  const movieid = await params.movieid
  console.log(movieid);

  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieid}`, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGViYWM1ZmYyZmQ3NWFiMmViMDIwMmEzOGM2MTAzMSIsIm5iZiI6MTc0Mjc2NzQ4NS43NTMsInN1YiI6IjY3ZTA4NTdkMzBlNjVlN2JlZWM3MzMzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dqFzTKF9pwNT_xc1yG4LllFFhlaecJV1LTXUzrMbjRI' } })

    if (!res.ok) {
      throw new Error('Failed to fetch movie details');
    }

    const data = await res.json()
    console.log(data)

    return (
      <div className='bg-color h-screen'>
        <div className='flex bg-color  items-center justify-between fixed left-0 right-0 top-0 z-50 shadow-2xl  px-4 '>
          <div className="flex items-center space-x-2 text-white text-2xl md:flex font-semibold">
          <RxHamburgerMenu className='text-white text-3xl' />
            <Image src='/lolo.png' width={70} height={70} alt='logo' />
            <span>MovStream</span>
          </div>
        </div>

        <div className=' px-4 md:pt-10 mx-auto '>
          <div className="relative mx-auto">
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
                  clas
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          <div className='py-10'>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p>{data.release_data}</p>
            <p className="text-gray-700">{data.overview}</p>
          </div>
          
        </div>
        
      </div>
    )

  } catch (error) {
    console.error('Error fetching movie data:', error);
    return <p>Error loading movie data</p>;
  }

}

export default Moviepage