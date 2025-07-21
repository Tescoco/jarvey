import React from 'react'
import { Link } from 'react-router-dom'

export default function SettingModal({ onClick }) {
    return (
        <div className='text-center'>
            <p className='text-[#0A0D14] text-lg lg:text-xl xl:text-2xl font-semibold !leading-[1.5]'>Save changes</p>
            <p className='text-[#858585] text-xs !leading-[1.6]'>Your changes to thsi page will be lost if you dont save them.</p>
            <div className='flex justify-center'>
                <div className='mt-4 lg:mt-5  md:flex items-center gap-3 lg:gap-4'>
                    <button className='btn !border-danger !text-danger hover:!bg-danger hover:!text-white' onClick={onClick}>Discard Changes</button>
                    <button onClick={onClick} className='btn  !text-[#7856FF] hover:!text-white'>Back to Editing</button>
                    <button onClick={onClick} className='btn mt-2 md:mt-0 !text-white !bg-[#7856FF]'>Save changes</button>
                </div>
            </div>
        </div>
    )
}
