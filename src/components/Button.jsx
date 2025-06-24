import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({name}) => {
  return (
    
      <NavLink to={location} className=' mt-24 cursor-pointer bg-[#a0d900] px-4 min-w-[250px] mb-4 py-3 font-bold text-2xl shadow-2xl border border-gray-300 rounded-2xl text-gray-900' type="button">{name}</NavLink>
    
  )
}

export default Button
