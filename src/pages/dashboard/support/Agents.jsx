import React from 'react'
import Top from '../../../layouts/Top'
import MainInner from '../../../components/MainInner'
import { c_24 } from '../../../utilities/Classes';
import TableFilter from '../../../components/TableFilter';

import img1 from '../../../assets/img/best/img-1.png'
import img2 from '../../../assets/img/best/img-2.png'
import Dropdown from '../../../components/Dropdown';

export default function Agents() {
  const itemCard = [
    {
      title: 'Darlene Robertson',
      des: 'Average CSAT',
      number: '45',
      img:img1,
    },
    {
      title: 'Darlene Robertson',
      des: 'First Response Time',
      number: '4m',
      img:img1,
    },
    {
      title: 'Darlene Robertson',
      des: 'Resolution Time',
      number: '45',
      img:img1,
    },
    {
      title: 'AI Agent Bot',
      des: 'Closed Tickets',
      number: '1',
      img:img2,
    },
  ]

  const agentPerformance = [
    {
      name: 'AI Agent Bot',
      First: '-',
      Resolution: '-',
      Touch: '-',
      Online: '24m 14s',
      Messages: '-',
      Tickets: '0.83',
      Closed: '-',
      Handle: '-',
      Zero: '7',
    },
    {
      name: 'AI Agent Bot',
      First: '-',
      Resolution: '-',
      Touch: '-',
      Online: '-',
      Messages: '-',
      Tickets: '-',
      Closed: '-',
      Handle: '-',
      Zero: '1',
    },
    {
      name: 'AI Agent Bot',
      First: '-',
      Resolution: '-',
      Touch: '-',
      Online: '1h 12m',
      Messages: '-',
      Tickets: '-',
      Closed: '-',
      Handle: '-',
      Zero: '1',
    },

  ];
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
        <div className="text mb-4 md:mb-5 lg:mb-6">
          <h4 className='text-lg text-heading font-inter !font-semibold !leading-[170%] mb-4 md:mb-5 lg:mb-6'>Best Performers</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2">
            {itemCard.map((items, index) => (
              <div className="p-2 border border-solid border-[#E2E4E9] rounded-xl" key={index}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-10 rounded-full overflow-hidden">
                      <img className='flex-none' src={items.img} alt="" />
                    </div>
                    <div className="text">
                      <h4 className='text-sm text-heading font-inter !font-semibold mb-0.5'>{items.title}</h4>
                      <div className="flex items-center gap-2.5">
                        <h4 className='text-xs text-[#858585]'>{items.des}</h4>
                        <h4 className='text-xs'>{items.number}</h4>
                      </div>
                    </div>
                  </div>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2.5C7 1.95 6.55 1.5 6 1.5C5.45 1.5 5 1.95 5 2.5C5 3.05 5.45 3.5 6 3.5C6.55 3.5 7 3.05 7 2.5ZM7 9.5C7 8.95 6.55 8.5 6 8.5C5.45 8.5 5 8.95 5 9.5C5 10.05 5.45 10.5 6 10.5C6.55 10.5 7 10.05 7 9.5ZM7 6C7 5.45 6.55 5 6 5C5.45 5 5 5.45 5 6C5 6.55 5.45 7 6 7C6.55 7 7 6.55 7 6Z" fill="#858585" />
                  </svg>

                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Agent Performance</h4>
            <TableFilter className='!mb-0 grow md:grow-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead className="bg-gray-50">
                <tr>
                  {['Agent', 'First Response Time', 'Resolution Time', 'Resolution Touch Tickets', 'Online Time', 'Messages Sent Per Hour', "Tickets Replied Per Hour", "Closed Tickets Per Hour", "Ticket Handle Time", "Zero Touch Tickets",].map((item, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs !font-bold text-nowrap uppercase tracking-wider"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {agentPerformance.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="size-8 flex items-center justify-center text-xs text-white rounded-full bg-[#F58D86]">
                          AA
                        </div>
                        <h6 className="text-sm !text-heading !font-bold">{item.name}</h6>
                      </div>
                    </td>
                    <td className="px-6 py-4">{item.First}</td>
                    <td className="px-6 py-4">{item.Resolution}</td>
                    <td className="px-6 py-4">{item.Touch}</td>
                    <td className="px-6 py-4 !text-heading !font-bold">{item.Online}</td>
                    <td className="px-6 py-4">{item.Messages}</td>
                    <td className="px-6 py-4">{item.Closed}</td>
                    <td className="px-6 py-4 !text-heading !font-bold">{item.Tickets}</td>
                    <td className="px-6 py-4">{item.Handle}</td>
                    <td className="px-6 py-4 !text-[#7856FF] !font-medium">{item.Zero}</td>
                    {/* <td className="px-6 py-4">{item.messagesSentPerHour}</td>
                          <td className="px-6 py-4">{item.ticketsRepliedPerHour}</td>
                          <td className="px-6 py-4">{item.closedTicketsPerHour}</td>
                          <td className="px-6 py-4">{item.ticketHandleTime}</td>
                          <td className="px-6 py-4 !text-[#7856FF]">{item.zeroTouchTickets}</td> */}
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
