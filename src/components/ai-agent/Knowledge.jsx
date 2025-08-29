import React from "react";
import Dropdown from "../Dropdown";

export default function Knowledge() {
  return (
    <div className="mt-3 lg:mt-[15px]">
      <div className="mb-5 lg:mb-6">
        <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1">
          Knowledge
        </p>
        <p className="mt-1 text-xs text-gray font-medium !leading-[1.66]">
          Connect at least one of the knowledge sources below to enable Al
          Agent.
        </p>
      </div>
      <div className="mb-5 lg:mb-6">
        <p className="text-sm lg:text-base font-semibold !leading-[1.42] text-[#0A0D14] tracking-[-0.084px] mb-1">
          Help Center <span className="text-red-600">*</span>
        </p>
        <p className="text-xs font-medium !leading-[1.66] text-gray mb-1">
          Select a Help Center to connect to Al Agent.
        </p>
        <Dropdown
          info="New Text"
          className="!mb-0"
          placeholder="jarvey"
          isArrow={true}
          items={[
            { name: "DropDown - 1" },
            { name: "DropDown - 2" },
            { name: "DropDown - 3" },
            { name: "DropDown - 4" },
            { name: "DropDown - 5" },
          ]}
        />
      </div>
      <div className="mb-5 lg:mb-6 xl:flex items-center gap-5 xl:gap-[50px] justify-between">
        <div className="mb-4 xl:mb-0">
          <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1">
            Public URL sources
          </p>
          <p className="mt-1 text-xs text-gray font-medium !leading-[1.66] ">
            Add external URLs for Al Agent to reference. Links to your Jarvey AI
            Help Center or main domain are not accepted, as Al Agent needs
            specific pages to provide accurate answers.
          </p>
        </div>
        <a
          href="#"
          className="btn  flex-none !text-[#7856FF] hover:!text-white min-w-max flex items-center gap-1"
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
          <p className="mt-1 text-xs text-gray font-medium !leading-[1.66] ">
            Upload knowledge and process documents for Al Agent to reference. Do
            not upload files that may contain any sensitive or personal
            information. Images will be ignored.
          </p>
        </div>
        <label
          htmlFor="file"
          className="flex-none transform hover:scale-[1.1] duration-500 cursor-pointer"
        >
          <span className="btn  flex-none !text-[#7856FF] hover:!text-white min-w-max flex items-center gap-1">
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
            Upload File
          </span>
          <input type="file" name="" className="hidden" id="file" />
        </label>
      </div>
    </div>
  );
}
