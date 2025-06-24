import React from 'react'

const Confirmation = () => {
  return (
    <div className=' mt-12 flex text-start gap-3 text-sm'>
      <input className=' size-6 rounded-2xl' type="checkbox" name="confirm" id="confirm" value="" />
      <label className=' text-xs text-gray-700' htmlFor="confirm">I confirm that I have read and agreed to the Privacy Policy and Terms of Use.</label>
    </div>
  )
}

export default Confirmation
