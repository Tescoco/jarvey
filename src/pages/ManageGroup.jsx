import React, { useState } from 'react'
import Top from '../layouts/Top'
import MainInner from '../components/MainInner';
import { pen, deleteIcon } from '../utilities/Classes'
import Switch from '../components/Switch'

export default function ManageGroup() {
    // State management
    const [groups, setGroups] = useState([
        {
            id: 1,
            name: 'Group 1',
            Agents: '1',
            Priority: 'Urgent',
            Time: 'N/A',
            status: true
        },
        {
            id: 2,
            name: 'Group 2',
            Agents: '3',
            Priority: 'High',
            Time: '5 min',
            status: false
        },
        {
            id: 3,
            name: 'Group 3',
            Agents: '5',
            Priority: 'Normal',
            Time: '10 min',
            status: true
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name'); // name, agents, priority
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('create'); // create or edit
    const [currentGroup, setCurrentGroup] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [groupToDelete, setGroupToDelete] = useState(null);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        Agents: '',
        Priority: 'Normal',
        Time: 'N/A',
        status: true
    });

    const tableHead = [
        `#`,
        `Name`,
        `Total Agents`,
        `Priority`,
        `Response Time`,
        `Status`,
        `Actions`,
    ]

    // Search functionality
    const filteredGroups = groups.filter(group =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.Priority.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort functionality
    const sortedGroups = [...filteredGroups].sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'agents':
                return parseInt(a.Agents) - parseInt(b.Agents);
            case 'priority':
                const priorityOrder = { 'Urgent': 1, 'High': 2, 'Normal': 3, 'Low': 4 };
                return priorityOrder[a.Priority] - priorityOrder[b.Priority];
            default:
                return 0;
        }
    });

    // Handle New Group button
    const handleNewGroup = () => {
        setModalMode('create');
        setFormData({
            name: '',
            Agents: '',
            Priority: 'Normal',
            Time: 'N/A',
            status: true
        });
        setShowModal(true);
    };

    // Handle Edit button
    const handleEdit = (group) => {
        setModalMode('edit');
        setCurrentGroup(group);
        setFormData({
            name: group.name,
            Agents: group.Agents,
            Priority: group.Priority,
            Time: group.Time,
            status: group.status
        });
        setShowModal(true);
    };

    // Handle Delete button
    const handleDelete = (group) => {
        setGroupToDelete(group);
        setShowDeleteConfirm(true);
    };

    // Confirm delete
    const confirmDelete = () => {
        setGroups(groups.filter(g => g.id !== groupToDelete.id));
        setShowDeleteConfirm(false);
        setGroupToDelete(null);
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (modalMode === 'create') {
            const newGroup = {
                id: groups.length > 0 ? Math.max(...groups.map(g => g.id)) + 1 : 1,
                ...formData
            };
            setGroups([...groups, newGroup]);
        } else {
            setGroups(groups.map(g =>
                g.id === currentGroup.id ? { ...g, ...formData } : g
            ));
        }

        setShowModal(false);
        setCurrentGroup(null);
    };

    // Handle status toggle
    const handleStatusToggle = (groupId, newStatus) => {
        setGroups(groups.map(g =>
            g.id === groupId ? { ...g, status: newStatus } : g
        ));
    };

    return (
        <>
            <Top title="Manager Group">
                <button
                    className='btn flex items-center gap-1 !bg-primary !text-white'
                    onClick={handleNewGroup}
                >
                    <svg className='flex-none' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white" />
                    </svg>
                    New Group
                </button>
            </Top>

            <MainInner>
                <div>
                    {/* Search and Sort Controls */}
                    <div className="mb-4 flex flex-wrap gap-3 items-center justify-between">
                        {/* Search Field */}
                        <div className="relative flex-1 min-w-[200px] max-w-md">
                            <input
                                type="text"
                                placeholder="Search groups..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    ×
                                </button>
                            )}
                        </div>

                        {/* Single Sort By Button */}
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-gray-700">Sort By:</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="name">Name</option>
                                <option value="agents">Total Agents</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>
                    </div>

                    {/* Table */}
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
                                {sortedGroups.length > 0 ? (
                                    sortedGroups.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className='!text-black'>{index + 1}</td>
                                            <td className='!text-black'>{item.name}</td>
                                            <td className='!font-medium !text-heading'>{item.Agents}</td>
                                            <td>
                                                <p className={`text-sm font-inter font-medium py-1 px-3 rounded-[41px] max-w-max ${item.Priority === 'Urgent' ? '!text-[#FE4333] bg-[#FE43331A]/10' :
                                                        item.Priority === 'High' ? '!text-[#FF8C00] bg-[#FF8C001A]/10' :
                                                            item.Priority === 'Normal' ? '!text-[#4CAF50] bg-[#4CAF501A]/10' :
                                                                '!text-[#2196F3] bg-[#2196F31A]/10'
                                                    }`}>
                                                    {item.Priority}
                                                </p>
                                            </td>
                                            <td className='!font-medium !text-heading'>{item.Time}</td>
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
                                                        className='text-primary hover:text-primary p-2 -m-2'
                                                        onClick={() => handleEdit(item)}
                                                    >
                                                        {pen}
                                                    </button>
                                                    <button
                                                        className='text-gray hover:text-primary p-2 -m-2'
                                                        onClick={() => handleDelete(item)}
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
                                            No groups found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainInner>

            {/* Create/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">
                            {modalMode === 'create' ? 'Create New Group' : 'Edit Group'}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Group Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Total Agents</label>
                                    <input
                                        type="number"
                                        value={formData.Agents}
                                        onChange={(e) => setFormData({ ...formData, Agents: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Priority</label>
                                    <select
                                        value={formData.Priority}
                                        onChange={(e) => setFormData({ ...formData, Priority: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="Urgent">Urgent</option>
                                        <option value="High">High</option>
                                        <option value="Normal">Normal</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Response Time</label>
                                    <input
                                        type="text"
                                        value={formData.Time}
                                        onChange={(e) => setFormData({ ...formData, Time: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                                >
                                    {modalMode === 'create' ? 'Create' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete "{groupToDelete?.name}"? This action cannot be undone.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowDeleteConfirm(false)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

// import React from 'react'
// import Top from '../layouts/Top'
// import MainInner from '../components/MainInner';
// import { pen, deleteIcon, } from '../utilities/Classes'
// import TableFilter from '../components/TableFilter';
// import Switch from '../components/Switch'


// export default function ManageGroup() {
//     const tableHead = [
//         `#`,
//         `Name`,
//         `Total Agents`,
//         `Priority`,
//         `Response Time`,
//         `Status`,
//         `Actions`,
//     ]
//     const tableData = [
//         {
//             name: 'Group 1',
//             Agents: '1',
//             Priority: 'Urgent',
//             Time: 'N/A',
//         },
//     ]
//     return (
//         <>
//             <Top title="Manager Group">
//                 <button className='btn flex items-center gap-1 !bg-primary !text-white' onClick={() => setEditArticle(true)}>
//                     <svg className='flex-none' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white" />
//                     </svg>
//                     New Group</button>
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
//                                         <td className='!text-black'>{item.name}</td>
//                                         <td className='!font-medium !text-heading'>{item.Agents}</td>
//                                         <td><p className='text-sm font-inter font-medium !text-[#FE4333] py-1 px-3 rounded-[41px] bg-[#FE43331A]/10 max-w-max'>{item.Priority}</p></td>
//                                         <td className='!font-medium !text-heading'>{item.Time}</td>
//                                         <td>
//                                             <Switch id={`${item.name}_${index + 1}`} checked={item.default} />
//                                         </td>
//                                         <td>
//                                             <div className="flex items-center justify-end gap-3">
//                                                 <button className='text-primary hover:text-primary p-2 -m-2'>{pen}</button>
//                                                 <button className='text-gray hover:text-primary p-2 -m-2'>{deleteIcon}</button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </MainInner>
//         </>
//     )
// }