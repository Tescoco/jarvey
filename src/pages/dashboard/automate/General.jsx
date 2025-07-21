import React from 'react'
import Top from '../../../layouts/Top'

import MainInner from '../../../components/MainInner'
import Dropdown from '../../../components/Dropdown'
import InfoCard from '../../../components/dashboard/InfoCard';
import { c_24, langList } from '../../../utilities/Classes'
import CardTitle from '../../../components/dashboard/CardTitle';

export default function General() {

  const info = [
    {
      label: 'Automation Rate',
      marketValue: '12',
      marketVariant: 'success',
      title: '50%',
    },
    {
      label: 'Automated Interactions',
      marketValue: '12',
      marketVariant: 'success',
      title: '3',
    },
    {
      label: 'Cost Saved By Using Jarvey AI',
      marketValue: '12',
      marketVariant: 'success',
      title: '$234',
    },
    {
      label: 'Overall Time Saved by AI Agent',
      marketValue: '12',
      marketVariant: 'success',
      title: '0h 0m',
    },
    {
      label: 'Decrease in Resolution Time',
      marketValue: '09',
      marketVariant: 'success',
      title: '24d 14h',
    },
    {
      label: 'Decrease in First Response Time',
      marketValue: '15',
      marketVariant: 'success',
      title: '1d 17h',
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
          <Dropdown className='mb-0' dropDownClass='!left-auto right-0 w-max' btnClass="!bg-primary text-white" placeholder="Language" items={langList} search />
        </div>
      </Top>
      <MainInner className='flex flex-col gap-4 md:gap-5 lg:gap-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-wrap">
          {info.map((item, index) => (
            <InfoCard key={index} item={item} className='' />
          ))}
        </div>
        <h3 className='text-lg md:text-xl font-semibold !leading-[170%] text-heading'>Performance Over Time</h3>
        <div className={`${c_24}`}>
          <CardTitle title="Automated interactions" />
        </div>
        <div className={`${c_24}`}>
          <CardTitle title="Automated Interactions by Feature" />
        </div>
      </MainInner >

    </>
  )
}
