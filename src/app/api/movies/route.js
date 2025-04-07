
import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = 'c0ebac5ff2fd75ab2eb0202a38c61031';

    // The API route (route.js) fetches the data from the TMDB API using the fetch function.
    // It processes the data (if needed) and sends it back to the frontend as a JSON response.

    try {
        const [popularMovies, topRatedMovies, popularTVShows, upcomingMovies] = await Promise.all([
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`,).then((res) => res.json()),
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`).then((res) => res.json()),
            fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=3`).then((res) => res.json()),
            fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=1`).then((res) => res.json()),
        ]);
 
        
        // The purpose of responseData is to combine all the fetched data into a single object so that it can be sent as a single JSON response to the frontend. 
        const responseData = {
            popularMovies: popularMovies.results,// Extract the relevant data (.results)  
            topRatedMovies: topRatedMovies.results,
            popularTVShows: popularTVShows.results,
            upcomingMovies: upcomingMovies.results,
        };
        return NextResponse.json(responseData);
        // By combining all the data into one object, the frontend only needs to make one request to /api/movies and gets all the data it needs in a single response.
    } catch (error) {
        console.error('Error fetching data:', error);        
        return NextResponse.json(responseData);
    }
}