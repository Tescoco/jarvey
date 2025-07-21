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
      label: 'Agents Online',
      marketValue: '15',
      marketVariant: 'success',
      title: '84,690',
    },
    {
      label: 'Agents Offline',
      marketValue: '10',
      marketVariant: 'danger',
      title: '12,408',
    },
    {
      label: 'Assigned Open Tickets',
      marketValue: '10',
      marketVariant: 'success',
      title: '6,342',
    },
    {
      label: 'Unassigned Open Tickets',
      marketValue: '12',
      marketVariant: 'danger',
      title: '342',
    },
  ]


  const breakdownData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Ticket Created',
        data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
        borderColor: '#7856FF',
        backgroundColor: '#7856FF',
        tension: 0.5,
        pointBackgroundColor: '#7856FF',
        pointBorderColor: '#7856FF',
        pointRadius: 4,
      },
      {
        label: 'Ticket Replied',
        data: [22, 25, 30, 26, 32, 35, 39, 36, 32, 38, 41, 49],
        borderColor: '#FFC563',
        backgroundColor: '#FFC563',
        tension: 0.5,
        pointBackgroundColor: '#FFC563',
        pointBorderColor: '#FFC563',
        pointRadius: 4,
      },
      {
        label: 'Ticket Closed',
        data: [14, 17, 20, 22, 24, 26, 28, 30, 32, 30, 32, 35],
        borderColor: '#FE4234',
        backgroundColor: '#FE4234',
        tension: 0.5,
        pointBackgroundColor: '#FE4234',
        pointBorderColor: '#FE4234',
        pointRadius: 4,
      }
    ],
    min: 0,
    max: 60,
    legend: true,
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
        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
          {info.map((item, index) => (
            <InfoCard key={index} item={item} className='grow w-full sm:w-[calc(50%-12px)] md:w-auto xl:min-w-[200px] 2xl:min-w-max' />
          ))}
        </div>
        <div className={`${c_24}`}>
          <CardTitle title="Support Volume" />
          <LineChart setData={breakdownData} />
        </div>
      </MainInner >

    </>
  )
}
