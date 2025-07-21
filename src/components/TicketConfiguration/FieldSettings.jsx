import React from 'react';
import { Pencil } from 'lucide-react';

export default function FieldSettings() {
    const fieldCards = new Array(20).fill({
        levelName: 'Level Name',
        type: 'Test',
        width: '100%',
        mandatory: 'Yes',
        placeholder: 'Name'
    });

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3 md:gap-4 xl:gap-5">
                {fieldCards.map((card, index) => (
                    <div key={index} className="rounded-xl border border-stroke bg-white p-4 relative" >
                        <div className="flex justify-between items-center mb-2 lg:mb-3">
                            <div className="flex items-center gap-2">
                                <span className="cursor-move">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_10316_54177)">
                                            <path d="M12.6663 9.99992L14.6663 7.99992M14.6663 7.99992L12.6663 5.99992M14.6663 7.99992H1.33301M1.33301 7.99992L3.33301 9.99992M1.33301 7.99992L3.33301 5.99992M9.99967 3.33325L7.99967 1.33325M7.99967 1.33325L5.99967 3.33325M7.99967 1.33325V14.6666M7.99967 14.6666L9.99967 12.6666M7.99967 14.6666L5.99967 12.6666" stroke="#858585" strokeWidth="1.25" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
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
                            <button className="size-8 rounded-full border border-stroke flex items-center justify-center">
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
