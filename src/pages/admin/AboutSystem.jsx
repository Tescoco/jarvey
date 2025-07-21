import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import { c_24 } from '../../utilities/Classes';

export default function AboutSystem() {
  const info = [
    {
      title: 'Server Information',
      list: [
        {
          name: 'PHP versions',
          value: '8.2.4',
          status: null,
        },
        {
          name: 'Laravel versions',
          value: '8.83.29',
          status: null,
        },
        {
          name: 'HTTP host',
          value: 'jarvey.ai',
          status: null,
        },
      ]
    },
    {
      title: 'Extensions',
      list: [
        {
          name: 'openssl',
          value: null,
          status: true,
        },
        {
          name: 'pfo',
          value: null,
          status: false,
        },
        {
          name: 'mbstring',
          value: null,
          status: true,
        },
        {
          name: 'tokenizer',
          value: null,
          status: true,
        },
        {
          name: 'JSON',
          value: null,
          status: true,
        },
        {
          name: 'CURL',
          value: null,
          status: true,
        },
        {
          name: 'gd',
          value: null,
          status: true,
        },
      ]
    },
    {
      title: 'File & Folder permission',
      list: [
        {
          name: '.env',
          value: '',
          status: true,
        },
        {
          name: 'storage/framework/',
          value: '',
          status: true,
        },
        {
          name: 'storage/logs/',
          value: '',
          status: true,
        },
        {
          name: 'bootstrap/cache/',
          value: '',
          status: true,
        },
      ]
    },
  ]

  const config = [
    {
      name: 'File Upload',
      current: 'on',
      recommend: 'on',
      status: true,
    },
    {
      name: 'Max input time',
      current: '20',
      recommend: '20+',
      status: false,
    },
    {
      name: 'File Upload',
      current: 'on',
      recommend: 'on',
      status: true,
    },
    {
      name: 'Max input time',
      current: '20',
      recommend: '20+',
      status: false,
    },
    {
      name: 'File Upload',
      current: 'on',
      recommend: 'on',
      status: true,
    },
    {
      name: 'Max input time',
      current: '20',
      recommend: '20+',
      status: false,
    },
    {
      name: 'File Upload',
      current: 'on',
      recommend: 'on',
      status: true,
    },
    {
      name: 'Max input time',
      current: '20',
      recommend: '20+',
      status: false,
    },
  ]

  const commonClass = 'flex-none w-1/2 block text-[#525866] font-inter text-sm font-normal'
  return (
    <>
      <Top title="System information" />
      <MainInner className='flex flex-col gap-y-5 md:gap-y-6'>
        <div className="flex flex-wrap gap-6">
          {info.map((item, index) => (
            <div className={`${c_24} grow w-full md:w-[calc(100%/12*6-24px)] xl:w-[calc(100%/12*4-24px)] h-max`} key={index}>
              <h4 className='mb-4 md:mb-5'>{item.title}</h4>
              <div className="flex items-center justify-between bg-[#F6F8FA]">
                <span className={`${commonClass} py-2 px-4`}>Name</span>
                <span className={`${commonClass} py-2 px-4`}>Value</span>
              </div>
              {item.list.map((list, i) => (
                <div key={i} className="flex items-center justify-between border-b border-solid border-stroke">
                  <span className={`${commonClass} !font-medium text-heading p-4`}>{list.name}</span>
                  <span className={`${commonClass} !font-medium text-heading p-4`}>
                    {list.value ? list.value
                      :
                      list.status ?
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.3324 5L8.16569 14.1667L3.99902 10" stroke="#1CDF53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> :
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.3324 16.6654L3.99902 3.33203M17.3324 3.33203L3.99902 16.6654" stroke="#FE4333" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    }
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={`${c_24}`}>
          <h4 className='mb-4 md:mb-5'>php.ini Config</h4>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  {["Name", "Current", "Recommended", "Status"].map((item, index) => (
                    <th className='!font-normal !text-[#525866]' key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {config.map((item, index) => (
                  <tr key={index}>
                    <td className='!text-sm !font-medium !text-heading'>{item.name}</td>
                    <td className='!text-sm !font-medium !text-heading'>{item.current}</td>
                    <td className='!text-sm !font-medium !text-heading'>{item.recommend}</td>
                    <td className='!text-sm !font-medium !text-heading'>
                      {item.status ?
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.3324 5L8.16569 14.1667L3.99902 10" stroke="#1CDF53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> :
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.3324 16.6654L3.99902 3.33203M17.3324 3.33203L3.99902 16.6654" stroke="#FE4333" strokeWidth="2" strokeLinecap="round" />
                        </svg>}
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
