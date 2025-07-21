import React from 'react'
import Top from '../../../layouts/Top'
import MainInner from '../../../components/MainInner'
import TableFilter from '../../../components/TableFilter';
import Alert from '../../../components/Alert'
import { c_24, } from '../../../utilities/Classes'
import Dropdown from '../../../components/Dropdown'

export default function Agents() {
  const tableData = [
    {
      Agent: 'Mian Asad Ali',
      Tickets: '5',
      Messages: '2',
      Open: "2",
      Status: 'Online',
    },
    {
      Agent: 'Robin Mchelpful',
      Tickets: '2',
      Messages: '1',
      Open: '0',
      Status: 'Online',
    },
    {
      Agent: 'Darlene Robertson',
      Tickets: '6',
      Messages: '3',
      Open: '3',
      Status: 'Offline',
    },
    {
      Agent: 'Annette Black',
      Tickets: '3',
      Messages: '1',
      Open: '1',
      Status: 'Offline',
    },
  ]
  return (
    <>
      <Top>
        <div className="flex items-center gap-4">
          <Dropdown className='mb-0 !hidden md:!flex' dropDownClass='!left-auto right-0 w-max' btnClass="text-primary" placeholder="Data Range" items={[
            { name: 'Data Range - 1' },
            { name: 'Data Range - 2' },
            { name: 'Data Range - 3' },
          ]} />
        </div>
      </Top>
      <MainInner>
        <div className={`${c_24}`}>
          <div className="md:flex items-center justify-between mb-4 md:mb-5 lg:mb-6">
            <h3 className='text-lg text-heading font-inter font-semibold !leading-[170%]'>Activity of the Agents</h3>
            <TableFilter className="md:!justify-end !mb-0 grow md:grow-0" searchClass='mr-0 w-full md:max-w-[160px]' />
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  {["Agent", "Tickets Closed", "Messages Sent", "Open Tickets", "Online Status"].map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td className='text-sm !text-heading !font-medium'>{item.Agent}</td>
                    <td className='text-sm !text-[#858585] !font-medium'>{item.Tickets}</td>
                    <td className='text-sm !text-[#858585] !font-medium'>{item.Messages}</td>
                    <td className='text-sm !text-[#858585] !font-medium'>{item.Open}</td>
                    <td>
                      <Alert className='uppercase text-sm font-medium' variant={`${item.Status === "Online" ? "success" : ""}`} text={item.Status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MainInner>
    </>
  )
}
