import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpComingMovies from "../hooks/useUpComingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch"
import { useSelector } from "react-redux"
import userTopRatedSeries from "../hooks/useTopSeries"

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  userTopRatedSeries();

  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);


  return (
    <div>
      <Header />
      {
        showGptSearch ? <GptSearch /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }      
    </div>
  )
}

export default Browse