import React, { useState } from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Setting from '../../components/ai-agent/Setting';
import Knowledge from '../../components/ai-agent/Knowledge';
import Guidance from '../../components/ai-agent/Guidance';
import Actions from '../../components/ai-agent/Actions';
import Test from '../../components/ai-agent/Test';
import Modal from '../../components/Modal'

export default function AiAgentSetting() {
  const tabBtns = [
    'Settings',
    'Knowledge',
    'Guidance',
    'Actions',
    'Test',
  ]
  const [activeTab, setActiveTab] = useState(tabBtns[0]);
  const [isModal, setIsModal] = useState(false)

  return (
    <>
      <Top />
      <MainInner className="ai-agent">
        <div className="bg-white border border-solid border-stroke rounded-xl md:rounded-2xl p-4 md:p-5">
          <div className="border-b border-solid border-stroke flex items-center md:justify-center overflow-x-auto">
            {tabBtns.map((item, index) => (
              <button onClick={() => setActiveTab(item)} key={index} className={`font-inter font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${item === activeTab ? 'border-btn text-btn' : 'border-transparent text-heading'}`}>{item}</button>
            ))}
          </div>
          {activeTab === "Settings" && <Setting />}
          {activeTab === "Knowledge" && <Knowledge />}
          {activeTab === "Guidance" && <Guidance />}
          {activeTab === "Actions" && <Actions />}
          {activeTab === "Test" && <Test />}
        </div>
        {activeTab === "Settings" && <div className='md:flex items-center justify-between gap-3 lg:gap-[17px] mt-4 lg:mt-5 xl:mt-6'>
          <p className='text-[#858585] text-xs !leading-[1.66] max-w-[760px]'>By using Al Agent, you agree to comply with all applicable laws, including, but not limited to, laws prohibiting misleading consumers about the artificial identity of an automated online account, such as the California Bolstering Online Transparency Act.</p>
          <a href="#" className='btn min-h-11 !bg-[#8364FF] mb-3 md:mb-0 !text-white flex-none !min-w-[160px]'>Save changes</a>
        </div>}
        {activeTab === "Knowledge" && <div className='flex items-center gap-2 lg:gap-[10px] mt-4 lg:mt-5 xl:mt-6 justify-end'>
          <a href="'#" className='btn'>Cancel</a>
          <a href="'#" className='btn !bg-[#8364FF] !text-white'>Save Changes</a>
        </div>}
      </MainInner>

      {isModal &&
        <Modal onClick={() => setIsModal(!isModal)}>
          <div className="text-center">
            <h4 className='text-2xl font-semibold font-inter text-heading mb-2'>Save changes</h4>
            <p className='text-xs mb-5'>Your changes to thsi page will be lost if you dont save them.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className='btn !border-danger !text-danger hover:!bg-danger hover:!text-white' onClick={() => setIsModal(!isModal)}>Discard Changes</button>
            <button className='btn !text-primary hover:!text-white' onClick={() => setIsModal(!isModal)}>Back to Editing</button>
            <button className='btn !bg-btn !text-white shadow' onClick={() => setIsModal(!isModal)}>Save changes</button>
          </div>
        </Modal>
      }
    </>
  )
}
