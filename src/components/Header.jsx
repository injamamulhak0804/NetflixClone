import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/Redux/userSlice';
import {toggleGptSearchView} from '../utils/Redux/gptSlice'
import { changeLanguge } from '../utils/Redux/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)
  const GptSearchBtn = useSelector((store)=> store.gpt.showGptSearch)
  const dispatch = useDispatch();

  const handleSignOut = () =>{
    signOut(auth).then(() => {})
    .catch((error) => {console.log(error)});
  }

  const handleGptSearchClick = () =>{
    //Toggle feature
    dispatch(toggleGptSearchView())
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName:displayName, photoURL: photoURL}))
        navigate("/browse")
    } else {
      dispatch(removeUser())
      navigate("/")
      } 
    });
    
    // unscribe when component unmount
    return () => unsubscribe()
    },[])

    const handleLanguageChange = (e) =>{
      dispatch(changeLanguge(e.target.value));
    }

  return (
    <>
      <div className='absolute w-full z-30 bg-gradient-to-b from-black flex justify-between items-center px-5'>
        <img className="w-36 lg:w-52"  src={LOGO}  alt="" />
      {
        user && (
        <div className='flex items-center  gap-x-5'>
          {
            GptSearchBtn &&
            <select 
            onChange={handleLanguageChange}
            className='px-4 py-2 m-2 rounded-sm bg-gray-800 text-white'>
            {
              SUPPORTED_LANGUAGES.map((lan)=> 
              <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>)
            }
          </select>
          }
          <span className='px-5 text-xl text-white font-bold'>
            {/* <img className='w-4' src={user?.photoURL} alt="" /> */}
            <span>Hi</span>, {user?.displayName}👋🏻
          </span>
          <button 
          onClick={handleGptSearchClick}
          className='py-2 px-5 bg-red-600 rounded-lg font-semibold text-white'>{GptSearchBtn ? "Home" : "Chat GPT"}</button>
          <button
            onClick={handleSignOut} 
            className='px-5 py-2 bg-red-600 text-white font-bold rounded'>Sign out
          </button>
        </div>
        )
      }
        </div>
    </>
  )
}

export default Header