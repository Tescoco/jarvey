import React, { useState } from 'react'
import Top from '../../layouts/Top';
import Setting from '../../components/TicketConfiguration/Setting';
import FieldSettings from '../../components/TicketConfiguration/FieldSettings';
import OperatingHours from '../../components/TicketConfiguration/OperatingHour';


export default function TicketConfiguration() {
  const tabBtns = [
    'Settings',
    'Field Settings',
    'Operating Hours',
  ]
  const [activeTab, setActiveTab] = useState(tabBtns[0]);
  return (
    <div className=''>
      <Top>
        {activeTab === "Settings" ? null :
          <button className='btn bg-prim min-w-[77px]'>Update</button>

        }
      </Top>
      <div className="p-4 md:p-5 xl:p-6">
        <div className="border-b border-solid border-stroke flex items-center justify-center overflow-x-auto mb-5 md:mb-6">
          {tabBtns.map((item, index) => (
            <button onClick={() => setActiveTab(item)} key={index} className={` font-inter font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${item === activeTab ? 'border-btn text-btn' : 'border-transparent text-heading'}`}>{item}</button>
          ))}
        </div>
        <div className="">
          {activeTab === "Settings" && <Setting />}
          {activeTab === "Field Settings" && <FieldSettings />}
          {activeTab === "Operating Hours" && <OperatingHours />}
        </div>
      </div>
    </div>
  )
}
