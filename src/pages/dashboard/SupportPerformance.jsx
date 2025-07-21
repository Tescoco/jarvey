import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Dropdown from '../../components/Dropdown'
import InfoCard from '../../components/dashboard/InfoCard';
import { c_16, c_24, langList } from '../../utilities/Classes'
import CardTitle from '../../components/dashboard/CardTitle'
import LineChart from '../../components/dashboard/LineChart';
import MatrixChart from '../../components/dashboard/MatrixChart';
import BarChartY from '../../components/dashboard/BarChartY';
import TableFilter from '../../components/TableFilter';
import DoughnutChart from '../../components/dashboard/DoughnutChart';

export default function SupportPerformance() {
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
            title: '30%',
        },
        {
            label: 'Resolution Time',
            marketValue: '12',
            marketVariant: 'success',
            title: '40%',
        },
        {
            label: 'Messages Per Ticket',
            marketValue: '12',
            marketVariant: 'success',
            title: '50%',
        },
        {
            label: 'Closed Tickets',
            marketValue: '12',
            marketVariant: 'success',
            title: '50',
        },
        {
            label: 'Tickets Replied',
            marketValue: '12',
            marketVariant: 'success',
            title: '5,281k',
        },
        {
            label: 'Messages Sent',
            marketValue: '12',
            marketVariant: 'success',
            title: '3,400k',
        },
        {
            label: 'Ticket Handle Time',
            marketValue: '12',
            marketVariant: 'success',
            title: '00:30:14',
        },
        {
            label: 'One Touch Tickets',
            marketValue: '12',
            marketVariant: 'success',
            title: '00,00',
        },
        {
            label: 'Zero Touch Tickets',
            marketValue: '12',
            marketVariant: 'success',
            title: '07,00',
        },
    ]

    const supportPerformance = {
        breakdownData: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Created Tickets',
                    data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
                    borderColor: '#7856FF',
                    backgroundColor: '#7856FF',
                    tension: 0.5,
                    pointBackgroundColor: '#7856FF',
                    pointBorderColor: '#7856FF',
                    pointRadius: 4,
                },
                {
                    label: 'Closed Tickets',
                    data: [22, 25, 30, 26, 32, 35, 39, 36, 32, 38, 41, 49],
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
        },
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
            yPercent: false,
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
            yPercent: false,
        },
    }

    const agentPerformance = [
        {
            name: 'AI Agent Bot',
            firstResponseTime: null,
            resolutionTime: '',
            oneTouchTickets: null,
            onlineTime: '24m 14s',
            messagesSentPerHour: null,
            ticketsRepliedPerHour: null,
            closedTicketsPerHour: '0.83',
            ticketHandleTime: null,
            zeroTouchTickets: '1',
        },
        {
            name: 'AI Agent Bot',
            firstResponseTime: null,
            resolutionTime: null,
            oneTouchTickets: null,
            onlineTime: '24m 14s',
            messagesSentPerHour: null,
            ticketsRepliedPerHour: null,
            closedTicketsPerHour: '0.83',
            ticketHandleTime: null,
            zeroTouchTickets: '1',
        },
    ];
    const channelPerformance = [
        {
            Channel: 'Email',
            CreatedTickets: 6,
            OfCreatedTickets: 100,
            ClosedTickets: 5,
            TicketHandleTime: null,
            FirstResponseTime: null,
            ResolutionTime: null,
            TicketsReplied: 1,
            MessagesSent: 1,
            AverageCSAT: null,
        },
        {
            Channel: 'Email',
            CreatedTickets: 2,
            OfCreatedTickets: 100,
            ClosedTickets: 1,
            TicketHandleTime: null,
            FirstResponseTime: null,
            ResolutionTime: null,
            TicketsReplied: "0",
            MessagesSent: 1,
            AverageCSAT: null,
        },
        {
            Channel: 'Email',
            CreatedTickets: 1,
            OfCreatedTickets: 100,
            ClosedTickets: 2,
            TicketHandleTime: null,
            FirstResponseTime: null,
            ResolutionTime: null,
            TicketsReplied: "0",
            MessagesSent: "0",
            AverageCSAT: null,
        },
    ];
    const scheduleData = [
        { day: "Wednesday", hour: "12:00", count: 1 },
        { day: "Saturday", hour: "07:00", count: 100 },
        { day: "Thursday", hour: "11:00", count: 11 },
    ];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hours = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00"];
    const getColor = (count) => {
        if (!count) return "bg-white";
        if (count > 0) return "bg-primary";
        return "bg-red-50";
    };

    return (
        <>
            <Top title="Support Performance">
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
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
                    {info.map((item, index) => (
                        <InfoCard key={index} item={item} />
                    ))}
                </div>

                <div className={`${c_24}`}>
                    <CardTitle title="Created vs. Closed Tickets" />
                    <LineChart setData={supportPerformance.breakdownData} />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
                    <div className={`${c_24} xl:col-span-6`}>
                        <CardTitle title="Tickets Replied" />
                        <LineChart setData={supportPerformance.revenue} />
                    </div>
                    <div className={`${c_24} xl:col-span-6 flex flex-col`}>
                        <CardTitle title="Messages Sent" />
                        <LineChart setData={supportPerformance.cost} />
                    </div>
                </div>

                <div className={`${c_24}`}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
                        <h4>Agent Performance</h4>
                        <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
                    </div>
                    <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                        <table className="table">
                            <thead className="bg-gray-50">
                                <tr>
                                    {['Agent', 'First Response Time', 'Resolution Time', 'One Touch Tickets', "Online Time", "Messages Sent Per Hour", "Tickets Replied Per Hour", 'Closed Tickets Per Hour', 'Ticket Handle Time', "Zero Touch Tickets",].map((item, index) => (
                                        <th
                                            width={200}
                                            key={index}
                                            className="px-6 py-3 text-left text-xs font-medium text-nowrap uppercase tracking-wider"
                                        >
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {agentPerformance.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 flex items-center justify-center text-xs text-white rounded-full bg-[#F58D86]">
                                                    AA
                                                </div>
                                                <h6 className="text-sm font-medium">{item.name}</h6>
                                            </div>
                                        </td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.firstResponseTime ? item.firstResponseTime : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.resolutionTime ? item.resolutionTime : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.oneTouchTickets ? item.oneTouchTickets : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.onlineTime ? item.onlineTime : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.messagesSentPerHour ? item.messagesSentPerHour : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.ticketsRepliedPerHour ? item.ticketsRepliedPerHour : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.closedTicketsPerHour ? item.closedTicketsPerHour : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.ticketHandleTime ? item.ticketHandleTime : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.zeroTouchTickets ? item.zeroTouchTickets : '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={`${c_24}`}>
                    <div className="flex items-center flex-wrap gap-2 mb-4 md:mb-6">
                        <h4>Busiest Times of the Week</h4>
                        <TableFilter searchClass='max-w-[160px]' className='!mb-0 ml-auto' />
                    </div>
                    <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm text-heading font-medium !leading-[140%] mb-4 md:mb-6">
                        <p>Least Busy</p>
                        <div className='flex items-center gap-2'>
                            <div className="flex items-center">
                                <div className="size-5 bg-[#7856FF] opacity-[20%]"></div>
                                <div className="size-5 bg-[#7856FF] opacity-[40%]"></div>
                                <div className="size-5 bg-[#7856FF]"></div>
                            </div>
                            <p>Busiest</p>
                        </div>
                        <div className='flex items-center md:gap-2'>
                            <svg className='flex-none' width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5" y="7" width="20" height="20" fill="#FE4333" />
                                <line x1="11.433" y1="2.25" x2="1.43301" y2="19.5705" stroke="white" />
                                <line x1="10.433" y1="0.25" x2="0.433012" y2="17.5705" stroke="white" />
                                <line x1="12.433" y1="5.25" x2="2.43301" y2="22.5705" stroke="white" />
                                <line x1="14.433" y1="6.25" x2="4.43301" y2="23.5705" stroke="white" />
                                <path d="M17.5 5.5L4.5 27" stroke="white" />
                                <path d="M20.5 5L6.5 28.5" stroke="white" />
                                <path d="M22.5 6L9.5 28" stroke="white" />
                                <path d="M25.0017 5.50047L12.4342 27.5708" stroke="white" />
                                <path d="M25.5 9.5L14.4342 28.5709" stroke="white" />
                                <line x1="26.433" y1="12.25" x2="16.433" y2="29.5705" stroke="white" />
                                <line x1="28.433" y1="13.25" x2="18.433" y2="30.5705" stroke="white" />
                                <line x1="30.433" y1="14.25" x2="20.433" y2="31.5705" stroke="white" />
                            </svg>
                            <p>Business Hours</p>
                        </div>
                    </div>
                    <div className="overflow-x-auto -mx-6">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="!px-6">Hour</th>
                                    {days.map((day) => (
                                        <th key={day} className="!text-center !font-light">
                                            {day}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {hours.map((hour) => (
                                    <tr key={hour}>
                                        <td className='!text-heading !px-6 !font-medium h-[54px]'>{hour}</td>
                                        {days.map((day) => {
                                            const cell = scheduleData.find(
                                                (entry) => entry.day === day && entry.hour === hour
                                            );
                                            return (
                                                <td key={day + hour} data-kay={day + hour} className={`h-[54px] !p-0 border-l-2 border-dashed ${cell?.count ? 'border-[#FE4234]' : 'border-stroke'}`}>
                                                    <div className={`${getColor(cell?.count)} h-full w-full flex items-center justify-center ${cell?.count ? 'text-white' : 'text-heading'}`}>
                                                        {cell?.count || "-"}
                                                    </div>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className={`${c_24}`}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
                        <h4>Channel Performance</h4>
                        <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
                    </div>
                    <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                        <table className="table">
                            <thead className="bg-gray-50">
                                <tr>
                                    {['Channel', 'Created Tickets', '% Of Created Tickets', 'Closed Tickets', "Ticket Handle Time", "First Response Time", "Resolution Time", "Tickets Replied", "Tickets Replied Messages Sent", "Average CSAT"].map((item, index) => (
                                        <th key={index} className="px-6 py-3 text-left text-xs !font-bold ">
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {channelPerformance.map((item, index) => (
                                    <tr key={index}>
                                        <td className="!text-heading px-6 py-4 !font-bold">{item.Channel ? item.Channel : '-'}</td>
                                        <td className="!text-primary px-6 py-4 !font-semibold">{item.CreatedTickets ? item.CreatedTickets : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.OfCreatedTickets}%</td>
                                        <td className="!text-primary px-6 py-4 !font-semibold">{item.ClosedTickets ? item.ClosedTickets : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.TicketHandleTime ? item.TicketHandleTime : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.FirstResponseTime ? item.FirstResponseTime : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.ResolutionTime ? item.ResolutionTime : '-'}</td>
                                        <td className="!text-primary px-6 py-4 !font-semibold">{item.TicketsReplied ? item.TicketsReplied : '-'}</td>
                                        <td className="!text-primary px-6 py-4 !font-semibold">{item.MessagesSent ? item.MessagesSent : '-'}</td>
                                        <td className="!text-heading px-6 py-4 !font-semibold">{item.AverageCSAT ? item.AverageCSAT : '-'}</td>
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
