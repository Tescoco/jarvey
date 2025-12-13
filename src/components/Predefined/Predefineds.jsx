import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { copyIcon, deleteIcon } from '../../utilities/Classes'
import TableFilter from '../TableFilter';
import Modal from '../Modal'

export default function Predefineds() {
  const tableHead = [
    `Name`,
    `Store`,
    `Tags`,
    `Language`,
    `Usages Count`,
    `Last Updated`,
    `Actions`,
  ]

  const initialTableData = [
    {
      name: 'Generic: How Can i help?',
      store: "Store 1",
      tags: ["order Status", "Refund"],
      count: 0,
      language: 'English',
      date: 'Oct 18, 2024',
    },
    {
      name: 'Order Confirmation',
      store: "Store 2",
      tags: ["order Status", "Shipping"],
      count: 5,
      language: 'English',
      date: 'Oct 18, 2024',
    },
    {
      name: 'Refund Policy',
      store: "Store 2",
      tags: ["Refund", "Policy"],
      count: 3,
      language: 'English',
      date: 'Oct 18, 2024',
      value: "2"
    },
    {
      name: 'Shipping Delay Notice',
      store: "Store 2",
      tags: ["Shipping", "Delay"],
      count: 8,
      language: 'English',
      date: 'Oct 18, 2024',
      value: "2"
    },
    {
      name: 'Product Question Response',
      store: "Store 1",
      tags: ["Product", "Support"],
      count: 12,
      language: 'English',
      date: 'Oct 18, 2024',
    },
    {
      name: 'Return Instructions',
      store: "Store 2",
      tags: ["Return", "Instructions"],
      count: 6,
      language: 'Spanish',
      date: 'Oct 18, 2024',
    },
    {
      name: 'Thank You Message',
      store: "Store 2",
      tags: ["Thank You", "Closing"],
      count: 15,
      language: 'English',
      date: 'Oct 18, 2024',
      value: "2"
    },
    {
      name: 'Out of Stock Notice',
      store: "Store 2",
      tags: ["Stock", "Availability"],
      count: 4,
      language: 'English',
      date: 'Oct 18, 2024',
      value: "2"
    },
    {
      name: 'Generic: How Can i help?',
      store: "Store 1",
      tags: ["order Status", "Refund"],
      count: 0,
      language: 'English',
      date: 'Oct 18, 2024',
    },
    {
      name: 'Generic: How Can i help?',
      store: "Store 2",
      tags: ["order Status", "Refund"],
      count: 0,
      language: 'English',
      date: 'Oct 18, 2024',
    },
    {
      name: 'Generic: How Can i help?',
      store: "Store 2",
      tags: ["order Status", "Refund"],
      count: 0,
      language: 'English',
      date: 'Oct 18, 2024',
      value: "2"
    },
    {
      name: 'Generic: How Can i help?',
      store: "Store 2",
      tags: ["order Status", "Refund"],
      count: 0,
      language: 'English',
      date: 'Oct 18, 2024',
      value: "2"
    },
    {
      name: 'Generic: How Can i help?',
      store: "Store 1",
      tags: ["order Status", "Refund"],
      count: 0,
      language: 'English',
      date: 'Oct 18, 2024',
    },
    {
      name: 'Generic: How Can i help?',
      store: "Store 2",
      tags: ["order Status", "Refund"],
      count: 0,
      language: 'English',
      date: 'Oct 18, 2024',
    },
    {
      name: 'Generic: How Can i help?',
      store: "Store 2",
      tags: ["order Status", "Refund"],
      count: 0,
      language: 'English',
      date: 'Oct 18, 2024',
      value: "2"
    },
    {
      name: 'Generic: How Can i help?',
      store: "Store 2",
      tags: ["order Status", "Refund"],
      count: 0,
      language: 'English',
      date: 'Oct 18, 2024',
      value: "2"
    },
  ];

  const [tableData, setTableData] = useState(initialTableData);

  // FIX 1: Add search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(initialTableData);
  const [selectedStore, setSelectedStore] = useState('All Stores');

  const duplicateData = (item, index) => {
    const newItem = { ...item, name: `${item.name} (Copy)` };
    const updatedData = [...tableData];
    updatedData.splice(index + 1, 0, newItem);
    setTableData(updatedData);
    handleFilter(searchQuery, selectedStore, updatedData);
  }

  const [deleteAlert, setDeleteAlert] = useState(false)
  const [activeData, setActiveData] = useState(null)

  // FIX 2: Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    handleFilter(query, selectedStore, tableData);
  };

  // FIX 3: Handle store filter
  const handleStoreFilter = (store) => {
    setSelectedStore(store);
    handleFilter(searchQuery, store, tableData);
  };

  // FIX 4: Combined filter function
  const handleFilter = (query, store, data) => {
    let filtered = [...data];

    // Filter by search query
    if (query.trim()) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        item.language.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by store
    if (store && store !== 'All Stores') {
      filtered = filtered.filter(item => item.store === store);
    }

    setFilteredData(filtered);
  };

  // FIX 5: Handle delete
  const handleDelete = () => {
    const updatedData = tableData.filter((item) => item !== activeData);
    setTableData(updatedData);
    handleFilter(searchQuery, selectedStore, updatedData);
    setDeleteAlert(false);
  };

  return (
    <>
      <div className='p-4 lg:p-5 xl:p-6'>
        {/* FIX: Pass search handler and store filter to TableFilter */}
        <TableFilter
          className=""
          onSearch={handleSearch}
          searchValue={searchQuery}
          onStoreChange={handleStoreFilter}
        />
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                {tableHead.map((item, index) => (
                  <th key={index} className={`${(item === "Usages Count" || item === "Last Updated" || item === "Actions") ? "!text-center" : ''}`}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* FIX: Use filteredData instead of tableData */}
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td className='!text-[#0A0D14] !text-sm !font-medium !leading-[1.42] tracking-[-0.084px]'>
                    <Link
                      to="/app/predefined-update"
                      className='text-current hover:text-primary'
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className='!text-[#0A0D14] !text-sm !font-medium !leading-[1.42] tracking-[-0.084px]'>
                    <p>{item.store}</p>
                  </td>
                  <td>
                    <div className='flex items-center gap-2 lg:gap-3'>
                      {item.tags.map((itm, idx) =>
                        <p key={idx} className='text-[#0A0D14] flex items-center gap-1 text-xs font-semibold !leading-[1.5] uppercase bg-[#F6F8FA] rounded-md lg:rounded-lg py-1 px-[10px] max-w-max'>
                          <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#858585" />
                          </svg>
                          {itm}
                        </p>
                      )}
                      {item.value && <p className='text-[#0A0D14] text-xs font-semibold !leading-[1.5] uppercase'>+{item.value}</p>}
                    </div>
                  </td>
                  <td>{item.language}</td>
                  <td className='!text-center'>{item.count}</td>
                  <td className='!text-center'>{item.date}</td>
                  <td>
                    <div className="flex items-center justify-center gap-3">
                      <button
                        className='text-primary hover:text-primary p-2 -m-2'
                        onClick={() => duplicateData(item, tableData.indexOf(item))}
                        title="Duplicate"
                      >
                        {copyIcon}
                      </button>
                      <button
                        className='text-gray hover:text-primary p-2 -m-2'
                        onClick={() => { setDeleteAlert(true); setActiveData(item) }}
                        title="Delete"
                      >
                        {deleteIcon}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Show message when no results found */}
        {filteredData.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No predefined responses found matching your criteria
          </div>
        )}
      </div>

      {deleteAlert &&
        <Modal innerClass='max-w-[400px] text-center' closeIconHide={false}>
          <p className='text-xl mb-4'>Do you want to delete? <strong className='text-heading font-medium'>{activeData?.name}</strong></p>
          <div className="flex item-center gap-3 justify-center">
            <button onClick={() => setDeleteAlert(false)} className='text-center btn min-w-24 bg-red-500 border-red-500 text-white'>No</button>
            <button onClick={handleDelete} className='text-center btn min-w-24 shadow text-white'>Yes</button>
          </div>
        </Modal>
      }
    </>
  )
}

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

