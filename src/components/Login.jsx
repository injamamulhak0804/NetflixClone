import { useRef, useState } from "react"
import { BG_LOGIN, PHOTO } from "../utils/constants"
import Header from './Header'
import { checkValidate } from "../utils/checkValidate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Redux/userSlice";


const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const dispatch = useDispatch()
  
  
  const handleButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value)
    setErrorMessage(message)
    
    if(message) return; 
    
    if(!isSignInForm){
      //Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;

        //Update the User
      updateProfile(auth.currentUser, {
      displayName: name.current.value, photoURL: PHOTO
      }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName:displayName, photoURL: photoURL}))
    }).catch((error) => {
      setErrorMessage(error); 
    });
        console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage); 
      });
    }else{
      //sign in logic
      
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage); 
      });
    }
  }
  
  
  const toggleSignInForm = () =>{
    setisSignInForm(!isSignInForm)
  }
  
  
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-tr from-black">
        <img src={BG_LOGIN} className="absolute w-full object-cover overflow-x-hidden h-screen" alt="" />
      </div>
      <form onSubmit={(e)=> e.preventDefault()}
        className="bg-black lg:w-3/12 p-10 opacity-90 rounded-lg mx-20 absolute mt-80 md:mx-auto right-0 text-white left-0">
        <h1 className="text-3xl mb-10">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {
          !isSignInForm && <input ref={name} type="text" placeholder="Name" className="p-2 m-2 w-full bg-gray-600" />
        }
        <input ref={email} type="text" placeholder="Email Address" className="p-2 m-2 w-full bg-gray-600" />
        <input ref={password} type="password" placeholder="Password" className="p-2 m-2 w-full bg-gray-600" />
        <p className="text-red-600 text-bold px-3 pt-5">{errorMessage}</p>
        <button onClick={handleButtonClick} className="px-10 py-2 m-2 w-full bg-red-700 rounded mt-5">Sign In</button>
        <p className="py-2 select-none">{isSignInForm ? 'New to Netflix ? ' : 'Already a user ? '}
        <span onClick={toggleSignInForm} className="text-blue-500 cursor-pointer"> {isSignInForm ? "Sign Up Now" : "Sign In Now."}</span></p>
      </form>
    </div>
  )
}

export default Login