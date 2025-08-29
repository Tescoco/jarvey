import React from "react";
import Dropdown from "../Dropdown";
import Input from "../Input";
import { langList } from "../../utilities/Classes";

export default function Preferences() {
  return (
    <div className="preferences">
      <div className="text w-full lg:w-1/2">
        <div className="mb-4 md:mb-6 lg:mb-8">
          <div className="text mb-5">
            <h2 className="text-lg text-black font-inter font-semibold !leading-[130%] mb-1">
              Languages
            </h2>
            <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%]">
              Select the languages in which you will be able to edit and
              Customize your help center.{" "}
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-lg text-black font-inter font-semibold !leading-[130%] mb-2.5">
              Available Language
            </h2>
            <div className="flex items-center gap-2.5">
              <button className="px-2.5 py-2 border border-solid border-[#E2E4E9] rounded-lg max-w-max text-xs text-black font-inter font-medium !leading-[130%] cursor-pointer">
                English
              </button>
              <button className="inline-block px-2.5 py-2 border border-solid border-[#E2E4E9] rounded-lg max-w-max cursor-pointer">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.50065 2.83398V8.50065M8.50065 8.50065V14.1673M8.50065 8.50065H2.83398M8.50065 8.50065H14.1673"
                    stroke="#111111"
                    strokeOpacity="0.7"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="">
            <Dropdown
              className="mb-0"
              label="Select email integration"
              placeholder="English"
              items={langList}
              required={true}
            />
            <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%] mt-1">
              Used when selected language isn't available or cannot be detected
            </p>
          </div>
        </div>
        <div className="text mb-5">
          <h2 className="text-lg text-black font-inter font-semibold !leading-[130%] mb-1">
            Search Engine Optimization (SEO)
          </h2>
          <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%]">
            Allow you to add tracking links and other scripts to your Help
            Center page.
          </p>
        </div>
        <div className="mb-4">
          <Input
            className="mb-0"
            type="text"
            placeholder="Type here"
            label="Meta Title"
            required={true}
          />
          <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%] mt-1">
            Help Center title is displayed in search engines to help people find
            it.
          </p>
        </div>
        <div className="mb-4">
          <Input
            className="mb-0"
            type="text"
            placeholder="Type here"
            label="Meta Description"
          />
          <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%] mt-1">
            Help Center description is displayed in search engines to help
            people find it.
          </p>
        </div>
        <div className="">
          <h4 className="text-lg text-black font-inter font-semibold !leading-[130%] ">
            Search Engine Preview<span className="text-[#FE4234]">*</span>
          </h4>
          <div className="px-3 py-2.5 border border-solid border-[#E2E4E9] rounded-[10px]">
            <a
              href=""
              className="text-sm text-[#858585] font-inter font-normal !leading-[120%] mb-3"
            >
              https://jarvey.jarveyai.help
            </a>
            <h3 className="text-lg text-[#7856FF] font-inter font-medium !leading-[130%] mb-2">
              jarvey Help Center
            </h3>
            <p className="text-sm text-[#858585] font-inter font-normal !leading-[120%]">
              Home page of the jarvey Help Center
            </p>
          </div>
          <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%] mt-1">
            This is a preview of how your article is going to look like in
            search engines (e.g. Google, Duckduckgo, Bing...)
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 mt-16">
        <button className="btn !text-primary !border-primary main-w-max hover:!text-white">
          Cancel
        </button>
        <button className="btn shadow !text-white main-w-max flex items-center gap-2">
          Save Changes
        </button>
      </div>
    </div>
  );
}
