import Input from '../Input'
import Dropdown from '../Dropdown';
import { useState } from 'react';

import viewStyle_1 from '../../assets/img/layout-img.png'
import viewStyle_2 from '../../assets/img/layout-img2.png'


export default function Branding() {
  const Font = [
    { name: 'Roboto' },
    { name: 'Open Sans' },
    { name: 'Noto Sans Japanese' },
    { name: 'Montserrat' },
    { name: 'Tektur' },
    { name: 'Oswald' },
    { name: 'Noto Sans' },
    { name: 'Raleway' },
    { name: 'Nunito Sans' },
    { name: 'Nunito' },
    { name: 'Rubik' },
  ]
  const headerFooter = [
    {
      view: '1 page layout',
      icon: viewStyle_1,
    },
    {
      view: 'Card Layout',
      icon: viewStyle_2,
    }
  ]
  const [selectHeaderFooter, setSelectHeaderFooter] = useState(headerFooter[0])
  return (
    <div>
      <div className="text mb-2">
        <h2 className='text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-1'>Add your branding</h2>
        <p className=''>Give the help enter your brands to look and feel. Additional customisation available later</p>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h6 className='text-sm font-semibold !leading-[150%] text-[#0A0D14]'>Logo</h6>
          <p className='text-xs mb-0 font-normal !leading-[150%]'>Display header of your font center.</p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <div className={`w-full`}>
                <label htmlFor='drop' className={`relative z-[1] rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[201px] flex items-center flex-col justify-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                    <path d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337" stroke="#7856FF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className={`mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs`}>Drop your image here or <span className={`block text-primary underline`}>browse</span></span>
                  <input type="file" id="drop" className='hidden' name="" placeholder="" />
                </label>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Input className='mb-4' type="text" placeholder="Type here" label="Brand Name" required={true} />
              <div className="">
                <label htmlFor="" className='flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading'>Main Font<span className="text-[#FE4234]">*</span></label>
                <Dropdown className='mb-0' placeholder="Connect" items={Font} required={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full md:col-span-6 lg:col-span-4">
          <h6 className='text-sm font-semibold !leading-[150%] text-[#0A0D14] -top-3 md:-top-6 lg:-top-9 relative'>Layout</h6>
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
    </div>
  )
}
