import React from 'react'
import Container from '../components/Container'
import { NavLink } from 'react-router-dom'

const DataCollection = () => {
  return (
    <Container name={'Device Data Collection'}>
        <p className=' mt-24 text-gray-700 text-xl'>Please wait...</p>
        <p className=' mt-4 text-gray-700 text-xl'>3D Secure is a security protocol used to authenticate payers</p>
        <div to={'/transaction-status'} className=' mt-8 cursor-pointer bg-[#a0d900] px-4 mb-4 py-3 font-bold text-2xl shadow-2xl border border-gray-300 rounded-2xl text-gray-[#a0d900]'>
            <NavLink className=' w-[600px] px-[200px] opacity-0' to={'/transaction-status'}>.</NavLink>
        </div>
    </Container>
  )
}

export default DataCollection
