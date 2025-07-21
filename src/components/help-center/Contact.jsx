
import Input from '../Input';
import Checkbox from '../Checkbox';
import Dropdown from '../Dropdown';
import Switch from '../Switch'
import { deleteIcon } from '../../utilities/Classes'


import img from '../../assets/img/help-center/contact.png'
import img2 from '../../assets/img/help-center/chat.png'
import img3 from '../../assets/img/help-center/call.png'

export default function Contact() {

  const input = [
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 4.79134C6.66667 4.21604 7.13304 3.74967 7.70833 3.74967C8.28363 3.74967 8.75 4.21604 8.75 4.79134C8.75 5.36664 8.28363 5.83301 7.70833 5.83301C7.13304 5.83301 6.66667 5.36664 6.66667 4.79134ZM11.25 4.79134C11.25 4.21604 11.7164 3.74967 12.2917 3.74967C12.867 3.74967 13.3333 4.21604 13.3333 4.79134C13.3333 5.36664 12.867 5.83301 12.2917 5.83301C11.7164 5.83301 11.25 5.36664 11.25 4.79134ZM6.66667 15.208C6.66667 14.6327 7.13304 14.1663 7.70833 14.1663C8.28363 14.1663 8.75 14.6327 8.75 15.208C8.75 15.7833 8.28363 16.2497 7.70833 16.2497C7.13304 16.2497 6.66667 15.7833 6.66667 15.208ZM11.25 15.208C11.25 14.6327 11.7164 14.1663 12.2917 14.1663C12.867 14.1663 13.3333 14.6327 13.3333 15.208C13.3333 15.7833 12.867 16.2497 12.2917 16.2497C11.7164 16.2497 11.25 15.7833 11.25 15.208ZM6.66667 9.91634C6.66667 9.34104 7.13304 8.87467 7.70833 8.87467C8.28363 8.87467 8.75 9.34104 8.75 9.91634V9.99967C8.75 10.575 8.28363 11.0413 7.70833 11.0413C7.13304 11.0413 6.66667 10.575 6.66667 9.99967V9.91634ZM11.25 9.91634C11.25 9.34104 11.7164 8.87467 12.2917 8.87467C12.867 8.87467 13.3333 9.34104 13.3333 9.91634V9.99967C13.3333 10.575 12.867 11.0413 12.2917 11.0413C11.7164 11.0413 11.25 10.575 11.25 9.99967V9.91634Z" fill="#858585" stroke="#858585" strokeWidth="0.833333" />
      </svg>
      ),
      title: 'Order status',
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 4.79134C6.66667 4.21604 7.13304 3.74967 7.70833 3.74967C8.28363 3.74967 8.75 4.21604 8.75 4.79134C8.75 5.36664 8.28363 5.83301 7.70833 5.83301C7.13304 5.83301 6.66667 5.36664 6.66667 4.79134ZM11.25 4.79134C11.25 4.21604 11.7164 3.74967 12.2917 3.74967C12.867 3.74967 13.3333 4.21604 13.3333 4.79134C13.3333 5.36664 12.867 5.83301 12.2917 5.83301C11.7164 5.83301 11.25 5.36664 11.25 4.79134ZM6.66667 15.208C6.66667 14.6327 7.13304 14.1663 7.70833 14.1663C8.28363 14.1663 8.75 14.6327 8.75 15.208C8.75 15.7833 8.28363 16.2497 7.70833 16.2497C7.13304 16.2497 6.66667 15.7833 6.66667 15.208ZM11.25 15.208C11.25 14.6327 11.7164 14.1663 12.2917 14.1663C12.867 14.1663 13.3333 14.6327 13.3333 15.208C13.3333 15.7833 12.867 16.2497 12.2917 16.2497C11.7164 16.2497 11.25 15.7833 11.25 15.208ZM6.66667 9.91634C6.66667 9.34104 7.13304 8.87467 7.70833 8.87467C8.28363 8.87467 8.75 9.34104 8.75 9.91634V9.99967C8.75 10.575 8.28363 11.0413 7.70833 11.0413C7.13304 11.0413 6.66667 10.575 6.66667 9.99967V9.91634ZM11.25 9.91634C11.25 9.34104 11.7164 8.87467 12.2917 8.87467C12.867 8.87467 13.3333 9.34104 13.3333 9.91634V9.99967C13.3333 10.575 12.867 11.0413 12.2917 11.0413C11.7164 11.0413 11.25 10.575 11.25 9.99967V9.91634Z" fill="#858585" stroke="#858585" strokeWidth="0.833333" />
      </svg>
      ),
      title: 'Feedback',
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 4.79134C6.66667 4.21604 7.13304 3.74967 7.70833 3.74967C8.28363 3.74967 8.75 4.21604 8.75 4.79134C8.75 5.36664 8.28363 5.83301 7.70833 5.83301C7.13304 5.83301 6.66667 5.36664 6.66667 4.79134ZM11.25 4.79134C11.25 4.21604 11.7164 3.74967 12.2917 3.74967C12.867 3.74967 13.3333 4.21604 13.3333 4.79134C13.3333 5.36664 12.867 5.83301 12.2917 5.83301C11.7164 5.83301 11.25 5.36664 11.25 4.79134ZM6.66667 15.208C6.66667 14.6327 7.13304 14.1663 7.70833 14.1663C8.28363 14.1663 8.75 14.6327 8.75 15.208C8.75 15.7833 8.28363 16.2497 7.70833 16.2497C7.13304 16.2497 6.66667 15.7833 6.66667 15.208ZM11.25 15.208C11.25 14.6327 11.7164 14.1663 12.2917 14.1663C12.867 14.1663 13.3333 14.6327 13.3333 15.208C13.3333 15.7833 12.867 16.2497 12.2917 16.2497C11.7164 16.2497 11.25 15.7833 11.25 15.208ZM6.66667 9.91634C6.66667 9.34104 7.13304 8.87467 7.70833 8.87467C8.28363 8.87467 8.75 9.34104 8.75 9.91634V9.99967C8.75 10.575 8.28363 11.0413 7.70833 11.0413C7.13304 11.0413 6.66667 10.575 6.66667 9.99967V9.91634ZM11.25 9.91634C11.25 9.34104 11.7164 8.87467 12.2917 8.87467C12.867 8.87467 13.3333 9.34104 13.3333 9.91634V9.99967C13.3333 10.575 12.867 11.0413 12.2917 11.0413C11.7164 11.0413 11.25 10.575 11.25 9.99967V9.91634Z" fill="#858585" stroke="#858585" strokeWidth="0.833333" />
      </svg>
      ),
      title: 'Report an issue',
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 4.79134C6.66667 4.21604 7.13304 3.74967 7.70833 3.74967C8.28363 3.74967 8.75 4.21604 8.75 4.79134C8.75 5.36664 8.28363 5.83301 7.70833 5.83301C7.13304 5.83301 6.66667 5.36664 6.66667 4.79134ZM11.25 4.79134C11.25 4.21604 11.7164 3.74967 12.2917 3.74967C12.867 3.74967 13.3333 4.21604 13.3333 4.79134C13.3333 5.36664 12.867 5.83301 12.2917 5.83301C11.7164 5.83301 11.25 5.36664 11.25 4.79134ZM6.66667 15.208C6.66667 14.6327 7.13304 14.1663 7.70833 14.1663C8.28363 14.1663 8.75 14.6327 8.75 15.208C8.75 15.7833 8.28363 16.2497 7.70833 16.2497C7.13304 16.2497 6.66667 15.7833 6.66667 15.208ZM11.25 15.208C11.25 14.6327 11.7164 14.1663 12.2917 14.1663C12.867 14.1663 13.3333 14.6327 13.3333 15.208C13.3333 15.7833 12.867 16.2497 12.2917 16.2497C11.7164 16.2497 11.25 15.7833 11.25 15.208ZM6.66667 9.91634C6.66667 9.34104 7.13304 8.87467 7.70833 8.87467C8.28363 8.87467 8.75 9.34104 8.75 9.91634V9.99967C8.75 10.575 8.28363 11.0413 7.70833 11.0413C7.13304 11.0413 6.66667 10.575 6.66667 9.99967V9.91634ZM11.25 9.91634C11.25 9.34104 11.7164 8.87467 12.2917 8.87467C12.867 8.87467 13.3333 9.34104 13.3333 9.91634V9.99967C13.3333 10.575 12.867 11.0413 12.2917 11.0413C11.7164 11.0413 11.25 10.575 11.25 9.99967V9.91634Z" fill="#858585" stroke="#858585" strokeWidth="0.833333" />
      </svg>
      ),
      title: 'Request refund or discount',
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 4.79134C6.66667 4.21604 7.13304 3.74967 7.70833 3.74967C8.28363 3.74967 8.75 4.21604 8.75 4.79134C8.75 5.36664 8.28363 5.83301 7.70833 5.83301C7.13304 5.83301 6.66667 5.36664 6.66667 4.79134ZM11.25 4.79134C11.25 4.21604 11.7164 3.74967 12.2917 3.74967C12.867 3.74967 13.3333 4.21604 13.3333 4.79134C13.3333 5.36664 12.867 5.83301 12.2917 5.83301C11.7164 5.83301 11.25 5.36664 11.25 4.79134ZM6.66667 15.208C6.66667 14.6327 7.13304 14.1663 7.70833 14.1663C8.28363 14.1663 8.75 14.6327 8.75 15.208C8.75 15.7833 8.28363 16.2497 7.70833 16.2497C7.13304 16.2497 6.66667 15.7833 6.66667 15.208ZM11.25 15.208C11.25 14.6327 11.7164 14.1663 12.2917 14.1663C12.867 14.1663 13.3333 14.6327 13.3333 15.208C13.3333 15.7833 12.867 16.2497 12.2917 16.2497C11.7164 16.2497 11.25 15.7833 11.25 15.208ZM6.66667 9.91634C6.66667 9.34104 7.13304 8.87467 7.70833 8.87467C8.28363 8.87467 8.75 9.34104 8.75 9.91634V9.99967C8.75 10.575 8.28363 11.0413 7.70833 11.0413C7.13304 11.0413 6.66667 10.575 6.66667 9.99967V9.91634ZM11.25 9.91634C11.25 9.34104 11.7164 8.87467 12.2917 8.87467C12.867 8.87467 13.3333 9.34104 13.3333 9.91634V9.99967C13.3333 10.575 12.867 11.0413 12.2917 11.0413C11.7164 11.0413 11.25 10.575 11.25 9.99967V9.91634Z" fill="#858585" stroke="#858585" strokeWidth="0.833333" />
      </svg>
      ),
      title: 'Product question',
    },
  ]
  const contact = [
    { name: 'tiger.s.ai.2024@gmail.com' },
    { name: 'tiger.s.ai.2024@gmail.com' },
    { name: 'tiger.s.ai.2024@gmail.com' },
    { name: 'tiger.s.ai.2024@gmail.com' },
    { name: 'tiger.s.ai.2024@gmail.com' },
  ]
  return (
    <div className='Contact px-0 md:px-2 lg:px-4 xl:px-6'>
      <div className="md:flex gap-[104px] border-b border-solid border-[#E2E4E9] w-full">
        <div className="w-full">
          <div className="text mb-6">
            <h2 className='text-lg text-black font-inter font-semibold !leading-[130%] mb-1'>Email</h2>
            <p className='text-xs text-[#858585] font-inter font-normal !leading-[120%]'>Reply by email when customers get in touch via contact form.</p>
          </div>
          <div className="mb-4 md:mb-5 lg:mb-6">
            <Dropdown className='mb-0' label='Select email integration' placeholder="tiger.s.ai.2024@gmail.com" items={contact} />
          </div>
          <label htmlFor='policy' className="inline-flex items-center gap-2 mb-4 md:mb-5 lg:mb-6 cursor-pointer">
            <Switch id='policy' />
            <p className='font-inter font-medium text-sm text-heading'>Contact form card</p>
          </label>
          <div className="mb-4 md:mb-5 lg:mb-6">
            <Dropdown className='mb-0' label='Select email integration' placeholder="tiger.s.ai.2024@gmail.com" items={contact} />
          </div>
          <div className="mb-4">
            <Input className='mb-0' type="text" placeholder="" label="Card description" />
          </div>
          <div className="text mb-4 md:mb-5 lg:mb-6">
            <h2 className='text-lg text-[#0A0D14] font-semibold font-inter !leading-normal'>Contact form subject</h2>
            <p className='text-sx text-gray font-inter font-medium !leading-normal'>Here is a default list of subject lines. If there is no subject added, user can freely type any subject.</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Checkbox checked id="keep" />
            <label htmlFor="keep" className='text-[#0A0D14] text-base font-medium !leading-[150%] cursor-pointer'>Allow custom input using "Other"</label>
          </div>
          <div className="mb-4 relative z-[1]">
            {input.map((item, index) => (
              <div className="flex items-center gap-3 gap-y-2.5" key={index}>
                <div className="flex items-center w-full">
                  <span className='p-5 cursor-move'>{item.icon}</span>
                  <p className='border border-solid border-[#E2E4E9] flex items-center py-2 px-3 rounded-lg w-full text-left text-heading'>{item.title}</p>
                  {/* <Input className='grow' value={item.title} /> */}
                </div>
                <button className='text-gray hover:text-primary p-2 m-1 scale-105'>{deleteIcon}</button>
              </div>
            ))}
          </div>
          <button className='btn !text-[#7856FF] border border-solid !border-[#7856FF] hover:!text-white mb-4 md:mb-5 lg:mb-6'>Add Subject line</button>
        </div>
        <div className="flex-none">
          <img src={img} className='cursor-pointer' alt="" />
        </div>
      </div>
      <div className="md:flex gap-[121px] p-4 md:p-5 lg:p-6 border-b border-solid border-[#E2E4E9]">
        <div className="chat w-full">
          <div className="text mb-3">
            <h2 className='text-lg text-black font-inter font-semibold !leading-[130%] mb-1'>Chat</h2>
            <p className='text-xs text-[#858585] font-inter font-normal !leading-[120%]'>Allow customers to chat with you from the Help Center.</p>
          </div>
          <div className="mb-3">
            <label htmlFor='policy2' className="flex items-center gap-2 mb-1">
              <Switch id='policy2' />
              <p className='font-inter font-medium text-sm text-heading'>Contact form card</p>
            </label>
            <p className='text-xs text-[#858585] font-inter font-normal !leading-[120%] pl-0 md:pl-5 lg:pl-4 xl:pl-12'>This makes a chat widget visible for all Help Center pages.</p>
          </div>
          <div className="mb-3">
            <p className='text-xs text-[#858585] font-inter font-normal !leading-[120%]'>You don't have any existing chat integration. Please create one to enable.</p>
            <a href="#" className='text-xs text-[#7856FF] font-inter font-normal !leading-[120%] !underline'>Create chat</a>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Checkbox checked id="keep" />
            <label htmlFor="keep" className='text-[#0A0D14] text-base font-medium !leading-[150%] cursor-pointer'>Chat contact card</label>
          </div>
          <div className="mb-3 relative z-[1]">
            <Input className='mb-0' type="text" placeholder="" label="Card description" />
          </div>
        </div>
        <div className="flex-none">
          <img src={img2} className='cursor-pointer' alt="" />
        </div>
      </div>
      <div className="md:flex gap-[130px]">
        <div className="phone p-4 md:p-5 lg:p-6 w-full">
          <div className="text mb-3">
            <h2 className='text-lg text-black font-inter font-semibold !leading-[130%] mb-1'>Phone</h2>
            <p className='text-xs text-[#858585] font-inter font-normal !leading-[150%]'>Provide phone numbers customers can call to get phone support.</p>
          </div>
          <div className="mb-3">
            <label htmlFor='policy3' className="flex items-center gap-2 mb-1">
              <Switch id='policy3' />
              <p className='font-inter font-medium text-sm text-heading'>Enable chat widget</p>
            </label>
            <p className='text-xs text-[#858585] font-inter font-normal !leading-[120%] pl-0 md:pl-5 lg:pl-4 xl:pl-12'>This makes a chat widget visible for all Help Center pages.</p>
          </div>
          <label htmlFor='policy4' className="flex items-center gap-2 mb-3">
            <Switch id='policy4' />
            <p className='font-inter font-semibold text-sm text-heading'>Phone contact card</p>
          </label>
          <div className="mb-1 relative z-[1]">
            <Input className='mb-0' type="text" placeholder="" label="Card description" />
          </div>
          <a href="#" className='btn !text-[#7856FF] border border-solid !border-[#7856FF] hover:!text-white'>Add Number</a>
        </div>
        <div className="flex-none">
          <img src={img3} className='cursor-pointer' alt="" />
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 mt-16">
        <button className='btn !text-primary !border-primary main-w-max hover:!text-white'>Cancel</button>
        <button className='btn shadow !text-white main-w-max flex items-center gap-2'>Save Changes</button>
      </div>
    </div>
  )
}
