import React from 'react'
import { common_card } from '../../utilities/Classes'
import Checkbox from '../Checkbox'

export default function OperatingHour() {
    const orderTable = [
        {
            days: 'Monday ',
        },
        {
            days: 'Tuesday ',
        },
        {
            days: 'Wednesday  ',
        },
        {
            days: 'Thursday  ',
        },
        {
            days: 'Friday ',
        },
        {
            days: 'Saturday ',
        },
        {
            days: 'Sunday ',
        },
    ]
    return (
        <div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <div className="">
                    <div className="mb-3 md:mb-4 lg:mb-5">
                        <label htmlFor="" className='block mb-2 md:mb-4 font-inter font-semibold text-sm !leading-normal text-heading'>Operating Hour Note</label>
                        <textarea name="" id="" className='w-full bg-[#F7F7F7] min-h-[202px] resize-none rounded-xl p-4' placeholder='Start typing'>
                        </textarea>
                    </div>
                    <div className={`${common_card} !rounded-2xl !p-5`}>
                        <p className='text-heading font-semibold mb-3 md:mb-4'>Variables </p>
                        <div className="flex items-center justify-between gap-2">
                            <span>[timezone]</span>
                            <p className='text-heading font-semibold'>System Timezone</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-[16px] bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.12)] p-4 md:p-5">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                        <label htmlFor="" className='block mb-2 md:mb-4 font-inter font-semibold text-sm !leading-normal text-heading'>Operating Hours <span className='text-[#FE4234]'>*</span></label>
                        <div className="flex items-center gap-3">
                            <Checkbox id="enable" checked />
                            <label htmlFor="enable" className='cursor-pointer text-heading font-medium'>Enable Business days</label>
                        </div>
                    </div>
                    <div className="overflow-x-auto mb-3">
                        <table className='w-max md:w-full'>
                            <thead>
                                <tr className="bg-[#F6F8FA]">
                                    {["Days", "Start Time", "End Time"].map((item, index) => (
                                        <th className='text-left text-sm text-[#525866]  border-r border-stroke last:border-r-0 !font-normal py-2 px-3 last:text-end' key={index}>{item} </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {orderTable.map((item, index) => (
                                    <tr key={index} className='border-b border-[#E2E4E9]'>
                                        <td className='px-3 py-2 md:py-4 border-r border-stroke'>
                                            <div className="flex items-center gap-3">
                                                <Checkbox id={index} checked />
                                                <label htmlFor={index} className='cursor-pointer text-heading font-medium'>{item.days} </label>
                                            </div>
                                        </td>
                                        <td className='px-3 py-2 md:py-4 border-r border-stroke'>
                                            <button className="flex items-center gap-3">
                                                <span className='text-heading font-medium'>Select time</span>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.99956 10.879L13.7121 7.1665L14.7726 8.227L9.99956 13L5.22656 8.227L6.28706 7.1665L9.99956 10.879Z" fill="#111111" fillOpacity="0.5" />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className='px-3 py-2 md:py-4'>
                                            <button className="flex items-center gap-3">
                                                <span className='text-heading font-medium'>Select time</span>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.99956 10.879L13.7121 7.1665L14.7726 8.227L9.99956 13L5.22656 8.227L6.28706 7.1665L9.99956 10.879Z" fill="#111111" fillOpacity="0.5" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