// import { copyIcon, deleteIcon } from '../../utilities/Classes'
// import TableFilter from '../TableFilter';
// import Modal from '../Modal'

// export default function Predefineds() {
//   const tableHead = [
//     `Name`,
//     `Store`,
//     `Tags`,
//     `Language`,
//     `Usages Count`,
//     `Last Updated`,
//     `Actions`,
//   ]
//   const [tableData, setTableData] = useState([
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 1",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 2",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 2",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//       value: "2"
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 2",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//       value: "2"
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 1",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 2",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 2",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//       value: "2"
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 2",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//       value: "2"
//     }, {
//       name: 'Generic: How Can i help?',
//       store: "Store 1",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 2",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 2",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//       value: "2"
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 2",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//       value: "2"
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 1",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 2",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 2",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//       value: "2"
//     },
//     {
//       name: 'Generic: How Can i help?',
//       store: "Store 2",
//       tags: [
//         "order Status", "Refund"
//       ],
//       count: 0,
//       language: 'English',
//       date: 'Oct 18, 2024',
//       value: "2"
//     },

//   ])

//   const duplicateData = (item, index) => {
//     setTableData(prev => {
//       const newData = [...prev];
//       newData.splice(index + 1, 0, { ...item })
//       return newData;
//     })
//   }

