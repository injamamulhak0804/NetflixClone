import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackGround = ({movieId}) => {

  const trailer = useSelector((store) => store.movies?.trailerVideo)
  useMovieTrailer(movieId)

  return (
    <div>
      <iframe className="w-full h-full aspect-video "
      src={"https://www.youtube.com/embed/"+ trailer?.key+"?&autoplay=2&mute=1"} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackGround