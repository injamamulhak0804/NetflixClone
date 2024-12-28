import { useSelector } from "react-redux"
import lang from "../utils/languageConstant"
import { useState } from "react";
const GptSearchBar = () => {
  const [movieName, setMovieName] = useState('')
  const lan = useSelector((store)=> store.config.lang);
  
  const handleSearch = () =>{
    console.log(movieName);
  }
  
  return (
      <div className="pt-[10%]">
        <form onSubmit={(e)=> e.preventDefault()} className="w-[80%] mx-auto bg-black grid rounded grid-cols-12">
          <input type="text" value={movieName} onChange={(e)=> setMovieName(e.target.value)} className="p-4 m-4 rounded col-span-9" placeholder={lang[lan].gptSearchPlaceHolder}/>
          <button onClick={handleSearch} className="px-6 font-semibold py-2 m-4 bg-red-600 text-white col-span-3 rounded-lg">{lang[lan].search}</button>
        </form>
      </div>
  )
}

export default GptSearchBar