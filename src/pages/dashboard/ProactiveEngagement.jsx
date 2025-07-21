import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Dropdown from '../../components/Dropdown'
import InfoCard from '../../components/dashboard/InfoCard';
import { c_24, langList } from '../../utilities/Classes'
import CardTitle from '../../components/dashboard/CardTitle'
import BarChart from '../../components/dashboard/BarChart';
import TableFilter from '../../components/TableFilter';
import Alert from '../../components/Alert';

export default function ProactiveEngagement() {
  const info = [
    {
      label: 'Total Active Conversations',
      marketValue: '15',
      marketVariant: 'success',
      title: '50,846h',
    },
    {
      label: 'Current Queue Times',
      marketValue: '12',
      marketVariant: 'success',
      title: '5 min',
    },
    {
      label: 'Live Agent Availability',
      marketValue: '12',
      marketVariant: 'success',
      title: '12,462k',
    },
    {
      label: 'Current Longest Wait Time',
      marketValue: '12',
      marketVariant: 'success',
      title: '10 min',
    },
  ]

  const ongoing = [
    {
      id: 'TCK-001',
      name: 'John D.',
      issue: 'Payment Issue',
      priority: 'High',
      assigned: "Agent A",
      status: {
        name: 'In Progress',
        variant: 'success'
      },
      updated: '2025-02-27.10:15 AM',
    },
    {
      id: 'TCK-002',
      name: 'Emily R.',
      issue: 'Order Not Received',
      priority: 'High',
      assigned: "Agent B",
      status: {
        name: 'Pending',
        variant: 'warning'
      },
      updated: '2025-02-27.11:15 AM',
    },
    {
      id: 'TCK-003',
      name: 'Emily R.',
      issue: 'Alex T.',
      priority: 'Medium',
      assigned: "Agent C",
      status: {
        name: 'In Progress',
        variant: 'success'
      },
      updated: '2025-02-27.12:30 AM',
    },
    {
      id: 'TCK-004',
      name: 'Sarah M.',
      issue: 'Login Issue',
      priority: 'Medium',
      assigned: "Agent D",
      status: {
        name: 'Pending',
        variant: 'warning'
      },
      updated: '2025-02-27.01:10 AM',
    },
    {
      id: 'TCK-005',
      name: 'Mike L.',
      issue: 'product Defect',
      priority: 'Low',
      assigned: "Agent E",
      status: {
        name: 'In Progress',
        variant: 'success'
      },
      updated: '2025-02-27.02:45 AM',
    },
  ]

  const productTable = [
    {
      name: 'Live Chat',
      averageTime: '2 min',
      longestTime: '8 min',
      active: '12',
      status: {
        name: 'Normal',
        variant: 'success'
      }
    },
    {
      name: 'Email Support',
      averageTime: '4 hrs',
      longestTime: '12 hrs',
      active: '35',
      status: {
        name: 'High Load',
        variant: 'warning'
      }
    },
    {
      name: 'Phone Support',
      averageTime: '5 min',
      longestTime: '15 min',
      active: '8',
      status: {
        name: 'Normal',
        variant: 'success'
      }
    },
    {
      name: 'Social Media',
      averageTime: '10 min',
      longestTime: '30 min',
      active: '25',
      status: {
        name: 'Pending',
        variant: 'warning'
      }
    },
    {
      name: 'Helpdesk Tickets',
      averageTime: '3 hrs',
      longestTime: '10 hrs',
      active: '40',
      status: {
        name: 'Normal',
        variant: 'success'
      }
    },
  ]

  return (
    <>
      <Top title="Customer Service Analytics">
        <div className="flex items-center gap-4">
          <Dropdown className='mb-0 !hidden md:!flex' dropDownClass='!left-auto right-0 w-max' btnClass="text-primary" placeholder="Data Range" items={[
            { name: 'Data Range - 1' },
            { name: 'Data Range - 2' },
            { name: 'Data Range - 3' },
          ]} />
          <Dropdown className='mb-0' dropDownClass='!left-auto right-0 w-max' btnClass="!bg-primary text-white" placeholder="Language" items={langList} />
        </div>
      </Top>

      <MainInner className='grid grid-cols-1 gap-4 md:gap-5 lg:gap-6'>
        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
          {info.map((item, index) => (
            <InfoCard key={index} item={item} className='grow w-full sm:w-[calc(50%-12px)] md:w-auto xl:min-w-[200px] 2xl:min-w-max' />
          ))}
        </div>

        <div className={`${c_24} `}>
          <CardTitle title="Average Response Time" />
          <BarChart setData={''} />
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Ongoing Customer Chats & Tickets</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Ticket ID', 'Customer Name', 'Issue Type', 'Priority', "Assigned Agent", 'Status', "Last Updated"].map((item, index) => (
                    <th key={index} className={`${item === 'Avg. Order Value ($)' || item === 'Customer Rating' ? '!text-center' : ''}`}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ongoing.map((item, index) => (
                  <tr key={index} className={`${index === ongoing.length - 1 && "!border-b-0"}`}>
                    <td className='!font-medium !text-heading'>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.issue}</td>
                    <td className='!font-medium !text-heading'>{item.priority}</td>
                    <td>{item.assigned}</td>
                    <td><Alert text={item.status.name} variant={item.status.variant} className='min-w-[90px]' /></td>
                    <td>{item.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Ongoing Customer Chats & Tickets:</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Channel', 'Average Wait Time', 'Longest Wait Time', 'Active Customers Waiting', 'Status'].map((item, index) => (
                    <th key={index} className='first:!text-start !text-center'>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {productTable.map((item, index) => (
                  <tr key={index} className={`${index === productTable.length - 1 && "!border-b-0"}`}>
                    <td className='!font-medium !text-heading'>{item.name} </td>
                    <td className='text-center'>{item.averageTime}</td>
                    <td className='text-center'>{item.longestTime}</td>
                    <td className='text-center'>{item.active}</td>
                    <td className='text-center'>
                      <Alert text={item.status.name} variant={item.status.variant} className='min-w-[90px]' />
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
