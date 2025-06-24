import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const PayButton = ({location, name}) => {

  

  return (
    <div className=' mt-3 flex justify-between items-center'>
      <div className=' text-start'>
        <p className=' text-xl font-bold'>$45.00</p>
        <p className=' text-xs text-gray-500'>View Details</p>
      </div>
      <NavLink to={location} className=' cursor-pointer bg-[#a0d900] px-4 min-w-[170px] py-2 font-bold text-base md:text-xl shadow-2xl border border-gray-300 rounded-2xl text-gray-900' type="button">{name}</NavLink>
    </div> 
  )
}

export default PayButton
