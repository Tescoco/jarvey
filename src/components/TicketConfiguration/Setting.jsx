import React from 'react';
import Dropdown from '../Dropdown';
import Checkbox from '../Checkbox';


export default function Setting() {
    const items = [
        { name: 'Yes' },
        { name: 'No' },
    ];
    const dropdownItems = [
        {
            name: "Email to ticket",
            required: false,
            info: true
        },
        {
            name: "Enable Ticket Product",
            required: false,
            info: true
        },
        {
            name: "Agent Name Privacy",
            required: false,
            info: true
        },
        {
            name: "Message Seen Status",
            required: false,
            info: true
        },
        {
            name: "User Ticket Close",
            required: false,
            info: true
        },
        {
            name: "User Ticket Re-open",
            required: false,
            info: true
        },
        {
            name: "Ticket Prefix",
            required: false,
            info: true
        },
        {
            name: "Ticket Suffix",
            required: false,
            info: true
        },
        {
            name: "Guest ticket",
            required: true,
            info: false
        },
        {
            name: "Custom Files",
            required: true,
            info: false
        },
        {
            name: "Ticket View OTP",
            required: false,
            info: true
        },
        {
            name: "User Ticket Delete",
            required: false,
            info: true
        },
    ];

    const status = [
        {
            name: 'status-1',
        },
        {
            name: 'status-2',
        },
        {
            name: 'status-3',
        },
    ]
    const day = [
        {
            name: '1',
        },
        {
            name: '2',
        },
        {
            name: '3',
        },
        {
            name: '4',
        },
        {
            name: '5',
        },
        {
            name: '6',
        },
        {
            name: '7',
        },
    ]
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 xl:gap-5">
                {dropdownItems.map((dropdown, index) => (
                    <Dropdown
                        key={index}
                        className="mb-0"
                        label={dropdown.name}
                        placeholder="Select"
                        items={items}
                        required={dropdown.required}
                        info={dropdown.info}
                    />
                ))}
            </div>
            <div className="flex flex-col gap-3 mt-4">
                <p className='text-heading font-semibold'>Auto Close Ticket</p>
                <div className="flex items-center flex-wrap gap-2 xl:gap-4">
                    <p className='text-heading font-semibold'>Ticket with the status</p>
                    <Dropdown btnClass="!h-9 !min-w-[140px]" className='mb-0' placeholder="Select Status" items={status} />
                    <p className='text-heading font-semibold'>will be automatically closed if there is no response from the user within</p>
                    <Dropdown btnClass="!h-9 !min-w-[56px]" className='mb-0' placeholder="1" items={day} />
                    <p className='text-heading font-semibold'>Days</p>
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor='Duplicate' className='cursor-pointer text-heading font-semibold'>Duplicate ticket prevent</label>
                    <Checkbox id='Duplicate' />
                </div>
                <div className="flex items-start md:items-center flex-col md:flex-row gap-3 md:gap-4">
                    <p className='text-heading font-semibold'>User can’t create muntiple ticket with the same category if status is </p>
                    <Dropdown btnClass="!h-9 !min-w-[140px]" className='mb-0' placeholder="Select Status" items={status} />
                </div>
            </div>

            <div className="my-3 md:my-4 lg:my-5">
                <label htmlFor="" className='block mb-2 md:mb-4 font-inter font-semibold text-sm !leading-normal text-heading'>Ticket Short Notes <span className='text-[#FE4234]'>*</span></label>
                <textarea name="" id="" className='w-full bg-[#F7F7F7] min-h-[202px] resize-none rounded-xl p-4' placeholder='Start typing'>

                </textarea>
            </div>

            <button
                onClick={() => {
                    console.log('Updating Settings...');
                    // Add your API call or state update logic here
                    alert('Settings updated successfully!');
                }}
                className="btn bg-prim min-w-[77px] text-white hover:opacity-90"
            >
                Update
            </button>

            {/* <button className="btn bg-prim min-w-[77px]">Update</button> */}
        </div>
    );
}
