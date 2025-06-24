import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonMobileMoney = ({location, image, name}) => {
  return (
    <NavLink to={location} className=' w-full mt-3 flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-3 shadow-2xl border font-light border-gray-300 text-xl text-gray-700'>
      <img className=' h-[60px] w-[150px]' src={image} height={"20px"} width={"auto"} alt="" />
      <p className=' text-sm'>{name}</p>
    </NavLink>
  )
}

export default ButtonMobileMoney
