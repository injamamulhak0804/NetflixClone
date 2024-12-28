import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_LOGIN } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <img src={BG_LOGIN} className="absolute -z-20 w-full object-cover overflow-x-hidden h-screen" alt="" />
        <GptSearchBar /> 
        <GptMovieSuggestion /> 
    </div>
  )
}

export default GptSearch