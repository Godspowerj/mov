
import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = 'c0ebac5ff2fd75ab2eb0202a38c61031';

    let responseData = {};
    try {
        const [popularMovies, topRatedMovies, popularTVShows, upcomingMovies] = await Promise.all([
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`).then((res) => res.json()),
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`).then((res) => res.json()),
            fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=3`).then((res) => res.json()),
            fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=1`).then((res) => res.json()),
        ]);
 
        

        const responseData = {
            popularMovies: popularMovies.results,
            topRatedMovies: topRatedMovies.results,
            popularTVShows: popularTVShows.results,
            upcomingMovies: upcomingMovies.results,
        };
        console.log("🎬 API Response:", responseData);
        return NextResponse.json(responseData);
    } catch (error) {
        console.log("🎬 API Response:", responseData); // ✅ This will appear in your terminal
        
        return NextResponse.json(responseData);
    }
}