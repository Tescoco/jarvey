import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import Dropdown from "../Dropdown";
import { c_border } from "../../utilities/Classes";

const Branding = forwardRef((props, ref) => {
  const [selectedHelpCenter, setSelectedHelpCenter] = useState("");
  const [urls, setUrls] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showUrlModal, setShowUrlModal] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Help Center is required
    if (!selectedHelpCenter || selectedHelpCenter === "New Text") {
      newErrors.helpCenter = "Help Center is required";
    }

    // At least one knowledge source required (URL or file)
    if (urls.length === 0 && uploadedFiles.length === 0) {
      newErrors.knowledgeSource = "At least one URL or document is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Expose validate function to parent component
  useImperativeHandle(ref, () => ({
    validate: () => {
      setShowErrors(true);
      const isValid = validateForm();
      
      // Scroll to first error
      if (!isValid) {
        setTimeout(() => {
          const firstError = document.querySelector('.validation-error, .border-red-500');
          if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
      
      return isValid;
    },
    getData: () => ({
      helpCenter: selectedHelpCenter,
      urls,
      files: uploadedFiles
    })
  }));

  // Update validation when data changes
  useEffect(() => {
    if (showErrors) {
      validateForm();
    }
  }, [selectedHelpCenter, urls, uploadedFiles, showErrors]);

  // Handle Help Center selection
  const handleHelpCenterChange = (value) => {
    setSelectedHelpCenter(value);
  };

  // Handle Add URL button click
  const handleAddUrl = (e) => {
    e.preventDefault();
    setShowUrlModal(true);
  };

  // Handle URL submission
  const handleSubmitUrl = () => {
    if (urlInput.trim()) {
      // Validate URL format
      try {
        const url = new URL(urlInput);
        
        // Check for Jarvey AI domains (as per requirements)
        if (url.hostname.includes('jarvey') || url.hostname.includes('yourdomain')) {
          alert("Links to your Jarvey AI Help Center or main domain are not accepted. Please provide specific page URLs.");
          return;
        }

        setUrls([...urls, urlInput]);
        setUrlInput("");
        setShowUrlModal(false);
        console.log("URL added:", urlInput);
        // Here you can add your API call to save the URL
      } catch (error) {
        alert("Please enter a valid URL (e.g., https://example.com)");
      }
    }
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel'
      ];
      
      if (!validTypes.includes(file.type)) {
        alert("Invalid file type. Please upload pdf, docx, pptx, or xlsx files.");
        e.target.value = null;
        return;
      }

      // Validate file size (50MB max)
      if (file.size > 50 * 1024 * 1024) {
        alert("File size exceeds 50 MB limit.");
        e.target.value = null;
        return;
      }

      setUploadedFiles([...uploadedFiles, file]);
      console.log("File uploaded:", file.name);
      // Here you can add your API call to upload the file
      
      // Reset the input
      e.target.value = null;
    }
  };

  // Remove URL
  const removeUrl = (index) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  // Remove file
  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  return (
    <div className={`${c_border}`}>
      <div className="mb-3 lg:mb-[15px]">
        <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1">
          Add knowledge to Al Agent
        </p>
        <p className="mt-1 text-xs text-gray font-medium !leading-[1.66] 3xl:pr-[30%] 4xl:pr-[55%]">
          At least one knowledge source is required for Al Agent to reference
          when replying to customers. You can always add more later.
        </p>
      </div>
      
      <div className="mb-5 lg:mb-6">
        <p className="text-sm lg:text-base font-semibold !leading-[1.42] text-[#0A0D14] tracking-[-0.084px] mb-1">
          Help Center <span className="text-red-600">*</span>
        </p>
        <div className={showErrors && errors.helpCenter ? 'validation-error' : ''}>
          <Dropdown
            info={selectedHelpCenter || "New Text"}
            className={`!mb-0 ${showErrors && errors.helpCenter ? '!border-red-500' : ''}`}
            isArrow={true}
            items={[
              { name: "DropDown - 1" },
              { name: "DropDown - 2" },
              { name: "DropDown - 3" },
              { name: "DropDown - 4" },
              { name: "DropDown - 5" },
            ]}
            onChange={handleHelpCenterChange}
          />
        </div>
        {showErrors && errors.helpCenter && (
          <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7.65625 10.2812C7.65625 10.6469 7.36562 10.9375 7 10.9375C6.63438 10.9375 6.34375 10.6469 6.34375 10.2812V6.34375C6.34375 5.97813 6.63438 5.6875 7 5.6875C7.36562 5.6875 7.65625 5.97813 7.65625 6.34375V10.2812ZM7 4.8125C6.56562 4.8125 6.21875 4.46563 6.21875 4.03125C6.21875 3.59687 6.56562 3.25 7 3.25C7.43438 3.25 7.78125 3.59687 7.78125 4.03125C7.78125 4.46563 7.43438 4.8125 7 4.8125Z"/>
            </svg>
            {errors.helpCenter}
          </p>
        )}
        <p className="mt-1 text-xs text-gray font-medium !leading-[1.66]">
          Select a Help Center to connect to Al Agent.
        </p>
      </div>

      <div className="mb-5 lg:mb-6 xl:flex items-center gap-5 xl:gap-[50px] justify-between">
        <div className="mb-4 xl:mb-0">
          <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1">
            Public URL sources
          </p>
          <p className="mt-1 text-xs text-gray font-medium !leading-[1.66] 4xl:pr-[45%]">
            Add external URLs for Al Agent to reference. Links to your Jarvey AI
            Help Center or main domain are not accepted, as Al Agent needs
            specific pages to provide accurate answers.
          </p>
        </div>
        <button
          onClick={handleAddUrl}
          className="btn !p-2 lg:!p-[10px] !min-w-[102px] flex-none flex items-center gap-1 !text-[#7856FF] hover:!text-white"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 5.25V0.75H6.75V5.25H11.25V6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25Z"
              fill="currentColor"
            />
          </svg>
          Add URL
        </button>
      </div>

      {/* Display added URLs */}
      {urls.length > 0 && (
        <div className="mb-5 lg:mb-6">
          <p className="text-sm font-semibold mb-2 text-green-600 flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.7071 6.70711L7.70711 10.7071C7.31658 11.0976 6.68342 11.0976 6.29289 10.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L7 8.58579L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711Z"/>
            </svg>
            Added URLs ({urls.length}):
          </p>
          <ul className="space-y-2">
            {urls.map((url, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-200">
                <span className="text-sm text-gray-700 truncate">{url}</span>
                <button
                  onClick={() => removeUrl(index)}
                  className="text-red-600 hover:text-red-800 ml-2 text-xl font-bold"
                  title="Remove URL"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* URL Modal */}
      {showUrlModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Add URL</h3>
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://example.com/specific-page"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#7856FF]"
              onKeyPress={(e) => e.key === 'Enter' && handleSubmitUrl()}
              autoFocus
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  setShowUrlModal(false);
                  setUrlInput("");
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitUrl}
                className="px-4 py-2 bg-[#7856FF] text-white rounded-lg hover:bg-[#6445dd]"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-5 lg:mb-6 xl:flex gap-5 xl:gap-[50px] justify-between">
        <div className="mb-4 xl:mb-0">
          <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1">
            External documents
          </p>
          <p className="mt-1 text-xs text-gray font-medium !leading-[1.66] 4xl:pr-[45%]">
            Upload knowledge and process documents for Al Agent to reference. Do
            not upload files that may contain any sensitive or personal
            information. Images will be ignored.
          </p>
          <p className="mt-1 text-xs text-gray font-medium !leading-[1.66]">
            Supported types: pdf, docx, pptx, xIsx. Max 50 MB.
          </p>
        </div>
        <label
          htmlFor="file"
          className="flex-none h-full transform hover:scale-[1.1] duration-500"
        >
          <span className="w-full text-[#7856FF] text-sm border !border-[#E2E4E9] p-2 lg:p-[10px] flex items-center gap-1 max-w-max rounded-lg lg:rounded-[10px] cursor-pointer font-semibold !leading-[1.42] tracking-[-0.084px]">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12.8332V6.99984M10 6.99984L12.0834 9.08317M10 6.99984L7.91669 9.08317M6.66669 12.8332H5.83335C3.53217 12.8332 1.66669 10.9677 1.66669 8.6665C1.66669 6.55589 3.23599 4.8118 5.27142 4.53741C5.94709 2.57582 7.80898 1.1665 10 1.1665C12.7614 1.1665 15 3.40508 15 6.1665C16.841 6.1665 18.3334 7.65889 18.3334 9.49984C18.3334 11.3408 16.841 12.8332 15 12.8332H13.3334"
                stroke="#7856FF"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Upload File
          </span>
          <input
            type="file"
            className="hidden"
            id="file"
            onChange={handleFileUpload}
            accept=".pdf,.docx,.pptx,.xlsx"
          />
        </label>
      </div>

      {/* Display uploaded files */}
      {uploadedFiles.length > 0 && (
        <div className="mb-5 lg:mb-6">
          <p className="text-sm font-semibold mb-2 text-green-600 flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.7071 6.70711L7.70711 10.7071C7.31658 11.0976 6.68342 11.0976 6.29289 10.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L7 8.58579L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711Z"/>
            </svg>
            Uploaded Files ({uploadedFiles.length}):
          </p>
          <ul className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-200">
                <span className="text-sm text-gray-700">{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-600 hover:text-red-800 ml-2 text-xl font-bold"
                  title="Remove file"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Knowledge source error */}
      {showErrors && errors.knowledgeSource && urls.length === 0 && uploadedFiles.length === 0 && (
        <div className="mb-5 lg:mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg validation-error">
          <p className="text-sm text-red-600 font-semibold flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7.65625 10.2812C7.65625 10.6469 7.36562 10.9375 7 10.9375C6.63438 10.9375 6.34375 10.6469 6.34375 10.2812V6.34375C6.34375 5.97813 6.63438 5.6875 7 5.6875C7.36562 5.6875 7.65625 5.97813 7.65625 6.34375V10.2812ZM7 4.8125C6.56562 4.8125 6.21875 4.46563 6.21875 4.03125C6.21875 3.59687 6.56562 3.25 7 3.25C7.43438 3.25 7.78125 3.59687 7.78125 4.03125C7.78125 4.46563 7.43438 4.8125 7 4.8125Z"/>
            </svg>
            {errors.knowledgeSource}
          </p>
        </div>
      )}
    </div>
  );
});

Branding.displayName = 'Branding';

export default Branding;

// import React from "react";
// import Dropdown from "../Dropdown";
// import { c_border } from "../../utilities/Classes";

// export default function Branding() {
//   return (
//     <div className={`${c_border}`}>
//       <div className="mb-3 lg:mb-[15px]">
//         <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1">
//           Add knowledge to Al Agent
//         </p>
//         <p className="mt-1 text-xs text-gray font-medium !leading-[1.66] 3xl:pr-[30%] 4xl:pr-[55%]">
//           At least one knowledge source is required for Al Agent to reference
//           when replying to customers. You can always add more later.
//         </p>
//       </div>
//       <div className="mb-5 lg:mb-6">
//         <p className="text-sm lg:text-base font-semibold !leading-[1.42] text-[#0A0D14] tracking-[-0.084px] mb-1">
//           Help Center <span className="text-red-600">*</span>
//         </p>
//         <Dropdown
//           info="New Text"
//           className="!mb-0"
//           isArrow={true}
//           items={[
//             { name: "DropDown - 1" },
//             { name: "DropDown - 2" },
//             { name: "DropDown - 3" },
//             { name: "DropDown - 4" },
//             { name: "DropDown - 5" },
//           ]}
//         />
//         <p className="mt-1 text-xs text-gray font-medium !leading-[1.66]">
//           Select a Help Center to connect to Al Agent.
//         </p>
//       </div>
//       <div className="mb-5 lg:mb-6 xl:flex items-center gap-5 xl:gap-[50px] justify-between">
//         <div className="mb-4 xl:mb-0">
//           <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1">
//             Public URL sources
//           </p>
//           <p className="mt-1 text-xs text-gray font-medium !leading-[1.66] 4xl:pr-[45%]">
//             Add external URLs for Al Agent to reference. Links to your Jarvey AI
//             Help Center or main domain are not accepted, as Al Agent needs
//             specific pages to provide accurate answers.
//           </p>
//         </div>
//         <a
//           href="#"
//           className="btn !p-2 lg:!p-[10px] !min-w-[102px] flex-none flex items-center gap-1 !text-[#7856FF] hover:!text-white"
//         >
//           <svg
//             width="12"
//             height="12"
//             viewBox="0 0 12 12"
//             fill="currentColor"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M5.25 5.25V0.75H6.75V5.25H11.25V6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25Z"
//               fill="currentColor"
//             />
//           </svg>
//           Add URL
//         </a>
//       </div>
//       <div className="mb-5 lg:mb-6 xl:flex gap-5 xl:gap-[50px] justify-between">
//         <div className="mb-4 xl:mb-0">
//           <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1">
//             External documents
//           </p>
//           <p className="mt-1 text-xs text-gray font-medium !leading-[1.66] 4xl:pr-[45%]">
//             Upload knowledge and process documents for Al Agent to reference. Do
//             not upload files that may contain any sensitive or personal
//             information. Images will be ignored.
//           </p>
//           <p className="mt-1 text-xs text-gray font-medium !leading-[1.66]">
//             Supported types: pdf, docx, pptx, xIsx. Max 50 MB.
//           </p>
//         </div>
//         <label
//           htmlFor="file"
//           className="flex-none h-full transform hover:scale-[1.1] duration-500"
//         >
//           <span className="w-full text-[#7856FF] text-sm border !border-[#E2E4E9] p-2 lg:p-[10px] flex items-center gap-1 max-w-max rounded-lg lg:rounded-[10px]  cursor-pointer font-semibold !leading-[1.42] tracking-[-0.084px]">
//             <svg
//               width="20"
//               height="14"
//               viewBox="0 0 20 14"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M10 12.8332V6.99984M10 6.99984L12.0834 9.08317M10 6.99984L7.91669 9.08317M6.66669 12.8332H5.83335C3.53217 12.8332 1.66669 10.9677 1.66669 8.6665C1.66669 6.55589 3.23599 4.8118 5.27142 4.53741C5.94709 2.57582 7.80898 1.1665 10 1.1665C12.7614 1.1665 15 3.40508 15 6.1665C16.841 6.1665 18.3334 7.65889 18.3334 9.49984C18.3334 11.3408 16.841 12.8332 15 12.8332H13.3334"
//                 stroke="#7856FF"
//                 strokeWidth="1.66667"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//             Upload File
//           </span>
//           <input type="file" name="" className="hidden" id="file" />
//         </label>
//       </div>
//     </div>
//   );
// }