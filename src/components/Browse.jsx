import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpComingMovies from "../hooks/useUpComingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch"
import { useSelector } from "react-redux"

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  const gpt = useSelector((store)=> store.gpt);


  return (
    <div>
      <Header />
      {
        gpt.showGptSearch ? <GptSearch /> : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
        )
      }
      
      
    </div>
  )
}

export default Browse