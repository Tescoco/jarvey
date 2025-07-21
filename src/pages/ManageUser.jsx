import React, { useState } from 'react'
import Top from '../layouts/Top'
import MainInner from '../components/MainInner';
import { pen, kee, logout, deleteIcon } from '../utilities/Classes'
import TableFilter from '../components/TableFilter';
import Switch from '../components/Switch'
import Modal from '../components/Modal'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown';

import img1 from '../assets/img/manager/table-img-01.png'
import img2 from '../assets/img/manager/table-img-2.png'
import img3 from '../assets/img/manager/table-img-3.png'
import img4 from '../assets/img/manager/table-img-4.png'
import img5 from '../assets/img/manager/table-img-5.png'
import img6 from '../assets/img/manager/table-img-6.png'
import img7 from '../assets/img/manager/table-img-7.png'
import img8 from '../assets/img/manager/table-img-8.png'
import img9 from '../assets/img/manager/table-img-9.png'
import img10 from '../assets/img/manager/table-img-10.png'
import img11 from '../assets/img/manager/table-img-11.png'
import img12 from '../assets/img/manager/table-img-12.png'

export default function ManageUser() {
    const tableHead = [
        `#`,
        `Name`,
        `Email`,
        `Phone`,
        `Status`,
        `Actions`,
    ]
    const [newUserModal, setNewUserModal] = useState(false)
    const [deleteAlert, setDeleteAlert] = useState(false)

    const tableData = [
        {
            name: 'Kathryn Murphy',
            img: img1,
            Email: 'adamk@me.com',
            Phone: '(+33)7 35 5 46 14',
        },
        {
            name: 'Jane Cooper',
            img: img2,
            Email: 'larry@verizon.net',
            Phone: '(+33)6 55 53 19 16',
        },
        {
            name: 'Jenny Wilson',
            img: img3,
            Email: 'shawnce@att.net',
            Phone: '(+33)6 55 51 3035',
        },
        {
            name: 'Courtney Henry',
            img: img4,
            Email: 'godeke@live.com',
            Phone: '(+33)7 00 55 56 79',
        },
        {
            name: 'Jerome Bell',
            img: img5,
            Email: 'evans@me.com',
            Phone: '(+33)7 00 55 59 27',
        },
        {
            name: 'Floyd Miles',
            img: img6,
            Email: 'oevans@icloud.com',
            Phone: '(+33)6 55 59 16 45',
        },
        {
            name: 'Arlene McCoy',
            img: img7,
            Email: 'jesse@comcast.net',
            Phone: '(+33)7 65 55 72 67',
        },
        {
            name: 'Devon Lane',
            img: img8,
            Email: 'papathan@yahoo.ca',
            Phone: '(+33)6 55 55 2618',
        },
        {
            name: 'Robert Fox',
            img: img9,
            Email: 'jeffcovey@hotmail.com',
            Phone: '(+33)7 75 55 9375',
        },
        {
            name: 'Leslie Alexander',
            img: img10,
            Email: 'whimsy@comcast.net',
            Phone: '(+33)6 55 52 72 55',
        },
        {
            name: 'Brooklyn Simmons',
            img: img11,
            Email: 'hwestiii@sbcglobal.net',
            Phone: '(+33)7 75 55 87 24',
        },
        {
            name: 'Esther Howard',
            img: img12,
            Email: 'chaki@verizon.net',
            Phone: '(+33)6 55 58 55 63',
        },
    ]
    const [activeData, setActiveData] = useState(tableData[0])
    const Status = [
        { name: 'Status-1' },
        { name: 'Status-2' },
        { name: 'Status-3' },
    ]

    return (
        <>
            <Top title="Manager Users" >
                <button className='btn flex items-center gap-1 !bg-primary !text-white' onClick={() => setNewUserModal(true)}>
                    <svg className='flex-none' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white" />
                    </svg>
                    New User</button>
            </Top>
            <MainInner>
                <div>
                    <TableFilter className="" />
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    {tableHead.map((item, index) => (
                                        <th key={index} className='last:text-right'>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((item, index) => (
                                    <tr key={index}>
                                        <td className='!text-black'>{index + 1}</td>
                                        <td className='!text-black flex items-center gap-3'><img src={item.img} className='rounded-full' alt="" />{item.name}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Phone}</td>
                                        <td>
                                            <Switch id={`${item.name}_${index + 1}`} checked={item.default} />
                                        </td>
                                        <td>
                                            <div className="flex items-center justify-end gap-3">
                                                <button className='text-primary hover:text-primary p-2 -m-2'>{logout}</button>
                                                <button className='text-primary hover:text-primary p-2 -m-2'>{kee}</button>
                                                <button className='text-primary hover:text-primary p-2 -m-2'>{pen}</button>
                                                <button className='text-gray hover:text-primary p-2 -m-2' onClick={() => {
                                                    setActiveData(item)
                                                    setDeleteAlert(true)
                                                }}>{deleteIcon}</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainInner>

            {newUserModal &&
                <Modal innerClass='max-w-[985px]' onClick={() => setNewUserModal(false)} closeIconHide={false}>
                    <div className="mb-4 md:mb-5">
                        <h2 className='text-2xl text-black font-inter font-semibold leading-normal'>New User</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                        <div className="col-span-2 md:col-span-1">
                            <div className={`w-full`}>
                                <label htmlFor='drop' className={`relative z-[1] rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[180px] md:min-h-[291px] flex items-center flex-col justify-center`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                        <path d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337" stroke="#7856FF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className={`mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs`}><span className={`block text-primary`}>Upload Image</span></span>
                                    <input type="file" id="drop" className='hidden' name="" placeholder="" />
                                </label>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
                                <Input className='mb-1' type="text" placeholder="Type here" label="Name" required={true} />
                                <Input className='mb-1' type="text" placeholder="Type here" label="Email" required={true} />
                                <Input className='mb-1' type="text" placeholder="Type here" label="Password" required={true} />
                                <Input className='mb-1' type="text" placeholder="Type here" label="Confirm Password" required={true} />
                                <Input className='mb-1' type="text" placeholder="Type here" label="Phone" required={true} />
                                <Dropdown className='mb-0' placeholder="Status" items={Status} label="Status" required={true} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className='btn text-primary border-primary' onClick={() => setNewUserModal(false)}>Cancel</button>
                        <button className='btn bg-primary text-white'>Add User</button>
                    </div>
                </Modal>
            }
            {deleteAlert &&
                <Modal innerClass='max-w-[400px] text-center' closeIconHide={false}>
                    <p className='text-xl mb-4'>Do you want delete? <strong className='text-heading font-medium'>{activeData.name}</strong></p>
                    <div className="flex item-center gap-3 justify-center">
                        <button onClick={() => setDeleteAlert(false)} className='text-center btn min-w-24 bg-red-500 border-red-500 text-white'>No</button>
                        <button onClick={() => setDeleteAlert(false)} className='text-center btn min-w-24 shadow text-white'>Yes</button>
                    </div>
                </Modal>
            }
        </>
    )
}

