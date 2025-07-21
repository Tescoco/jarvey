import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen gap-2'>
      <h1 className='uppercase text-4xl'>Page Not Found</h1>
      <button onClick={() => navigate(-1)} className="btn mt-0" to={location.pathname}>Back</button>
    </div>
  )
}
