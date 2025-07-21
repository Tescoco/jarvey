import React from 'react'
import Top from '../../../layouts/Top'
import MainInner from '../../../components/MainInner'
import InfoCard from '../../../components/dashboard/InfoCard';
import { c_24, langList} from '../../../utilities/Classes';
import TableFilter from '../../../components/TableFilter';
import Dropdown from '../../../components/Dropdown';

export default function Revenue() {
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
      title: '3 h',
    },
    {
      label: 'Messages Per Ticket',
      marketValue: '12',
      marketVariant: 'success',
      title: '50',
    },

  ];

  const tableData = [
    {
      Agent: 'Alex Green',
      Assigned: '197',
      Converted: '32',
      Ratio: '16%',
      Sales: '31',
    },
    {
      Agent: 'Alex Green',
      Assigned: '197',
      Converted: '32',
      Ratio: '16%',
      Sales: '31',
    },
    {
      Agent: 'Alex Green',
      Assigned: '197',
      Converted: '32',
      Ratio: '16%',
      Sales: '31',
    },
    {
      Agent: 'Alex Green',
      Assigned: '197',
      Converted: '32',
      Ratio: '16%',
      Sales: '31',
    },
    {
      Agent: 'Alex Green',
      Assigned: '197',
      Converted: '32',
      Ratio: '16%',
      Sales: '31',
    },
    {
      Agent: 'Alex Green',
      Assigned: '197',
      Converted: '32',
      Ratio: '16%',
      Sales: '31',
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
      <MainInner>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 flex-wrap mb-4 md:mb-5 lg:mb-6">
          {info.map((item, index) => (
            <InfoCard key={index} item={item} className='' />
          ))}
        </div>
        <div className={`${c_24}`}>
          <div className="md:flex items-center justify-between mb-4 md:mb-5 lg:mb-6">
            <h3 className='text-lg text-heading font-inter font-semibold !leading-[170%]'>Sales Per Agent</h3>
            <TableFilter className="!mb-0 grow md:grow-0" searchClass='mr-0 w-full md:max-w-[160px]' />
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  {["Agent", "Ticket Assigned", "Ticket Converted", "Conversion Ratio", "Sales"].map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td className='text-sm !text-heading !font-medium'>{item.Agent}</td>
                    <td className='text-sm !text-[#858585] !font-medium'>{item.Assigned}</td>
                    <td className='text-sm !text-[#858585] !font-medium'>{item.Converted}</td>
                    <td className='text-sm !text-[#858585] !font-medium'>{item.Ratio}</td>
                    <td className='text-sm !text-[#858585] !font-medium'>{item.Sales}</td>
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
