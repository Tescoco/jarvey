import React from 'react'
import Top from '../../../layouts/Top'
import InfoCard from '../../../components/dashboard/InfoCard';
import MainInner from '../../../components/MainInner';
import { c_24, langList} from '../../../utilities/Classes';
import CardTitle from '../../../components/dashboard/CardTitle';
import BarChart from '../../../components/dashboard/BarChart';
import Dropdown from '../../../components/Dropdown';

export default function Slas() {
  const info = [
    {
      label: 'Average CSAT',
      marketValue: '15',
      marketVariant: 'success',
      title: '50%',
    },
    {
      label: 'First Response Time',
      marketValue: '10',
      marketVariant: 'danger',
      title: '-20%',
    },
  ];

  const chartbackSuccess = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Achieved",
        data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
        backgroundColor: "#7856FF",
        borderRadius: 40,
        borderSkipped: false,
        borderWidth: 0,
        maxBarThickness: 20,
      },
      {
        label: "Breached",
        data: [30, 40, 28, 32, 23, 37, 29, 34, 27, 33, 21, 39],
        backgroundColor: "#FFC563",
        borderRadius: 40,
        borderSkipped: false,
        borderWidth: 0,
        maxBarThickness: 20,
      },
    ],
    max: 60,
    yPercent: false,
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
      <MainInner>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-wrap mb-4 md:mb-5 lg:mb-6">
          {info.map((item, index) => (
            <InfoCard key={index} item={item} className='' />
          ))}
        </div>

        <div className={`${c_24}`}>
          <CardTitle title="Achieved and Breached Tickets" />
          <BarChart setData={chartbackSuccess} />
        </div>
      </MainInner>
    </>
  )
}
