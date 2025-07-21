import React from 'react'
import Top from '../../../layouts/Top'

import MainInner from '../../../components/MainInner'
import Dropdown from '../../../components/Dropdown'
import InfoCard from '../../../components/dashboard/InfoCard';
import { c_24 } from '../../../utilities/Classes'
import CardTitle from '../../../components/dashboard/CardTitle'
import LineChart from '../../../components/dashboard/LineChart';
import DoughnutChart from '../../../components/dashboard/DoughnutChart';
import TableFilter from '../../../components/TableFilter';

export default function HelpCenter() {

  const views = [
    {
      label: 'Article Views',
      marketValue: '15',
      marketVariant: 'success',
      title: '8',
    },
    {
      label: 'Searches',
      marketValue: '12',
      marketVariant: 'success',
      title: '10',
    },
  ]


  const searchResults = [
    {
      name: 'No Articles Shown',
      percent: 75,
      color: '#166448',
    },
    {
      name: 'Articles Shown',
      percent: 25,
      color: '#FFC563',
    },
  ]
  const agentPerformance = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Data',
        data: [-20, -25, -30, -28, -20, -10, 0, 10, 20, 18, 10, 0],
        borderColor: '#176448',
        backgroundColor: '#176448',
        tension: 0.5,
        pointBackgroundColor: '#176448',
        pointBorderColor: '#176448',
        pointRadius: 4,
      }
    ],
    legend: false,
    min: -80,
    max: 80,
  }


  const results = [...Array(4)].map(() => ({
    team: "h",
    count: 1,
    clicked: 0,
    rate: 0,
  }));


  const performance = [
    {
      id: 'How much does shipping cost? copy',
      views: 1,
      rating: "-",
      like: {
        like: '0',
        desLike: '0',
      },
      update: 'Thursday',
    },
    {
      id: 'Do you offer refunds or exchanges?',
      views: 1,
      rating: "-",
      like: {
        like: '0',
        desLike: '0',
      },
      update: 'Thursday',
    },
    {
      id: 'How much does shipping cost? copy',
      views: 1,
      rating: "-",
      like: {
        like: '0',
        desLike: '0',
      },
      update: 'Thursday',
    },
  ]

  const tags = [
    {
      name: "return",
      value: 1,
    },
    {
      name: "shel",
      value: 1,
    },
    {
      name: "shelf",
      value: 1,
    },
    {
      name: "returr",
      value: 1,
    },
    {
      name: "poli",
      value: 1,
    },
    {
      name: "ret",
      value: 1,
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
        </div>
      </Top>
      <MainInner className='flex flex-col gap-4 md:gap-5 lg:gap-6'>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:gap-4 ">
            {views.map((item, index) => (
              <InfoCard key={index} item={item} className='w-full h-[calc(50%-8px)] xl:min-w-[200px] 2xl:min-w-max flex flex-col justify-between' />
            ))}
          </div>
          <div className={`${c_24}`}>
            <CardTitle title="Search Results" dropdown={false} />
            <DoughnutChart info={searchResults} />
          </div>
        </div>
        <div className={`${c_24}`}>
          <CardTitle title="Article views" />
          <LineChart className='h-[280px]' setData={agentPerformance} />
        </div>
        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Performance By Articles</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Article', 'Views', 'Rating', 'like', "Last Updated"].map((item, index) => (
                    <th key={index}>
                      {item === "like" ?
                        <div className='flex items-center gap-3'>
                          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.1263 8.95817H3.6263C3.16606 8.95817 2.79297 9.33127 2.79297 9.7915V16.0415C2.79297 16.5017 3.16606 16.8748 3.6263 16.8748H6.1263M6.1263 16.8748V9.1665L9.43527 2.74321C9.57817 2.46582 9.86507 2.2915 10.1771 2.2915C11.1999 2.2915 11.9853 3.2043 11.8278 4.21492L11.3481 7.2915H15.7171C17.2477 7.2915 18.4189 8.65446 18.1886 10.1676L17.4912 14.7509C17.3053 15.9724 16.2551 16.8748 15.0196 16.8748H6.1263Z" stroke="#FFC563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>|</span>
                          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.878 9.04167H15.3763C15.8365 9.04167 16.2096 8.66857 16.2096 8.20833V1.95833C16.2096 1.4981 15.8365 1.125 15.3763 1.125H12.878M12.878 1.125V8.83333L9.57085 15.2565C9.42798 15.5339 9.13753 15.7083 8.82544 15.7083V15.7083C7.80313 15.7083 7.02203 14.7955 7.17952 13.7849L7.65895 10.7083H3.2922C1.76243 10.7083 0.591791 9.34537 0.821933 7.83223L1.51904 3.24889C1.70481 2.02748 2.75447 1.125 3.9893 1.125H12.878Z" stroke="#FFC563" strokeWidth="1.25" strokeLinejoin="round" />
                          </svg>
                        </div> :
                        <>
                          {item}
                        </>
                      }
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {performance.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.id}</td>
                    <td className='!font-medium'>{item.views}</td>
                    <td className=''>{item.rating}</td>
                    <td className='!text-heading'>
                      <div className="flex items-center gap-3 pl-3">
                        <span>{item.like.like} </span>
                        <span>|</span>
                        <span>{item.like.desLike} </span>
                      </div>
                    </td>
                    <td className="!text-heading !font-medium">
                      {item.update}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
          <div className={`${c_24} col-span-2 gap-4 md:gap-6`}>
            <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
              <h4>Search Terms with Results</h4>
              <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
            </div>
            <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
              <table className="table">
                <thead>
                  <tr>
                    {["Search Term", 'Search Count', 'Article Clicked', 'Click - Through Rate'].map((item, index) => (
                      <th key={index} className="" > {item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {results.map((item, index) => (
                    <tr key={index}>
                      <td className='!font-medium !text-heading'>{item.team}</td>
                      <td className=''>{item.count}</td>
                      <td className=''>{item.clicked}</td>
                      <td className=''>{item.rate}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className={`${c_24}`}>
            <CardTitle title="No Search Results" dropdown={false} className="w-full" />
            <div className="flex items-center justify-between border-b border-stroke pb-1">
              <p className='text-xs'>Search Term</p>
              <p className='text-xs'>Tags</p>
            </div>
            <ul className='w-full'>
              {tags.map((item, index) => (
                <li className="flex items-center justify-between w-full text-heading font-medium py-2.5 border-b border-stroke text-xs" key={index}>
                  <p className=''>{item.name}</p>
                  <p>{item.value} </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MainInner >

    </>
  )
}
