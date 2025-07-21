import React from 'react'
import TableFilter from '../TableFilter'
import { edit } from '../../utilities/Classes'
import Switch from '../Switch'
import Alert from '../Alert'

export default function Incoming() {
  const tableData = [
    {
      name: 'SMTP',
      status: 'active',
      default: true,
    },
    {
      name: 'SMTP',
      status: 'active',
      default: false,
    },
    {
      name: 'SMTP',
      status: 'active',
      default: true,
    },
    {
      name: 'SMTP',
      status: 'active',
      default: false,
    },
  ]
  return (
    <>
      <TableFilter lang={true} />
      <div className="mt-5 overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              {["#", "Getaway Name", "Default", "Status", "Actions"].map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td><span className='text-heading font-inter font-medium text-sm'>{index + 1}</span></td>
                <td><span className='text-heading font-inter font-medium text-sm'>{item.name}</span></td>
                <td>
                  <Switch id={`${item.name}_${index+1}`} checked={item.default} />
                </td>
                <td>
                  <Alert className='uppercase' variant='success' text={item.status} dots={true} />
                </td>
                <td>
                  <button className='text-primary'>{edit}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
