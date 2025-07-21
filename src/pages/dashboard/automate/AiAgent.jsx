import React from 'react'
import Top from '../../../layouts/Top'

import MainInner from '../../../components/MainInner'
import Dropdown from '../../../components/Dropdown'
import { c_24, langList } from '../../../utilities/Classes'
import CardTitle from '../../../components/dashboard/CardTitle'
import LineChart from '../../../components/dashboard/LineChart';
import BarChart from '../../../components/dashboard/BarChart';
import TableFilter from '../../../components/TableFilter';

export default function AiAgent() {
  const agentPerformance = [
    {
      name: 'AI Agent Bot',
      closed: '1',
      ofClosed: '100',
      average: null,
      replied: '1',
      massage: '1',
      firstResponseTime: '11s',
      resolutionTime: null,
      oneTouchTickets: null,
      onlineTime: null,
      messagesSentPerHour: null,
      ticketsRepliedPerHour: null,
      closedTicketsPerHour: null,
      ticketHandleTime: null,
      zeroTouchTickets: '1'
    },
    {
      name: 'AI Agent Bot',
      closed: '1',
      ofClosed: '100',
      average: null,
      replied: '1',
      massage: '1',
      firstResponseTime: '11s',
      resolutionTime: null,
      oneTouchTickets: null,
      onlineTime: null,
      messagesSentPerHour: null,
      ticketsRepliedPerHour: null,
      closedTicketsPerHour: null,
      ticketHandleTime: null,
      zeroTouchTickets: '1'
    },
    {
      name: 'AI Agent Bot',
      closed: '1',
      ofClosed: '100',
      average: null,
      replied: '1',
      massage: '1',
      firstResponseTime: '11s',
      resolutionTime: null,
      oneTouchTickets: null,
      onlineTime: null,
      messagesSentPerHour: null,
      ticketsRepliedPerHour: null,
      closedTicketsPerHour: null,
      ticketHandleTime: null,
      zeroTouchTickets: '1'
    },
  ];


  const created = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Created Tickets',
        data: [32, 30, 29, 29, 32, 36, 41, 46, 49, 47, 42, 35],
        borderColor: '#7856FF',
        backgroundColor: '#7856FF',
        tension: 0.5,
        pointBackgroundColor: '#7856FF',
        pointBorderColor: '#7856FF',
        pointRadius: 4,
      },
      {
        label: 'Closed Tickets',
        data: [22, 26, 30, 34, 38, 41, 42, 40, 39, 39, 43, 48],
        borderColor: '#FFC563',
        backgroundColor: '#FFC563',
        tension: 0.5,
        pointBackgroundColor: '#FFC563',
        pointBorderColor: '#FFC563',
        pointRadius: 4,
      },
    ],

    min: 0,
    max: 60,
    legend: true,
  }

  const allUsed = [
    {
      value: 'Close',
      total: '1',
      li1: null,
      li2: null,
      li3: null,
      li4: null,
      li5: null,
    },
    {
      value: 'Handover',
      total: '1',
      li1: null,
      li2: null,
      li3: null,
      li4: null,
      li5: null,
    },
    {
      value: 'Close',
      total: '1',
      li1: null,
      li2: null,
      li3: null,
      li4: null,
      li5: null,
    },
  ]

  const automated = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Monthly Data",
        data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
        backgroundColor: "#176448",
        borderRadius: 40,
        borderSkipped: false,
        borderWidth: 0,
        borderColor: '#176448',
        maxBarThickness: 25,
      }
    ],
    max: 60,
    legend: false,
    yPercent: true,
  }

  return (
    <>
      <Top>
        <div className="flex items-center gap-4">
          <Dropdown className='mb-0 !hidden md:!flex' dropDownClass='!left-auto right-0 w-max' btnClass="text-primary" placeholder="Data Range" items={[
            { name: 'Data Range - 1' },
            { name: 'Data Range - 2' },
            { name: 'Data Range - 3' },
          ]} />
          <Dropdown className='mb-0' dropDownClass='!left-auto right-0 w-max' btnClass="!bg-primary text-white" placeholder="Language" search items={langList} />
        </div>
      </Top>
      <MainInner className='flex flex-col gap-4 md:gap-5 lg:gap-6'>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Agent Performance</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead className="bg-gray-50">
                <tr>
                  {['Agent', 'Closed Tickets', '% Of Closed Tickets', 'Average Csat', 'Tickets Replied', 'Messages Sent', "First Response Time", "Resolution Time", "One Touch Tickets", "Online Time", "Messages Sent Per Hour", "Tickets Replied Per Hour", "Closed Tickets Per Hour", "Ticket Handle Time", "Zero Touch Tickets"].map((item, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-nowrap uppercase tracking-wider"
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
                        <h6 className="text-sm font-medium">{item.name}</h6>
                      </div>
                    </td>
                    <td className="px-6 py-4 !text-[#7856FF] font-medium">{item.closed}</td>
                    <td className="px-6 py-4 !text-[#7856FF]">{item.ofClosed}%</td>
                    <td className="px-6 py-4">{item.average?.trim() ? item.average : "-"}</td>
                    <td className="px-6 py-4 !text-[#7856FF] font-medium">{item.replied}</td>
                    <td className="px-6 py-4 !text-[#7856FF] font-medium">{item.massage}</td>
                    <td className="px-6 py-4 !text-heading font-semibold">{item.firstResponseTime}</td>
                    <td className="px-6 py-4">{item.resolutionTime?.trim() ? item.resolutionTime : "-"}</td>
                    <td className="px-6 py-4">{item.oneTouchTickets?.trim() ? item.oneTouchTickets : "-"}</td>
                    <td className="px-6 py-4">{item.onlineTime?.trim() ? item.onlineTime : "-"}</td>
                    <td className="px-6 py-4">{item.messagesSentPerHour?.trim() ? item.messagesSentPerHour : "-"}</td>
                    <td className="px-6 py-4">{item.ticketsRepliedPerHour?.trim() ? item.ticketsRepliedPerHour : "-"}</td>
                    <td className="px-6 py-4">{item.closedTicketsPerHour?.trim() ? item.closedTicketsPerHour : "-"}</td>
                    <td className="px-6 py-4">{item.ticketHandleTime?.trim() ? item.ticketHandleTime : "-"}</td>

                    <td className="px-6 py-4 !text-[#7856FF]">{item.zeroTouchTickets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={`${c_24}`}>
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h4 className=''>Ticket insights</h4>
            <Dropdown className='mb-0 !hidden md:!flex' dropDownClass='!left-auto right-0' btnClass="!min-w-[108px] !h-9" placeholder="AI Intents" items={[
              { name: 'AI Intents 1' },
              { name: 'AI Intents 2' },
              { name: 'AI Intents 3' },
            ]} />
          </div>
          <div className={`grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6`}>
            <div className={`${c_24} bg-[#F7F7F7] border-0 `}>
              <CardTitle title="Top Used Values" dropdown={false} className="w-full" />
              <ul className='w-full'>
                <li className="text-xs flex items-center justify-between w-full text-heading font-medium pt-3" >
                  <p className='px-1 py-0.5 bg-primary/10'>Close {">"} Without message</p>
                  <p>1</p>
                </li>
                <li className="text-xs flex items-center justify-between w-full text-heading font-medium pt-3" >
                  <p className='px-1 py-0.5 bg-primary/10'>Handover {">"} With message</p>
                  <p>1</p>
                </li>
              </ul>
              <p className='pt-3 textxs mt-3 border-t border-stroke rounded-sm flex justify-between text-heading font-medium'>
                <span>Total</span>
                <span>2</span>
              </p>
            </div>
            <div className={`${c_24} bg-[#F7F7F7] border-0 xl:col-span-2`}>
              <CardTitle title="Created vs. Closed Tickets" />
              <LineChart setData={created} />
            </div>
          </div>
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>All Used Values</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Value / Category', 'Total', '23 DEC - 29 DEC', '30 DEC - 5 JAN', '6 JAN - 12 JAN', "13 JAN - 19 JAN", "20 JAN - 26 JAN"].map((item, index) => (
                    <th key={index} >{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allUsed.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.value}</td>
                    <td className='!text-primary !font-medium bg-[#F7F7F7]'>{item.total}</td>
                    <td className='!font-medium !text-heading'>{item.li1?.trim() ? item.li1 : "-"}</td>
                    <td className='!font-medium !text-heading'>{item.li2?.trim() ? item.li2 : "-"}</td>
                    <td className='!font-medium !text-heading'>{item.li3?.trim() ? item.li3 : "-"}</td>
                    <td className='!font-medium !text-heading'>{item.li4?.trim() ? item.li4 : "-"}</td>
                    <td className='!font-medium !text-heading'>{item.li5?.trim() ? item.li5 : "-"}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${c_24}`}>
          <CardTitle title="Automated Interactions Over Time" />
          <BarChart setData={automated} />
        </div>
      </MainInner >

    </>
  )
}
