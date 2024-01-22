
import { useRef, useState } from "react"
import { BG_LOGIN } from "../utils/constants"
import Header from './Header'
import { checkValidate } from "../utils/checkValidate"
import {auth} from '../utils/firebase'


const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  
  const email = useRef(null)
  const password = useRef(null)
  
  const handleClick = () =>{
    const message = checkValidate(email.current.value, password.current.value)
    setErrorMessage(message)
    if(message)return;

    if(!isLoginForm){
      console.log(auth);
    }
  }
  
  const toggleSignIn = () =>{
    setIsLoginForm(!isLoginForm)
  }


  return (
    <div>
      <Header />
      <div className="bg-gradient-to-tr from-black">
         <img src={BG_LOGIN} className="absolute w-full object-cover overflow-x-hidden h-screen" alt="" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} 
      className="bg-black lg:w-3/12 p-10 opacity-90 rounded-lg mx-20 absolute mt-44 md:mx-auto right-0 text-white left-0">
        <h1 className="text-3xl mb-10">{isLoginForm ? 'Sign In' : 'Sign Up'}</h1>
        {
          !isLoginForm && <input type="text" className="mb-5 py-3 px-2 bg-gray-600 placeholder:text-white rounded-sm w-full" placeholder="Name" />
        }
        <input ref={email} type="text" className=" mb-5 py-3 px-2 bg-gray-600 placeholder:text-white rounded-sm w-full" placeholder="Email Address" />
        <input ref={password} type="password" className="mb-9 py-3  bg-gray-600 placeholder:text-white px-2 rounded-sm w-full" placeholder="Password" />
        <p className="text-red-600 font-semibold py-3">{errorMessage}</p>
        <button onClick={handleClick} className="p-3 font-semibold w-full rounded-md bg-red-600 mb-10">{isLoginForm ? 'Sign In' : 'Sign Up'}</button>
        <p className="py-2 select-none">{isLoginForm ? 'New to Netflix ? ' : 'Already a user ? '}
        <span onClick={toggleSignIn} className="text-blue-500 cursor-pointer"> {isLoginForm ? "Sign Up Now" : "Sign In Now."}</span></p>
      </form>
    </div>
  ) 
}

export default Login