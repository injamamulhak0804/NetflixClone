import { useSelector } from "react-redux"
import VideTitle from "./VideoTitle"
import VideoBackGround from "./VideoBackGround"


const MainContainer = () => {
  const movies = useSelector((store)=> store.movies?.nowPlayingMovies)
  if(!movies) return;
  const mainMovies = movies[1]
  const {original_title, overview, id } = mainMovies

  return (
    <div>
      <VideTitle  title= {original_title} overview= {overview} />
      <VideoBackGround movieId = {id} />
    </div>
  )

  
}

export default MainContainer