//   const [deleteAlert, setDeleteAlert] = useState(false)
//   const [activeData, setActiveData] = useState(null)

//   return (
//     <>
//       <div className='p-4 lg:p-5 xl:p-6'>
//         <TableFilter className="" />
//         <div className="overflow-x-auto">
//           <table className="table">
//             <thead>
//               <tr>
//                 {tableHead.map((item, index) => (
//                   <th key={index} className={`${(item === "Usages Count" || item === "Last Updated" || item === "Actions") ? "!text-center" : ''}`}>{item}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((item, index) => (
//                 <tr key={index}>
//                   <td className='!text-[#0A0D14] !text-sm !font-medium !leading-[1.42] tracking-[-0.084px]'>
//                     <Link className='text-current hover:text-primary'>{item.name}</Link>
//                   </td>
//                   <td className='!text-[#0A0D14] !text-sm !font-medium !leading-[1.42] tracking-[-0.084px]'><p>{item.store}</p></td>
//                   <td>
//                     <div className='flex items-center gap-2 lg:gap-3'>
//                       {item.tags.map((itm, idx) =>
//                         <p key={idx} className='text-[#0A0D14] flex items-center gap-1 text-xs font-semibold !leading-[1.5] uppercase bg-[#F6F8FA] rounded-md lg:rounded-lg py-1 px-[10px] max-w-max'>
//                           <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="3.5" cy="3.5" r="3.5" fill="#858585" />
//                           </svg>
//                           {itm}
//                         </p>)}
//                       {item.value && <p className='text-[#0A0D14] text-xs font-semibold !leading-[1.5] uppercase'>+{item.value}</p>}
//                     </div>
//                   </td>
//                   <td>{item.language}</td>
//                   <td className='!text-center'>{item.count}</td>
//                   <td className='!text-center'>{item.date}</td>
//                   <td>
//                     <div className="flex items-center justify-center gap-3">
//                       <button className='text-primary hover:text-primary p-2 -m-2' onClick={() => duplicateData(item, index)}>{copyIcon}</button>
//                       <button className='text-gray hover:text-primary p-2 -m-2' onClick={() => { setDeleteAlert(true); setActiveData(item) }}>{deleteIcon}</button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {deleteAlert &&
//         <Modal innerClass='max-w-[400px] text-center' closeIconHide={false}>
//           <p className='text-xl mb-4'>Do you want delete? <strong className='text-heading font-medium'>{activeData.name}</strong></p>
//           <div className="flex item-center gap-3 justify-center">
//             <button onClick={() => setDeleteAlert(false)} className='text-center btn min-w-24 bg-red-500 border-red-500 text-white'>No</button>
//             <button onClick={() => {
//               setTableData((prev) => prev.filter((item) => item != activeData));
//               setDeleteAlert(false)
//             }} className='text-center btn min-w-24 shadow text-white'>Yes</button>
//           </div>
//         </Modal>
//       }
//     </>
//   )
// }
