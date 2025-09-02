import { Link } from "react-router-dom";
import { useState } from "react";
import Top from "../../layouts/Top";
import { arrow_left } from "../../utilities/Classes";
import Dropdown from "../Dropdown";
import MultiSelectTags from "../MultiSelectTags";
import Input from "../Input";
import RichTextEditor from "../RichTextEditor";
import AddActions from "../AddActions";

export default function PredefinedInstall() {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleInstall = () => {
    // if the page is on onboarding page, redirect to /onboarding/predefined-install
    if (window.location.pathname.includes("/onboarding")) {
      window.location.href = "/onboarding/predefined-responses?install=true";
    } else {
      window.location.href = "/app/predefined-update";
    }
  };

  return (
    <div>
      <Top title={" "} className="!justify-start">
        <Link
          to="/app/create-predefined"
          className="flex items-center gap-2.5 group"
        >
          <span className="size-6 md:size-8 rounded-full border border-solid border-stroke text-[#858585] transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white flex items-center justify-center">
            {arrow_left}
          </span>
          <span className="text-heading text-sm md:text-base lg:text-lg font-medium">
            Create Predefined Responses
          </span>
        </Link>
      </Top>
      <div className="p-4 lg:p-5 xl:p-6">
        <div className="md:flex items-center justify-between mb-5 lg:mb-6">
          <h6 className="mb-3 md:mb-0 text-lg lg:text-xl xl:text-2xl text-[#0A0D14] font-semibold !leading-[1.5]">
            Edit Order Status: Not shipped- still in processing window
          </h6>
          <Link
            onClick={() => handleInstall()}
            className="btn !bg-[#7E5EFF] !text-white hover:!text-white "
          >
            install
          </Link>
        </div>
        <div className="mt-4 lg:mt-5 xl:mt-6 md:flex items-center gap-4 lg:gap-5 ">
          <div className="w-full mb-3 md:mb-0">
            <Input
              type="text"
              placeholder="Type here"
              label="Predefined Response Name"
              required
            />
          </div>
          <div className="w-full mb-4 md:mb-5">
            <Dropdown
              className="mb-0"
              label="Language"
              placeholder="Type here"
              required
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
        </div>
        <MultiSelectTags />
        <Dropdown
          className="mb-0 mt-4 md:mt-6 flex-none"
          label="Store"
          placeholder="Select"
          isArrow={true}
          required={true}
          items={[
            { name: "Select-1" },
            { name: "Select-2" },
            { name: "Select-3" },
            { name: "Select-4" },
            { name: "Select-5" },
          ]}
        />
        <div className="mt-5 lg:mt-6">
          <p className="text-sm font-semibold !leading-[1.42] text-[#0A0D14] tracking-[-0.084px] mb-1">
            Respond text<span className="text-red-500">*</span>
          </p>
          <div className="py-[10px] px-3 mb-5 lg:mb-6 border border-[#E2E4E9] bg-[rgba(120,86,255,0.05)] rounded-md lg:rounded-[10px] shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)]">
            <div className="flex items-end gap-3 lg:gap-4 pb-2 border-b border-b-[#E2E4E9] mb-2">
              <Dropdown
                className="mb-0 flex-none"
                placeholder=""
                leftIcon={
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.53751 7.54097L8.32543 1.26215C8.72563 0.891966 9.37483 1.17581 9.37483 1.72096V4.66645C9.37483 4.89657 9.56485 5.08275 9.79494 5.0864C16.5327 5.19356 18.3332 7.93358 18.3332 14.8748C17.1084 12.4252 16.4836 10.9757 9.79574 10.9182C9.56563 10.9163 9.37483 11.103 9.37483 11.3331V14.2786C9.37483 14.8238 8.72563 15.1076 8.32543 14.7374L1.53751 8.4586C1.27005 8.21119 1.27005 7.78838 1.53751 7.54097Z"
                      stroke="#111111"
                      strokeOpacity="0.5"
                      strokeWidth="1.25"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                isArrow={true}
                items={[
                  { name: "1" },
                  { name: "2" },
                  { name: "3" },
                  { name: "4" },
                  { name: "5" },
                ]}
              />

              <Dropdown
                className="mb-0 w-full"
                label="To"
                placeholder="Current Client"
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
            <RichTextEditor
              value={editorContent}
              onChange={handleEditorChange}
              placeholder="Type your response here..."
              className="bg-white rounded-lg"
              minHeight="250px"
            />
          </div>
          <AddActions />
        </div>
      </div>
    </div>
  );
}
