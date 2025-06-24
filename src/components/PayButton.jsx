import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const PayButton = ({location, name}) => {

  

  return (
    <div className=' mt-3 flex justify-between items-center'>
      <div className=' text-start'>
        <p className=' text-2xl font-medium'>$45.00</p>
        <p className=' text-sm text-gray-500'>View Details</p>
      </div>
      <NavLink to={location} className=' cursor-pointer bg-[#a0d900] px-4 min-w-[250px] mb-4 py-3 font-bold text-2xl shadow-2xl border border-gray-300 rounded-2xl text-gray-900' type="button">{name}</NavLink>
    </div> 
  )
}

export default PayButton
