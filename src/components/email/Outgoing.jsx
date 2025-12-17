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
  const [editGateway, setEditGateway] = useState({
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

  // const tableData = [
  //   {
  //     name: 'SMTP',
  //     status: 'active',
  //     default: true,
  //   },
  //   {
  //     name: 'Gmail',
  //     status: 'active',
  //     default: true,
  //   },
  //   {
  //     name: 'SMTP',
  //     status: 'active',
  //     default: true,
  //   },
  //   {
  //     name: 'Gmail',
  //     status: 'active',
  //     default: true,
  //   },
  //   {
  //     name: 'SMTP',
  //     status: 'active',
  //     default: true,
  //   },
  //   {
  //     name: 'Gmail',
  //     status: 'active',
  //     default: true,
  //   },
  // ]

  // Filter table data based on search query


  const [tableData, setTableData] = useState([
    {
      name: 'SMTP',
      status: 'active',
      default: true,
      product: 'SMTP',
      host: 'smtp.example.com',
      port: '587',
      encryption: 'TLS',
      username: 'user@example.com',
      password: '••••••••',
      protocol: 'SMTP',
      keywords: 'support'
    },
    {
      name: 'Gmail',
      status: 'active',
      default: true,
      product: 'Gmail',
      host: 'smtp.gmail.com',
      port: '465',
      encryption: 'SSL',
      username: 'gmail@example.com',
      password: '••••••••',
      protocol: 'SMTP',
      keywords: 'help'
    },
    // Add complete data for all items
  ]);

  const filteredData = tableData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle edit button click
  const handleEdit = (item, index) => {
    setEditGateway({
      name: item.name,
      product: item.product,
      host: item.host,
      port: item.port,
      encryption: item.encryption,
      username: item.username,
      password: item.password,
      protocol: item.protocol,
      keywords: item.keywords
    });
    setEditingItem({ ...item, index });
    setShowEditModal(true);
  };

  // Add these new handler functions:
  const handleEditInputChange = (field, value) => {
    setEditGateway(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEditSubmit = () => {
    // Validate required fields
    if (!editGateway.name || !editGateway.host || !editGateway.port) {
      alert('Please fill in all required fields');
      return;
    }

    // Update the specific item in tableData
    setTableData(prev => prev.map((item, idx) =>
      idx === editingItem.index
        ? { ...item, ...editGateway }
        : item
    ));

    setShowEditModal(false);
    alert('Gateway updated successfully!');
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <>
      {/* FIX #2: Pass correct prop name for search */}
      <TableFilter
        lang={true}
        onSearch={setSearchQuery}
        searchValue={searchQuery}
      />
      <div className="mt-5 overflow-x-auto">
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
                    {/* FIX #3: Edit button is now properly wired */}
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

      {/* Edit Modal - Working */}
      {/* {showEditModal && (
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
      )} */}

      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Edit Gateway</h3>
              <button
                onClick={handleCloseEditModal}
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
                  value={editGateway.name}
                  onChange={(e) => handleEditInputChange('name', e.target.value)}
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
                  onChange={(value) => handleEditInputChange('product', value)}
                />
                <Input
                  className='mb-0'
                  type='text'
                  label="Host"
                  placeholder="mail.example.com"
                  required
                  value={editGateway.host}
                  onChange={(e) => handleEditInputChange('host', e.target.value)}
                />
                <Input
                  className='mb-0'
                  type='text'
                  label="Port"
                  placeholder="993"
                  required
                  value={editGateway.port}
                  onChange={(e) => handleEditInputChange('port', e.target.value)}
                />
                <Input
                  className='mb-0'
                  type='text'
                  label="Encryption"
                  placeholder="SSL/TLS"
                  required
                  value={editGateway.encryption}
                  onChange={(e) => handleEditInputChange('encryption', e.target.value)}
                />
                <Input
                  className='mb-0'
                  type='text'
                  label="Username"
                  placeholder="user@example.com"
                  required
                  value={editGateway.username}
                  onChange={(e) => handleEditInputChange('username', e.target.value)}
                />
                <Input
                  className='mb-0'
                  type='password'
                  label="Password"
                  placeholder="Enter password"
                  required
                  value={editGateway.password}
                  onChange={(e) => handleEditInputChange('password', e.target.value)}
                />
                <Input
                  className='mb-0'
                  type='text'
                  label="Protocol"
                  placeholder="IMAP"
                  required
                  value={editGateway.protocol}
                  onChange={(e) => handleEditInputChange('protocol', e.target.value)}
                />
                <div className="md:col-span-2">
                  <Input
                    className='mb-0'
                    type='text'
                    label="Email to Ticket Keywords"
                    placeholder="support, help, inquiry"
                    value={editGateway.keywords}
                    onChange={(e) => handleEditInputChange('keywords', e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Comma-separated keywords to trigger ticket creation
                  </p>
                </div>
              </div>

              <div className="flex gap-3 justify-end mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleCloseEditModal}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditSubmit}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Save Changes
                </button>
              </div>
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
// import Input from '../Input'
// import Dropdown from '../Dropdown'

// export default function Outgoing() {
//   // State for search functionality
//   const [searchQuery, setSearchQuery] = useState('');

//   // State for edit modal
//   const [editingItem, setEditingItem] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);

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
//           <TableFilter
//             searchClass="max-w-[180px]"
//             className='!mb-0'
//             lang={true}
//             onSearch={setSearchQuery}
//             searchValue={searchQuery}
//           />
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
//               {filteredData.length > 0 ? (
//                 filteredData.map((item, index) => (
//                   <tr key={index}>
//                     <td><span className='text-heading font-inter font-medium text-sm'>{index + 1}</span></td>
//                     <td><span className='text-heading font-inter font-medium text-sm'>{item.name}</span></td>
//                     <td>
//                       <Switch id={`${item.name}_${index + 1}`} checked={item.default} />
//                     </td>
//                     <td>
//                       <Alert className='uppercase' variant='success' text={item.status} dots={true} />
//                     </td>
//                     <td>
//                       <button
//                         className='text-primary hover:opacity-70 transition-opacity'
//                         onClick={() => handleEdit(item, index)}
//                         title="Edit gateway"
//                       >
//                         {edit}
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center py-4 text-gray-500">
//                     No gateways found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Edit Modal */}
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
