import React, { useState, useRef } from "react";

import { copyIcon, deleteIcon } from '../../utilities/Classes'
import TableFilter from '../TableFilter';
import Checkbox from "../Checkbox";
import Switch from "../Switch";
import Modal from '../Modal'

import shopify from '../../assets/img/sop.svg'

export default function Trigger() {
  const tableHead = [
    `Trigger`,
    `Last Updated`,
    `Actions`,
  ]
  const tableData = [
    {
      name: '[Auto Tag] Identify potential Customers',
      status: false,
      date: 'Oct 18, 2025',
      store: {
        img: shopify,
        name: 'Quickstart-467uedh3uehry'
      },
    },
    {
      name: '[Auto Tag] Identify potential Customers',
      status: true,
      date: 'Oct 18, 2024',
      store: {
        img: shopify,
        name: 'Quickstart-467uedh3uehry'
      },
    },
    {
      name: '[Auto Tag] Identify potential Customers',
      status: true,
      date: 'Oct 18, 2024',
      store: {
        img: shopify,
        name: 'Quickstart-467uedh3uehry'
      },
    },
    {
      name: '[Auto Tag] Identify potential Customers',
      status: true,
      date: 'Oct 18, 2024',
      store: {
        img: shopify,
        name: 'Quickstart-467uedh3uehry'
      },
    },
    {
      name: '[Auto Tag] Identify potential Customers',
      status: true,
      date: 'Oct 18, 2028',
      store: {
        img: shopify,
        name: 'Quickstart-467uedh3uehry'
      },
    },
    {
      name: '[Auto Tag] Identify potential Customers',
      status: true,
      date: 'Oct 18, 2024',
      store: {
        img: shopify,
        name: 'Quickstart-467uedh3uehry'
      },
    },
    {
      name: '[Auto Tag] Identify potential Customers',
      status: true,
      date: 'Oct 18, 2024',
      store: {
        img: shopify,
        name: 'Quickstart-467uedh3uehry'
      },
    },
    {
      name: '[Auto Tag] Identify potential Customers',
      status: true,
      date: 'Oct 18, 2024',
      store: {
        img: shopify,
        name: 'Quickstart-467uedh3uehry'
      },
    },
  ]

  const [items, setItems] = useState(tableData);
  const dragItem = useRef(null);
  const handleDragStart = (index) => {
    dragItem.current = index;
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (dropIndex) => {
    if (dragItem.current !== null && dragItem.current !== dropIndex) {
      const copyItems = [...items];
      [copyItems[dragItem.current], copyItems[dropIndex]] = [
        copyItems[dropIndex],
        copyItems[dragItem.current],
      ];
      setItems(copyItems);
    }
    dragItem.current = null;
  };

  const duplicateData = (item, index) => {
    setItems(prev => {
      const newData = [...prev];
      newData.splice(index + 1, 0, { ...item })
      return newData;
    })
  }

  const toggleStatus = (index) => {
    setItems(prev => {
      const updateData = [...prev];
      updateData[index] = {
        ...updateData[index],
        status: !updateData[index].status
      }
      return updateData;
    })
  }

  const [deleteAlert, setDeleteAlert] = useState(false)
  const [activeData, setActiveData] = useState(null);
  const [viewDetails, setViewDetails] = useState(false)

  const modalItems = [
    {
      title: "INSTALL TO TARGET UP TO",
      value: "20"
    },
    {
      title: "How it works",
      des: "This rule tags tickets created during and outside business hours. Use this rule to track support performance and monitor support coverage during vs. outside business hours."
    },
    {
      title: "Customize it",
      des: "You can customize this rule after installing to fit your needs."
    },
  ]

  return (
    <div className='p-4 lg:p-5 xl:p-6'>
      <TableFilter />
      <div className='flex md:items-center gap-2 lg:gap-[10px] mb-4 lg:mb-5'>
        <a href="#" className=''>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2083 10.3571L7.17844 14.3869C6.52757 15.0377 5.4723 15.0377 4.82142 14.3869L0.791586 10.3571M5.99992 14.1071L5.99992 1.19039" stroke="#858585" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <div className='md:flex items-center gap-2 lg:gap-[10px]'>
          <p className='mb-2 md:mb-0 text-[#858585] text-sm lg:tex-base !leading-[1.5] font-semibold tracking-[-0.32px]'>TRIGGERS TRIGGER IN THE ORDER BELOW</p>
          <a href="#" className='text-[#7856FF] text-sm lg:tex-base !leading-[1.5] font-medium !underline'>Learn How To Prioritize Triggers</a>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              {tableHead.map((item, index) => (
                <th key={index} className={`${index === tableHead.length - 1 ? '!text-center' : ''} ${index === 0 ? "!pl-20 lg:!pl-[88px] xl:!pl-[95px]" : ""} `} >{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={() => handleDrop(index)}
                key={index}>
                <td className='md:!py-5'>
                  <div className='flex items-center gap-4 lg:gap-5 xl:gap-7'>
                    <button className='flex items-center gap-2 lg:gap-3 !pr-0 cursor-move'>
                      <span>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.75 6.91666V6.99999C2.75 7.57529 2.28363 8.04166 1.70833 8.04166C1.13304 8.04166 0.666667 7.57529 0.666667 6.99999V6.91666C0.666667 6.34136 1.13304 5.87499 1.70833 5.87499C2.28363 5.87499 2.75 6.34136 2.75 6.91666ZM7.33333 6.91666V6.99999C7.33333 7.57529 6.86696 8.04166 6.29167 8.04166C5.71637 8.04166 5.25 7.57529 5.25 6.99999V6.91666C5.25 6.34136 5.71637 5.87499 6.29167 5.87499C6.86696 5.87499 7.33333 6.34136 7.33333 6.91666ZM6.29167 13.25C5.71637 13.25 5.25 12.7836 5.25 12.2083C5.25 11.633 5.71637 11.1667 6.29167 11.1667C6.86696 11.1667 7.33333 11.633 7.33333 12.2083C7.33333 12.7836 6.86696 13.25 6.29167 13.25ZM1.70833 13.25C1.13304 13.25 0.666667 12.7836 0.666667 12.2083C0.666667 11.633 1.13304 11.1667 1.70833 11.1667C2.28363 11.1667 2.75 11.633 2.75 12.2083C2.75 12.7836 2.28363 13.25 1.70833 13.25ZM6.29167 2.83333C5.71637 2.83333 5.25 2.36696 5.25 1.79166C5.25 1.21637 5.71637 0.749995 6.29167 0.749995C6.86696 0.749995 7.33333 1.21637 7.33333 1.79166C7.33333 2.36696 6.86696 2.83333 6.29167 2.83333ZM1.70833 2.83333C1.13304 2.83333 0.666667 2.36696 0.666667 1.79166C0.666667 1.21637 1.13304 0.749995 1.70833 0.749995C2.28363 0.749995 2.75 1.21637 2.75 1.79166C2.75 2.36696 2.28363 2.83333 1.70833 2.83333Z" fill="#858585" stroke="#858585" strokeWidth="0.833333" />
                        </svg>
                      </span>
                      <Switch
                        id={index}
                        onChange={() => toggleStatus(index)}
                        checked={item.status} />
                    </button>
                    <button onClick={() => setViewDetails(true)} className='!text-[#0A0D14] text-sm font-medium !leading-[1.4] tracking-[-0.084px] hover:!text-primary'>{item.name}</button>
                  </div>
                </td>
                <td>{item.date}</td>
                <td className='md:!py-5'>
                  <div className="flex items-center justify-center gap-3">
                    <button className='text-primary hover:text-primary p-2 -m-2' onClick={() => duplicateData(item, index)}>{copyIcon}</button>
                    <button onClick={() => { setActiveData(item); setDeleteAlert(true) }} className='text-gray hover:text-primary p-2 -m-2'>{deleteIcon}</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {viewDetails && <Modal onClick={() => setViewDetails(false)} innerClass="lg:max-w-[985px]" children={
        <div className='p-1'>
          <div className='md:flex items-center gap-4 lg:gap-5 mb-4 lg:mb-5'>
            <h6 className='!font-inter mb-3 md:mb-0 text-[#0A0D14] text-lg lg:text-xl xl:text-2xl font-semibold !leading-[1.5]'>Tag tickets by business hour</h6>
            <p className={`text-[#7856FF] bg-[rgba(120,86,255,0.10)] text-xs font-semibold !leading-[1.42] tracking-[-0.084px] rounded-md lg:rounded-lg py-[6px] px-[10px] max-w-max`}>Auto Tag</p>
          </div>
          <div className='md:flex items-center gap-1 lg:gap-2 mb-4 lg:mb-5'>
            {modalItems.map((item, idx) => (
              <div className='border border-[#E2E4E9] rounded-lg lg:rounded-xl p-2 lg:p-3 w-full md:min-h-[90px] lg:min-h-[105px] xl:min-h-[88px] mb-3 md:mb-0' key={idx}>
                <p className='text-[#858585] text-xs font-bold !leading-[1.66] uppercase mb-1 lg:mb-2'>{item.title}</p>
                {item.des && (
                  <p className='text-[#858585] text-xs font-medium !leading-[1.4]'>
                    {item.des.length > 95 ? item.des.slice(0, 95) + "..." : item.des}
                  </p>
                )}
                {item.value && <p className='text-[#111] text-xs font-medium !leading-[1.5] tracking-[-0.084px]'><span className='text-xl lg:text-2xl font-semibold'>{item.value}</span> tickets/month</p>}
              </div>
            ))}
          </div>
          <div className='flex !items-start md:items-center gap-2'>
            <Checkbox />
            <div>
              <p className='text-[#0A0D14] text-sm font-semibold !leading-[1.42] tracking-[-0.084px]'>Create the ticket views "During business hours" and "Outside business hours" to see tickets that trigger this rule.</p>
              <p className='mt-1 text-[#858585] text-xs font-medium !leading-[1.4]'>You can always edit ticket view names after installing.</p>
            </div>
          </div>
          <div className='flex items-center justify-between mt-4 lg:mt-5'>
            <button onClick={() => setViewDetails(false)} className='btn !border-[#7856FF] !text-[#7856FF] hover:!text-white'>Cancel</button>
            <button onClick={() => setViewDetails(false)} className='btn !bg-[#7856FF] !text-white'>Install Rule</button>
          </div>
        </div>
      } />}


      {deleteAlert &&
        <Modal innerClass='max-w-[400px] text-center' closeIconHide={false}>
          <p className='text-xl mb-4'>Do you want delete? <strong className='text-heading font-medium'>{activeData.name}</strong></p>
          <div className="flex item-center gap-3 justify-center">
            <button onClick={() => setDeleteAlert(false)} className='text-center btn min-w-24 bg-red-500 border-red-500 text-white'>No</button>
            <button onClick={() => {
              setItems(prev => prev.filter((item) => item !== activeData));
              setDeleteAlert(false)
            }} className='text-center btn min-w-24 shadow text-white'>Yes</button>
          </div>
        </Modal>
      }

    </div>
  )
}
