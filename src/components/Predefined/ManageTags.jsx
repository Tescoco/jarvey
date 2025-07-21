import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Top from '../../layouts/Top'
import { deleteIcon, edit, plus } from '../../utilities/Classes'
import TableFilter from '../TableFilter'
import Checkbox from '../Checkbox'

export default function ManageTags() {
    const [show, setShow] = useState(false)
    const tableHead = [
        `Name`,
        `Tags`,
        `Descriptions`,
        `Tickets`,
        `Actions`,
    ]
    const tableData = [
        {
            tag: "SAMPLE TICKETS",
            bg: "#000",
            descriptions: "Amet minim mollit non..",
            tickets: 1,
        },
        {
            tag: "URGENT",
            bg: "#DF1C41",
            descriptions: "Amet minim mollit non..",
            tickets: 1,
        },
        {
            tag: "VIP",
            bg: "#625DF5",
            descriptions: "Amet minim mollit non..",
            tickets: 1,
        },
        {
            tag: "VIP",
            bg: "#625DF5",
            descriptions: "Amet minim mollit non..",
            tickets: 1,
        },
        {
            tag: "SAMPLE TICKETS",
            bg: "#000",
            descriptions: "Amet minim mollit non..",
            tickets: 1,
        },
        {
            tag: "VIP",
            bg: "#625DF5",
            descriptions: "Amet minim mollit non..",
            tickets: 1,
        },

    ]
    const listItems = [
        "It will be removed from all tickets", "Historical Statistics for this tag will be lost", "﻿It will not be possible to add the tag back to the tickets it was previously on", ""
    ]
    const [isEdit, setIsEdit] = useState(null)
    const [activeEdit, setActiveEdit] = useState([]);
    const [newTag, setNewTag] = useState(false);

    return (
        <div>
            <Top title="Manage Tags">
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                    <button onClick={() => setNewTag(true)} className='btn gap-2 shadow text-white'>{plus} Create Tags</button>
                </div>
            </Top>
            <div className='p-4 lg:p-5 xl:p-6'>
                <div className='mt-5 lg:mt-7 mb-8 lg:mb-10 xl:mb-[73px]'>
                    <div className='text-center w-full md:w-[553px] mx-auto'>
                        <h6 className='font-inter text-heading text-base lg:text-lg font-semibold !leading-[1.5]'>You can tag tickets to keep track to topics customers are contacting you about.</h6>
                        <span className='text-sm font-semibold !leading-[1.5] text-[#858585] block'>Check your tag statistics <Link to="#" className='text-[#7856FF]'>here</Link></span>
                    </div>
                </div>
                <div>
                    <TableFilter className="mb-4 lg:mb-5" />
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className='!z-[1]'>
                                <tr>
                                    {tableHead.map((item, index) => (
                                        <th key={index} width={index === 3 ? 100 : null} className={`${index === tableHead.length - 1 ? '!text-center' : ''}`}>
                                            {item === "Name" ? (
                                                <Checkbox id={0} />
                                            ) : (
                                                item
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {newTag &&
                                    <tr>
                                        <td><Checkbox id="new_filed" /></td>
                                        <td><input type="text" className='w-full text-xs font-medium !leading-[1.66] text-heading placeholder:text-heading py-2 lg:py-[11px] px-[14px] lg:px-[14px] border border-[#E2E4E9] bg-[#F7F7F7] rounded-lg' placeholder='Type ticket name' name="" id="" /></td>
                                        <td> <input type="text" className='w-full text-xs font-medium !leading-[1.66] text-heading placeholder:text-heading py-2 lg:py-[11px] px-[14px] lg:px-[14px] border border-[#E2E4E9] bg-[#F7F7F7] rounded-lg' placeholder='Enter descriptions' name="" id="" /></td>
                                        <td>
                                            <div className='relative z-[1] w-full'>
                                                <span className='size-3 lg:size-4 absolute z-[2] top-1/2 left-2 md:left-3 -translate-y-1/2  bg-[#625DF5] rounded-[3px] flex-[0_0_auto] block' style={{ backgroundColor: activeEdit?.bg || '#625DF5' }} />
                                                <input onChange={(e) => e.target.value} type="text" value={activeEdit.bg} className='max-w-28 font-medium !leading-[1.66] text-heading placeholder:text-heading py-2 lg:py-[11px] pl-7 lg:pl-8 border border-[#E2E4E9] bg-[#F7F7F7] rounded-lg' placeholder='34345' name="" id="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-center gap-3'>
                                                <button onClick={() => setNewTag(false)} className='size-8 lg:size-[38px] border border-[#E2E4E9] rounded-full flex items-center justify-center'>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.3327 13.3346L2.66602 2.66797M13.3327 2.66797L2.66602 13.3346" stroke="#858585" strokeWidth="1.2" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => setNewTag(false)} className='size-8 lg:size-[38px] bg-[#7856FF] rounded-full flex items-center justify-center'>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.065 5.44922L7.72331 13.7909L3.93164 9.99922" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                }
                                {tableData.map((item, index) => (
                                    <tr key={index}>
                                        <td><Checkbox id={index + 1} /></td>
                                        <td>
                                            <>
                                                {(isEdit != index) &&
                                                    <p className='text-heading py-1 px-2 rounded-[4px] max-w-max border border-[#E2E4E9] text-xs font-semibold !leading-[1.5] uppercase flex items-center gap-2 lg:gap-[10px]'> <span className='!size-2 rounded-full  block' style={{ backgroundColor: item.bg }}></span> {item.tag}</p>
                                                }
                                                {isEdit === index &&
                                                    <input type="text" className='w-full text-xs font-medium !leading-[1.66] text-heading placeholder:text-heading py-2 lg:py-[11px] px-[14px] lg:px-[14px] border border-[#E2E4E9] bg-[#F7F7F7] rounded-lg' placeholder='Type ticket name' name="" id="" />
                                                }
                                            </>
                                        </td>
                                        <td>
                                            <>
                                                {(isEdit != index) &&
                                                    <p className='text-heading'>{item.descriptions}</p>
                                                }
                                                {isEdit === index &&
                                                    <input type="text" className='w-full text-xs font-medium !leading-[1.66] text-heading placeholder:text-heading py-2 lg:py-[11px] px-[14px] lg:px-[14px] border border-[#E2E4E9] bg-[#F7F7F7] rounded-lg' placeholder='Enter descriptions' name="" id="" />
                                                }
                                            </>
                                        </td>
                                        <td>
                                            <>
                                                {(isEdit != index) &&
                                                    <p className='text-heading'>{item.tickets}</p>
                                                }
                                                {isEdit === index &&
                                                    <div className='relative z-[1] w-full'>
                                                        <span className='size-3 lg:size-4 absolute z-[2] top-1/2 left-2 md:left-3 -translate-y-1/2  bg-[#625DF5] rounded-[3px] flex-[0_0_auto] block' style={{ backgroundColor: activeEdit?.bg || '#625DF5' }} />
                                                        <input onChange={(e) => e.target.value} type="text" value={activeEdit.bg} className='max-w-28 font-medium !leading-[1.66] text-heading placeholder:text-heading py-2 lg:py-[11px] pl-7 lg:pl-8 border border-[#E2E4E9] bg-[#F7F7F7] rounded-lg' placeholder='34345' name="" id="" />
                                                    </div>
                                                }
                                            </>
                                        </td>
                                        <td>
                                            {(isEdit != index) &&
                                                <div className="flex items-center justify-center gap-3">
                                                    <button onClick={() => { setIsEdit(index); setActiveEdit(item) }} className='text-primary hover:text-primary p-2 -m-2'>{edit}</button>
                                                    <div className="relative z-[1]">
                                                        <button onClick={() => setShow(!show)} className={`${show ? 'text-[#FE4333]' : 'text-gray '} hover:text-[#FE4333] p-2 -m-2`}>{deleteIcon}</button>
                                                    </div>
                                                </div>
                                            }
                                            {isEdit === index &&
                                                <div className='flex items-center justify-center gap-3'>
                                                    <button onClick={() => setIsEdit(null)} className='size-8 lg:size-[38px] border border-[#E2E4E9] rounded-full flex items-center justify-center'>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.3327 13.3346L2.66602 2.66797M13.3327 2.66797L2.66602 13.3346" stroke="#858585" strokeWidth="1.2" strokeLinecap="round" />
                                                        </svg>
                                                    </button>
                                                    <button onClick={() => setIsEdit(null)} className='size-8 lg:size-[38px] bg-[#7856FF] rounded-full flex items-center justify-center'>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.065 5.44922L7.72331 13.7909L3.93164 9.99922" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {show &&
                <div className='bg-white ml-auto right-2 md:right-[6%] shadow-black/25  bottom-6  rounded-xl shadow-xl  lg:rounded-[20px] p-4 lg:p-5  max-w-[340px] md:max-w-[396px] relative z-[1]' >
                    <span className='absolute right-4 -top-3 !z-10'>
                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5359 2C9.0755 -0.66667 12.9245 -0.666666 14.4641 2L20.5263 12.5C22.0659 15.1667 20.1414 18.5 17.0622 18.5H4.93782C1.85862 18.5 -0.0658801 15.1667 1.47372 12.5L7.5359 2Z" fill="white" />
                        </svg>
                    </span>
                    <div>
                        <h6 className='text-heading text-lg lg:text-xl xl:text-2xl font-semibold !leading-[1.5] mb-1 lg:mb-2'>Are you sure?</h6>
                        <p className='text-[#858585] text-sm font-semibold !leading-[1.5]'>Are you sure you want to delete this tag?</p>
                        <ul className='mb-5 lg:mb-6 xl:mb-[31px]'>
                            {listItems.map((item, idx) => <li key={idx} className='text-[#858585] text-sm font-semibold !leading-[1.5]'>{item}</li>)}
                        </ul>
                        <button onClick={() => (setShow(false))} className='btn !bg-primary text-white'>Confirm</button>
                    </div>
                </div>
            }

        </div>
    )
}
