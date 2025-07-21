import React, { useState } from 'react'
import Switch from '../Switch'
import Dropdown from '../Dropdown'
import Modal from '../Modal'
import Actions2 from './Actions2'
import SettingModal from './SettingModal'
import SettingModal2 from './SettingModal2'
import Input from '../Input'

export default function Setting() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const GideText = [
    "Al Agent setup guide", "Watch Al Agent walkthrough", "Take quick setup tour"
  ]
  const handleClose = () => {
    setShow(!show)
  }
  const handleModal = () => {
    setShow(false)
    setShow2(!show2)
  }
  const handleClose2 = () => {
    setShow2(!show2)
  }
  return (
    <div className='mt-3 lg:mt-4'>
      <div className='mb-3 lg:mb-[15px]'>
        <p className='text-xs text-gray font-medium !leading-[1.66] mb-1 4xl:pr-[30%]'>Al Agent uses Al to scan your tickets and only responds when it has high confidence in an answer, otherwise it automatically hands tickets over to your team. Al Agent uses Help Center articles, Predefined Responses, Guidance, and Shopify data to deliver accurate responses.</p>
        <div className='flex gap-1 lg:gap-2 justify-between flex-wrap md:flex-nowrap'>
          {GideText.map((item, idx) => <a key={idx} onClick={() => setShow(!show)} href='#' className='text-xs w-full block font-medium !leading-[1.66] border border-[#E2E4E9] rounded-md lg:rounded-lg py-1 lg:py-[6px] text-center text-[#7856FF]'>{item}</a>)}
        </div>
      </div>
      <div className='mb-6 lg:mb-7 xl:mb-8'>
        <p className='text-lg lg:text-[22px] font-semibold !leading-[1.4] text-[#0A0D14] mb-1'>General settings</p>
        <p className='mt-1 text-xs text-gray font-medium !leading-[1.5]'>How should Al Agent send responses?</p>
      </div>
      <div className='mb-6 lg:mb-7 xl:mb-8'>
        <Dropdown className='mb-0' label="Tone of Voice" info placeholder="Friendly" des="Select tone of voice for AI Agent to use with customers." isArrow={true} items={[
          { name: "DropDown - 1" },
          { name: "DropDown - 2" },
          { name: "DropDown - 3" },
          { name: "DropDown - 4" },
          { name: "DropDown - 5" },
        ]} />
      </div>
      <div className='mb-10 lg:mb-14 xl:mb-[72px]'>
        <p className='text-lg lg:text-[22px]  font-semibold !leading-[1.4] tracking-[-0.132px] text-[#0A0D14] mb-1'>Chat settings</p>
        <p className=' text-sm text-[rgba(17,17,17,0.50)] font-medium !leading-[1.42] tracking-[-0.084px] mb-1 lg:mb-2'>When Al Agent is enabled on Chat, Article recommendation will be disabled to avoid conflicting responses.</p>
        <div className='border border-[#7856FF] rounded-md lg:rounded-lg py-2 px-3 flex items-center justify-between '>
          <p className='text-sm text-[rgba(17,17,17,0.50)] font-medium !leading-[1.42]  tracking-[-0.084px] flex items-center gap-2 lg:gap-[10px]'>
            <svg className='flex-none' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_254_8036)">
                <path d="M8.00016 14.6673C11.6821 14.6673 14.6668 11.6825 14.6668 8.00065C14.6668 4.31875 11.6821 1.33398 8.00016 1.33398C4.31826 1.33398 1.3335 4.31875 1.3335 8.00065C1.3335 11.6825 4.31826 14.6673 8.00016 14.6673Z" stroke="#FE4333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.00012 10.6673V8.00065M8.00012 5.33398H8.00679" stroke="#FE4333" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_254_8036">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            When AI Agent is enabled on Chat, Articles recommendation will be disabled to avoid conflicting response.</p>
          <a href='#' className='text-sm cursor-pointer lg:text-base font-semibold !leading-[1.25] tracking-[-0.096px] text-[#7856FF] flex-none'>Got it</a>
        </div>
      </div>
      <div className='mb-10 lg:mb-14 xl:mb-[72px]'>
        <p className='text-lg lg:text-[22px]  font-semibold !leading-[1.4] tracking-[-0.132px] text-[#0A0D14] mb-1'>Email settings</p>
        <p className=' text-sm text-[rgba(17,17,17,0.50)] font-medium !leading-[1.42] tracking-[-0.084px] mb-1 lg:mb-2'>When Al Agent is enabled on Email, Autoresponders will be disabled to avoid conflicting responses.</p>
        <div className='border border-[#7856FF] rounded-md lg:rounded-lg py-2 px-3 flex items-center justify-between '>
          <p className='text-sm text-[rgba(17,17,17,0.50)] font-medium !leading-[1.42]  tracking-[-0.084px] flex items-center gap-2 lg:gap-[10px]'>
            <svg className='flex-none' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_254_8036)">
                <path d="M8.00016 14.6673C11.6821 14.6673 14.6668 11.6825 14.6668 8.00065C14.6668 4.31875 11.6821 1.33398 8.00016 1.33398C4.31826 1.33398 1.3335 4.31875 1.3335 8.00065C1.3335 11.6825 4.31826 14.6673 8.00016 14.6673Z" stroke="#FE4333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.00012 10.6673V8.00065M8.00012 5.33398H8.00679" stroke="#FE4333" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_254_8036">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            When AI Agent is enabled on Email, Autoresponders will be disabled to avoid conflicting response.</p>
          <a href='#' className='text-sm cursor-pointer lg:text-base font-semibold !leading-[1.25] tracking-[-0.096px] text-[#7856FF] flex-none'>Got it</a>
        </div>
      </div>
      <label htmlFor='switch1' className='mb-5 lg:mb-6 flex items-center gap-1 lg:gap-2'>
        <Switch id="switch1" />
        <p className='text-[#0A0D14] text-sm font-medium !leading-[1.42] tracking-[-0.084px]'>Enable Al Agent on Email</p>
      </label>
      <div className='mb-6 lg:mb-8 xl:mb-[52px]' >
        <Dropdown className='mb-0' label="Al Agent responds to tickets sent to the following email addresses (Optional)Help?" des="Select one or more email addresses for Al Agent to use. It will also reply to contact forms linked to these email addresses." placeholder="tiger.s.ai.2024@gmail.com" isArrow={true} items={[
          { name: "DropDown - 1" },
          { name: "DropDown - 2" },
          { name: "DropDown - 3" },
          { name: "DropDown - 4" },
          { name: "DropDown - 5" },
        ]} />
      </div>
      <div className='mb-6 lg:mb-7 xl:mb-[42px]' >
        <Input type="text" placeholder="This response was created by Al" label="Signature" des="At the end of emails you can disclose that the message was created by Al, or provide a custom name for Al Agent. Do not include greetings (e.g. 'Best regards'). Greetings will already be included in the message above the signature." />
      </div>
      <div className='mb-6 lg:mb-7 xl:mb-[42px]'>
        <p className='text-lg lg:text-[22px] font-semibold !leading-[1.4] tracking-[-0.132px] text-[#0A0D14] mb-1'>Handover and exclusion</p>
        <p className='mt-1 text-sm text-[rgba(17,17,17,0.50)] font-medium !leading-[1.42] tracking-[-0.084px]'>When Al Agent is not confident in an answer, it automatically hands tickets over to your team. Choose how Al Agent behaves when handing over tickets, and add specific handover topics that should never be resolved by Al Agent.</p>
      </div>
      <div className='mb-6 lg:mb-7 xl:mb-8 flex items-start gap-1 lg:gap-2'>
        <Switch id="btn1" checked />
        <div className=''>
          <p className='text-sm  font-semibold !leading-[1.42] tracking-[-0.084px] text-[#0A0D14] mb-1'>Tell customers when handing over</p>
          <p className='mt-1 text-sm text-[rgba(17,17,17,0.50)] font-medium !leading-[1.42] tracking-[-0.084px]'>When enabled, Al Agent will promptly respond and tell customers their request is being handed over for further assistance. When disabled, Al Agent will not respond before handing over.</p>
        </div>

      </div>
      <div className='mb-6 lg:mb-7 xl:mb-8 md:flex items-center gap-8 lg:gap-11 xl:gap-[50px]'>
        <div className='mb-3 md:mb-0'>
          <p className='text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1'>Handover topics</p>
          <p className='mt-1 text-xs text-gray font-medium !leading-[1.5]'>Define topics for Al Agent to always hand over to agents.</p>
        </div>

        <a href="#" className='btn !min-w-[102px] !p-2.5 flex items-center gap-1  flex-none !text-[#7856FF] hover:!text-white'>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.25 5.25V0.75H6.75V5.25H11.25V6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25Z" fill="currentColor" />
          </svg>
          Add Topic
        </a>

      </div>
      <div className='my-4 md:my-8'>
        <p className=' font-bold !leading-[1.5] text-[#0A0D14] mb-1'>Prevent Al Agent from triggering on specific tickets</p>
        <p className='mt-1 text-gray font-medium !leading-[1.5]'>Configure the <span className='text-primary'>Prevent Al Agent from answering rule</span> to prevent Al Agent from reviewing specific tickets altogether. (e.g. tickets from certain email addresses, tickets with certain tags).</p>
      </div>
      <div className='w-full my-4 md:my-8'>
        <div className='flex items-end gap-3 lg:gap-4'>
          <Input type="text" placeholder="Friendly" className='w-full' label="Apply to tickets containing the following topics" />
          <button className='mb-3.5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M20.5664 4.56639C20.6408 4.492 20.6998 4.4037 20.74 4.30652C20.7803 4.20934 20.801 4.10518 20.801 3.99999C20.801 3.89479 20.7803 3.79063 20.74 3.69345C20.6998 3.59627 20.6408 3.50797 20.5664 3.43358C20.492 3.3592 20.4037 3.3002 20.3065 3.25995C20.2093 3.21969 20.1052 3.19897 20 3.19897C19.8948 3.19897 19.7906 3.21969 19.6935 3.25995C19.5963 3.3002 19.508 3.3592 19.4336 3.43358L12 10.8688L4.56639 3.43358C4.492 3.3592 4.4037 3.3002 4.30652 3.25995C4.20934 3.21969 4.10518 3.19897 3.99999 3.19897C3.89479 3.19897 3.79063 3.21969 3.69345 3.25995C3.59627 3.3002 3.50797 3.3592 3.43358 3.43358C3.3592 3.50797 3.3002 3.59627 3.25995 3.69345C3.21969 3.79063 3.19897 3.89479 3.19897 3.99999C3.19897 4.10518 3.21969 4.20934 3.25995 4.30652C3.3002 4.4037 3.3592 4.492 3.43358 4.56639L10.8688 12L3.43358 19.4336C3.28337 19.5838 3.19897 19.7875 3.19897 20C3.19897 20.2124 3.28337 20.4162 3.43358 20.5664C3.5838 20.7166 3.78754 20.801 3.99999 20.801C4.21243 20.801 4.41617 20.7166 4.56639 20.5664L12 13.1312L19.4336 20.5664C19.5838 20.7166 19.7875 20.801 20 20.801C20.2124 20.801 20.4162 20.7166 20.5664 20.5664C20.7166 20.4162 20.801 20.2124 20.801 20C20.801 19.7875 20.7166 19.5838 20.5664 19.4336L13.1312 12L20.5664 4.56639Z" fill="#FE4333" />
            </svg>
          </button>
        </div>
      </div>
      <div className='mb-1'>
        <p className='text-sm  font-semibold !leading-[1.42] tracking-[-0.084px] text-[#0A0D14] mb-1 flex items-center gap-2'>AI Ticket Tagging
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_254_8182)">
              <path d="M8.00016 14.6673C11.6821 14.6673 14.6668 11.6825 14.6668 8.00065C14.6668 4.31875 11.6821 1.33398 8.00016 1.33398C4.31826 1.33398 1.3335 4.31875 1.3335 8.00065C1.3335 11.6825 4.31826 14.6673 8.00016 14.6673Z" stroke="#858585" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.00012 10.6673V8.00065M8.00012 5.33398H8.00679" stroke="#858585" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_254_8182">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </p>
        <p className='text-sm text-[#858585] font-medium !leading-[1.66]'>Use Al tagging to let Al Agent automatically label tickets based on their content.</p>
      </div>

      <div className='grid grid-cols-1 gap-3 lg:gap-4'>
        <Dropdown className='mb-3 md:mb-0 ' label="Tag" placeholder="Friendly" des="Select tone of voice for AI Agent to use with customers." isArrow={true} items={[
          { name: "DropDown - 1" },
          { name: "DropDown - 2" },
          { name: "DropDown - 3" },
          { name: "DropDown - 4" },
          { name: "DropDown - 5" },
        ]} />
      </div>
      {show && <Modal onClick={handleClose} children={<SettingModal onClick={handleModal} />} />}
      {show2 && <Modal onClick={handleClose2} children={<SettingModal2 onclick2={handleClose2} />} />}

    </div>
  )
}
