import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/Redux/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    //Fetch the trailer video && update the store with trailer video

    const dispatch = useDispatch()

    const getMoviesVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(() => { getMoviesVideos() }, [])
}

export default useMovieTrailer;