import React from "react";
import Dropdown from "../Dropdown";
import Switch from "../Switch";
import RichTextEditor from "../text-editor/Editor";

export default function Guidance2() {
  return (
    <>
      <div className="mb-4 lg:mb-5">
        <p className="text-[#0A0D14] text-sm font-semibold !leading-[1.42] tracking-[-0.084px] mb-1">
          Guidance name
        </p>
        <p className="text-gray text-xs font-medium !leading-[1.66] mb-1">
          Al Agent uses this to help find relevant guidance
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
      <div className="">
        <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-3 lg:mb-4">
          Instructions
        </p>
        <div className="border border-[#E2E4E9] rounded-lg lg:rounded-xl xl:rounded-2xl p-4 lg:p-5">
          <RichTextEditor />
        </div>
      </div>
      <div className="mt-3 lg:mt-4">
        <label
          htmlFor="switch1"
          className="flex items-center gap-1 lg:gap-2 cursor-pointer"
        >
          <Switch id="switch1" />
          <span className="text-[#0A0D14] text-sm lg:text-base font-medium !leading-[1.4]">
            Available for AI Agent
          </span>
        </label>
      </div>
      <div className="flex flex-row-reverse items-center gap-3 md:gap-4 relative top-[70px] h-0 -mx-4">
        <button className="btn min-w-max shadow text-white">
          Create Guidance
        </button>
        <button className="btn min-w-max">Create and Test</button>
        <button className="btn min-w-max">Cancel</button>
      </div>
    </>
  );
}
