import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import { c_24 } from '../../utilities/Classes'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Switch from '../../components/Switch'

export default function DosSecurity() {
  return (
    <>
      <Top />
      <MainInner>
        <div className={`${c_24}`}>
          <div className="mb-4 md:mb-5 lg:mb-6">
            <h3 className='text-lg text-heading font-semibold !leading-[150%]'>Security Settings</h3>
          </div>
          <div className="flex items-center gap-5 mb-4">
            <p className='text-sm text-heading font-semibold !leading-[150%]'>Prevent Dos Attack</p>
            <Switch />
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <p className='text-sm text-heading font-semibold !leading-[150%]'>If there are more than</p>
            <Input className='max-w-[140px]' text='number' placeholder='2' />
            <p className='text-sm text-heading font-semibold !leading-[150%]'>Attempts in</p>
             <Input className='max-w-[140px]' text='number' placeholder='2' />
            <p className='text-sm text-heading font-semibold !leading-[150%]'>second </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Checkbox className='mt-0.5' name="radio" type='radio' id='one' />
            <p className='text-sm text-heading font-semibold !leading-[150%]'>Show Captcha</p>
            </div>
          <div className="flex items-center gap-2">
             <Checkbox className='mt-0.5' name="radio" type='radio' id='tow' />
            <p className='text-sm text-heading font-semibold !leading-[150%]'>Bock Ip</p>
          </div>
          </div>
          <div className="flex items-center justify-end mt-5 md:mt-6">
            <button className='btn min-w-[105px] bg-primary text-white'>Update</button>
          </div>
        </div>
      </MainInner>
    </>
  )
}
