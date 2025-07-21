import React from 'react'
import { Link } from 'react-router-dom';
import Dropdown from '../../components/Dropdown'
import Switch from '../../components/Switch'
import Input from '../../components/Input'
import Top from '../../layouts/Top'

export default function Create() {
  const response_time = [
    { name: '1 Day (s)' },
    { name: '2 Day (s)' },
    { name: '3 Day (s)' },
    { name: '4 Day (s)' },
    { name: '5 Day (s)' },
    { name: '6 Day (s)' },
    { name: '7 Day (s)' },
    { name: '8 Day (s)' },
    { name: '9 Day (s)' },
    { name: '10 Day (s)' },
  ]
  return (
    <>
      <Top title="SLAs > New SLA" />
      <div className="grid grid-cols-1 gap-4 lg:gap-6 p-4 md:p-5 lg:p-6">
        <Input className='mb-0' type='text' label="SLA Name" required />
        <div className="-mb-2 lg:-mb-3">
          <h4 className='mb-0.5 leading-normal'>Conditions</h4>
          <p className='text-xs text-gray !leading-normal'>All Conditions should be met in order for the SLA to trigger</p>
        </div>
        <Input className='mb-0' type='email' label="Channels(S)" placeholder="Email" required />
        <div>
          <div className='mb-3'>
            <h4 className='mb-0.5 leading-normal'>Policy</h4>
            <p className='text-xs text-gray !leading-normal'>Define the first response time and / or resolution times to be set as goals by your team(s).</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <div className="border border-solid border-stroke rounded-xl px-4 py-3">
              <label htmlFor="response_time" className='flex items-start gap-2 select-none cursor-pointer mb-3 w-fit'>
                <Switch className='mt-1' id="response_time" name="response_time" checked={true} />
                <span className='flex flex-col gap-y-0.5'>
                  <strong className='text-heading font-inter text-sm'>First response time</strong>
                  <span className='block max-w-[415px] text-sm text-gray !leading-normal font-normal'>The time between the first message from a customer and the first response from an agent.</span>
                </span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input inputClass='!border-0 !bg-[#F7F7F7]' type='text' value="1" />
                <Dropdown btnClass='!border-0 !bg-[#F7F7F7]' position='bottom' placeholder={response_time[0]} items={response_time} />
              </div>
            </div>
            <div className="border border-solid border-stroke rounded-xl px-4 py-3">
              <label htmlFor="resolution_time" className='flex items-start gap-2 select-none cursor-pointer mb-3 w-fit'>
                <Switch className='mt-1' id="resolution_time" name="resolution_time" checked={true} />
                <span className='flex flex-col gap-y-0.5'>
                  <strong className='text-heading font-inter text-sm'>Resolution time</strong>
                  <span className='block max-w-[415px] text-sm text-gray !leading-normal font-normal'>The time between the first message from a customer and the first response from an agent.</span>
                </span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input inputClass='!border-0 !bg-[#F7F7F7]' type='text' value="1" />
                <Dropdown btnClass='!border-0 !bg-[#F7F7F7]' position='bottom' placeholder={response_time[0]} items={response_time} />
              </div>
            </div>
          </div>
        </div>
        <label htmlFor="pause_sla" className='flex items-start gap-2 select-none cursor-pointer mb-3 w-fit'>
          <Switch className='mt-1' id="pause_sla" name="pause_sla" checked={true} />
          <span className='flex flex-col gap-y-0.5'>
            <strong className='text-heading font-inter text-sm'>Pause SLA timer outside of business hours</strong>
            <span className='block text-sm text-gray !leading-normal font-normal'>When enabled new tickets that fit this criteria will trigger this SLA.</span>
          </span>
        </label>
        <label htmlFor="sla" className='flex items-start gap-2 select-none cursor-pointer mb-3 w-fit'>
          <Switch className='mt-1' id="sla" name="sla" checked={true} />
          <span className='flex flex-col gap-y-0.5'>
            <strong className='text-heading font-inter text-sm'>Enable SLA</strong>
            <span className='block text-sm text-gray !leading-normal font-normal'>When enabled new tickets that fit this criteria will trigger this SLA.</span>
          </span>
        </label>
        <div className="mt-2 flex items-center justify-end gap-2.5">
          <button className='btn border-primary text-primary min-w-max md:min-w-[100px]'>Cancel</button>
          <button className='btn shadow text-white md:min-w-[170px]'>Save Changes</button>
        </div>
      </div>
    </>
  )
}
