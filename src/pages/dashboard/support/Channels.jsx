import React from 'react'
import Top from '../../../layouts/Top'
import MainInner from '../../../components/MainInner'
import { c_24, langList } from '../../../utilities/Classes';
import TableFilter from '../../../components/TableFilter';
import Dropdown from '../../../components/Dropdown';

export default function Channels() {
  const channelPerformance = [
    {
      Channel: 'Email',
      CreatedTickets: 6,
      OfCreatedTickets: "100%",
      ClosedTickets: 5,
      TicketHandleTime: null,
      FirstResponseTime: null,
      ResolutionTime: null,
      TicketsReplied: 1,
      MessagesSent: 1,
      AverageCSAT: null,
    },
    {
      Channel: 'Email',
      CreatedTickets: 2,
      OfCreatedTickets: null,
      ClosedTickets: 1,
      TicketHandleTime: null,
      FirstResponseTime: null,
      ResolutionTime: null,
      TicketsReplied: "0",
      MessagesSent: 1,
      AverageCSAT: null,
    },
    {
      Channel: 'Email',
      CreatedTickets: 1,
      OfCreatedTickets: null,
      ClosedTickets: 2,
      TicketHandleTime: null,
      FirstResponseTime: null,
      ResolutionTime: null,
      TicketsReplied: "0",
      MessagesSent: "0",
      AverageCSAT: null,
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
          <Dropdown className='mb-0' dropDownClass='!left-auto right-0 w-max' btnClass="!bg-primary text-white" placeholder="Language" search items={langList} />
        </div>
      </Top>
      <MainInner>
        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Channel Performance</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead className="bg-gray-50">
                <tr>
                  {['Channel', 'Created Tickets', '% Of Created Tickets', 'Closed Tickets', "Ticket Handle Time", "First Response Time", "Resolution Time", "Tickets Replied", "Tickets Replied Messages Sent", "Average CSAT"].map((item, index) => (
                    <th key={index} className="px-6 py-3 text-left text-xs !font-bold ">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {channelPerformance.map((item, index) => (
                  <tr key={index}>
                    <td className="!text-heading px-6 py-4 !font-bold">{item.Channel ? item.Channel : '-'}</td>
                    <td className="!text-primary px-6 py-4 !font-semibold">{item.CreatedTickets ? item.CreatedTickets : '-'}</td>
                    <td className="!text-heading px-6 py-4 !font-semibold">{item.OfCreatedTickets ? item.OfCreatedTickets : '-'}</td>
                    <td className="!text-primary px-6 py-4 !font-semibold">{item.ClosedTickets ? item.ClosedTickets : '-'}</td>
                    <td className="!text-heading px-6 py-4 !font-semibold">{item.TicketHandleTime ? item.TicketHandleTime : '-'}</td>
                    <td className="!text-heading px-6 py-4 !font-semibold">{item.FirstResponseTime ? item.FirstResponseTime : '-'}</td>
                    <td className="!text-heading px-6 py-4 !font-semibold">{item.ResolutionTime ? item.ResolutionTime : '-'}</td>
                    <td className="!text-primary px-6 py-4 !font-semibold">{item.TicketsReplied ? item.TicketsReplied : '-'}</td>
                    <td className="!text-primary px-6 py-4 !font-semibold">{item.MessagesSent ? item.MessagesSent : '-'}</td>
                    <td className="!text-heading px-6 py-4 !font-semibold">{item.AverageCSAT ? item.AverageCSAT : '-'}</td>
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
