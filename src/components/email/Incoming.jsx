import React, { useState } from 'react'
import TableFilter from '../TableFilter'
import { edit } from '../../utilities/Classes'
import Switch from '../Switch'
import Alert from '../Alert'
import Input from '../Input'
import Dropdown from '../Dropdown'

export default function Incoming() {
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('');

  // State for edit modal
  const [editingItem, setEditingItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // State for Add modal
  const [showAddModal, setShowAddModal] = useState(false);

  // Form state for adding new gateway
  const [newGateway, setNewGateway] = useState({
    name: '',
    product: '',
    host: '',
    port: '',
    encryption: '',
    username: '',
    password: '',
    protocol: '',
    keywords: ''
  });

  const tableData = [
    {
      name: 'SMTP',
      status: 'active',
      default: true,
    },
    {
      name: 'SMTP',
      status: 'active',
      default: false,
    },
    {
      name: 'SMTP',
      status: 'active',
      default: true,
    },
    {
      name: 'SMTP',
      status: 'active',
      default: false,
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
  };

  // Handle Add button click
  const handleAddClick = () => {
    setShowAddModal(true);
  };

  // Handle form input change
  const handleInputChange = (field, value) => {
    setNewGateway(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle form submission
  const handleAddSubmit = () => {
    console.log('Adding new gateway:', newGateway);
    // Add your API call or state update logic here

    // Reset form and close modal
    setNewGateway({
      name: '',
      product: '',
      host: '',
      port: '',
      encryption: '',
      username: '',
      password: '',
      protocol: '',
      keywords: ''
    });
    setShowAddModal(false);

    // Show success message (you can use a toast notification here)
    alert('Gateway added successfully!');
  };

  // Handle modal close
  const handleCloseAddModal = () => {
    setShowAddModal(false);
    // Optionally reset form
    setNewGateway({
      name: '',
      product: '',
      host: '',
      port: '',
      encryption: '',
      username: '',
      password: '',
      protocol: '',
      keywords: ''
    });
  };

  return (
    <>
      <div className="pb-6 border-b border-solid border-stroke">
        <h4 className='text-lg mb-4 md:mb-5'>Create Incoming Gateway</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <Input
            className='mb-0'
            type='text'
            label="Name"
            placeholder="Type here"
            required
            value={newGateway.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <Dropdown
            className='mb-0'
            placeholder="Select"
            label="Product"
            items={[
              { name: "Gmail" },
              { name: "SMTP" },
            ]}
            onChange={(value) => handleInputChange('product', value)}
          />
          <Input
            className='mb-0'
            type='text'
            label="Host"
            placeholder="Type here"
            required
            value={newGateway.host}
            onChange={(e) => handleInputChange('host', e.target.value)}
          />
          <Input
            className='mb-0'
            type='text'
            label="Port"
            placeholder="Type here"
            required
            value={newGateway.port}
            onChange={(e) => handleInputChange('port', e.target.value)}
          />
          <Input
            className='mb-0'
            type='text'
            label="Encryption"
            placeholder="Type here"
            required
            value={newGateway.encryption}
            onChange={(e) => handleInputChange('encryption', e.target.value)}
          />
          <Input
            className='mb-0'
            type='text'
            label="Username"
            placeholder="Type here"
            required
            value={newGateway.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
          />
          <Input
            className='mb-0'
            type='password'
            label="Password"
            placeholder="Type here"
            required
            value={newGateway.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
          <Input
            className='mb-0'
            type='text'
            label="Protocol"
            placeholder="Type here"
            required
            value={newGateway.protocol}
            onChange={(e) => handleInputChange('protocol', e.target.value)}
          />
          <Input
            className='mb-0 col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-4'
            type='text'
            label="Convert incoming email to ticket if email body or subject contains any of the specified keyword"
            placeholder="Type here"
            required
            value={newGateway.keywords}
            onChange={(e) => handleInputChange('keywords', e.target.value)}
          />
        </div>
        <div className="mt-4 md:mt-5">
          <button
            className='btn text-white shadow min-w-[110px] hover:opacity-90 transition-opacity'
            onClick={handleAddClick}
          >
            Add
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2 items-center justify-between mb-5">
          <h4 className='text-lg'>Incoming Gateways</h4>
          <TableFilter
            searchClass="max-w-[180px]"
            className='!mb-0'
            lang={true}
            onSearch={setSearchQuery}
            searchValue={searchQuery}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                {["#", "Gateway Name", "Default", "Status", "Actions"].map((item, index) => (
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
                      <Switch id={`incoming_${item.name}_${index + 1}`} checked={item.default} />
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

      {/* Add Gateway Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Add New Incoming Gateway</h3>
              <button
                onClick={handleCloseAddModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  className='mb-0'
                  type='text'
                  label="Name"
                  placeholder="Enter gateway name"
                  required
                  value={newGateway.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
                <Dropdown
                  className='mb-0'
                  placeholder="Select Product"
                  label="Product"
                  items={[
                    { name: "Gmail" },
                    { name: "SMTP" },
                    { name: "IMAP" },
                  ]}
                />
                <Input
                  className='mb-0'
                  type='text'
                  label="Host"
                  placeholder="mail.example.com"
                  required
                  value={newGateway.host}
                  onChange={(e) => handleInputChange('host', e.target.value)}
                />
                <Input
                  className='mb-0'
                  type='text'
                  label="Port"
                  placeholder="993"
                  required
                  value={newGateway.port}
                  onChange={(e) => handleInputChange('port', e.target.value)}
                />
                <Input
                  className='mb-0'
                  type='text'
                  label="Encryption"
                  placeholder="SSL/TLS"
                  required
                  value={newGateway.encryption}
                  onChange={(e) => handleInputChange('encryption', e.target.value)}
                />
                <Input
                  className='mb-0'
                  type='text'
                  label="Username"
                  placeholder="user@example.com"
                  required
                  value={newGateway.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                />
                <Input
                  className='mb-0'
                  type='password'
                  label="Password"
                  placeholder="Enter password"
                  required
                  value={newGateway.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
                <Input
                  className='mb-0'
                  type='text'
                  label="Protocol"
                  placeholder="IMAP"
                  required
                  value={newGateway.protocol}
                  onChange={(e) => handleInputChange('protocol', e.target.value)}
                />
                <div className="md:col-span-2">
                  <Input
                    className='mb-0'
                    type='text'
                    label="Email to Ticket Keywords"
                    placeholder="support, help, inquiry"
                    value={newGateway.keywords}
                    onChange={(e) => handleInputChange('keywords', e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Comma-separated keywords to trigger ticket creation
                  </p>
                </div>
              </div>

              <div className="flex gap-3 justify-end mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleCloseAddModal}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddSubmit}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Add Gateway
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Edit Gateway</h3>
            <p className="mb-4 text-gray-600">Editing: <span className="font-semibold text-gray-900">{editingItem?.name}</span></p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// import React, { useState } from 'react'
// import TableFilter from '../TableFilter'
// import { edit } from '../../utilities/Classes'
// import Switch from '../Switch'
// import Alert from '../Alert'

// export default function Incoming() {
//   // State for search functionality
//   const [searchQuery, setSearchQuery] = useState('');

//   // State for edit modal (you can add your edit modal component later)
//   const [editingItem, setEditingItem] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);

//   const tableData = [
//     {
//       name: 'SMTP',
//       status: 'active',
//       default: true,
//     },
//     {
//       name: 'SMTP',
//       status: 'active',
//       default: false,
//     },
//     {
//       name: 'SMTP',
//       status: 'active',
//       default: true,
//     },
//     {
//       name: 'SMTP',
//       status: 'active',
//       default: false,
//     },
//   ]

//   // Filter table data based on search query
//   const filteredData = tableData.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle edit button click
//   const handleEdit = (item, index) => {
//     setEditingItem({ ...item, index });
//     setShowEditModal(true);
//     console.log('Editing gateway:', item);
//     // Add your edit modal logic here
//   };

//   return (
//     <>
//       <TableFilter
//         lang={true}
//         onSearch={setSearchQuery}
//         searchValue={searchQuery}
//       />
//       <div className="mt-5 overflow-x-auto">
//         <table className="table">
//           <thead>
//             <tr>
//               {["#", "Getaway Name", "Default", "Status", "Actions"].map((item, index) => (
//                 <th key={index}>{item}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.length > 0 ? (
//               filteredData.map((item, index) => (
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
//                     <button
//                       className='text-primary hover:opacity-70 transition-opacity'
//                       onClick={() => handleEdit(item, index)}
//                       title="Edit gateway"
//                     >
//                       {edit}
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center py-4 text-gray-500">
//                   No gateways found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* You can add your edit modal here */}
//       {showEditModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg max-w-md w-full">
//             <h3 className="text-lg font-semibold mb-4">Edit Gateway</h3>
//             <p className="mb-4">Editing: {editingItem?.name}</p>
//             <div className="flex gap-2 justify-end">
//               <button
//                 onClick={() => setShowEditModal(false)}
//                 className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => setShowEditModal(false)}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// import React from 'react'
// import TableFilter from '../TableFilter'
// import { edit } from '../../utilities/Classes'
// import Switch from '../Switch'
// import Alert from '../Alert'

// export default function Incoming() {
//   const tableData = [
//     {
//       name: 'SMTP',
//       status: 'active',
//       default: true,
//     },
//     {
//       name: 'SMTP',
//       status: 'active',
//       default: false,
//     },
//     {
//       name: 'SMTP',
//       status: 'active',
//       default: true,
//     },
//     {
//       name: 'SMTP',
//       status: 'active',
//       default: false,
//     },
//   ]
//   return (
//     <>
//       <TableFilter lang={true} />
//       <div className="mt-5 overflow-x-auto">
//         <table className="table">
//           <thead>
//             <tr>
//               {["#", "Getaway Name", "Default", "Status", "Actions"].map((item, index) => (
//                 <th key={index}>{item}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((item, index) => (
//               <tr key={index}>
//                 <td><span className='text-heading font-inter font-medium text-sm'>{index + 1}</span></td>
//                 <td><span className='text-heading font-inter font-medium text-sm'>{item.name}</span></td>
//                 <td>
//                   <Switch id={`${item.name}_${index+1}`} checked={item.default} />
//                 </td>
//                 <td>
//                   <Alert className='uppercase' variant='success' text={item.status} dots={true} />
//                 </td>
//                 <td>
//                   <button className='text-primary'>{edit}</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   )
// }
