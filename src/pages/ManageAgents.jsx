import React, { useState } from 'react'
import Top from '../layouts/Top'
import MainInner from '../components/MainInner';
import { pen, kee, logout, deleteIcon, desktop, sent } from '../utilities/Classes'
import TableFilter from '../components/TableFilter';
import Switch from '../components/Switch'
import Modal from '../components/Modal'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown';
import Checkbox from '../components/Checkbox';

import img1 from '../assets/img/manager/table-img-01.png'
import img2 from '../assets/img/manager/table-img-2.png'
import img3 from '../assets/img/manager/table-img-3.png'
import img4 from '../assets/img/manager/table-img-4.png'
import img5 from '../assets/img/manager/table-img-5.png'
import img6 from '../assets/img/manager/table-img-6.png'
import img7 from '../assets/img/manager/table-img-7.png'
import img8 from '../assets/img/manager/table-img-8.png'
import img9 from '../assets/img/manager/table-img-9.png'
import img10 from '../assets/img/manager/table-img-10.png'
import img11 from '../assets/img/manager/table-img-11.png'
import img12 from '../assets/img/manager/table-img-12.png'

export default function ManageAgents() {
    const tableHead = [
        `#`,
        `Name`,
        `Email`,
        `Response Time`,
        `Status`,
        `Best Agent`,
        `Actions`,
    ]
    const initialTableData = [
        {
            name: 'Debra',
            img: img1,
            Email: 'tanya.hill@example.com',
            Time: 'N/A',
            status: true,
            bestAgent: false,
        },
        {
            name: 'Ronald',
            img: img2,
            Email: 'dolores@example.com',
            Time: 'N/A',
            status: false,
            bestAgent: true,
        },
        {
            name: 'Darrell',
            img: img3,
            Email: 'georgia.young@example.com',
            Time: 'N/A',
            status: true,
            bestAgent: false,
        },
        {
            name: 'Cody',
            img: img4,
            Email: 'felicia.reid@example.com',
            Time: 'N/A',
            status: true,
            bestAgent: false,
        },
        {
            name: 'Aubrey',
            img: img5,
            Email: 'deanna.curtis@example.com',
            Time: 'N/A',
            status: false,
            bestAgent: false,
        },
        {
            name: 'Kristin',
            img: img6,
            Email: 'tim.jennings@example.com',
            Time: 'N/A',
            status: true,
            bestAgent: true,
        },
        {
            name: 'Dianne',
            img: img7,
            Email: 'graham@example.com',
            Time: 'N/A',
            status: true,
            bestAgent: false,
        },
        {
            name: 'Shane',
            img: img8,
            Email: 'bill.sanders@example.com',
            Time: 'N/A',
            status: false,
            bestAgent: false,
        },
        {
            name: 'Courtney',
            img: img9,
            Email: 'michelle.rivera@example.com',
            Time: 'N/A',
            status: true,
            bestAgent: false,
        },
        {
            name: 'Kyle',
            img: img10,
            Email: 'jessica.hanson@example.com',
            Time: 'N/A',
            status: true,
            bestAgent: true,
        },
        {
            name: 'Cameron',
            img: img11,
            Email: 'kenzi.lawson@example.com',
            Time: 'N/A',
            status: false,
            bestAgent: false,
        },
        {
            name: 'Marjorie',
            img: img12,
            Email: 'michael.mitc@example.com',
            Time: 'N/A',
            status: true,
            bestAgent: false,
        },
    ]

    // FIX 1: Add state for table data and search
    const [tableData, setTableData] = useState(initialTableData);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(initialTableData);

    const Status = [
        { name: 'Admin' },
        { name: 'Agent' },
        { name: 'Manager' },
    ]
    const asset = [
        { name: 'Support' },
        { name: 'Sales' },
        { name: 'Technical' },
    ]
    const Asset = [
        { text: 'View dashboard', checked: false },
        { text: 'Manage category', checked: false },
        { text: 'Manage users', checked: false },
        { text: 'Mail configuration', checked: false },
        { text: 'Sms configuration', checked: false },
        { text: 'System configuration', checked: false },
        { text: 'Manage language', checked: false },
        { text: 'Manage tickets', checked: false },
        { text: 'Update tickets', checked: false },
        { text: 'Assign tickets', checked: false },
        { text: 'Delete tickets', checked: false },
        { text: 'Chat module', checked: false },
        { text: 'Manage tags', checked: false },
        { text: 'Manage article', checked: false },
        { text: 'Manage frontends', checked: false },
        { text: 'Manage pages', checked: false },
        { text: 'Manage contact', checked: false },
        { text: 'Manage priorites', checked: false },
        { text: 'Manage ticket status', checked: false },
        { text: 'Manage product', checked: false },
    ]

    const [activeData, setActiveData] = useState(tableData[0])
    const [editArticle, setEditArticle] = useState(false)
    const [deleteAlert, setDeleteAlert] = useState(false)

    // FIX 2: Add state for new agent form
    const [newAgent, setNewAgent] = useState({
        type: '',
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
        assetCategory: '',
        permissions: Asset.map(item => ({ ...item }))
    });

    // FIX 3: Handle search functionality
    const handleSearch = (query) => {
        setSearchQuery(query);
        if (!query.trim()) {
            setFilteredData(tableData);
            return;
        }

        const filtered = tableData.filter(agent =>
            agent.name.toLowerCase().includes(query.toLowerCase()) ||
            agent.Email.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    // FIX 4: Handle status toggle
    const handleStatusToggle = (index) => {
        const updated = [...tableData];
        updated[index].status = !updated[index].status;
        setTableData(updated);
        handleSearch(searchQuery); // Re-filter if search is active
    };

    // FIX 5: Handle best agent toggle
    const handleBestAgentToggle = (index) => {
        const updated = [...tableData];
        updated[index].bestAgent = !updated[index].bestAgent;
        setTableData(updated);
        handleSearch(searchQuery);
    };

    // FIX 6: Handle permission checkbox toggle
    const handlePermissionToggle = (index) => {
        setNewAgent(prev => ({
            ...prev,
            permissions: prev.permissions.map((perm, i) =>
                i === index ? { ...perm, checked: !perm.checked } : perm
            )
        }));
    };

    // FIX 7: Handle action button clicks
    const handleLogout = (agent) => {
        alert(`Logout agent: ${agent.name}`);
        // Add your logout logic here
    };

    const handleViewKey = (agent) => {
        alert(`View key for: ${agent.name}`);
        // Add your view key logic here
    };

    const handleDesktop = (agent) => {
        alert(`Desktop access for: ${agent.name}`);
        // Add your desktop logic here
    };

    const handleSent = (agent) => {
        alert(`Send notification to: ${agent.name}`);
        // Add your send logic here
    };

    const handleEdit = (agent) => {
        alert(`Edit agent: ${agent.name}`);
        setActiveData(agent);
        setEditArticle(true);
        // Pre-fill form with agent data
    };

    // FIX 8: Handle delete agent
    const handleDelete = (agent) => {
        const updated = tableData.filter(a => a !== agent);
        setTableData(updated);
        handleSearch(searchQuery);
        setDeleteAlert(false);
    };

    // FIX 9: Handle create new agent
    const handleCreateAgent = () => {
        // Validation
        if (!newAgent.name || !newAgent.email || !newAgent.username || !newAgent.password) {
            alert('Please fill in all required fields');
            return;
        }

        if (newAgent.password !== newAgent.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Create new agent object
        const agent = {
            name: newAgent.name,
            img: img1, // Default image
            Email: newAgent.email,
            Time: 'N/A',
            status: true,
            bestAgent: false,
        };

        // Add to table data
        setTableData([...tableData, agent]);
        setFilteredData([...tableData, agent]);

        // Reset form and close modal
        setNewAgent({
            type: '',
            name: '',
            email: '',
            phone: '',
            username: '',
            password: '',
            confirmPassword: '',
            assetCategory: '',
            permissions: Asset.map(item => ({ ...item }))
        });
        setEditArticle(false);
        alert('Agent created successfully!');
    };

    return (
        <>
            <Top title="Manager Agents">
                <button className='btn flex items-center gap-1 !bg-primary !text-white' onClick={() => setEditArticle(true)}>
                    <svg className='flex-none' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white" />
                    </svg>
                    New Agent
                </button>
            </Top>
            <MainInner>
                <div>
                    {/* FIX: Pass search handler to TableFilter */}
                    <TableFilter
                        className=""
                        onSearch={handleSearch}
                        searchValue={searchQuery}
                    />
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
                                {/* FIX: Use filteredData instead of tableData */}
                                {filteredData.map((item, index) => (
                                    <tr key={index}>
                                        <td className='!text-black'>{index + 1}</td>
                                        <td className='!text-black flex items-center gap-3'>
                                            <img src={item.img} className='rounded-full' alt="" />
                                            {item.name}
                                        </td>
                                        <td className='!font-medium !text-heading'>{item.Email}</td>
                                        <td className='!font-medium !text-heading'>{item.Time}</td>
                                        <td>
                                            {/* FIX: Add onChange handler for status */}
                                            <Switch
                                                id={`${item.name}_status_${index}`}
                                                checked={item.status}
                                                onChange={() => handleStatusToggle(tableData.indexOf(item))}
                                            />
                                        </td>
                                        <td>
                                            {/* FIX: Add onChange handler for best agent */}
                                            <Switch
                                                id={`${item.name}_best_${index}`}
                                                checked={item.bestAgent}
                                                onChange={() => handleBestAgentToggle(tableData.indexOf(item))}
                                            />
                                        </td>
                                        <td>
                                            {/* FIX: Add onClick handlers to action buttons */}
                                            <div className="flex items-center justify-end gap-3">
                                                <button
                                                    onClick={() => handleLogout(item)}
                                                    className='text-primary hover:text-primary p-2 -m-2'
                                                    title="Logout"
                                                >
                                                    {logout}
                                                </button>
                                                <button
                                                    onClick={() => handleViewKey(item)}
                                                    className='text-primary hover:text-primary p-2 -m-2'
                                                    title="View Key"
                                                >
                                                    {kee}
                                                </button>
                                                <button
                                                    onClick={() => handleDesktop(item)}
                                                    className='text-primary hover:text-primary p-2 -m-2'
                                                    title="Desktop"
                                                >
                                                    {desktop}
                                                </button>
                                                <button
                                                    onClick={() => handleSent(item)}
                                                    className='text-primary hover:text-primary p-2 -m-2'
                                                    title="Send"
                                                >
                                                    {sent}
                                                </button>
                                                <button
                                                    onClick={() => handleEdit(item)}
                                                    className='text-primary hover:text-primary p-2 -m-2'
                                                    title="Edit"
                                                >
                                                    {pen}
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setActiveData(item)
                                                        setDeleteAlert(true)
                                                    }}
                                                    className='text-gray hover:text-primary p-2 -m-2'
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
                            No agents found matching "{searchQuery}"
                        </div>
                    )}
                </div>
            </MainInner>

            {/* FIX: Updated Create Agent Modal */}
            {editArticle &&
                <Modal innerClass='max-w-[985px]' onClick={() => setEditArticle(false)} closeIconHide={false}>
                    <div className="mb-4 md:mb-5">
                        <h2 className='text-2xl text-black font-inter font-semibold leading-normal'>Create Agent</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-5">
                        <div className="col-span-2 md:col-span-1">
                            <div className={`w-full`}>
                                <label htmlFor='drop' className={`relative z-[1] rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[180px] lg:min-h-[291px]  mx-auto flex items-center flex-col justify-center`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                        <path d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337" stroke="#7856FF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className={`mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs`}>
                                        <span className={`block text-primary`}>Upload Image</span>
                                    </span>
                                    <input type="file" id="drop" className='hidden' name="" placeholder="" />
                                </label>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="mb-5">
                                <Dropdown
                                    className='mb-0'
                                    placeholder="Select Type"
                                    items={Status}
                                    label="Type"
                                    required={true}
                                    onChange={(val) => setNewAgent({ ...newAgent, type: val })}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5 mb-3 md:mb-4 lg:mb-5">
                                <Input
                                    className='mb-1'
                                    type="text"
                                    placeholder="Type here"
                                    label="Name"
                                    required={true}
                                    value={newAgent.name}
                                    onChange={(e) => setNewAgent({ ...newAgent, name: e.target.value })}
                                />
                                <Input
                                    className='mb-1'
                                    type="email"
                                    placeholder="Type here"
                                    label="Email"
                                    required={true}
                                    value={newAgent.email}
                                    onChange={(e) => setNewAgent({ ...newAgent, email: e.target.value })}
                                />
                                <Input
                                    className='mb-1'
                                    type="text"
                                    placeholder="Type here"
                                    label="Phone"
                                    required={true}
                                    value={newAgent.phone}
                                    onChange={(e) => setNewAgent({ ...newAgent, phone: e.target.value })}
                                />
                                <Input
                                    className='mb-1'
                                    type="text"
                                    placeholder="Type here"
                                    label="Username"
                                    required={true}
                                    value={newAgent.username}
                                    onChange={(e) => setNewAgent({ ...newAgent, username: e.target.value })}
                                />
                                <Input
                                    className='mb-1'
                                    type="password"
                                    placeholder="Type here"
                                    label="Password"
                                    required={true}
                                    value={newAgent.password}
                                    onChange={(e) => setNewAgent({ ...newAgent, password: e.target.value })}
                                />
                                <Input
                                    className='mb-1'
                                    type="password"
                                    placeholder="Type here"
                                    label="Confirm Password"
                                    required={true}
                                    value={newAgent.confirmPassword}
                                    onChange={(e) => setNewAgent({ ...newAgent, confirmPassword: e.target.value })}
                                />
                            </div>
                            <div className="mb-5">
                                <Dropdown
                                    className='mb-0'
                                    placeholder="Select Category"
                                    items={asset}
                                    label="Asset Categories"
                                    required={true}
                                    onChange={(val) => setNewAgent({ ...newAgent, assetCategory: val })}
                                />
                            </div>
                            <label htmlFor="" className='block font-inter font-semibold text-sm !leading-normal text-heading mb-3'>
                                Permissions<span className='text-[#FE4234]'>*</span>
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3">
                                {/* FIX: Add onChange handler to checkboxes */}
                                {newAgent.permissions.map((item, index) => (
                                    <div className="flex items-center gap-1 mb-2 md:mb-4" key={index}>
                                        <Checkbox
                                            checked={item.checked}
                                            id={`perm_${index}`}
                                            onChange={() => handlePermissionToggle(index)}
                                        />
                                        <label
                                            htmlFor={`perm_${index}`}
                                            className='text-[#0A0D14] text-sm font-medium cursor-pointer'
                                        >
                                            {item.text}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className='btn text-primary border-primary' onClick={() => setEditArticle(false)}>
                            Cancel
                        </button>
                        {/* FIX: Add onClick handler to Add Agent button */}
                        <button className='btn bg-primary text-white' onClick={handleCreateAgent}>
                            Add Agent
                        </button>
                    </div>
                </Modal>
            }

            {/* FIX: Updated delete confirmation */}
            {deleteAlert &&
                <Modal innerClass='max-w-[400px] text-center' closeIconHide={false}>
                    <p className='text-xl mb-4'>
                        Do you want to delete? <strong className='text-heading font-medium'>{activeData.name}</strong>
                    </p>
                    <div className="flex item-center gap-3 justify-center">
                        <button
                            onClick={() => setDeleteAlert(false)}
                            className='text-center btn min-w-24 bg-red-500 border-red-500 text-white'
                        >
                            No
                        </button>
                        <button
                            onClick={() => handleDelete(activeData)}
                            className='text-center btn min-w-24 shadow text-white'
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
// import { pen, kee, logout, deleteIcon, desktop, sent } from '../utilities/Classes'
// import TableFilter from '../components/TableFilter';
// import Switch from '../components/Switch'
// import Modal from '../components/Modal'
// import Input from '../components/Input'
// import Dropdown from '../components/Dropdown';
// import Checkbox from '../components/Checkbox';

// import img1 from '../assets/img/manager/table-img-01.png'
// import img2 from '../assets/img/manager/table-img-2.png'
// import img3 from '../assets/img/manager/table-img-3.png'
// import img4 from '../assets/img/manager/table-img-4.png'
// import img5 from '../assets/img/manager/table-img-5.png'
// import img6 from '../assets/img/manager/table-img-6.png'
// import img7 from '../assets/img/manager/table-img-7.png'
// import img8 from '../assets/img/manager/table-img-8.png'
// import img9 from '../assets/img/manager/table-img-9.png'
// import img10 from '../assets/img/manager/table-img-10.png'
// import img11 from '../assets/img/manager/table-img-11.png'
// import img12 from '../assets/img/manager/table-img-12.png'

// export default function ManageAgents() {
//     const tableHead = [
//         `#`,
//         `Name`,
//         `Email`,
//         `Response Time`,
//         `Status`,
//         `Best Agent`,
//         `Actions`,
//     ]
//     const tableData = [
//         {
//             name: 'Debra',
//             img: img1,
//             Email: 'tanya.hill@example.com',
//             Time: 'N/A',
//         },
//         {
//             name: 'Ronald',
//             img: img2,
//             Email: 'dolores@example.com',
//             Time: 'N/A',
//         },
//         {
//             name: 'Darrell',
//             img: img3,
//             Email: 'georgia.young@example.com',
//             Time: 'N/A',
//         },
//         {
//             name: 'Cody',
//             img: img4,
//             Email: 'felicia.reid@example.com',
//             Time: 'N/A',
//         },
//         {
//             name: 'Aubrey',
//             img: img5,
//             Email: 'deanna.curtis@example.com',
//             Time: 'N/A',
//         },
//         {
//             name: 'Kristin',
//             img: img6,
//             Email: 'tim.jennings@example.com',
//             Time: 'N/A',
//         },
//         {
//             name: 'Dianne',
//             img: img7,
//             Email: 'graham@example.com',
//             Time: 'N/A',
//         },
//         {
//             name: 'Shane',
//             img: img8,
//             Email: 'bill.sanders@example.com',
//             Time: 'N/A',
//         },
//         {
//             name: 'Courtney',
//             img: img9,
//             Email: 'michelle.rivera@example.com',
//             Time: 'N/A',
//         },
//         {
//             name: 'Kyle',
//             img: img10,
//             Email: 'jessica.hanson@example.com',
//             Time: 'N/A',
//         },

//         {
//             name: 'Cameron',
//             img: img11,
//             Email: 'kenzi.lawson@example.com',
//             Time: 'N/A',
//         },
//         {
//             name: 'Marjorie',
//             img: img12,
//             Email: 'michael.mitc@example.com',
//             Time: 'N/A',
//         },

//     ]
//     const Status = [
//         { name: 'Status-1' },
//         { name: 'Status-2' },
//         { name: 'Status-3' },
//     ]
//     const asset = [
//         { name: 'Status-1' },
//         { name: 'Status-2' },
//         { name: 'Status-3' },
//     ]
//     const Asset = [
//         {
//             text: 'View dashboard',

//         },
//         {
//             text: 'Manage category',

//         },
//         {
//             text: 'Manage users',

//         },
//         {
//             text: 'Mail configuration',

//         },
//         {
//             text: 'Sms configuration',

//         },
//         {
//             text: 'System configuration',

//         },
//         {
//             text: 'Manage language',

//         },
//         {
//             text: 'Manage tickets',

//         },
//         {
//             text: 'Update tickets',

//         },
//         {
//             text: 'Assign tickets',

//         },
//         {
//             text: 'Delete tickets',

//         },
//         {
//             text: 'Chat module',

//         },
//         {
//             text: 'Manage tags',

//         },
//         {
//             text: 'Manage article',

//         },
//         {
//             text: 'Manage frontends',

//         },
//         {
//             text: 'Manage pages',

//         },
//         {
//             text: 'Manage contact',

//         },
//         {
//             text: 'Manage priorites',

//         },
//         {
//             text: 'Manage ticket status',

//         },
//         {
//             text: 'Manage product',

//         },

//     ]
//     const [activeData, setActiveData] = useState(tableData[0])

//     const [editArticle, setEditArticle] = useState(false)
//     const [deleteAlert, setDeleteAlert] = useState(false)
//     return (
//         <>
//             <Top title="Manager Agents">
//                 <button className='btn flex items-center gap-1 !bg-primary !text-white' onClick={() => setEditArticle(true)}>
//                     <svg className='flex-none' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white" />
//                     </svg>
//                     New Agent</button>
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
//                                         <td className='!text-black'>{index + 1} </td>
//                                         <td className='!text-black flex items-center gap-3'><img src={item.img} className='rounded-full' alt="" />{item.name}</td>
//                                         <td className='!font-medium !text-heading'>{item.Email}</td>
//                                         <td className='!font-medium !text-heading'>{item.Time}</td>
//                                         <td>
//                                             <Switch id={`${item.name}_${index + 1}`} checked={item.default} />
//                                         </td>
//                                         <td>
//                                             <Switch id={`${item.name}_${index + 2}`} checked={item.default} />
//                                         </td>
//                                         <td>
//                                             <div className="flex items-center justify-end gap-3">
//                                                 <button className='text-primary hover:text-primary p-2 -m-2'>{logout}</button>
//                                                 <button className='text-primary hover:text-primary p-2 -m-2'>{kee}</button>
//                                                 <button className='text-primary hover:text-primary p-2 -m-2'>{desktop}</button>
//                                                 <button className='text-primary hover:text-primary p-2 -m-2'>{sent}</button>
//                                                 <button className='text-primary hover:text-primary p-2 -m-2'>{pen}</button>
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

//             {editArticle &&
//                 <Modal innerClass='max-w-[985px]' onClick={() => setEditArticle(false)} closeIconHide={false}>
//                     <div className="mb-4 md:mb-5">
//                         <h2 className='text-2xl text-black font-inter font-semibold leading-normal'>Create Agent</h2>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-5">
//                         <div className="col-span-2 md:col-span-1">
//                             <div className={`w-full`}>
//                                 <label htmlFor='drop' className={`relative z-[1] rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[180px] lg:min-h-[291px]  mx-auto flex items-center flex-col justify-center`}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
//                                         <path d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337" stroke="#7856FF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                     <span className={`mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs`}><span className={`block text-primary`}>Upload Image</span></span>
//                                     <input type="file" id="drop" className='hidden' name="" placeholder="" />
//                                 </label>
//                             </div>
//                         </div>
//                         <div className="col-span-2">
//                             <div className="mb-5">
//                                 <Dropdown className='mb-0' placeholder="Type here" items={Status} label="Type" required={true} />
//                             </div>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5 mb-3 md:mb-4 lg:mb-5">
//                                 <Input className='mb-1' type="text" placeholder="Type here" label="Name" required={true} />
//                                 <Input className='mb-1' type="text" placeholder="Type here" label="Email" required={true} />
//                                 <Input className='mb-1' type="text" placeholder="Type here" label="Phone" required={true} />
//                                 <Input className='mb-1' type="text" placeholder="Type here" label="Username" required={true} />
//                                 <Input className='mb-1' type="text" placeholder="Type here" label="Password" required={true} />
//                                 <Input className='mb-1' type="text" placeholder="Type here" label="Confirm Password" required={true} />
//                             </div>
//                             <div className="mb-5">
//                                 <Dropdown className='mb-0' placeholder="Type here" items={asset} label="Asset Categories" required={true} />
//                             </div>
//                             <label htmlFor="" className='block font-inter font-semibold text-sm !leading-normal text-heading mb-3'>Asset Categories<span className='text-[#FE4234]'>*</span></label>
//                             <div className="grid grid-cols-2 md:grid-cols-3">
//                                 {Asset.map((item, index) => (
//                                     <div className="flex items-center gap-1 mb-2 md:mb-4" key={index}>
//                                         <Checkbox checked id={index + 1} />
//                                         <label htmlFor={index + 1} className='text-[#0A0D14] text-sm font-medium cursor-pointer'>{item.text}</label>
//                                     </div>
//                                 ))}

//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <button className='btn text-primary border-primary' onClick={() => setEditArticle(false)}>Cancel</button>
//                         <button className='btn bg-primary text-white'>Add Agent</button>
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
