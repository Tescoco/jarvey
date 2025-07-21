import React from 'react'
import Top from '../../../layouts/Top'

import MainInner from '../../../components/MainInner'
import Dropdown from '../../../components/Dropdown'
import InfoCard from '../../../components/dashboard/InfoCard';
import { c_24, langList } from '../../../utilities/Classes'
import CardTitle from '../../../components/dashboard/CardTitle'
import LineChart from '../../../components/dashboard/LineChart';
import TableFilter from '../../../components/TableFilter';

export default function CustomerIntentions() {
  const info = [
    {
      label: 'Most Frequent Intent',
      marketValue: '15',
      marketVariant: 'success',
      title: 'other/no_reply',
    },
    {
      label: 'Percentage of Correction',
      marketValue: '10',
      marketVariant: 'danger',
      title: '0%',
    },
  ]


  const breakdownData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Other/No Reply',
        data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
        borderColor: '#7856FF',
        backgroundColor: '#7856FF',
        tension: 0.5,
        pointBackgroundColor: '#7856FF',
        pointBorderColor: '#7856FF',
        pointRadius: 4,
      },
      {
        label: 'Product/Question',
        data: [22, 25, 30, 26, 32, 35, 39, 36, 32, 38, 41, 49],
        borderColor: '#FFC563',
        backgroundColor: '#FFC563',
        tension: 0.5,
        pointBackgroundColor: '#FFC563',
        pointBorderColor: '#FFC563',
        pointRadius: 4,
      },
      {
        label: 'Refund/Request',
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

  const breakdown = [
    {
      id: 'other/no_reply',
      total: 5,
      percentage: 50,
      delta: '100%',
    },
    {
      id: 'product/question',
      total: 1,
      percentage: 5,
      delta: '100%',
    },
    {
      id: 'refund/request',
      total: 3,
      percentage: 10,
      delta: '100%',
    },
    {
      id: 'other/no_reply',
      total: 1,
      percentage: 5,
      delta: '100%',
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
          <Dropdown className='mb-0' dropDownClass='!left-auto right-0 w-max' btnClass="!bg-primary text-white" placeholder="Language" search items={langList} />
        </div>
      </Top>
      <MainInner className='flex flex-col gap-4 md:gap-5 lg:gap-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-wrap">
          {info.map((item, index) => (
            <InfoCard key={index} item={item} className='' />
          ))}
        </div>

        <div className={`${c_24} xl:col-span-8`}>
          <CardTitle title="Breakdown of Top Ten Intents Per Day" />
          <LineChart setData={breakdownData} />
        </div>
        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Breakdown of Intent Occurrence</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' csv />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Macro', 'Total', 'Percentage', 'Delta'].map((item, index) => (
                    <th key={index} className={`${item === 'Total' || item === 'Percentage' ? '!text-center' : ''}`}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {breakdown.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.id}</td>
                    <td className='!font-medium text-center !text-heading'>{item.total}</td>
                    <td className='text-center'>{item.percentage}%</td>
                    <td className='!font-medium'>
                      <div className="flex items-center gap-1">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.29102 7.70841L9.32082 3.67859C9.9717 3.02771 11.027 3.02771 11.6778 3.67858L15.7077 7.70841M10.4993 3.95841V16.8751" stroke="#111111" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item.delta}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MainInner >

    </>
  )
}
