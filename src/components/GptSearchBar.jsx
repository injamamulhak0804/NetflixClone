import { useSelector } from "react-redux";
import lang from "../utils/languageConstant"
import { useRef } from "react";
import openai from "../utils/openai";



const GptSearchBar = () => {
  
  const language = useSelector((store)=>store.config.lang);
  const userValue = useRef(null)

  const handleGptSearchClick = async() =>{
    console.log(userValue.current.value);

    const gptQuery = "Act as a movie recommendation sysem and suggest some movies for the query: "
     + userValue.current.value 
     + ", only give me names of 5 movies, comma seprated like the example result given ahead. Example result: Gadar, Sholy, Don, Titanic, Spiderman";

    const GptResult = await openai.chat.completions.create({
    messages: [{ role: 'user', content:  gptQuery}],
    model: 'gpt-3.5-turbo',
  });

  console.log(GptResult.choices);
    
  }

  return (
  <div className="pt-[10%]">
        <form onSubmit={(e) => e.preventDefault()} className="bg-black w-1/2 mx-auto grid grid-cols-12">
            <input 
            ref={userValue}
            type="text" 
            className="p-4 m-4 col-span-9" 
            placeholder={lang[language].gptSearchPlaceholder} />
            <button 
            onClick={handleGptSearchClick}
            className="px-6 py-2 col-span-3 m-4 bg-red-600 rounded-lg text-white font-semibold">
               {lang[language].search} 
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar