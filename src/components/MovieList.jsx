import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
  return (
    <div className="px-6 pt-16">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <div className="flex overflow-x-scroll py-6">
            <div className="flex gap-3">
              {movies?.map((movie) => <MovieCard key={movie.id} posterPath = {movie.poster_path} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList