import React, { useState } from 'react'
import shopify from '../../assets/img/sop.svg'
import { copyIcon, deleteIcon } from '../../utilities/Classes'
import TableFilter from '../TableFilter';

export default function Manage() {
  const tableHead = [
    `Name`,
    `Store`,
    `Language`,
    `Last Updated`,
    `Actions`,
  ]
  const tableData = [
    {
      name: 'Jarvey',
      store: {
        img: shopify,
        name: 'Quickstart-467uedh3uehry'
      },
      language: 'English',
      date: 'Oct 18, 2024',
    },
    {
      name: 'Jarvey',
      store: {
        img: shopify,
        name: 'Quickstart-467uedh3uehry'
      },
      language: 'English',
      date: 'Oct 18, 2024',
    }
  ]

  return (
    <div>
      <TableFilter className="" />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              {tableHead.map((item, index) => (
                <th key={index} className={`${index === tableHead.length - 1 ? '!text-center' : ''}`}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td className='!text-black'>{item.name}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="flex-none h-4"><img className='h-full' src={item.store.img} alt="" /></div>
                    <p>{item.store.name}</p>
                  </div>
                </td>
                <td>English</td>
                <td>Oct 18, 2024</td>
                <td>
                  <div className="flex items-center justify-center gap-3">
                    <button className='text-primary hover:text-primary p-2 -m-2'>{copyIcon}</button>
                    <button className='text-gray hover:text-primary p-2 -m-2'>{deleteIcon}</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
