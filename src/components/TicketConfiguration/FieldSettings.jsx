import React, { useState } from 'react';

export default function FieldSettings() {
    const [fields, setFields] = useState(
        new Array(20).fill(null).map((_, index) => ({
            id: index,
            levelName: 'Level Name',
            type: 'Test',
            width: '100%',
            mandatory: 'Yes',
            placeholder: 'Name'
        }))
    );

    const [editingField, setEditingField] = useState(null);
    const [editForm, setEditForm] = useState({});
    const [draggedItem, setDraggedItem] = useState(null);

    // Handle drag start
    const handleDragStart = (e, index) => {
        setDraggedItem(index);
        e.dataTransfer.effectAllowed = 'move';
        e.currentTarget.style.opacity = '0.5';
    };

    // Handle drag over
    const handleDragOver = (e, index) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    // Handle drop
    const handleDrop = (e, dropIndex) => {
        e.preventDefault();

        if (draggedItem === null || draggedItem === dropIndex) return;

        const newFields = [...fields];
        const draggedField = newFields[draggedItem];

        // Remove from old position
        newFields.splice(draggedItem, 1);
        // Insert at new position
        newFields.splice(dropIndex, 0, draggedField);

        setFields(newFields);
        setDraggedItem(null);
    };

    // Handle drag end
    const handleDragEnd = (e) => {
        e.currentTarget.style.opacity = '1';
        setDraggedItem(null);
    };

    // Open edit modal
    const handleEdit = (field, index) => {
        setEditingField(index);
        setEditForm({ ...field });
    };

    // Save edited field
    const handleSave = () => {
        if (editingField !== null) {
            const newFields = [...fields];
            newFields[editingField] = { ...editForm };
            setFields(newFields);
            setEditingField(null);
            setEditForm({});
        }
    };

    // Cancel editing
    const handleCancel = () => {
        setEditingField(null);
        setEditForm({});
    };

    return (
        <div className="">
            {/* Edit Modal */}
            {editingField !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
                        <h3 className="text-xl font-semibold mb-4">Edit Field</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Level Name</label>
                                <input
                                    type="text"
                                    value={editForm.levelName || ''}
                                    onChange={(e) => setEditForm({ ...editForm, levelName: e.target.value })}
                                    className="w-full border border-stroke rounded-lg px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Type</label>
                                <select
                                    value={editForm.type || ''}
                                    onChange={(e) => setEditForm({ ...editForm, type: e.target.value })}
                                    className="w-full border border-stroke rounded-lg px-3 py-2"
                                >
                                    <option value="Test">Test</option>
                                    <option value="Text">Text</option>
                                    <option value="Dropdown">Dropdown</option>
                                    <option value="Number">Number</option>
                                    <option value="Date">Date</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Width</label>
                                <select
                                    value={editForm.width || ''}
                                    onChange={(e) => setEditForm({ ...editForm, width: e.target.value })}
                                    className="w-full border border-stroke rounded-lg px-3 py-2"
                                >
                                    <option value="100%">100%</option>
                                    <option value="50%">50%</option>
                                    <option value="33%">33%</option>
                                    <option value="25%">25%</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Mandatory</label>
                                <select
                                    value={editForm.mandatory || ''}
                                    onChange={(e) => setEditForm({ ...editForm, mandatory: e.target.value })}
                                    className="w-full border border-stroke rounded-lg px-3 py-2"
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Placeholder</label>
                                <input
                                    type="text"
                                    value={editForm.placeholder || ''}
                                    onChange={(e) => setEditForm({ ...editForm, placeholder: e.target.value })}
                                    className="w-full border border-stroke rounded-lg px-3 py-2"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={handleSave}
                                className="flex-1 bg-btn border text-white border-stroke rounded-lg py-2 font-medium hover:bg-gray-50 hover:opacity-90"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleCancel}
                                className="flex-1 border border-stroke rounded-lg py-2 font-medium hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Field Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3 md:gap-4 xl:gap-5">
                {fields.map((card, index) => (
                    <div
                        key={card.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={(e) => handleDragOver(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        onDragEnd={handleDragEnd}
                        className="rounded-xl border border-stroke bg-white p-4 relative cursor-move transition-all hover:shadow-md"
                    >
                        <div className="flex justify-between items-center mb-2 lg:mb-3">
                            <div className="flex items-center gap-2">
                                <span className="cursor-move">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_10316_54177)">
                                            <path d="M12.6663 9.99992L14.6663 7.99992M14.6663 7.99992L12.6663 5.99992M14.6663 7.99992H1.33301M1.33301 7.99992L3.33301 9.99992M1.33301 7.99992L3.33301 5.99992M9.99967 3.33325L7.99967 1.33325M7.99967 1.33325L5.99967 3.33325M7.99967 1.33325V14.6666M7.99967 14.6666L9.99967 12.6666M7.99967 14.6666L5.99967 12.6666" stroke="#858585" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_10316_54177">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <h5 className="font-medium text-base text-heading">{card.levelName}</h5>
                            </div>
                            <button
                                onClick={() => handleEdit(card, index)}
                                className="size-8 rounded-full border border-stroke flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.72852 2.64582L9.38272 0.991612C9.83834 0.536 10.577 0.535999 11.0326 0.991611L12.0077 1.9667C12.4633 2.42231 12.4633 3.161 12.0077 3.61661L10.3535 5.27082M7.72852 2.64582L1.94522 8.42911C1.72643 8.6479 1.60352 8.94465 1.60352 9.25407V11.3958H3.74527C4.05469 11.3958 4.35143 11.2729 4.57022 11.0541L10.3535 5.27082M7.72852 2.64582L10.3535 5.27082" stroke="#7856FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.72852 2.64582L9.38272 0.991612C9.83834 0.536 10.577 0.535999 11.0326 0.991611L12.0077 1.9667C12.4633 2.42231 12.4633 3.161 12.0077 3.61661L10.3535 5.27082M7.72852 2.64582L1.94522 8.42911C1.72643 8.6479 1.60352 8.94465 1.60352 9.25407V11.3958H3.74527C4.05469 11.3958 4.35143 11.2729 4.57022 11.0541L10.3535 5.27082M7.72852 2.64582L10.3535 5.27082" stroke="url(#paint0_linear_10978_6503)" strokeOpacity="0.12" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_10978_6503" x1="6.97647" y1="0.649902" x2="6.97647" y2="11.3958" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-semibold text-heading">{card.type}</p>
                                    <p className="text-gray-400 text-xs">Type</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-heading">{card.width}</p>
                                    <p className="text-gray-400 text-xs">Width</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-semibold text-heading">{card.mandatory}</p>
                                    <p className="text-gray-400 text-xs">Mandatory</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-heading">{card.placeholder}</p>
                                    <p className="text-gray-400 text-xs">Placeholder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// import React from 'react';
// import { Pencil } from 'lucide-react';

// export default function FieldSettings() {
//     const fieldCards = new Array(20).fill({
//         levelName: 'Level Name',
//         type: 'Test',
//         width: '100%',
//         mandatory: 'Yes',
//         placeholder: 'Name'
//     });

//     return (
//         <div className="">
//             <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3 md:gap-4 xl:gap-5">
//                 {fieldCards.map((card, index) => (
//                     <div key={index} className="rounded-xl border border-stroke bg-white p-4 relative" >
//                         <div className="flex justify-between items-center mb-2 lg:mb-3">
//                             <div className="flex items-center gap-2">
//                                 <span className="cursor-move">
//                                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <g clipPath="url(#clip0_10316_54177)">
//                                             <path d="M12.6663 9.99992L14.6663 7.99992M14.6663 7.99992L12.6663 5.99992M14.6663 7.99992H1.33301M1.33301 7.99992L3.33301 9.99992M1.33301 7.99992L3.33301 5.99992M9.99967 3.33325L7.99967 1.33325M7.99967 1.33325L5.99967 3.33325M7.99967 1.33325V14.6666M7.99967 14.6666L9.99967 12.6666M7.99967 14.6666L5.99967 12.6666" stroke="#858585" strokeWidth="1.25" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                         </g>
//                                         <defs>
//                                             <clipPath id="clip0_10316_54177">
//                                                 <rect width="16" height="16" fill="white" />
//                                             </clipPath>
//                                         </defs>
//                                     </svg>
//                                 </span>
//                                 <h5 className="font-medium text-base text-heading">{card.levelName}</h5>
//                             </div>
//                             <button className="size-8 rounded-full border border-stroke flex items-center justify-center">
//                                 <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M7.72852 2.64582L9.38272 0.991612C9.83834 0.536 10.577 0.535999 11.0326 0.991611L12.0077 1.9667C12.4633 2.42231 12.4633 3.161 12.0077 3.61661L10.3535 5.27082M7.72852 2.64582L1.94522 8.42911C1.72643 8.6479 1.60352 8.94465 1.60352 9.25407V11.3958H3.74527C4.05469 11.3958 4.35143 11.2729 4.57022 11.0541L10.3535 5.27082M7.72852 2.64582L10.3535 5.27082" stroke="#7856FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M7.72852 2.64582L9.38272 0.991612C9.83834 0.536 10.577 0.535999 11.0326 0.991611L12.0077 1.9667C12.4633 2.42231 12.4633 3.161 12.0077 3.61661L10.3535 5.27082M7.72852 2.64582L1.94522 8.42911C1.72643 8.6479 1.60352 8.94465 1.60352 9.25407V11.3958H3.74527C4.05469 11.3958 4.35143 11.2729 4.57022 11.0541L10.3535 5.27082M7.72852 2.64582L10.3535 5.27082" stroke="url(#paint0_linear_10978_6503)" strokeOpacity="0.12" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                     <defs>
//                                         <linearGradient id="paint0_linear_10978_6503" x1="6.97647" y1="0.649902" x2="6.97647" y2="11.3958" gradientUnits="userSpaceOnUse">
//                                             <stop stopColor="white" />
//                                             <stop offset="1" stopColor="white" stopOpacity="0" />
//                                         </linearGradient>
//                                     </defs>
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className="space-y-2 lg:space-y-3">
//                             <div className="flex justify-between">
//                                 <div>
//                                     <p className="font-semibold text-heading">{card.type}</p>
//                                     <p className="text-gray-400 text-xs">Type</p>
//                                 </div>
//                                 <div className="text-right">
//                                     <p className="font-semibold text-heading">{card.width}</p>
//                                     <p className="text-gray-400 text-xs">Width</p>
//                                 </div>
//                             </div>
//                             <div className="flex justify-between">
//                                 <div>
//                                     <p className="font-semibold text-heading">{card.mandatory}</p>
//                                     <p className="text-gray-400 text-xs">Mandatory</p>
//                                 </div>
//                                 <div className="text-right">
//                                     <p className="font-semibold text-heading">{card.placeholder}</p>
//                                     <p className="text-gray-400 text-xs">Placeholder</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
