import React, { useState } from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Checkbox from '../../components/Checkbox'
import Input from '../../components/Input'
import Dropdown from '../../components/Dropdown'
import { timeZones } from '../../utilities/Classes'
import SupportedFile from '../../components/SupportedFile'
import Switch from '../../components/Switch'

export default function AppSetting() {
  const tabBtns = [
    'Basic Setting',
    'Agent Settings',
    'Theme Settings',
    'Storage setting',
    'Pusher Setting',
    'Re-captcha Setting',
    'Third party login ',
    'Logo Setting',
  ]
  const [activeTab, setActiveTab] = useState(tabBtns[0])
  return (
    <>
      <Top />
      <MainInner>
        <div className="border-b border-solid border-stroke flex items-center 2xl:justify-center overflow-x-auto mb-5 md:mb-6">
          {tabBtns.map((item, index) => (
            <button onClick={() => setActiveTab(item)} key={index} className={`min-w-[140px] font-inter font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid text-nowrap ${item === activeTab ? 'border-btn text-btn' : 'border-transparent text-heading'}`}>{item}</button>
          ))}
        </div>
        {activeTab === "Basic Setting" &&
          <>
            <div className="flex items-center justify-between gap-3 flex-wrap mb-4 md:mb-5 xl:mb-6">
              <h4 className='text-base md:text-lg font-semibold !leading-normal'>Basic Setting</h4>
              <button className="btn bg-off min-w-[136px] px-0">Setup Cron Jobs</button>
            </div>
            <div className="flex items-center gap-2 mb-4 md:mb-5 xl:mb-6">
              <Checkbox id="site" type='radio' />
              <label htmlFor="site" className='cursor-pointer text-heading font-semibold'>Use The Same Site Name</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 xl:gap-5 2xl:gap-6">
              <Input className='md:col-span-2' label="Site Name" required />
              <Input className='' label="Phone" required />
              <Input className='' label="Email" required />
              <Input className='' label="Address" required />
              <Input className='' label="Copy Right Text" required />
              <Input className='' label="Pagination Number" required />
              <Dropdown className='' label="Time Zone" placeholder="Type here" required items={timeZones} />
              <Input className='md:col-span-2' label="Cookie Text" required />
              <Input className='' label="Maintenance Mood Title" required />
              <Input className='' label="Maintenance Mode Discription" required />
            </div>

          </>
        }
        {activeTab === "Agent Settings" &&
          <>
            <div className="flex items-center justify-between gap-3 flex-wrap mb-4 md:mb-5 xl:mb-6">
              <h4 className='text-base md:text-lg font-semibold !leading-normal'>Best Agent Settings</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 xl:gap-5 2xl:gap-6">
              <Input className='' label="Avg Response Time (In Minutes)" required />
              <Input className='' label="Minimum No. of Responses Tickets" required />
            </div>
          </>
        }
        {activeTab === "Theme Settings" &&
          <>
            <div className="flex items-center gap-2.5 flex-wrap mb-4 md:mb-5 xl:mb-6">
              <h4 className='text-base md:text-lg font-semibold !leading-normal'>Frontend Theme/Color Setting</h4>
              <button>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_11723_161744)">
                    <path d="M10.1117 0.667969L10.5103 1.4133C10.7797 1.91664 10.9143 2.16864 10.825 2.27664C10.7363 2.38464 10.443 2.2973 9.85566 2.1233C9.25335 1.94502 8.62847 1.85454 8.00033 1.85464C4.50233 1.85464 1.667 4.60664 1.667 8.0013C1.66593 9.08348 1.95855 10.1457 2.51366 11.0746M5.88966 15.3346L5.491 14.5893C5.22166 14.0853 5.087 13.8333 5.17633 13.726C5.265 13.618 5.55833 13.7046 6.14566 13.8793C6.73233 14.0533 7.35566 14.1473 8.001 14.1473C11.499 14.1473 14.3343 11.3953 14.3343 8.00064C14.3353 6.91868 14.0427 5.85674 13.4877 4.92797" stroke="#375DFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_11723_161744">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 xl:gap-5 2xl:gap-6">
              <Input className='' label="Primary Color" required />
              <Input className='' label="Secondary Color" required />
              <Input className='' label="Text Primary Color" required />
              <Input className='' label="Text Secondary Color" required />
            </div>
          </>
        }
        {activeTab === "Storage setting" &&
          <div className='flex flex-col gap-4 md:gap-5 xl:gap-6'>
            <div className="flex items-center gap-2.5 flex-wrap ">
              <h4 className='text-base md:text-lg font-semibold !leading-normal'>Storage Settings</h4>
            </div>
            <div className="flex items-center gap-2 ">
              <button className="btn bg-prim min-w-[64px] px-2">Local</button>
              <button className="btn min-w-[64px] px-2">Aws S3</button>
            </div>
            <div className="flex items-center justify-between gap-2.5 flex-wrap">
              <h4 className='text-base md:text-lg font-semibold !leading-normal'>Local Storage Settings</h4>
              <Switch checked />
            </div>
            <SupportedFile className="" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 xl:gap-5 2xl:gap-6">
              <Input desClass='text-heading font-medium' className='' label="Maximum File Upload " des="You can not upload more than that at a time" required />
              <Input desClass='text-heading font-medium' className='' label="Maz File Upload Size" des="In Kilobyte" required />
            </div>
          </div>
        }
        {activeTab === "Pusher Setting" &&
          <>
            <div className="flex items-center gap-2.5 flex-wrap mb-4 md:mb-5 xl:mb-6">
              <h4 className='text-base md:text-lg font-semibold !leading-normal'>Pusher Settings</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 xl:gap-5 2xl:gap-6">
              <Input className='' label="App ID" required />
              <Input className='' label="App key" required />
              <Input className='' label="App Secret" required />
              <Input className='' label="App Cluster" required />
              <Input className='' label="Chanel" required />
              <Input className='' label="Event" required />
            </div>
          </>
        }
        {activeTab === "Re-captcha Setting" &&
          <>
            <div className="flex items-center gap-2.5 flex-wrap mb-4 md:mb-5 xl:mb-6">
              <h4 className='text-base md:text-lg font-semibold !leading-normal'>Re-captcha Settings</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 xl:gap-5 2xl:gap-6">
              <Input className='' label="Key" required />
              <Input className='' label="Secret Key" required />
              <Dropdown className='' label="Status" placeholder="Inactive" required items={[{ name: "Active" }, { name: "Inactive" }]} />

            </div>
          </>
        }
        {activeTab === "Third party login " &&
          <>
            <div className="flex items-center gap-2.5 flex-wrap mb-4 md:mb-5 xl:mb-6">
              <h4 className='text-base md:text-lg font-semibold !leading-normal'>Re-captcha Settings</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 xl:gap-5 2xl:gap-6">
              <p className='md:col-span-2 -mb-2'>Google OAuth</p>
              <Input className='' label="Client ID" required />
              <Input className='' label="Client Secret " required />
              <Dropdown className='' label="Status" placeholder="Inactive" required items={[{ name: "Active" }, { name: "Inactive" }]} />
              <Input className='' label="Callback Url" required />
              <p className='md:col-span-2 -mb-2'>Facebook OAuth</p>
              <Input className='' label="Client ID" required />
              <Input className='' label="Client Secret " required />
              <Dropdown className='' label="Status" placeholder="Inactive" required items={[{ name: "Active" }, { name: "Inactive" }]} />
              <Input className='' label="Callback Url" required />
              <p className='md:col-span-2 -mb-2'>Azure OAuth</p>
              <Input className='' label="Client ID" required />
              <Input className='' label="Client Secret " required />
              <Dropdown className='' label="Status" placeholder="Inactive" required items={[{ name: "Active" }, { name: "Inactive" }]} />
              <Input className='' label="Callback Url" required />
            </div>
          </>
        }
        {activeTab === "Logo Setting" &&
          <div className='xl:-mb-10'>
            <div className="flex items-center gap-2.5 flex-wrap mb-4 md:mb-5 xl:mb-6">
              <h4 className='text-base md:text-lg font-semibold !leading-normal'>Logo Setting</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 xl:gap-5 2xl:gap-6">
              <div className="">
                <label className="text-sm block font-semibold !leading-[1.42] text-[#0A0D14] tracking-[-0.084px] mb-1">Site Logo <span className="text-red-500">*</span></label>
                <input id='siteLogo' type="file" className='hidden' />
                <label htmlFor="siteLogo" className='min-h-[48px] border border-stroke rounded-[10px] bg-white flex items-center justify-between px-4 cursor-pointer'>
                  Upload Image
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9998 9.99982V18.9998M11.9998 9.99982L14.9998 12.9998M11.9998 9.99982L8.99977 12.9998M17.4998 14.9998C19.0188 14.9998 19.9998 13.7688 19.9998 12.2498C19.9997 11.6484 19.8025 11.0637 19.4384 10.585C19.0743 10.1064 18.5633 9.76033 17.9838 9.59982C17.8946 8.47828 17.4298 7.41959 16.6645 6.59491C15.8991 5.77024 14.878 5.22778 13.7663 5.05525C12.6545 4.88271 11.517 5.09018 10.5378 5.64411C9.55849 6.19804 8.79467 7.06606 8.36977 8.10782C7.4752 7.85984 6.51875 7.97739 5.71085 8.4346C4.90294 8.89182 4.30975 9.65124 4.06177 10.5458C3.81379 11.4404 3.93134 12.3968 4.38856 13.2047C4.84577 14.0127 5.6052 14.6058 6.49977 14.8538" stroke="#7856FF" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
                <p className='text-xs my-2.5'>*max. 1000x1000 px</p>
                <div className="img size-[60px] rounded-md">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="60" rx="6" fill="#7856FF" />
                    <path d="M26.6647 48.0266L28.4449 48.2749L28.5213 47.7438C29.8589 38.4533 22.7153 30.1078 13.3297 29.9961C11.9403 38.6803 17.9543 46.8121 26.6647 48.0266Z" fill="white" />
                    <path d="M30.5566 25.1287V47.9911L30.7793 47.9962C37.7435 48.1563 43.8344 43.3344 45.2768 36.5194C45.4927 35.4993 45.6015 34.4594 45.6015 33.4167V11.3632L44.9765 11.3354C38.0834 11.0291 32.0224 15.8585 30.7817 22.646C30.632 23.4651 30.5566 24.296 30.5566 25.1287Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="">
                <label className="text-sm block font-semibold !leading-[1.42] text-[#0A0D14] tracking-[-0.084px] mb-1">Loco Icon  <span className="text-red-500">*</span></label>
                <input id='siteLogo' type="file" className='hidden' />
                <label htmlFor="siteLogo" className='min-h-[48px] border border-stroke rounded-[10px] bg-white flex items-center justify-between px-4 cursor-pointer'>
                  Upload Image
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9998 9.99982V18.9998M11.9998 9.99982L14.9998 12.9998M11.9998 9.99982L8.99977 12.9998M17.4998 14.9998C19.0188 14.9998 19.9998 13.7688 19.9998 12.2498C19.9997 11.6484 19.8025 11.0637 19.4384 10.585C19.0743 10.1064 18.5633 9.76033 17.9838 9.59982C17.8946 8.47828 17.4298 7.41959 16.6645 6.59491C15.8991 5.77024 14.878 5.22778 13.7663 5.05525C12.6545 4.88271 11.517 5.09018 10.5378 5.64411C9.55849 6.19804 8.79467 7.06606 8.36977 8.10782C7.4752 7.85984 6.51875 7.97739 5.71085 8.4346C4.90294 8.89182 4.30975 9.65124 4.06177 10.5458C3.81379 11.4404 3.93134 12.3968 4.38856 13.2047C4.84577 14.0127 5.6052 14.6058 6.49977 14.8538" stroke="#7856FF" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
                <p className='text-xs my-2.5'>*max. 1000x1000 px</p>
                <div className="img size-[60px] rounded-md">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="60" rx="6" fill="#7856FF" />
                    <path d="M26.6647 48.0266L28.4449 48.2749L28.5213 47.7438C29.8589 38.4533 22.7153 30.1078 13.3297 29.9961C11.9403 38.6803 17.9543 46.8121 26.6647 48.0266Z" fill="white" />
                    <path d="M30.5566 25.1287V47.9911L30.7793 47.9962C37.7435 48.1563 43.8344 43.3344 45.2768 36.5194C45.4927 35.4993 45.6015 34.4594 45.6015 33.4167V11.3632L44.9765 11.3354C38.0834 11.0291 32.0224 15.8585 30.7817 22.646C30.632 23.4651 30.5566 24.296 30.5566 25.1287Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="">
                <label className="text-sm block font-semibold !leading-[1.42] text-[#0A0D14] tracking-[-0.084px] mb-1">Frontend Logo <span className="text-red-500">*</span></label>
                <input id='siteLogo' type="file" className='hidden' />
                <label htmlFor="siteLogo" className='min-h-[48px] border border-stroke rounded-[10px] bg-white flex items-center justify-between px-4 cursor-pointer'>
                  Upload Image
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9998 9.99982V18.9998M11.9998 9.99982L14.9998 12.9998M11.9998 9.99982L8.99977 12.9998M17.4998 14.9998C19.0188 14.9998 19.9998 13.7688 19.9998 12.2498C19.9997 11.6484 19.8025 11.0637 19.4384 10.585C19.0743 10.1064 18.5633 9.76033 17.9838 9.59982C17.8946 8.47828 17.4298 7.41959 16.6645 6.59491C15.8991 5.77024 14.878 5.22778 13.7663 5.05525C12.6545 4.88271 11.517 5.09018 10.5378 5.64411C9.55849 6.19804 8.79467 7.06606 8.36977 8.10782C7.4752 7.85984 6.51875 7.97739 5.71085 8.4346C4.90294 8.89182 4.30975 9.65124 4.06177 10.5458C3.81379 11.4404 3.93134 12.3968 4.38856 13.2047C4.84577 14.0127 5.6052 14.6058 6.49977 14.8538" stroke="#7856FF" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
                <p className='text-xs my-2.5'>*max. 1000x1000 px</p>
                <div className="img size-[60px] rounded-md">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="60" rx="6" fill="#7856FF" />
                    <path d="M26.6647 48.0266L28.4449 48.2749L28.5213 47.7438C29.8589 38.4533 22.7153 30.1078 13.3297 29.9961C11.9403 38.6803 17.9543 46.8121 26.6647 48.0266Z" fill="white" />
                    <path d="M30.5566 25.1287V47.9911L30.7793 47.9962C37.7435 48.1563 43.8344 43.3344 45.2768 36.5194C45.4927 35.4993 45.6015 34.4594 45.6015 33.4167V11.3632L44.9765 11.3354C38.0834 11.0291 32.0224 15.8585 30.7817 22.646C30.632 23.4651 30.5566 24.296 30.5566 25.1287Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="">
                <label className="text-sm block font-semibold !leading-[1.42] text-[#0A0D14] tracking-[-0.084px] mb-1">Site Favicon <span className="text-red-500">*</span></label>
                <input id='siteLogo' type="file" className='hidden' />
                <label htmlFor="siteLogo" className='min-h-[48px] border border-stroke rounded-[10px] bg-white flex items-center justify-between px-4 cursor-pointer'>
                  Upload Image
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9998 9.99982V18.9998M11.9998 9.99982L14.9998 12.9998M11.9998 9.99982L8.99977 12.9998M17.4998 14.9998C19.0188 14.9998 19.9998 13.7688 19.9998 12.2498C19.9997 11.6484 19.8025 11.0637 19.4384 10.585C19.0743 10.1064 18.5633 9.76033 17.9838 9.59982C17.8946 8.47828 17.4298 7.41959 16.6645 6.59491C15.8991 5.77024 14.878 5.22778 13.7663 5.05525C12.6545 4.88271 11.517 5.09018 10.5378 5.64411C9.55849 6.19804 8.79467 7.06606 8.36977 8.10782C7.4752 7.85984 6.51875 7.97739 5.71085 8.4346C4.90294 8.89182 4.30975 9.65124 4.06177 10.5458C3.81379 11.4404 3.93134 12.3968 4.38856 13.2047C4.84577 14.0127 5.6052 14.6058 6.49977 14.8538" stroke="#7856FF" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
                <p className='text-xs my-2.5'>*max. 1000x1000 px</p>
                <div className="img size-[60px] rounded-md">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="60" rx="6" fill="#7856FF" />
                    <path d="M26.6647 48.0266L28.4449 48.2749L28.5213 47.7438C29.8589 38.4533 22.7153 30.1078 13.3297 29.9961C11.9403 38.6803 17.9543 46.8121 26.6647 48.0266Z" fill="white" />
                    <path d="M30.5566 25.1287V47.9911L30.7793 47.9962C37.7435 48.1563 43.8344 43.3344 45.2768 36.5194C45.4927 35.4993 45.6015 34.4594 45.6015 33.4167V11.3632L44.9765 11.3354C38.0834 11.0291 32.0224 15.8585 30.7817 22.646C30.632 23.4651 30.5566 24.296 30.5566 25.1287Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        }
        <div className="flex items-center justify-center md:justify-end mt-6 md:mt-8 xl:mt-16">
          <button className="btn bg-prim min-w-[122px]">Submit</button>
        </div>
      </MainInner>
    </>
  )
}
