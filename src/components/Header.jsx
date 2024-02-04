
import { LOGO } from '../utils/constants'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/Redux/userSlice';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)
  const dispatch = useDispatch();

  const handleSignOut = () =>{
    signOut(auth).then(() => {})
    .catch((error) => {console.log(error)});
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

  return (
    <>
      <div className='absolute w-full z-30 bg-gradient-to-b from-black flex justify-between items-center px-5'>
        <img className="w-36 lg:w-52"  src={LOGO}  alt="" />
      {
        user && (
        <div>
          <span className='px-5 text-xl text-white font-bold'>
            {/* <img className='w-4' src={user?.photoURL} alt="" /> */}
            <span>Hello</span>, {user?.displayName}👋🏻
          </span>
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