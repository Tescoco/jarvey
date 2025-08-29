import React from "react";
import Dropdown from "../Dropdown";
import { c_border } from "../../utilities/Classes";

export default function Branding() {
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
        <Dropdown
          info="New Text"
          className="!mb-0"
          isArrow={true}
          items={[
            { name: "DropDown - 1" },
            { name: "DropDown - 2" },
            { name: "DropDown - 3" },
            { name: "DropDown - 4" },
            { name: "DropDown - 5" },
          ]}
        />
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
        <a
          href="#"
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
        </a>
      </div>
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
          <span className="w-full text-[#7856FF] text-sm border !border-[#E2E4E9] p-2 lg:p-[10px] flex items-center gap-1 max-w-max rounded-lg lg:rounded-[10px]  cursor-pointer font-semibold !leading-[1.42] tracking-[-0.084px]">
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
          <input type="file" name="" className="hidden" id="file" />
        </label>
      </div>
    </div>
  );
}
