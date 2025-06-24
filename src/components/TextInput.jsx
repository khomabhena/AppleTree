import React from 'react'

const TextInput = ({name}) => {
  return (
    <input className=' bg-gray-100 w-full rounded-2xl px-4 py-3 mt-3 shadow-xl text-sm md:text-base text-gray-800' type="text" placeholder={name} />
  )
}

export default TextInput
