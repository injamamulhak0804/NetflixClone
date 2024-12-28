import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedSeries } from "../utils/Redux/movieSlice";

export const userTopRatedSeries = () =>{
    const dispatch = useDispatch()
    const url = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';

    const getTopSeries = async () =>{
        const data = await fetch(url, API_OPTIONS)
        const json = await data.json();
        console.log(json);
        dispatch(addTopRatedSeries(json.results))
    }
    useEffect(()=>{
        getTopSeries()
    },[])
}
export default userTopRatedSeries