import {IMG_CDN_URL} from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 cursor-pointer">
      <img src={IMG_CDN_URL + posterPath} className="rounded" alt="poster_image" />
    </div>
  )
}

export default MovieCard