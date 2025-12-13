import React, { useState } from 'react'
import Top from '../layouts/Top'
import MainInner from '../components/MainInner';
import { pen, deleteIcon } from '../utilities/Classes'
import Switch from '../components/Switch'
import Modal from '../components/Modal'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown';

import shope from '../assets/img/sop.svg'

export default function Store() {
    const tableHead = [
        `#`,
        `Name`,
        `Type`,
        `Status`,
        `Actions`,
    ]

    // Initial store data with IDs
    const initialStores = [
        {
            id: 1,
            img: shope,
            name: 'Store Name 1',
            type: 'Retail',
            status: true,
        },
        {
            id: 2,
            img: shope,
            name: 'Store Name 2',
            type: 'Wholesale',
            status: true,
        },
        {
            id: 3,
            img: shope,
            name: 'Store Name 3',
            type: 'Online',
            status: false,
        },
        {
            id: 4,
            img: shope,
            name: 'Store Name 4',
            type: 'Retail',
            status: true,
        },
        {
            id: 5,
            img: shope,
            name: 'Store Name 5',
            type: 'Wholesale',
            status: true,
        },
        {
            id: 6,
            img: shope,
            name: 'Store Name 6',
            type: 'Online',
            status: false,
        },
        {
            id: 7,
            img: shope,
            name: 'Store Name 7',
            type: 'Retail',
            status: true,
        },
        {
            id: 8,
            img: shope,
            name: 'Store Name 8',
            type: 'Wholesale',
            status: true,
        },
        {
            id: 9,
            img: shope,
            name: 'Store Name 9',
            type: 'Online',
            status: true,
        },
        {
            id: 10,
            img: shope,
            name: 'Store Name 10',
            type: 'Retail',
            status: false,
        },
    ];

    // State management
    const [stores, setStores] = useState(initialStores);
    const [newUserModal, setNewUserModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editingStore, setEditingStore] = useState(null);
    const [deleteAlert, setDeleteAlert] = useState(false);
    const [activeData, setActiveData] = useState(null);

    // FIX 1: Search functionality
    const [searchTerm, setSearchTerm] = useState('');

    // FIX 2: Single Sort By functionality
    const [sortBy, setSortBy] = useState('name'); // name, type, status

    // Form data
    const [formName, setFormName] = useState('');
    const [formType, setFormType] = useState('');
    const [formStatus, setFormStatus] = useState(true);
    const [uploadedImage, setUploadedImage] = useState(null);

    const typeOptions = [
        { name: 'Retail' },
        { name: 'Wholesale' },
        { name: 'Online' },
        { name: 'Franchise' },
    ];

    // FIX 1: Filter stores based on search term
    const filteredStores = stores.filter(store =>
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // FIX 2: Sort stores
    const sortedStores = [...filteredStores].sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'type':
                return a.type.localeCompare(b.type);
            case 'status':
                return (b.status === a.status) ? 0 : b.status ? 1 : -1;
            default:
                return 0;
        }
    });

    // FIX 3: Handle Add Store button
    const handleAddStore = () => {
        setEditMode(false);
        setEditingStore(null);
        setFormName('');
        setFormType('');
        setFormStatus(true);
        setUploadedImage(null);
        setNewUserModal(true);
    };

    // Handle Edit button
    const handleEditStore = (store) => {
        setEditMode(true);
        setEditingStore(store);
        setFormName(store.name);
        setFormType(store.type);
        setFormStatus(store.status);
        setUploadedImage(null);
        setNewUserModal(true);
    };

    // Handle form submission
    const handleSubmitStore = () => {
        if (!formName || !formType) {
            alert('Please fill in all required fields');
            return;
        }

        if (editMode && editingStore) {
            // Update existing store
            setStores(stores.map(s =>
                s.id === editingStore.id
                    ? {
                        ...s,
                        name: formName,
                        type: formType,
                        status: formStatus,
                        img: uploadedImage || s.img
                    }
                    : s
            ));
        } else {
            // Add new store
            const newStore = {
                id: stores.length > 0 ? Math.max(...stores.map(s => s.id)) + 1 : 1,
                img: uploadedImage || shope,
                name: formName,
                type: formType,
                status: formStatus,
            };
            setStores([...stores, newStore]);
        }

        setNewUserModal(false);
        setFormName('');
        setFormType('');
        setFormStatus(true);
        setUploadedImage(null);
    };

    // Handle status toggle
    const handleStatusToggle = (storeId, newStatus) => {
        setStores(stores.map(s =>
            s.id === storeId ? { ...s, status: newStatus } : s
        ));
    };

    // Handle delete confirmation
    const handleDeleteClick = (store) => {
        setActiveData(store);
        setDeleteAlert(true);
    };

    // Confirm delete
    const confirmDelete = () => {
        setStores(stores.filter(s => s.id !== activeData.id));
        setDeleteAlert(false);
        setActiveData(null);
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Top title="All stores" >
                {/* FIX 3: Add Store button now works */}
                <button
                    className='btn flex items-center gap-1 !bg-primary !text-white'
                    onClick={handleAddStore}
                >
                    <svg className='flex-none' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white" />
                    </svg>
                    New Store
                </button>
            </Top>
            <MainInner>
                <div>
                    {/* FIX 1 & 2: Search and Sort Controls */}
                    <div className="mb-4 flex flex-wrap gap-3 items-center justify-between">
                        {/* Search Field */}
                        <div className="relative flex-1 min-w-[200px] max-w-md">
                            <input
                                type="text"
                                placeholder="Search stores..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
                                >
                                    ×
                                </button>
                            )}
                        </div>

                        {/* Single Sort By Dropdown */}
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-gray-700">Sort By:</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="name">Name</option>
                                <option value="type">Type</option>
                                <option value="status">Status</option>
                            </select>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    {tableHead.map((item, index) => (
                                        <th key={index} className='last:text-right'>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {sortedStores.length > 0 ? (
                                    sortedStores.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className='!text-black'>{index + 1}</td>
                                            <td className='!text-black flex items-center gap-3'>
                                                <div className="size-8 flex items-center justify-center p-1.5 border border-solid border-stroke rounded-full">
                                                    <img src={item.img} className='rounded-full' alt="" />
                                                </div>
                                                {item.name}
                                            </td>
                                            <td className='!text-heading'>{item.type}</td>
                                            <td>
                                                <Switch
                                                    id={`${item.name}_${item.id}`}
                                                    checked={item.status}
                                                    onChange={(e) => handleStatusToggle(item.id, e.target.checked)}
                                                />
                                            </td>
                                            <td>
                                                <div className="flex items-center justify-end gap-3">
                                                    <button
                                                        className='text-gray hover:text-primary p-2 -m-2 transition-colors'
                                                        onClick={() => handleEditStore(item)}
                                                    >
                                                        {pen}
                                                    </button>
                                                    <button
                                                        className='text-gray hover:text-primary p-2 -m-2 transition-colors'
                                                        onClick={() => handleDeleteClick(item)}
                                                    >
                                                        {deleteIcon}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={tableHead.length} className="text-center py-8 text-gray-500">
                                            No stores found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainInner>

            {/* Add/Edit Store Modal - FIX 3: Now functional */}
            {newUserModal &&
                <Modal innerClass='max-w-[985px]' onClick={() => setNewUserModal(false)} closeIconHide={false}>
                    <div className="mb-4 md:mb-5">
                        <h2 className='text-2xl text-black font-inter font-semibold leading-normal'>
                            {editMode ? 'Edit Store' : 'New Store'}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                        <div className="col-span-2 md:col-span-1">
                            <div className={`w-full`}>
                                <label htmlFor='drop' className={`relative z-[1] rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[180px] md:min-h-[291px] flex items-center flex-col justify-center overflow-hidden`}>
                                    {uploadedImage ? (
                                        <img src={uploadedImage} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                                <path d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337" stroke="#7856FF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className={`mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs`}>
                                                <span className={`block text-primary`}>Upload Image</span>
                                            </span>
                                        </>
                                    )}
                                    <input
                                        type="file"
                                        id="drop"
                                        className='hidden'
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
                                <Input
                                    className='mb-1'
                                    type="text"
                                    placeholder="Type here"
                                    label="Store Name"
                                    required={true}
                                    value={formName}
                                    onChange={(e) => setFormName(e.target.value)}
                                />
                                <Dropdown
                                    className='mb-0'
                                    placeholder="Select type"
                                    items={typeOptions}
                                    label="Store Type"
                                    required={true}
                                    value={formType}
                                    onChange={(value) => setFormType(value)}
                                />
                                <div className="col-span-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <Switch
                                            id="storeStatus"
                                            checked={formStatus}
                                            onChange={(e) => setFormStatus(e.target.checked)}
                                        />
                                        <span className="text-sm font-medium">Active Status</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className='btn text-primary border-primary'
                            onClick={() => setNewUserModal(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className='btn bg-primary text-white'
                            onClick={handleSubmitStore}
                        >
                            {editMode ? 'Save Changes' : 'Add Store'}
                        </button>
                    </div>
                </Modal>
            }

            {/* Delete Confirmation Modal */}
            {deleteAlert &&
                <Modal innerClass='max-w-[400px] text-center' closeIconHide={false}>
                    <p className='text-xl mb-4'>
                        Do you want to delete <strong className='text-heading font-medium'>{activeData?.name}</strong>?
                    </p>
                    <div className="flex item-center gap-3 justify-center">
                        <button
                            onClick={() => setDeleteAlert(false)}
                            className='text-center btn min-w-24 bg-off border-gray-300 text-gray-700'
                        >
                            No
                        </button>
                        <button
                            onClick={confirmDelete}
                            className='text-center btn min-w-24 bg-red-500 border-red-500 text-white'
                        >
                            Yes
                        </button>
                    </div>
                </Modal>
            }
        </>
    )
}

// import React, { useState } from 'react'
// import Top from '../layouts/Top'
// import MainInner from '../components/MainInner';
// import { pen, kee, logout, deleteIcon } from '../utilities/Classes'
// import TableFilter from '../components/TableFilter';
// import Switch from '../components/Switch'
// import Modal from '../components/Modal'
// import Input from '../components/Input'
// import Dropdown from '../components/Dropdown';

// import shope from '../assets/img/sop.svg'

// export default function Store() {
//     const tableHead = [
//         `#`,
//         `Name`,
//         `Type`,
//         `Status`,
//         `Actions`,
//     ]
//     const [newUserModal, setNewUserModal] = useState(false)
//     const [deleteAlert, setDeleteAlert] = useState(false)

//     const tableData = [
//         {
//             img: shope,
//             name: 'Store Name',
//             type: 'Store type',
//             status: true,
//         },
//         {
//             img: shope,
//             name: 'Store Name',
//             type: 'Store type',
//             status: true,
//         },
//         {
//             img: shope,
//             name: 'Store Name',
//             type: 'Store type',
//             status: true,
//         },
//         {
//             img: shope,
//             name: 'Store Name',
//             type: 'Store type',
//             status: true,
//         },
//         {
//             img: shope,
//             name: 'Store Name',
//             type: 'Store type',
//             status: true,
//         },
//         {
//             img: shope,
//             name: 'Store Name',
//             type: 'Store type',
//             status: true,
//         },
//         {
//             img: shope,
//             name: 'Store Name',
//             type: 'Store type',
//             status: true,
//         },
//         {
//             img: shope,
//             name: 'Store Name',
//             type: 'Store type',
//             status: true,
//         },
//         {
//             img: shope,
//             name: 'Store Name',
//             type: 'Store type',
//             status: true,
//         },
//         {
//             img: shope,
//             name: 'Store Name',
//             type: 'Store type',
//             status: true,
//         },
//     ]
//     const [activeData, setActiveData] = useState(tableData[0])
//     const Status = [
//         { name: 'Status-1' },
//         { name: 'Status-2' },
//         { name: 'Status-3' },
//     ]

//     return (
//         <>
//             <Top title="All stores" >
//                 <button className='btn flex items-center gap-1 !bg-primary !text-white' onClick={() => setNewUserModal(true)}>
//                     <svg className='flex-none' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white" />
//                     </svg>
//                     New Store</button>
//             </Top>
//             <MainInner>
//                 <div>
//                     <TableFilter className="" />
//                     <div className="overflow-x-auto">
//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     {tableHead.map((item, index) => (
//                                         <th key={index} className='last:text-right'>{item}</th>
//                                     ))}
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {tableData.map((item, index) => (
//                                     <tr key={index}>
//                                         <td className='!text-black'>{index + 1}</td>
//                                         <td className='!text-black flex items-center gap-3'>
//                                             <div className="size-8 flex items-center justify-center p-1.5 border border-solid border-stroke rounded-full">
//                                                 <img src={item.img} className='rounded-full' alt="" />
//                                             </div>
//                                             {item.name}
//                                         </td>
//                                         <td className='!text-heading'>{item.type}</td>
//                                         <td>
//                                             <Switch id={`${item.name}_${index + 1}`} checked={item.status} />
//                                         </td>
//                                         <td>
//                                             <div className="flex items-center justify-end gap-3">
//                                                 <button className='text-gray hover:text-primary p-2 -m-2'>{pen}</button>
//                                                 <button className='text-gray hover:text-primary p-2 -m-2' onClick={() => {
//                                                     setActiveData(item)
//                                                     setDeleteAlert(true)
//                                                 }}>{deleteIcon}</button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </MainInner>

//             {newUserModal &&
//                 <Modal innerClass='max-w-[985px]' onClick={() => setNewUserModal(false)} closeIconHide={false}>
//                     <div className="mb-4 md:mb-5">
//                         <h2 className='text-2xl text-black font-inter font-semibold leading-normal'>New User</h2>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
//                         <div className="col-span-2 md:col-span-1">
//                             <div className={`w-full`}>
//                                 <label htmlFor='drop' className={`relative z-[1] rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[180px] md:min-h-[291px] flex items-center flex-col justify-center`}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
//                                         <path d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337" stroke="#7856FF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                     <span className={`mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs`}><span className={`block text-primary`}>Upload Image</span></span>
//                                     <input type="file" id="drop" className='hidden' name="" placeholder="" />
//                                 </label>
//                             </div>
//                         </div>
//                         <div className="col-span-2">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
//                                 <Input className='mb-1' type="text" placeholder="Type here" label="Name" required={true} />
//                                 <Input className='mb-1' type="text" placeholder="Type here" label="Email" required={true} />
//                                 <Input className='mb-1' type="text" placeholder="Type here" label="Password" required={true} />
//                                 <Input className='mb-1' type="text" placeholder="Type here" label="Confirm Password" required={true} />
//                                 <Input className='mb-1' type="text" placeholder="Type here" label="Phone" required={true} />
//                                 <Dropdown className='mb-0' placeholder="Status" items={Status} label="Status" required={true} />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <button className='btn text-primary border-primary' onClick={() => setNewUserModal(false)}>Cancel</button>
//                         <button className='btn bg-primary text-white'>Add Store</button>
//                     </div>
//                 </Modal>
//             }
//             {deleteAlert &&
//                 <Modal innerClass='max-w-[400px] text-center' closeIconHide={false}>
//                     <p className='text-xl mb-4'>Do you want delete? <strong className='text-heading font-medium'>{activeData.name}</strong></p>
//                     <div className="flex item-center gap-3 justify-center">
//                         <button onClick={() => setDeleteAlert(false)} className='text-center btn min-w-24 bg-red-500 border-red-500 text-white'>No</button>
//                         <button onClick={() => setDeleteAlert(false)} className='text-center btn min-w-24 shadow text-white'>Yes</button>
//                     </div>
//                 </Modal>
//             }
//         </>
//     )
// }

