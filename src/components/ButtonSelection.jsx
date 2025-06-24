import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonSelection = ({location, image, name}) => {
  return (
    <NavLink to={location} className=' w-full mt-2 flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-0 shadow-2xl border border-gray-300 text-sm md:text-base text-gray-700'>
      <img src={image} width="50px" height="50px" alt="" />
      <p className=' border-1 border-gray-400 h-[20px]'></p>
      <p>{name}</p>
    </NavLink>
  )
}

export default ButtonSelection
