import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Dropdown from '../../components/Dropdown'
import InfoCard from '../../components/dashboard/InfoCard';
import { c_24, langList } from '../../utilities/Classes'
import CardTitle from '../../components/dashboard/CardTitle'
import LineChart from '../../components/dashboard/LineChart';
import TableFilter from '../../components/TableFilter';

export default function RevenueCost() {
    const info = [
        {
            label: 'Ticket Created',
            marketValue: '15',
            marketVariant: 'success',
            title: '508',
        },
        {
            label: 'Total Revenue',
            marketValue: '15',
            marketVariant: 'success',
            title: '$50,846.90',
        },
        {
            label: 'Revenue by Customer Support',
            marketValue: '12',
            marketVariant: 'success',
            title: '$10,982.10',
        },
        {
            label: 'Cost saving',
            marketValue: '12',
            marketVariant: 'success',
            title: '$10,342',
        },
    ]

    const chartInfo = {
        revenue: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: 'Monthly Data',
                    data: [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 44, 48],
                    borderColor: '#7856FF',
                    backgroundColor: '#7856FF',
                    tension: 0.5,
                    pointBackgroundColor: '#7856FF',
                    pointBorderColor: '#7856FF',
                    pointRadius: 4,
                }
            ],
            min: 0,
            max: 60,
            legend: false,
            yPercent: true,
        },
        cost: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: 'Monthly Data',
                    data: [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 44, 48],
                    borderColor: '#176448',
                    backgroundColor: '#176448',
                    tension: 0.5,
                    pointBackgroundColor: '#176448',
                    pointBorderColor: '#176448',
                    pointRadius: 4,
                }
            ],
            min: 0,
            max: 60,
            legend: false,
            yPercent: true,
        },
    }

    const salesAgent = [
        {
            agent: 'Alex Green',
            assigned: '197',
            converted: '32',
            ratio: '16%',
            sales: '31',
        },
        {
            agent: 'Alex Green',
            assigned: '197',
            converted: '32',
            ratio: '16%',
            sales: '31',
        },
        {
            agent: 'Alex Green',
            assigned: '197',
            converted: '32',
            ratio: '16%',
            sales: '31',
        },
        {
            agent: 'Alex Green',
            assigned: '197',
            converted: '32',
            ratio: '16%',
            sales: '31',
        },
        {
            agent: 'Alex Green',
            assigned: '197',
            converted: '32',
            ratio: '16%',
            sales: '31',
        },
        {
            agent: 'Alex Green',
            assigned: '197',
            converted: '32',
            ratio: '16%',
            sales: '31',
        },
        {
            agent: 'Alex Green',
            assigned: '197',
            converted: '32',
            ratio: '16%',
            sales: '31',
        },
        {
            agent: 'Alex Green',
            assigned: '197',
            converted: '32',
            ratio: '16%',
            sales: '31',
        },
    ]

    return (
        <>
            <Top title="Revenue & Cost Impact">
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
                    <div className={`${c_24} xl:col-span-6`}>
                        <CardTitle title="Support-Driven Revenue" />
                        <LineChart setData={chartInfo.revenue} />
                    </div>
                    <div className={`${c_24} xl:col-span-6 flex flex-col`}>
                        <CardTitle title="Cost Savings via AI Automation" />
                        <LineChart setData={chartInfo.cost} />
                    </div>
                </div>

                <div className={`${c_24}`}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
                        <h4>Sales Per Agent</h4>
                        <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
                    </div>
                    <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                        <table className="table">
                            <thead className='!z-10'>
                                <tr>
                                    {['Agent', 'Ticket Assigned', 'Ticket Converted', 'Conversion Ratio', 'Sales'].map((item, index) => (
                                        <th key={index}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {salesAgent.map((item, index) => (
                                    <tr key={index}>
                                        <td className='!font-medium !text-heading' width={600}>{item.agent}</td>
                                        <td>{item.assigned}</td>
                                        <td>{item.converted}</td>
                                        <td>{item.ratio}</td>
                                        <td>{item.sales}</td>
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
