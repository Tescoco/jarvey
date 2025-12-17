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

  // Handler for Update button
  const handleUpdate = () => {
    // You can add validation here if needed

    if (activeTab === 'Field Settings') {
      console.log('Updating Field Settings...');
      // Add your API call or state update logic here
      alert('Field Settings updated successfully!');
    } else if (activeTab === 'Operating Hours') {
      console.log('Updating Operating Hours...');
      // Add your API call or state update logic here
      alert('Operating Hours updated successfully!');
    }
  };

  return (
    <div className=''>
      <Top>
        {activeTab === "Settings" ? null :
          <button
            onClick={handleUpdate}
            className='btn bg-prim min-w-[77px] text-white hover:opacity-90'
          >
            Update
          </button>
        }
      </Top>
      <div className="p-4 md:p-5 xl:p-6">
        <div className="border-b border-solid border-stroke flex items-center justify-center overflow-x-auto mb-5 md:mb-6">
          {tabBtns.map((item, index) => (
            <button
              onClick={() => setActiveTab(item)}
              key={index}
              className={`font-inter font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${item === activeTab ? 'border-btn text-btn' : 'border-transparent text-heading'}`}
            >
              {item}
            </button>
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

// import React, { useState } from 'react'
// import Top from '../../layouts/Top';
// import Setting from '../../components/TicketConfiguration/Setting';
// import FieldSettings from '../../components/TicketConfiguration/FieldSettings';
// import OperatingHours from '../../components/TicketConfiguration/OperatingHour';


// export default function TicketConfiguration() {
//   const tabBtns = [
//     'Settings',
//     'Field Settings',
//     'Operating Hours',
//   ]
//   const [activeTab, setActiveTab] = useState(tabBtns[0]);
//   return (
//     <div className=''>
//       <Top>
//         {activeTab === "Settings" ? null :
//           <button className='btn bg-prim min-w-[77px]'>Update</button>

//         }
//       </Top>
//       <div className="p-4 md:p-5 xl:p-6">
//         <div className="border-b border-solid border-stroke flex items-center justify-center overflow-x-auto mb-5 md:mb-6">
//           {tabBtns.map((item, index) => (
//             <button onClick={() => setActiveTab(item)} key={index} className={` font-inter font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${item === activeTab ? 'border-btn text-btn' : 'border-transparent text-heading'}`}>{item}</button>
//           ))}
//         </div>
//         <div className="">
//           {activeTab === "Settings" && <Setting />}
//           {activeTab === "Field Settings" && <FieldSettings />}
//           {activeTab === "Operating Hours" && <OperatingHours />}
//         </div>
//       </div>
//     </div>
//   )
// }
