import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/Redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const nowPlayingMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=3', API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        nowPlayingMovie()
    }, [])
}

export default useNowPlayingMovies

