import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { handleChange } from '../store/MenuSlice';
// import favicon from '../assets/img/favicon.svg'

export default function Top({ className = "", title, titleClass = "capitalize", children }) {
  const location = useLocation();
  const newTitle = title || (location.pathname === '/' ? 'Home' : location.pathname.replace('/dashboard', '').replace('/admin', '').replace(/\//g, ' > ').replace(/-/g, ' ')).replace(/^ ?> /, '');
  const dispatch = useDispatch();

  return (
    <div className={`layout-top sticky top-0 bg-white z-[5] left-0 border-b border-solid border-stroke min-h-16 md:min-h-20 lg:min-h-[88px] flex items-center gap-4 justify-between px-4 md:px-5 lg:px-6 ${className}`}>
      <div className="flex items-center gap-2">
        {/* <span className='hidden md:block lg:hidden'><img src={favicon} alt="" /></span> */}
        <button onClick={() => dispatch(handleChange())} className=' lg:hidden p-2 -m-2 border-0 border-solid border-stroke/50 rounded flex items-center justify-center hover:text-primary'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        {title != ' ' &&
          <h4 className={`font-inter font-medium text-base lg:text-lg text-heading ${titleClass}`}>
            {newTitle}
          </h4>
        }
      </div>
      {children}
    </div>
  )
}
