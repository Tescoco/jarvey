
import Input from '../Input'
import Dropdown from '../Dropdown';
import Switch from '../Switch'

import viewStyle_1 from '../../assets/img/layout-img.png'
import viewStyle_2 from '../../assets/img/layout-img2.png'
import { useState } from 'react';
import { langList } from '../../utilities/Classes';
import CountryListWithFlag from '../CountryListWithFlag';

export default function Appearance() {
  const Branding = [
    {
      title: 'Standard logo',
      icon: (<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00033 13.3337C10.222 13.3337 12.8337 10.722 12.8337 7.50033C12.8337 4.27866 10.222 1.66699 7.00033 1.66699C3.77866 1.66699 1.16699 4.27866 1.16699 7.50033C1.16699 10.722 3.77866 13.3337 7.00033 13.3337Z" stroke="#858585" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 9.83366V7.50033M7 5.16699H7.00583" stroke="#858585" strokeLinecap="round" strokeLinejoin="round" />
      </svg>),
      path: (<label htmlFor='drop' className={`relative z-[1] rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[201px] flex items-center flex-col justify-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
          <path d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337" stroke="#7856FF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={`mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs`}>Drop your image here or <span className={`block text-primary underline`}>browse</span></span>
        <input type="file" id="drop" className='hidden' name="" placeholder="" />
      </label>),
    },
    {
      title: 'White logo',
      icon: (<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00033 13.3337C10.222 13.3337 12.8337 10.722 12.8337 7.50033C12.8337 4.27866 10.222 1.66699 7.00033 1.66699C3.77866 1.66699 1.16699 4.27866 1.16699 7.50033C1.16699 10.722 3.77866 13.3337 7.00033 13.3337Z" stroke="#858585" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 9.83366V7.50033M7 5.16699H7.00583" stroke="#858585" strokeLinecap="round" strokeLinejoin="round" />
      </svg>),
      path: (<label htmlFor='drop' className={`relative z-[1] rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[201px] flex items-center flex-col justify-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
          <path d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337" stroke="#7856FF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={`mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs`}>Drop your image here or <span className={`block text-primary underline`}>browse</span></span>
        <input type="file" id="drop" className='hidden' name="" placeholder="" />
      </label>),
    },
    {
      title: 'Favicon',
      icon: (<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00033 13.3337C10.222 13.3337 12.8337 10.722 12.8337 7.50033C12.8337 4.27866 10.222 1.66699 7.00033 1.66699C3.77866 1.66699 1.16699 4.27866 1.16699 7.50033C1.16699 10.722 3.77866 13.3337 7.00033 13.3337Z" stroke="#858585" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 9.83366V7.50033M7 5.16699H7.00583" stroke="#858585" strokeLinecap="round" strokeLinejoin="round" />
      </svg>),
      path: (<label htmlFor='drop' className={`relative z-[1] rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[201px] flex items-center flex-col justify-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
          <path d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337" stroke="#7856FF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={`mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs`}>Drop your image here or <span className={`block text-primary underline`}>browse</span></span>
        <input type="file" id="drop" className='hidden' name="" placeholder="" />
      </label>),
    },
  ]

  const fonts = [
    { name: 'Roboto' },
    { name: 'Inter' },
    { name: 'Poppins' },
  ]

  const headerFooter = [
    {
      view: 'Dark Theme',
      icon: viewStyle_1,
    },
    {
      view: 'Light Theme',
      icon: viewStyle_2,
    }
  ]
  const [selectHeaderFooter, setSelectHeaderFooter] = useState(headerFooter[0])

  const layout = [
    {
      view: 'Dark Theme',
      icon: viewStyle_1,
    },
    {
      view: 'Light Theme',
      icon: viewStyle_2,
    }
  ]
  const [selectLayout, setSelectLayout] = useState(layout[0])

  return (
    <div className='appearance'>
      <div className="text">
        <div className="text mb-6">
          <h2 className='text-lg text-black font-inter font-semibold !leading-[130%] mb-1'>Branding</h2>
          <p className='text-xs text-[#858585] font-inter font-normal !leading-[120%]'>Set up your Help Center's logo, color and theme.</p>
        </div>
        <div className="md:grid grid-cols-12 gap-5 mb-5">
          <div className="p-6 border border-solid border-[#E2E4E9] rounded-2xl col-span-8">
            <div className="md:grid grid-cols-3 gap-4">
              {Branding.map((item, index) => (
                <div className="" key={index}>
                  <div className="">
                    <div className="flex items-center gap-2.5 mb-3">
                      <h6 className="text-sm font-semibold !leading-[150%] text-[#0A0D14] mt-3 md:mt-0">
                        {item.title}
                      </h6>
                      <span>{item.icon}</span>
                    </div>
                    <div className="w-full">
                      <p>{item.path}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 border border-solid border-[#E2E4E9] rounded-2xl col-span-4">
            <h6 className='text-sm font-semibold !leading-[150%] text-[#0A0D14] mb-3'>Header & footer theme</h6>
            <div className="grid grid-cols-2 gap-4">
              {headerFooter.map((item, index) => (
                <div onClick={() => setSelectHeaderFooter(item)} className="cursor-pointer" key={index}>
                  <div className="relative z-[1]">
                    {selectHeaderFooter.view === item.view &&
                      <div className="absolute w-full h-full bg-primary/10 top-0 left-0 flex items-center justify-center rounded-xl">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.5" width="20" height="20" rx="10" fill="#7856FF" />
                          <path d="M5.875 11.8737L8.35245 13.8418C8.57476 14.0184 8.89934 13.9746 9.06699 13.7455L14.125 6.83203" stroke="white" strokeLinecap="round" />
                        </svg>
                      </div>
                    }
                    <img src={item.icon} alt="" className='w-full mb-5 bg-[#7856FF] bg-opacity-10 border border-solid border-[#E2E4E9] rounded-xl' />
                  </div>
                  <p className='text-sm font-semibold !leading-[150%] text-[#0A0D14]'>{item.view}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:grid grid-cols-12 gap-5">
          <div className="left col-span-4">
            <div className="p-6 border border-solid border-[#E2E4E9] rounded-2xl col-span-4 w-full mb-5">
              <h6 className='text-sm font-semibold !leading-[150%] text-[#0A0D14] mb-3'>Layout</h6>
              <div className="grid grid-cols-2 gap-4">
                {layout.map((item, index) => (
                  <div onClick={() => setSelectLayout(item)} className="cursor-pointer" key={index}>
                    <div className="relative z-[1]">
                      {selectLayout.view === item.view &&
                        <div className="absolute w-full h-full bg-primary/10 top-0 left-0 flex items-center justify-center rounded-xl">
                          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="20" height="20" rx="10" fill="#7856FF" />
                            <path d="M5.875 11.8737L8.35245 13.8418C8.57476 14.0184 8.89934 13.9746 9.06699 13.7455L14.125 6.83203" stroke="white" strokeLinecap="round" />
                          </svg>
                        </div>
                      }
                      <img src={item.icon} alt="" className='w-full mb-5 bg-[#7856FF] bg-opacity-10 border border-solid border-[#E2E4E9] rounded-xl' />
                    </div>
                    <p className='text-sm font-semibold !leading-[150%] text-[#0A0D14]'>{item.view}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 border border-solid border-[#E2E4E9] rounded-2xl w-full mb-5 ">
              <h6 className='text-sm font-semibold !leading-[150%] text-[#0A0D14] mb-3'>Color and font</h6>
              <div className="mb-4">
                <Input className='mb-0' type="text" placeholder="Type here" label="Accent Color" required={true} />
              </div>
              <div className="">
                <label htmlFor="" className='flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading'>Main Font <span className="text-[#FE4234]">*</span></label>
                <Dropdown position='bottom' className='mb-0' placeholder="Select" items={fonts} required={true} />
              </div>
            </div>
          </div>
          <div className="right col-span-8">
            <div className="p-6 border border-solid border-[#E2E4E9] rounded-2xl">
              <div className="text mb-6 flex gap-6 md:gap-10 lg:gap-11">
                <div>
                  <h2 className='text-lg text-black font-inter font-semibold !leading-[130%] mb-1'>Banner settings</h2>
                  <p className='text-xs text-[#858585] font-inter font-normal !leading-[120%]'>Add a banner background image and set titles in multiple languages.</p>
                </div>
                <CountryListWithFlag innerClass="w-max" />
              </div>
              <div className="mb-3">
                <label htmlFor='policy3' className="flex items-center gap-2 mb-1 cursor-pointer">
                  <Switch id='policy3' />
                  <p className='font-inter font-medium text-sm text-heading'>Search bar</p>
                </label>
                <p className='text-xs text-[#858585] font-inter font-normal !leading-[120%] pl-0 md:pl-5 lg:pl-4 xl:pl-12'>Allow customers to search articles and categories.</p>
              </div>
              <div className="mb-4">
                <Input className='mb-0' type="text" placeholder="Type here" label="Title" required={true} />
              </div>
              <div className="">
                <h2 className='text-lg text-black font-inter font-semibold !leading-[130%] mb-3'>Background</h2>
                <div className={`w-full`}>
                  <label htmlFor='drop' className={`relative rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[150px] flex items-center flex-col justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                      <path d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337" stroke="#7856FF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs`}>Drop your image here or <span className={`inline-block text-primary underline`}>browse</span></span>
                    <input type="file" id="drop" className='hidden' name="" placeholder="" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
