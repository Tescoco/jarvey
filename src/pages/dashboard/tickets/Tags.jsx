import React from 'react'
import Top from '../../../layouts/Top'

import MainInner from '../../../components/MainInner'
import Dropdown from '../../../components/Dropdown'
import { c_24, langList } from '../../../utilities/Classes'
import CardTitle from '../../../components/dashboard/CardTitle'
import LineChart from '../../../components/dashboard/LineChart';
import TableFilter from '../../../components/TableFilter';
import Alert from '../../../components/Alert';

export default function Tags() {
  const tags = [
    {
      name: "outside-business-hours",
      value: 7,
      per: 0,
    },
    {
      name: "auto-close",
      value: 7,
      per: 0,
    },
    {
      name: "non-support-related",
      value: 7,
      per: 0,
    },
    {
      name: "aLhandover",
      value: 7,
      per: 0,
    },
    {
      name: "ai-close",
      value: 7,
      per: 0,
    },
    {
      name: "during-business-hours",
      value: 7,
      per: 0,
    },
    {
      name: "ai_answered",
      value: 7,
      per: 0,
    },
    {
      name: "PRODUCT",
      value: 7,
      per: 0,
    },
  ]

  const trend = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Outside-Business-Hours',
        data: [32, 30, 29, 29, 31, 35, 40, 45, 48, 47, 43, 35],
        borderColor: '#7855FF',
        backgroundColor: '#7855FF',
        tension: 0.5,
        pointBackgroundColor: '#7855FF',
        pointBorderColor: '#7855FF',
        pointRadius: 4,
      },
      {
        label: 'Auto-Close',
        data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
        borderColor: '#F7B844',
        backgroundColor: '#F7B844',
        tension: 0.5,
        pointBackgroundColor: '#F7B844',
        pointBorderColor: '#F7B844',
        pointRadius: 4,
      },
      {
        label: 'Non-Support-Related',
        data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
        borderColor: '#FFC563',
        backgroundColor: '#FFC563',
        tension: 0.5,
        pointBackgroundColor: '#FFC563',
        pointBorderColor: '#FFC563',
        pointRadius: 4,
      },
      {
        label: 'Ai_Handover',
        data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
        borderColor: '#FFC563',
        backgroundColor: '#FFC563',
        tension: 0.5,
        pointBackgroundColor: '#FFC563',
        pointBorderColor: '#FFC563',
        pointRadius: 4,
      },
      {
        label: 'Ai-Close',
        data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
        borderColor: '#FFC563',
        backgroundColor: '#FFC563',
        tension: 0.5,
        pointBackgroundColor: '#FFC563',
        pointBorderColor: '#FFC563',
        pointRadius: 4,
      },
      {
        label: 'During-Business-Hours',
        data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
        borderColor: '#FFC563',
        backgroundColor: '#FFC563',
        tension: 0.5,
        pointBackgroundColor: '#FFC563',
        pointBorderColor: '#FFC563',
        pointRadius: 4,
      },
      {
        label: 'Ai_Answered',
        data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
        borderColor: '#FFC563',
        backgroundColor: '#FFC563',
        tension: 0.5,
        pointBackgroundColor: '#FFC563',
        pointBorderColor: '#FFC563',
        pointRadius: 4,
      },
      {
        label: 'PRODUCT',
        data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
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
  const usedTags = [
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 1,
      fri: '-',
      sat: '-',
      status: {
        name: 'PRODUCT',
        variant: 'primary'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 5,
      fri: '-',
      sat: '-',
      status: {
        name: 'ai_answered',
        variant: 'success'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 2,
      fri: '-',
      sat: '-',
      status: {
        name: 'during-business-hours',
        variant: 'warning'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 7,
      fri: '-',
      sat: '-',
      status: {
        name: 'ai-close',
        variant: 'danger'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 1,
      fri: '-',
      sat: '-',
      status: {
        name: 'aLhandover',
        variant: 'primary'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 4,
      fri: '-',
      sat: '-',
      status: {
        name: 'non-support-related',
        variant: 'success'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 2,
      fri: '-',
      sat: '-',
      status: {
        name: 'auto-close',
        variant: 'warning'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 7,
      fri: '-',
      sat: '-',
      status: {
        name: 'outside-business-hours',
        variant: 'danger'
      }
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
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-6">
          <div className={`${c_24}`}>
            <CardTitle title="Top Used Tags" dropdown={false} className="w-full" />
            <p className='pb-1 border-b border-stroke rounded-sm'>Tags</p>
            <ul className='w-full'>
              {tags.map((item, index) => (
                <li className="flex items-center justify-between w-full text-heading font-medium pt-3" key={index}>
                  <p className='px-1 py-0.5 bg-primary/10'>{item.name}</p>
                  <div className="flex items-center justify-between max-w-20 xl:max-w-[60px] 2xl:max-w-[79px] w-full gap-2 ">
                    <p>{item.value} </p>
                    <p>{item.per}%</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${c_24} xl:col-span-2 flex flex-col`}>
            <CardTitle title="Trend" />
            <LineChart setData={trend} />
          </div>
        </div>
        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>All Used Tags</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Tag Name', "Total", 'TUE, 18 MAR', 'WED, 19 MAR', 'THU, 20 MAR', "FRI, 21 MAR", "SAT, 22 MAR"].map((item, index) => (
                    <th key={index} className={``}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {usedTags.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Alert dots text={item.status.name} variant={item.status.variant} className='min-w-[90px]' />
                    </td>
                    <td className='!font-medium !text-primary bg-[#F7F7F7]'>{item.total}</td>
                    <td>{item.tue}</td>
                    <td>{item.wed}</td>
                    <td className='!font-medium !text-heading'>{item.thu}</td>
                    <td>{item.fri}</td>
                    <td>{item.sat}</td>
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
