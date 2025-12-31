import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import Checkbox from '../Checkbox';

export default function Setting() {
    // State to track all form values
    const [formData, setFormData] = useState({
        emailToTicket: '',
        enableTicketProduct: '',
        agentNamePrivacy: '',
        messageSeenStatus: '',
        userTicketClose: '',
        userTicketReopen: '',
        ticketPrefix: '',
        ticketSuffix: '',
        guestTicket: '', // Required field
        customFiles: '', // Required field
        ticketViewOTP: '',
        userTicketDelete: '',
        autoCloseStatus: '',
        autoCloseDays: '',
        duplicatePrevent: false,
        duplicateStatus: '',
        ticketNotes: '',
    });

    // State for validation errors
    const [errors, setErrors] = useState({});

    const items = [
        { name: 'Yes' },
        { name: 'No' },
    ];

    // const dropdownItems = [
    //     {
    //         name: "Email to ticket",
    //         required: false,
    //         info: "Convert emails into support tickets automatically",
    //         field: "emailToTicket"
    //     },
    //     {
    //         name: "Enable Ticket Product",
    //         required: false,
    //         info: "Allow products to be associated with tickets",
    //         field: "enableTicketProduct"
    //     },
    //     {
    //         name: "Agent Name Privacy",
    //         required: false,
    //         info: "Hide agent names from customers",
    //         field: "agentNamePrivacy"
    //     },
    //     {
    //         name: "Message Seen Status",
    //         required: false,
    //         info: "Show when messages have been read",
    //         field: "messageSeenStatus"
    //     },
    //     {
    //         name: "User Ticket Close",
    //         required: false,
    //         info: "Allow users to close their own tickets",
    //         field: "userTicketClose"
    //     },
    //     {
    //         name: "User Ticket Re-open",
    //         required: false,
    //         info: "Allow users to reopen closed tickets",
    //         field: "userTicketReopen"
    //     },
    //     {
    //         name: "Ticket Prefix",
    //         required: false,
    //         info: "Add a prefix to ticket numbers",
    //         field: "ticketPrefix"
    //     },
    //     {
    //         name: "Ticket Suffix",
    //         required: false,
    //         info: "Add a suffix to ticket numbers",
    //         field: "ticketSuffix"
    //     },
    //     {
    //         name: "Guest ticket",
    //         required: true,
    //         info: "Allow guests to create tickets without logging in",
    //         field: "guestTicket"
    //     },
    //     {
    //         name: "Custom Files",
    //         required: true,
    //         info: "Enable custom file attachments for tickets",
    //         field: "customFiles"
    //     },
    //     {
    //         name: "Ticket View OTP",
    //         required: false,
    //         info: "Require OTP to view tickets",
    //         field: "ticketViewOTP"
    //     },
    //     {
    //         name: "User Ticket Delete",
    //         required: false,
    //         info: "Allow users to delete their tickets",
    //         field: "userTicketDelete"
    //     },
    // ];


    const dropdownItems = [
        {
            name: "Email to ticket",
            required: false,
            info: "Convert emails into support tickets automatically",  // ← Changed from true
            field: "emailToTicket"  // ← Added field name
        },
        {
            name: "Enable Ticket Product",
            required: false,
            info: "Allow products to be associated with tickets",  // ← Changed from true
            field: "enableTicketProduct"  // ← Added field name
        },
        {
            name: "Agent Name Privacy",
            required: false,
            info: "Hide agent names from customers",  // ← Changed from true
            field: "agentNamePrivacy"  // ← Added field name
        },
        {
            name: "Message Seen Status",
            required: false,
            info: "Show when messages have been read",  // ← Changed from true
            field: "messageSeenStatus"  // ← Added field name
        },
        {
            name: "User Ticket Close",
            required: false,
            info: "Allow users to close their own tickets",  // ← Changed from true
            field: "userTicketClose"  // ← Added field name
        },
        {
            name: "User Ticket Re-open",
            required: false,
            info: "Allow users to reopen closed tickets",  // ← Changed from true
            field: "userTicketReopen"  // ← Added field name
        },
        {
            name: "Ticket Prefix",
            required: false,
            info: "Add a prefix to ticket numbers",  // ← Changed from true
            field: "ticketPrefix"  // ← Added field name
        },
        {
            name: "Ticket Suffix",
            required: false,
            info: "Add a suffix to ticket numbers",  // ← Changed from true
            field: "ticketSuffix"  // ← Added field name
        },
        {
            name: "Guest ticket",
            required: true,
            info: "Allow guests to create tickets without logging in",  // ← Changed from false
            field: "guestTicket"  // ← Added field name
        },
        {
            name: "Custom Files",
            required: true,
            info: "Enable custom file attachments for tickets",  // ← Changed from false
            field: "customFiles"  // ← Added field name
        },
        {
            name: "Ticket View OTP",
            required: false,
            info: "Require OTP to view tickets",  // ← Changed from true
            field: "ticketViewOTP"  // ← Added field name
        },
        {
            name: "User Ticket Delete",
            required: false,
            info: "Allow users to delete their tickets",  // ← Changed from true
            field: "userTicketDelete"  // ← Added field name
        },
    ];

    const status = [
        { name: 'Open' },
        { name: 'Pending' },
        { name: 'In Progress' },
        { name: 'Resolved' },
    ];

    const day = [
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        { name: '5' },
        { name: '6' },
        { name: '7' },
    ];

    // Handle dropdown changes
    const handleDropdownChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        // Clear error for this field when user selects a value
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    // Handle checkbox change
    const handleCheckboxChange = (e) => {
        setFormData(prev => ({
            ...prev,
            duplicatePrevent: e.target.checked
        }));
    };

    // Handle textarea change
    const handleNotesChange = (e) => {
        setFormData(prev => ({
            ...prev,
            ticketNotes: e.target.value
        }));
        // Clear error when user starts typing
        if (errors.ticketNotes) {
            setErrors(prev => ({
                ...prev,
                ticketNotes: ''
            }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        // Check required dropdown fields
        if (!formData.guestTicket) {
            newErrors.guestTicket = 'Guest ticket is required';
        }
        if (!formData.customFiles) {
            newErrors.customFiles = 'Custom Files is required';
        }

        // Check ticket notes (required field)
        if (!formData.ticketNotes.trim()) {
            newErrors.ticketNotes = 'Ticket Short Notes is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle update button click
    const handleUpdate = () => {
        if (validateForm()) {
            console.log('Updating Settings...', formData);
            // Add your API call here
            alert('Settings updated successfully!');
        } else {
            alert('Please fill all required fields!');
        }
    };

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 xl:gap-5">
                {dropdownItems.map((dropdown, index) => (
                    <div key={index}>
                        <Dropdown
                            className="mb-0"
                            label={dropdown.name}
                            placeholder="Select"
                            items={items}
                            required={dropdown.required}
                            info={dropdown.info}
                            value={formData[dropdown.field]}
                            onChange={(value) => handleDropdownChange(dropdown.field, value)}
                        />
                        {errors[dropdown.field] && (
                            <p className="text-xs text-red-500 mt-1">{errors[dropdown.field]}</p>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-3 mt-4">
                <p className='text-heading font-semibold'>Auto Close Ticket</p>
                <div className="flex items-center flex-wrap gap-2 xl:gap-4">
                    <p className='text-heading font-semibold'>Ticket with the status</p>
                    <Dropdown
                        btnClass="!h-9 !min-w-[140px]"
                        className='mb-0'
                        placeholder="Select Status"
                        items={status}
                        value={formData.autoCloseStatus}
                        onChange={(value) => handleDropdownChange('autoCloseStatus', value)}
                    />
                    <p className='text-heading font-semibold'>will be automatically closed if there is no response from the user within</p>
                    <Dropdown
                        btnClass="!h-9 !min-w-[56px]"
                        className='mb-0'
                        placeholder="1"
                        items={day}
                        value={formData.autoCloseDays}
                        onChange={(value) => handleDropdownChange('autoCloseDays', value)}
                    />
                    <p className='text-heading font-semibold'>Days</p>
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor='Duplicate' className='cursor-pointer text-heading font-semibold'>
                        Duplicate ticket prevent
                    </label>
                    <Checkbox
                        id='Duplicate'
                        checked={formData.duplicatePrevent}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="flex items-start md:items-center flex-col md:flex-row gap-3 md:gap-4">
                    <p className='text-heading font-semibold'>
                        User can't create multiple ticket with the same category if status is
                    </p>
                    <Dropdown
                        btnClass="!h-9 !min-w-[140px]"
                        className='mb-0'
                        placeholder="Select Status"
                        items={status}
                        value={formData.duplicateStatus}
                        onChange={(value) => handleDropdownChange('duplicateStatus', value)}
                    />
                </div>
            </div>

            <div className="my-3 md:my-4 lg:my-5">
                <label htmlFor="ticketNotes" className='block mb-2 md:mb-4 font-inter font-semibold text-sm !leading-normal text-heading'>
                    Ticket Short Notes <span className='text-[#FE4234]'>*</span>
                </label>
                <textarea
                    name="ticketNotes"
                    id="ticketNotes"
                    className={`w-full bg-[#F7F7F7] min-h-[202px] resize-none rounded-xl p-4 ${errors.ticketNotes ? 'border-2 border-red-500' : ''
                        }`}
                    placeholder='Start typing'
                    value={formData.ticketNotes}
                    onChange={handleNotesChange}
                />
                {errors.ticketNotes && (
                    <p className="text-xs text-red-500 mt-1">{errors.ticketNotes}</p>
                )}
            </div>

            <button
                onClick={handleUpdate}
                className="btn bg-prim min-w-[77px] text-white hover:opacity-90"
            >
                Update
            </button>
        </div>
    );
}

// import React from 'react';
// import Dropdown from '../Dropdown';
// import Checkbox from '../Checkbox';


// export default function Setting() {
//     const items = [
//         { name: 'Yes' },
//         { name: 'No' },
//     ];
//     const dropdownItems = [
//         {
//             name: "Email to ticket",
//             required: false,
//             info: true
//         },
//         {
//             name: "Enable Ticket Product",
//             required: false,
//             info: true
//         },
//         {
//             name: "Agent Name Privacy",
//             required: false,
//             info: true
//         },
//         {
//             name: "Message Seen Status",
//             required: false,
//             info: true
//         },
//         {
//             name: "User Ticket Close",
//             required: false,
//             info: true
//         },
//         {
//             name: "User Ticket Re-open",
//             required: false,
//             info: true
//         },
//         {
//             name: "Ticket Prefix",
//             required: false,
//             info: true
//         },
//         {
//             name: "Ticket Suffix",
//             required: false,
//             info: true
//         },
//         {
//             name: "Guest ticket",
//             required: true,
//             info: false
//         },
//         {
//             name: "Custom Files",
//             required: true,
//             info: false
//         },
//         {
//             name: "Ticket View OTP",
//             required: false,
//             info: true
//         },
//         {
//             name: "User Ticket Delete",
//             required: false,
//             info: true
//         },
//     ];

//     const status = [
//         {
//             name: 'status-1',
//         },
//         {
//             name: 'status-2',
//         },
//         {
//             name: 'status-3',
//         },
//     ]
//     const day = [
//         {
//             name: '1',
//         },
//         {
//             name: '2',
//         },
//         {
//             name: '3',
//         },
//         {
//             name: '4',
//         },
//         {
//             name: '5',
//         },
//         {
//             name: '6',
//         },
//         {
//             name: '7',
//         },
//     ]
//     return (
//         <div className="">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 xl:gap-5">
//                 {dropdownItems.map((dropdown, index) => (
//                     <Dropdown
//                         key={index}
//                         className="mb-0"
//                         label={dropdown.name}
//                         placeholder="Select"
//                         items={items}
//                         required={dropdown.required}
//                         info={dropdown.info}
//                     />
//                 ))}
//             </div>
//             <div className="flex flex-col gap-3 mt-4">
//                 <p className='text-heading font-semibold'>Auto Close Ticket</p>
//                 <div className="flex items-center flex-wrap gap-2 xl:gap-4">
//                     <p className='text-heading font-semibold'>Ticket with the status</p>
//                     <Dropdown btnClass="!h-9 !min-w-[140px]" className='mb-0' placeholder="Select Status" items={status} />
//                     <p className='text-heading font-semibold'>will be automatically closed if there is no response from the user within</p>
//                     <Dropdown btnClass="!h-9 !min-w-[56px]" className='mb-0' placeholder="1" items={day} />
//                     <p className='text-heading font-semibold'>Days</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <label htmlFor='Duplicate' className='cursor-pointer text-heading font-semibold'>Duplicate ticket prevent</label>
//                     <Checkbox id='Duplicate' />
//                 </div>
//                 <div className="flex items-start md:items-center flex-col md:flex-row gap-3 md:gap-4">
//                     <p className='text-heading font-semibold'>User can’t create muntiple ticket with the same category if status is </p>
//                     <Dropdown btnClass="!h-9 !min-w-[140px]" className='mb-0' placeholder="Select Status" items={status} />
//                 </div>
//             </div>

//             <div className="my-3 md:my-4 lg:my-5">
//                 <label htmlFor="" className='block mb-2 md:mb-4 font-inter font-semibold text-sm !leading-normal text-heading'>Ticket Short Notes <span className='text-[#FE4234]'>*</span></label>
//                 <textarea name="" id="" className='w-full bg-[#F7F7F7] min-h-[202px] resize-none rounded-xl p-4' placeholder='Start typing'>

//                 </textarea>
//             </div>

//             <button
//                 onClick={() => {
//                     console.log('Updating Settings...');
//                     // Add your API call or state update logic here
//                     alert('Settings updated successfully!');
//                 }}
//                 className="btn bg-prim min-w-[77px] text-white hover:opacity-90"
//             >
//                 Update
//             </button>

//             {/* <button className="btn bg-prim min-w-[77px]">Update</button> */}
//         </div>
//     );
// }