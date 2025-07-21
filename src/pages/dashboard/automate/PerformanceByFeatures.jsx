import React from 'react'
import Top from '../../../layouts/Top'
import Dropdown from '../../../components/Dropdown'
import MainInner from '../../../components/MainInner'
import TableFilter from '../../../components/TableFilter';
import { c_24, langList } from '../../../utilities/Classes'
import Checkbox from '../../../components/Checkbox';
import Alert from '../../../components/Alert';


export default function PerformanceByFeatures() {

  const flows = [
    {
      flow: 'Shelf life information',
      drop: '0',
      rate: '100',
      automated: '2',
      served: '0',
    },
    {
      flow: 'Shipping policy',
      drop: '1',
      rate: '80',
      automated: '4',
      served: '0',
    },
    {
      flow: 'Shelf life information',
      drop: '0',
      rate: '0',
      automated: '2',
      served: '1',
    },
  ]

  const recommendations = [
    {
      items: [
        {
          label: 'Article Recommendation Performance',
          des: 'There is no data for this period.',
        },
        {
          label: 'There is no data for this period.',
          des: 'There is no data for this period.',
        },
        {
          label: 'Products with most issues and return requests',
          des: 'There is no data for this period.',
        },
      ]
    }
  ]

  const productTable = [
    {
      name: 'Product A',
      type: 'Defective Parts',
      generate: '520',
      avg: '34',
      rating: '18',
      status: {
        name: 'Flagged',
        variant: 'danger'
      }
    },
    {
      name: 'Product B',
      type: 'Late Delivery',
      generate: '430',
      avg: '34',
      rating: '10',
      status: {
        name: 'Under Review',
        variant: 'warning'
      }
    },
    {
      name: 'Product C',
      type: 'Malfunctioning',
      generate: '390',
      avg: '34',
      rating: '15',
      status: {
        name: 'Flagged',
        variant: 'danger'
      }
    },
    {
      name: 'Product D',
      type: 'Incorrect Item',
      generate: '350',
      avg: '34',
      rating: '12',
      status: {
        name: 'Under Review',
        variant: 'warning'
      }
    },
    {
      name: 'Product E',
      type: 'Poor Quality',
      generate: '310',
      avg: '34',
      rating: '12',
      status: {
        name: 'Not Flagged',
        variant: 'primary'
      }
    },
  ]

  const mostTable = [
    {
      id: 'FR-OO1',
      category: 'Dark Mode',
      description: 'Billing',
      priority: 'High',
      status: {
        name: 'In Progress',
        variant: 'success'
      }
    },
    {
      id: 'FR-002',
      category: 'Account Access',
      description: 'Reduce steps in the checkout flow',
      priority: 'High',
      status: {
        name: 'Resolved',
        variant: 'primary'
      }
    },
    {
      id: 'FR-OO3',
      category: 'Performance',
      description: 'Support for multiple languages',
      priority: 'Medium',
      status: {
        name: 'In Progress',
        variant: 'success'
      }
    },
   
    {
      id: 'FR-OO5',
      category: 'Billing',
      description: 'Points-based rewards for purchases',
      priority: 'Medium',
      status: {
        name: 'Pending',
        variant: 'warning'
      }
    },
    {
      id: 'FR-OO4',
      category: 'Shipping',
      description: 'More filter options for products',
      priority: 'High',
      status: {
        name: 'Resolved',
        variant: 'primary'
      }
    },
  ]
  return (
    <>
      <Top title="Automate > Performance by Features" >
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
        <div className={`${c_24} mb-4 md:mb-5 lg:mb-6`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Flows Performance</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' csv />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Flows Performance', 'Drop Off', 'Automation Rate', 'Automated By Flow', 'Served By An Agent After Flow'].map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {flows.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.flow}</td>
                    <td className='!text-heading !font-medium'>{item.drop}</td>
                    <td className='!font-medium !text-heading'>
                      <div className="flex items-center gap-3">
                        {item.rate}%
                        <span className='text-primary font-medium'>Analyze Flow</span>
                      </div>
                    </td>
                    <td className='!font-medium !text-heading'>{item.automated}</td>
                    <td className='!font-medium !text-heading'>{item.served}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${c_24} mb-4 md:mb-5 lg:mb-6`}>
          <div className="overflow-y-auto">
            {recommendations.map((item, index) => (
              <div className="grid grid-cols-1 gap-y-3 md:gap-y-4" key={index}>
                {item.items.map((list, i) => (
                  <label key={i} htmlFor={`recommendations_${i + 1}`} className="flex items-center gap-2 mb-0 cursor-pointer pb-3 md:pb-4 last:p-0 border-b last:border-b-0 border-solid border-stroke">
                    <Checkbox className='mb-0' type="checkbox" id={`recommendations_${i + 1}`} />
                    <span className='text-sm !leading-normal text-[#858585]'>
                      <span className='font-medium text-[#0A0D14]'>{list.label} - </span> {list.des}
                    </span>
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={`${c_24} mb-4 md:mb-5 lg:mb-6`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Most Frequent Issues</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Reason ID', 'Description', 'Category', 'Frequency', 'Status'].map((item, index) => (
                    <th key={index} className={`${item === 'Avg. Order Value ($)' || item === 'Customer Rating' ? '!text-center' : ''}`}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mostTable.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.id}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td className='!font-medium !text-heading'>{item.priority}</td>
                    <td><Alert text={item.status.name} variant={item.status.variant} className='min-w-[90px]' /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>category Requests Customer</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Rank', 'Product Name', 'Issue Type', 'Tickets Generated', 'Return Rate (%)', 'Status'].map((item, index) => (
                    <th key={index} className={`${item === 'Tickets Generated' || item === "Return Rate (%)" ? '!text-center' : ''}`}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {productTable.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td className='!text-center'>{item.generate}</td>
                    <td className='!text-center'>{item.rating}%</td>
                    <td><Alert text={item.status.name} variant={item.status.variant} className='min-w-[90px]' /></td>
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
