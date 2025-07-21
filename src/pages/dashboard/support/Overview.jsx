import React from 'react'
import Top from '../../../layouts/Top'

import MainInner from '../../../components/MainInner'
import Dropdown from '../../../components/Dropdown'
import InfoCard from '../../../components/dashboard/InfoCard';
import { c_24 } from '../../../utilities/Classes'
import CardTitle from '../../../components/dashboard/CardTitle'
import LineChart from '../../../components/dashboard/LineChart';

export default function Overview() {

  const info = [
    {
      label: 'Average CSAT',
      marketValue: '15',
      marketVariant: 'success',
      title: '50%',
    },
    {
      label: 'First Response Time',
      marketValue: '12',
      marketVariant: 'success',
      title: '23:45:78',
    },
    {
      label: 'Resolution Time',
      marketValue: '12',
      marketVariant: 'success',
      title: '3h',
    },
    {
      label: 'Messages Per Ticket',
      marketValue: '12',
      marketVariant: 'success',
      title: '50',
    },
    {
      label: 'Created Tickets',
      marketValue: '15',
      marketVariant: 'success',
      title: '528',
    },
    {
      label: 'Closed Tickets',
      marketValue: '12',
      marketVariant: 'success',
      title: '50',
    },
    {
      label: 'Open Tickets',
      marketValue: '12',
      marketVariant: 'success',
      title: '07',
    },
    {
      label: 'Tickets Replied',
      marketValue: '15',
      marketVariant: 'success',
      title: '5,281k',
    },
    {
      label: 'Messages Sent',
      marketValue: '12',
      marketVariant: 'success',
      title: '3,400k',
    },
    {
      label: 'Ticket Handle Time',
      marketValue: '12',
      marketVariant: 'success',
      title: '00:30:14',
    },
    {
      label: 'One Touch Tickets',
      marketValue: '12',
      marketVariant: 'success',
      title: '5,000',
    },
    {
      label: 'Zero Touch Tickets',
      marketValue: '12',
      marketVariant: 'success',
      title: '07,00',
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
  const interaction = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '',
        data: [32, 30, 29, 29, 32, 36, 41, 46, 49, 47, 42, 35],
        borderColor: '#176448',
        backgroundColor: '#176448',
        tension: 0.5,
        pointBackgroundColor: '#176448',
        pointBorderColor: '#176448',
        pointRadius: 4,
      },
    ],
    min: 0,
    max: 60,
    legend: false,
  }
  const handoff = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '',
        data: [-35, -22, -10, 2, 12, 20, 22, 18, 15, 16, 28, 42],
        borderColor: '#7856FF',
        backgroundColor: '#7856FF',
        tension: 0.5,
        pointBackgroundColor: '#7856FF',
        pointBorderColor: '#7856FF',
        pointRadius: 4,
      },
    ],
    min: -80,
    max: 80,
    legend: false,
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
        </div>
      </Top>
      <MainInner className='flex flex-col gap-4 md:gap-5 lg:gap-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 flex-wrap">
          {info.map((item, index) => (
            <InfoCard key={index} item={item} className='' />
          ))}
        </div>
        <div className={`${c_24}`}>
          <CardTitle title="Created vs. Closed Tickets" />
          <LineChart setData={created} />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          <div className={`${c_24}`}>
            <CardTitle title="Tickets Replied" />
            <LineChart setData={handoff} />
          </div>
          <div className={`${c_24} `}>
            <CardTitle title="Messages Sent" />
            <LineChart setData={interaction} />
          </div>
        </div>
      </MainInner >

    </>
  )
}
