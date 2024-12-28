const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-full aspect-video md:pt-[12%] px-[8%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-3xl  font-bold mb-2">{title}</h1>
      <p className="hidden lg:block text-xs py-6 xl:text-sm w-2/4">{overview}</p>
      <div className="flex gap-5">
        <button className="bg-white ms-6 text-black hover:bg-opacity-40 font-bold flex items-center py-2 gap-2 px-8 rounded">
          <span className="play-btn"></span> Play
          </button>
        <button className="bg-transparent border hover:bg-white hover:text-black hover:border-black border-white border-1 opacity-80 font-bold py-4 px-8 rounded">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle