import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import { c_24, search } from '../../utilities/Classes'
import LineChart from '../../components/dashboard/LineChart'
import CardTitle from '../../components/dashboard/CardTitle'
import Input from '../../components/Input'
import Switch from '../../components/Switch'

import img from '../../assets/img/img1.png'
export default function Visitors() {
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
      legend: false,
    },
  }

  const notify = [
    {
      Language: '137.45.44.217',
      img: img,
      Visited: '1 second ago',
    },
    {
      Language: '137.45.44.217',
      img: img,
      Visited: '1 second ago',
    },
    {
      Language: '137.45.44.217',
      img: img,
      Visited: '1 second ago',
    },
    {
      Language: '137.45.44.217',
      img: img,
      Visited: '1 second ago',
    },
    {
      Language: '137.45.44.217',
      img: img,
      Visited: '1 second ago',
    },
    {
      Language: '137.45.44.217',
      img: img,
      Visited: '1 second ago',
    },
    {
      Language: '137.45.44.217',
      img: img,
      Visited: '1 second ago',
    },
    {
      Language: '137.45.44.217',
      img: img,
      Visited: '1 second ago',
    },
  ]
  return (
    <>
      <Top />
      <MainInner>
        <div className={`${c_24} mb-4 md:mb-5 lg:mb-6`}>
          <CardTitle title="Visitors" />
          <LineChart setData={supportPerformance.breakdownData} />
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className='text-lg text-heading font-semibold !leading-[150%]'>IP List</h3>
              <Input className='' type="text" placeholder="Search..." leftIcon={search} inputClass='!h-[36px] !w-[174px]' />
            </div>
            <button className='btn min-w-[64px] h-9'>Reset</button>
          </div>
          <div className="mt-6 overflow-x-auto ">
            <table className="table">
              <thead>
                <tr>
                  {["#", "Language", "Blocked", "Last Visited", "Actions",].map((item, index) => (
                    <th className='last:text-right' key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {notify.map((item, index) => (
                  <tr key={index} className='!border-b'>
                    <td className='!font-medium !text-heading !py-4'>{index + 1} </td>
                    <td className=''>
                      <div className="flex items-center gap-2">
                        <img src={item.img} alt="" />
                        <p className='text-sm !text-heading !font-semibold'>{item.Language}</p>
                      </div>
                    </td>
                    <td className=''>
                      <Switch />
                    </td>
                    <td className='text-sm !text-heading !font-semibold'>{item.Visited}</td>
                    <td className=''>
                      <div className="flex items-center justify-end gap-3">
                        <button className='hover:scale-105'>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.75 7C8.75 7.46413 8.56563 7.90925 8.23744 8.23744C7.90925 8.56563 7.46413 8.75 7 8.75C6.53587 8.75 6.09075 8.56563 5.76256 8.23744C5.43437 7.90925 5.25 7.46413 5.25 7C5.25 6.53587 5.43437 6.09075 5.76256 5.76256C6.09075 5.43437 6.53587 5.25 7 5.25C7.46413 5.25 7.90925 5.43437 8.23744 5.76256C8.56563 6.09075 8.75 6.53587 8.75 7Z" stroke="#7856FF" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M1.16602 7.0013C2.09935 4.61139 4.27868 2.91797 6.99935 2.91797C9.72002 2.91797 11.8993 4.61139 12.8327 7.0013C11.8993 9.39122 9.72002 11.0846 6.99935 11.0846C4.27868 11.0846 2.09935 9.39122 1.16602 7.0013Z" stroke="#7856FF" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </button>
                        <button className='hover:scale-105'>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.28309 11.3056L3.78206 11.2734L3.28309 11.3056ZM10.7156 11.3056L10.2166 11.2734V11.2734L10.7156 11.3056ZM1.60352 2.85547C1.32737 2.85547 1.10352 3.07933 1.10352 3.35547C1.10352 3.63161 1.32737 3.85547 1.60352 3.85547V2.85547ZM12.3952 3.85547C12.6713 3.85547 12.8952 3.63161 12.8952 3.35547C12.8952 3.07933 12.6713 2.85547 12.3952 2.85547V3.85547ZM6.18685 6.27214C6.18685 5.99599 5.96299 5.77214 5.68685 5.77214C5.41071 5.77214 5.18685 5.99599 5.18685 6.27214H6.18685ZM5.18685 9.48047C5.18685 9.75661 5.41071 9.98047 5.68685 9.98047C5.96299 9.98047 6.18685 9.75661 6.18685 9.48047H5.18685ZM8.81185 6.27214C8.81185 5.99599 8.58799 5.77214 8.31185 5.77214C8.03571 5.77214 7.81185 5.99599 7.81185 6.27214H8.81185ZM7.81185 9.48047C7.81185 9.75661 8.03571 9.98047 8.31185 9.98047C8.58799 9.98047 8.81185 9.75661 8.81185 9.48047H7.81185ZM8.77497 3.4801C8.8438 3.74752 9.11639 3.90852 9.38381 3.83969C9.65124 3.77086 9.81223 3.49827 9.7434 3.23084L8.77497 3.4801ZM2.77018 3.35547L2.27122 3.38766L2.78413 11.3378L3.28309 11.3056L3.78206 11.2734L3.26915 3.32328L2.77018 3.35547ZM4.44734 12.3971V12.8971H9.55136V12.3971V11.8971H4.44734V12.3971ZM10.7156 11.3056L11.2146 11.3378L11.7275 3.38766L11.2285 3.35547L10.7296 3.32328L10.2166 11.2734L10.7156 11.3056ZM11.2285 3.35547V2.85547H2.77018V3.35547V3.85547H11.2285V3.35547ZM1.60352 3.35547V3.85547H2.77018V3.35547V2.85547H1.60352V3.35547ZM11.2285 3.35547V3.85547H12.3952V3.35547V2.85547H11.2285V3.35547ZM9.55136 12.3971V12.8971C10.4302 12.8971 11.158 12.2148 11.2146 11.3378L10.7156 11.3056L10.2166 11.2734C10.194 11.6242 9.90289 11.8971 9.55136 11.8971V12.3971ZM3.28309 11.3056L2.78413 11.3378C2.84071 12.2148 3.56852 12.8971 4.44734 12.8971V12.3971V11.8971C4.09581 11.8971 3.80469 11.6242 3.78206 11.2734L3.28309 11.3056ZM5.68685 6.27214H5.18685V9.48047H5.68685H6.18685V6.27214H5.68685ZM8.31185 6.27214H7.81185V9.48047H8.31185H8.81185V6.27214H8.31185ZM6.99936 1.60547V2.10547C7.85294 2.10547 8.57142 2.68926 8.77497 3.4801L9.25918 3.35547L9.7434 3.23084C9.4289 2.00891 8.32027 1.10547 6.99936 1.10547V1.60547ZM4.73954 3.35547L5.22376 3.4801C5.4273 2.68926 6.14579 2.10547 6.99936 2.10547V1.60547V1.10547C5.67846 1.10547 4.56982 2.00891 4.25532 3.23084L4.73954 3.35547Z" fill="#111111" fillOpacity="0.7" />
                        </svg>
                        </button>
                      </div>
                    </td>
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
