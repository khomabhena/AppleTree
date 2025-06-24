import React from 'react'

const Container = ({children, name}) => {
  return (
    <div className=' w-lg bg-gray-200 min-h-[700px] rounded-2xl shadow-2xl'>
        <div className=' flex flex-row justify-between mx-4'>
            <div className=''></div>
            <div className=''>
                <img src="/ax.svg" width="64px" height="auto" alt="" /> 
            </div>
        </div>
        <div className=' flex flex-row justify-between mx-4'>
            <p></p>
            <p>Timeout = <span className=' font-medium'>4:27</span></p>
        </div>
        <div className=' flex justify-center'>
            <img className=' mt-6' src="/appletree-logo.png" width="224px" alt="" />
        </div>
        <div className=' mt-4 mx-12 pb-12'>
            <p className=' bg-[#a0d900] mt-2 mb-4 py-3 font-bold text-xl shadow-xl rounded-2xl text-gray-900'>{name}</p>
            {children}
        </div>
    </div>
  )
}

export default Container
