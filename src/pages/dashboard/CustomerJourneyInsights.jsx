import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Dropdown from '../../components/Dropdown'
import InfoCard from '../../components/dashboard/InfoCard';
import { c_24, langList } from '../../utilities/Classes'
import CardTitle from '../../components/dashboard/CardTitle'
import BarChart from '../../components/dashboard/BarChart';
import DoughnutChart from '../../components/dashboard/DoughnutChart';

export default function CustomerJourneyInsights() {
  const info = [
    {
      label: 'Tracked Customer Journeys',
      marketValue: '15',
      marketVariant: 'success',
      title: '50,846.90',
    },
    {
      label: 'Steps Before Support',
      marketValue: '10',
      marketVariant: 'success',
      title: '100 / 200',
    },
    {
      label: 'Most Frequent Exit Points',
      marketValue: '10',
      marketVariant: 'success',
      title: '200 / 300',
    },
    {
      label: 'Avg. Time per Step',
      marketValue: '12',
      marketVariant: 'success',
      title: '5 min',
    },
  ]
 

  const agentPerformanceChart = {
    productivity: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Monthly Data",
          data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
          backgroundColor: "#7856FF",
          borderRadius: 40,
          borderSkipped: false,
          borderWidth: 0,
          borderColor: '#7856FF',
          maxBarThickness: 16,
        }
      ],
      max: 60,
      legend: false,
      yPercent: true,
    },
    sentimentAnalysis: [
      {
        name: 'Main checkout journey',
        percent: 50,
        color: '#166448',
      },
      {
        name: 'Support-related journey',
        percent: 35,
        color: '#FFC563',
      },
      {
        name: 'Alternative checkout path',
        percent: 15,
        color: '#FE4234',
      },
    ],
 
  }
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
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 ">
          {info.map((item, index) => (
            <InfoCard key={index} item={item} className='grow w-full sm:w-[calc(50%-12px)] md:w-auto xl:min-w-[200px] 2xl:min-w-max h-full flex flex-col justify-between' />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
          <div className={`${c_24} xl:col-span-8`}>
            <CardTitle title="User Interaction Flow Before Contacting Support" />
            <BarChart setData={agentPerformanceChart.productivity} />
          </div>
          <div className={`${c_24} xl:col-span-4 flex flex-col`}>
            <CardTitle title="Top Customer Journeys" dropdown={false} />
            <DoughnutChart info={agentPerformanceChart.sentimentAnalysis} />
          </div>
        </div>
      </MainInner>
    </>
  )
}
