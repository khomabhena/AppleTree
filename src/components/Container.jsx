import React from 'react'
import { NavLink } from 'react-router-dom'

const Container = ({children, name}) => {
  return (
    <div className=' w-sm md:w-md bg-gray-200 min-h-[600px] rounded-2xl shadow-2xl'>
        <div className=' flex flex-row justify-between mx-2 md:mx-4'>
            <div className=''></div>
            <NavLink to={'/'} className=' '>
                <img src="/ax.svg" width="50px" height="auto" alt="" /> 
            </NavLink>
        </div>
        <div className=' flex flex-row justify-between mx-2 md:mx-4'>
            <p></p>
            <p className=' text-xs'>Timeout = <span className=' font-bold text-xs'>4:27</span></p>
        </div>
        <NavLink to={'/'} className=' flex justify-center'>
            <img className=' mt-6' src="/appletree-logo.png" width="224px" alt="" />
        </NavLink>
        <div className=' mt-4 mx-8 md:mx-12 pb-12'>
            <p className=' bg-[#a0d900] mt-2 mb-4 py-3 font-bold text-base shadow-xl rounded-2xl text-gray-900'>{name}</p>
            {children}
        </div>
    </div>
  )
}

export default Container
