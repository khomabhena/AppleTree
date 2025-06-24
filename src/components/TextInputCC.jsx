import React from 'react'

const TextInputCC = ({name1, name2, reverse}) => {
  return (
    <div className={ reverse ? 'mt-3 flex gap-3 flex-row-reverse' : 'mt-3 flex flex-row gap-3'}>
      <input className=' w-1/4 bg-gray-100 rounded-2xl px-4 py-3 shadow-xl text-xl text-gray-800' type="text" placeholder={name1} />
      <input className=' w-3/4 bg-gray-100 rounded-2xl px-4 py-3 shadow-xl text-xl text-gray-800' type="text" placeholder={name2} />
    </div>
  )
}

export default TextInputCC
