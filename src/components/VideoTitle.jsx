const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-[8%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-4xl font-bold mb-5">{title}</h1>
      <p className="hidden lg:block p-6 text-lg w-2/4">{overview}</p>
      <div className="flex gap-5">
        <button className="bg-white text-black hover:bg-opacity-40 font-bold flex items-center py-2 gap-2 px-8 rounded">
          <span className="play-btn"></span> Play
          </button>
        <button className="bg-transparent border border-white border-1 opacity-80 font-bold py-4 px-8 rounded">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle