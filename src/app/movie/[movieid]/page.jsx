
import Footer from '@/app/component/footer';
import Movies from '@/app/dashboard/movies/page';
import Navbar from '@/app/dashboard/navbar';
import React from 'react'

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
      <div>
        <Navbar />
        <div className='relative bg-color h-screen'>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt={`${data.title} `}
            className="" 
          />
          <div className=''>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="text-gray-700">{data.overview}</p>
          </div>
         <Movies/>
        </div>
      </div>
    )

  } catch (error) {
    console.error('Error fetching movie data:', error);
    return <p>Error loading movie data</p>;
  }

}

export default Moviepage