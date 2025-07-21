import React, { useState } from 'react';

function SupportedFile({ className }) {
    const [fileTypes, setFileTypes] = useState(['CSV', 'Doc', 'Docx', 'jpeg', 'ico', 'jpg', 'png', 'tiff', 'zip']);

    const handleRemoveFileType = (typeToRemove) => {
        setFileTypes(fileTypes.filter(type => type !== typeToRemove));
    };

    return (
        <div className={className}>
            <label className="text-sm block font-semibold !leading-[1.42] text-[#0A0D14] tracking-[-0.084px] mb-1">Supported File Types <span className="text-red-500">*</span></label>
            <div id="file-types" className="w-full  py-[10px] px-3 flex items-center gap-3 border border-[#E2E4E9] bg-white  rounded-md lg:rounded-[10px] shadow-[0px_1px_2px_0px_rgba(228,_229,_231,_0.24)]" >
                {fileTypes.length > 0 ? (
                    fileTypes.map((type) => (
                        <div className="flex items-center bg-[#E2E4E9] text-sm px-3 py-1 rounded-full shadow-sm" >
                            <span className="mr-1 text-[#111111]/50">{type}</span>
                            <button type="button" onClick={() => handleRemoveFileType(type)} className="text-gray-500 hover:text-gray-700 rounded-full p-0.5 -mr-1" aria-label={`Remove ${type}`} >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6663 10.6654L1.33301 1.33203M10.6663 1.33203L1.33301 10.6654" stroke="#525866" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-sm">No file types selected.</p>
                )}
            </div>
        </div>
    );
}

export default SupportedFile;
