import { useSelector } from "react-redux"
import MovieList from "./MovieList"
const SecondaryContainer = () => {

  const movies = useSelector((store)=> store.movies)

  return (
    movies.nowPlayingMovies && 
    (
    <div className="bg-black">
      <div className="-mt-80 pl-12 relative z-20">
      <MovieList title = {"Now Playing Movies"} movies = {movies?.nowPlayingMovies} />
      <MovieList title = {"Popular Movies"} movies = {movies?.popularMovies} />
      <MovieList title = {"Top Rated Movies"} movies = {movies?.topRatedMovies} />
      <MovieList title = {"Upcoming Movies"} movies = {movies?.upComingMovies} />
      {/* <MovieList title = {"Horror Movies"} movies = {movies?.nowPlayingMovies} /> */}
      </div>
    </div> 
    ) 
  )
}

export default SecondaryContainer