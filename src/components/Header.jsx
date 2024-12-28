import { useDispatch, useSelector } from 'react-redux'
import { LOGO, SUPPORT_LANGUAGES } from '../utils/constants'
import {toggleGptSearchView} from '../utils/Redux/gptSlice'
import {changeLanguge} from '../utils/Redux/configSlice'

const Header = () => {

  const dispatch = useDispatch();

  const GptSearchBtn = useSelector((store)=> store.gpt.showGptSearch)

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguge(e.target.value))
  } 
  

  return (
    <>
      <div className='absolute w-full z-30 bg-gradient-to-b from-black flex justify-between items-center px-5'>
        <img onClick={handleGptSearchClick} className="w-36 cursor-pointer lg:w-52"  src={LOGO}  alt="" />
        <div className='flex items-center  gap-x-5'>
          {
            GptSearchBtn ? 
            <select onChange={handleLanguageChange} className='bg-black text-sm font-bold px-4 py-2 text-white' id="">
              {SUPPORT_LANGUAGES.map(lang => <option  key={lang.indentifier} className='text-sm cursor-pointer font-bold  px-4 py-2' value={lang.indentifier}>{lang.name}</option>)}
            </select>: <></> 
          }
          
          <button
          onClick={handleGptSearchClick}
          className='py-2 px-5 bg-red-600 rounded-lg font-semibold text-white'> {GptSearchBtn ? "Home" : "GPT Search"}</button>
        </div>
        </div>
    </>
  )
}

export default Header