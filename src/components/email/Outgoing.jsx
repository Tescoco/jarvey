import React, { useState } from 'react'
import TableFilter from '../TableFilter'
import { edit } from '../../utilities/Classes'
import Switch from '../Switch'
import Alert from '../Alert'
import Input from '../Input'
import Dropdown from '../Dropdown'

export default function Outgoing() {
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('');

  // State for edit modal
  const [editingItem, setEditingItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const tableData = [
    {
      name: 'SMTP',
      status: 'active',
      default: true,
    },
    {
      name: 'Gmail',
      status: 'active',
      default: true,
    },
    {
      name: 'SMTP',
      status: 'active',
      default: true,
    },
    {
      name: 'Gmail',
      status: 'active',
      default: true,
    },
    {
      name: 'SMTP',
      status: 'active',
      default: true,
    },
    {
      name: 'Gmail',
      status: 'active',
      default: true,
    },
  ]

  // Filter table data based on search query
  const filteredData = tableData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle edit button click
  const handleEdit = (item, index) => {
    setEditingItem({ ...item, index });
    setShowEditModal(true);
    console.log('Editing gateway:', item);
    // Add your edit modal logic here
  };

  return (
    <>
      <div className="pb-6 border-b border-solid border-stroke">
        <h4 className='text-lg mb-4 md:mb-5'>Create Gateway</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <Input className='mb-0' type='text' label="Name" placeholder="Type here" required />
          <Dropdown className='mb-0' placeholder="Select" label="Product" items={[
            { name: "Gmail" },
            { name: "SMTP" },
          ]} />
          <Input className='mb-0' type='text' label="Host" placeholder="Type here" required />
          <Input className='mb-0' type='text' label="Port" placeholder="Type here" required />
          <Input className='mb-0' type='text' label="Encryption" placeholder="Type here" required />
          <Input className='mb-0' type='text' label="Username" placeholder="Type here" required />
          <Input className='mb-0' type='text' label="Password" placeholder="Type here" required />
          <Input className='mb-0' type='text' label="Protocol" placeholder="Type here" required />
          <Input className='mb-0 col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-4' type='text' label="Convert incoming email to ticket if email body or subject contains any of the specified keyword " placeholder="Type here" required />
        </div>
        <div className="mt-4 md:mt-5">
          <button className='btn text-white shadow min-w-[110px]'>Add</button>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <h4 className='text-lg'>Create Gateway</h4>
          <TableFilter
            searchClass="max-w-[180px]"
            className='!mb-0'
            lang={true}
            onSearch={setSearchQuery}
            searchValue={searchQuery}
          />
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                {["#", "Getaway Name", "Default", "Status", "Actions"].map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={index}>
                    <td><span className='text-heading font-inter font-medium text-sm'>{index + 1}</span></td>
                    <td><span className='text-heading font-inter font-medium text-sm'>{item.name}</span></td>
                    <td>
                      <Switch id={`${item.name}_${index + 1}`} checked={item.default} />
                    </td>
                    <td>
                      <Alert className='uppercase' variant='success' text={item.status} dots={true} />
                    </td>
                    <td>
                      <button
                        className='text-primary hover:opacity-70 transition-opacity'
                        onClick={() => handleEdit(item, index)}
                        title="Edit gateway"
                      >
                        {edit}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No gateways found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Edit Gateway</h3>
            <p className="mb-4">Editing: {editingItem?.name}</p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// import React from 'react'
// import TableFilter from '../TableFilter'
// import { edit } from '../../utilities/Classes'
// import Switch from '../Switch'
// import Alert from '../Alert'
// import Input from '../Input'
// import Dropdown from '../Dropdown'

// export default function Outgoing() {
//   const tableData = [
//     {
//       name: 'SMTP',
//       status: 'active',
//       default: true,
//     },
//     {
//       name: 'Gmail',
//       status: 'active',
//       default: true,
//     },
//     {
//       name: 'SMTP',
//       status: 'active',
//       default: true,
//     },
//     {
//       name: 'Gmail',
//       status: 'active',
//       default: true,
//     },
//     {
//       name: 'SMTP',
//       status: 'active',
//       default: true,
//     },
//     {
//       name: 'Gmail',
//       status: 'active',
//       default: true,
//     },
//   ]
//   return (
//     <>
//       <div className="pb-6 border-b border-solid border-stroke">
//         <h4 className='text-lg mb-4 md:mb-5'>Create Gateway</h4>
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-4">
//           <Input className='mb-0' type='text' label="Name" placeholder="Type here" required />
//           <Dropdown className='mb-0' placeholder="Select" label="Product" items={[
//             { name: "Gmail" },
//             { name: "SMTP" },
//           ]} />
//           <Input className='mb-0' type='text' label="Host" placeholder="Type here" required />
//           <Input className='mb-0' type='text' label="Port" placeholder="Type here" required />
//           <Input className='mb-0' type='text' label="Encryption" placeholder="Type here" required />
//           <Input className='mb-0' type='text' label="Username" placeholder="Type here" required />
//           <Input className='mb-0' type='text' label="Password" placeholder="Type here" required />
//           <Input className='mb-0' type='text' label="Protocol" placeholder="Type here" required />
//           <Input className='mb-0 col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-4' type='text' label="Convert incoming email to ticket if email body or subject contains any of the specified keyword " placeholder="Type here" required />
//         </div>
//         <div className="mt-4 md:mt-5">
//           <button className='btn text-white shadow min-w-[110px]'>Add</button>
//         </div>
//       </div>
//       <div className="mt-6">
//         <div className="flex flex-wrap gap-2 items-center justify-between">
//           <h4 className='text-lg'>Create Gateway</h4>
//           <TableFilter searchClass="max-w-[180px]" className='!mb-0' lang={true} />
//         </div>
//         <div className="mt-6 overflow-x-auto">
//           <table className="table">
//             <thead>
//               <tr>
//                 {["#", "Getaway Name", "Default", "Status", "Actions"].map((item, index) => (
//                   <th key={index}>{item}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((item, index) => (
//                 <tr key={index}>
//                   <td><span className='text-heading font-inter font-medium text-sm'>{index + 1}</span></td>
//                   <td><span className='text-heading font-inter font-medium text-sm'>{item.name}</span></td>
//                   <td>
//                     <Switch id={`${item.name}_${index + 1}`} checked={item.default} />
//                   </td>
//                   <td>
//                     <Alert className='uppercase' variant='success' text={item.status} dots={true} />
//                   </td>
//                   <td>
//                     <button className='text-primary'>{edit}</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   )
// }
