import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Container = ({children, name, noButton}) => {
    const navigate = useNavigate()

  return (
    <div className=' w-sm md:w-md bg-gray-200 min-h-[550px] rounded-2xl shadow-2xl'>
        <div className=' flex flex-row justify-between mx-2 md:mx-4'>
            <div className={noButton ? ' invisible' : ' flex mt-2 ml-3 px-2 py-1 cursor-pointer'}>
                <span onClick={() => navigate(-1)} class="material-symbols-outlined">arrow_back_ios</span>
            </div>
            <NavLink to={'/'} className=' mt-3 mr-1'>
                <img src="/ax.svg" width="50px" height="auto" alt="" /> 
            </NavLink>
        </div>
        <div className=' flex flex-row justify-between mx-2 mr-3 md:mx-4'>
            <p></p>
            <p className=' text-xs'>Timeout = <span className=' font-bold text-xs'>4:27</span></p>
        </div>
        <NavLink to={'/'} className=' flex justify-center'>
            <img className=' mt-3' src="/appletree-logo.png" width="224px" alt="" />
        </NavLink>
        <div className=' mx-8 md:mx-12 pb-12'>
            <p className=' bg-[#a0d900] mt-2 mb-4 py-3 font-bold text-base shadow-xl rounded-2xl text-gray-900'>{name}</p>
            {children}
        </div>
    </div>
  )
}

export default Container
