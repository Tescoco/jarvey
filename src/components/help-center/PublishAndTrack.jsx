import React, { useState } from "react";
import Modal from "../Modal";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Switch from "../Switch";
import { search } from "../../utilities/Classes";

export default function PublishAndTrack() {
  const CardList = [
    {
      title: "Automatically embed on your website",
      des: "Jarvey AI will automatically embed the Help Center on a new or existing page on your website. This method is code-free.",
      to: "/",
      name: "Embed Help Center ",
    },
    {
      title: "Manually embed with code",
      des: "Use HTML to manually display your Help Center on specific pages of your website. Note: You must have access to your site theme.",
      to: "/",
      name: "Continue",
    },
    {
      title: "Share your Help Center using a subdomain or custom domain",
      des: "https://jarvey.jarveyai.help/",
      to: "/",
      name: "Copy",
    },
  ];
  const Button = [
    {
      title: "Cancel",
    },
    {
      title: "Embaded Help Center",
    },
  ];

  const [chooseModal, setChooseModal] = useState(false);

  const [suggestSearch, setSuggestSearch] = useState(false);
  return (
    <div>
      <div className="">
        <div className="mb-4 relative z-[1]">
          <div className="text mb-1">
            <h2 className="text-sm text-black font-inter font-semibold !leading-[130%] mb-1">
              Connect a Store
            </h2>
            <p className="text-xs text-[#858585] font-inter font-normal !leading-[120%]">
              A store connection is required to use Automate features and enable
              auto-embedding for Shopify stores.
            </p>
          </div>
          <div className="relative z-10">
            <div className="absolute top-1/2 -translate-y-1/2 right-3 z-10">
              <div className="flex gap-3 mt-1 md:mt-0">
                <h2 className="text-xs md:text-sm text-primary font-inter font-semibold !leading-[130%] mb-1 cursor-pointer">
                  Change Account
                </h2>
                <h3 className="text-xs md:text-sm text-[#FE4333] font-inter font-semibold !leading-[130%] mb-1 cursor-pointer">
                  Disconnect
                </h3>
              </div>
            </div>
            <Input
              className="mb-0"
              type="text"
              placeholder="quickstart-b3e2d5d9"
              label=""
            />
          </div>
        </div>
        <div className="">
          <h2 className="text-sm text-black font-inter font-semibold !leading-[130%] mb-1">
            Publish
          </h2>
          <div className="mb-4 md:mb-5 lg:mb-6">
            <label htmlFor="policy2" className="flex items-center gap-2 mb-1">
              <Switch id="policy2" />
              <p className="font-inter font-medium text-sm text-heading">
                Use custom header
              </p>
            </label>
            <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%]">
              You must set your Help Center live to make it visible to customers
              via the direct link or embed options.{" "}
              <a href="#" className="text-xs text-[#7856FF] !underline">
                How do I embed my Help Center?
              </a>
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4 mb-5">
            {CardList.map((item, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 p-5 border border-solid border-[#E2E4E9] rounded-2xl min-h-[180px] cursor-pointer"
              >
                <div className="text-center" key={index}>
                  <h2 className="text-base text-black font-inter font-semibold !leading-[130%] mb-1">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%] mb-4">
                    {item.des}
                  </p>
                  <button
                    className="btn w-full"
                    onClick={() => setChooseModal(true)}
                  >
                    {item.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="relative z-[1]">
            <div className="text mb-1">
              <h2 className="text-base text-black font-inter font-semibold !leading-[130%] mb-1">
                Track
              </h2>
              <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%]">
                Google Analytics
              </p>
              <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%]">
                Provide your Google Universal Analytics ID or Google Analytics 4
                property ID such as UA-123456789-1 or G-ABCD1234E.
                <a href="#" className="text-xs text-[#7856FF] !underline">
                  {" "}
                  Learn more{" "}
                </a>{" "}
                about how to use Google Analytics with your help center.
              </p>
            </div>
            <Input className="mb-0" type="text" placeholder="Enter" label="" />
          </div>
        </div>
      </div>
      {chooseModal && (
        <Modal onClick={() => setChooseModal(false)}>
          <div className="text mb-6">
            <h2 className="text-lg md:text-xl lg:text-2xl text-black font-inter font-semibold !leading-[130%] mb-1">
              Choose where to embed your Help Center
            </h2>
            <p className="text-xs text-[#858585] font-inter font-normal !leading-[120%]">
              Only one page can be embedded at a time.
            </p>
          </div>
          <div className="mb-6">
            <div className="wrap p-4 bg-[#FFFFFF] border border-solid border-[#E2E4E9] rounded-2xl mb-2 transition-all duration-300 hover:bg-[#FAF8FF]">
              <label htmlFor="platform-1" className={`cursor-pointer`}>
                <Checkbox type="radio" name="radio" id="platform-1" checked />
                <h4 className="text-lg !leading-normal mt-1 mb-1">
                  Embed to a new page
                </h4>
                <p>
                  We'll create a new page for you in Shopify. Make sure to add
                  it to your website navigation.
                </p>
              </label>
            </div>
            <div className="wrap p-4 bg-[#FFFFFF] border border-solid border-[#E2E4E9] rounded-2xl mb-5 transition-all duration-300 hover:bg-[#FAF8FF]">
              <label htmlFor="platform-2" className={`cursor-pointer`}>
                <Checkbox type="radio" name="radio" id="platform-2" />
                <h4 className="text-lg !leading-normal mt-1 mb-1">
                  Embed to existing page
                </h4>
                <p>Select an existing page from your website.</p>
              </label>
            </div>
            <div className="mb-4">
              <Input
                className="mb-0"
                type="text"
                placeholder="Type here"
                label="Page name"
                required
              />
            </div>
            <div className="mb-6 relative">
              <label
                htmlFor=""
                className="flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading"
              >
                Slug<span className="text-[#FE4234]">*</span>
              </label>
              <p className="mb-2">
                Page identifier added to the end of the URL
              </p>
              <input
                type="text"
                placeholder="Type here"
                onFocus={() => setSuggestSearch(true)}
                onBlur={() => setSuggestSearch(!true)}
                className={`h-11 md:h-12 px-3 w-full bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-[10px] font-inter font-normal text-sm text-[#111111]/80 placeholder:text-[#111111]/50`}
              />
              {suggestSearch && (
                <div className="absolute top-full left-0 p-4 bg-white border border-solid border-[#E2E4E9] rounded-xl max-w-[382px]">
                  <div className="mb-6 !max-w-[350px] w-full">
                    <Input
                      className="mb-0"
                      type="text"
                      placeholder="Search..."
                      leftIcon={search}
                      inputClass="!h-[38px]"
                    />
                  </div>
                  <div className="mb-6">
                    <h2 className="text-sm text-heading font-inter font-semibold !leading-[130%] mb-1">
                      Contct
                    </h2>
                    <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%]">
                      Contct
                    </p>
                  </div>
                  <div className="">
                    <h2 className="text-sm text-heading font-inter font-semibold !leading-[130%] mb-1">
                      Do not sell or share my personal information
                    </h2>
                    <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%]">
                      date-sale-opt-out
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-start gap-2 md:gap-3 lg:gap-4">
              <button
                onClick={() => setChooseModal(false)}
                className="btn  border border-solid !border-[#7856FF] !text-xs md:!text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => setChooseModal(false)}
                className="btn  border border-solid !border-[#7856FF] !text-xs md:!text-sm"
              >
                Embaded Help Center
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
