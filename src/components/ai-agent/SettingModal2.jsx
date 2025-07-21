import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../assets/img/aiAgent/modal.png"
import img2 from "../../assets/img/aiAgent/modal2.png"

export default function SettingModal2({onclick2}) {
    return (
        <div className='text-center'>
            <div className='mx-auto px-10 xl:px-[150px]'>
                <div className='flex justify-center mb-2 lg:mb-3 '><img src={img} className='w-[93px] h-[70px]' alt="" /></div>
                <p className='text-[#0A0D14] text-lg lg:text-xl xl:text-2xl font-semibold !leading-[1.5]'>Al Agent is now live!</p>
                <p className='text-[#858585] text-xs !leading-[1.6]'>You can review tickets served by Al Agent in a dedicated section under Tickets → Views</p>
            </div>
            <div className='flex justify-center mt-4 lg:mt-5'>
                <img src={img2} className='w-full md:h-[280px] lg:h-[252px]' alt="" />
            </div>
            <div className='mt-4 lg:mt-5 flex items-center justify-center gap-3 lg:gap-4'>
                <button onClick={onclick2} href="#" className='btn !text-[#7856FF] hover:!text-white'>Close</button>
                <Link href="#" className='btn !bg-[#7856FF] !text-white'>Show me</Link>
            </div>

        </div>
    )
}
