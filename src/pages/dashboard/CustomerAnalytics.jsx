import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Dropdown from '../../components/Dropdown'
import InfoCard from '../../components/dashboard/InfoCard';
import { c_24, langList } from '../../utilities/Classes'
import CardTitle from '../../components/dashboard/CardTitle'
import LineChart from '../../components/dashboard/LineChart';
import BarChart from '../../components/dashboard/BarChart';
import DoughnutChart from '../../components/dashboard/DoughnutChart';
import TableFilter from '../../components/TableFilter';
import Alert from '../../components/Alert';

export default function CustomerAnalytics() {
  const info = [
    {
      label: 'Total Ticket Volume',
      marketValue: '15',
      marketVariant: 'success',
      title: '$50,846.90',
    },
    {
      label: 'Response Times',
      marketValue: '12',
      marketVariant: 'success',
      title: '00:30:14',
    },
    {
      label: 'Agent Performance',
      marketValue: '10',
      marketVariant: 'danger',
      title: '12,720k',
    },
    {
      label: 'Automation Rate',
      marketValue: '09',
      marketVariant: 'success',
      title: '90%',
    },
  ]

  const customerSupport = {
    customerDoughnutData: [
      {
        name: 'Order Inquiries',
        percent: 50,
        color: '#7855FF',
      },
      {
        name: 'Returns',
        percent: 35,
        color: '#FFC563',
      },
      {
        name: 'Complaints',
        percent: 15,
        color: '#FE4234',
      },
    ],
    complaintsDoughnutData: [
      {
        name: 'Customers',
        percent: 50,
        color: '#166448',
      },
      {
        name: 'Complaints',
        percent: 25,
        color: '#FE4234',
      },
    ],
    breakdownData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Open',
          data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
          borderColor: '#7856FF',
          backgroundColor: '#7856FF',
          tension: 0.5,
          pointBackgroundColor: '#7856FF',
          pointBorderColor: '#7856FF',
          pointRadius: 4,
        },
        {
          label: 'Pending',
          data: [22, 25, 30, 26, 32, 35, 39, 36, 32, 38, 41, 49],
          borderColor: '#FFC563',
          backgroundColor: '#FFC563',
          tension: 0.5,
          pointBackgroundColor: '#FFC563',
          pointBorderColor: '#FFC563',
          pointRadius: 4,
        },
        {
          label: 'Closed',
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
  }

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
      id: 'FR-OO4',
      category: 'Shipping',
      description: 'More filter options for products',
      priority: 'High',
      status: {
        name: 'Resolved',
        variant: 'primary'
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

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
          <div className={`${c_24} xl:col-span-8`}>
            <CardTitle title="Ticket Trends" />
            <BarChart setData={''} />
          </div>
          <div className={`${c_24} xl:col-span-4 flex flex-col`}>
            <CardTitle title="Customer Support" dropdown={false} />
            <DoughnutChart info={customerSupport.customerDoughnutData} />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
          <div className={`${c_24} xl:col-span-4 flex flex-col`}>
            <CardTitle title="Complaints vs. Customers" dropdown={false} />
            <DoughnutChart info={customerSupport.complaintsDoughnutData} />
          </div>
          <div className={`${c_24} xl:col-span-8`}>
            <CardTitle title="Breakdown by Ticket Status" />
            <LineChart setData={customerSupport.breakdownData} />
          </div>
        </div>

        <div className={`${c_24}`}>
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
