import React, { useState } from 'react'
import Top from '../layouts/Top'
import MainInner from '../components/MainInner'
import Incoming from '../components/email/Incoming';
import Outgoing from '../components/email/Outgoing';

export default function EmailConfiguration() {
    const tabBtns = ['Outgoing', 'Incoming'];
    const [activeTab, setActiveTab] = useState(tabBtns[0]);

    return (
        <>
            <Top />
            <MainInner>
                <div className="p-6">
                    <div className="border-b border-solid border-gray-200 flex items-center justify-center overflow-x-auto mb-5 md:mb-6">
                        {tabBtns.map((item, index) => (
                            <button
                                onClick={() => setActiveTab(item)}
                                key={index}
                                className={`min-w-[140px] font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b-2 border-solid transition-colors ${item === activeTab
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {item} Method
                            </button>
                        ))}
                    </div>

                    {activeTab === 'Outgoing' && <Outgoing />}
                    {activeTab === 'Incoming' && <Incoming />}
                </div>
            </MainInner>
        </>
    );
}

// export default function EmailConfiguration() {
//     const tabBtns = [
//         'Outgoing',
//         'Incoming',
//     ]
//     const [activeTab, setActiveTab] = useState(tabBtns[0])

//     return (
//         <>
//             <Top />
//             <MainInner>
//                 <div className="border-b border-solid border-stroke flex items-center justify-center overflow-x-auto mb-5 md:mb-6">
//                     {tabBtns.map((item, index) => (
//                         <button onClick={() => setActiveTab(item)} key={index} className={`min-w-[140px] font-inter font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${item === activeTab ? 'border-btn text-btn' : 'border-transparent text-heading'}`}>{item} Method</button>
//                     ))}
//                 </div>
//                 {activeTab === "Outgoing" && <Incoming />}
//                 {activeTab === "Incoming" && <Outgoing />}
//                 {/* {activeTab === "Incoming" && <Incoming />}
//                 {activeTab === "Outgoing" && <Outgoing />} */}
//             </MainInner>
//         </>
//     )
// }