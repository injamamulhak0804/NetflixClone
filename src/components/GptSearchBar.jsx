import { useSelector } from "react-redux"
import lang from "../utils/languageConstant"
const GptSearchBar = () => {

  const lan = useSelector((store)=> store.config.lang);
  console.log(lan);

  return (
  
      <div className="pt-[10%]">
        <form className="w-[80%] mx-auto bg-black grid rounded grid-cols-12">
          <input type="text" className="p-4 m-4 rounded col-span-9" placeholder={lang[lan].gptSearchPlaceHolder}/>
          <button className="px-6 font-semibold py-2 m-4 bg-red-600 text-white col-span-3 rounded-lg">{lang[[lan]].search}</button>
        </form>
      </div>
  )
}

export default GptSearchBar