import React from "react";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Dropdown from "../Dropdown";
import { common_card, langList } from "../../utilities/Classes";

export default function Basics({ chatConfig, updateChatConfig }) {
  const contact = [
    { name: "contact-1" },
    { name: "contact-2" },
    { name: "contact-3" },
    { name: "contact-4" },
    { name: "contact-5" },
  ];

  const handleInputChange = (field, value) => {
    updateChatConfig({ [field]: value });
  };

  const handleRadioChange = (field, value) => {
    updateChatConfig({ [field]: value });
  };

  return (
    <>
      <h4 className="text-lg !leading-normal mb-3 md:mb-4">
        Set up the basics
      </h4>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3">
          <Input
            className="mb-0"
            label="Chat Title"
            required={true}
            value={chatConfig?.chatTitle || ""}
            onChange={(e) => handleInputChange("chatTitle", e.target.value)}
          />
          <Dropdown
            className="mb-0"
            label="Default Language"
            placeholder="Type here"
            items={langList}
            search={true}
            required={true}
            value={chatConfig?.defaultLanguage}
            onChange={(value) => handleInputChange("defaultLanguage", value)}
          />
        </div>
        <p className="flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading">
          Select a Platform Type
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label
            htmlFor="platform-1"
            className={`${common_card} cursor-pointer`}
          >
            <Checkbox
              type="radio"
              name="platform"
              id="platform-1"
              checked={chatConfig?.platformType === "E-commerce Platform"}
              onChange={() =>
                handleRadioChange("platformType", "E-commerce Platform")
              }
            />
            <h4 className="text-lg !leading-normal mt-2 mb-1">
              E-commerce Platform
            </h4>
            <p>Shopify, Magneto, BigCommerce </p>
          </label>
          <label
            htmlFor="platform-2"
            className={`${common_card} cursor-pointer`}
          >
            <Checkbox
              type="radio"
              name="platform"
              id="platform-2"
              checked={chatConfig?.platformType === "Any other website"}
              onChange={() =>
                handleRadioChange("platformType", "Any other website")
              }
            />
            <h4 className="text-lg !leading-normal mt-2 mb-1">
              Any other webisite
            </h4>
            <p>Websites, Knowledge Bases, etc </p>
          </label>
        </div>
        <div className="col-span-1 md:col-span-2">
          <label
            htmlFor=""
            className="flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading"
          >
            Connect a Store <span className="text-[#FE4234]">*</span>
          </label>
          <p className="mb-1 text-xs">
            Connect a Store to use Automate features and to enable
            auto-embedding to your website.
          </p>
          <Dropdown
            className="mb-0"
            placeholder="Connect"
            items={contact}
            required={true}
            onChange={(value) => handleInputChange("connectedStore", value)}
          />
        </div>
        <p className="flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading">
          Choose how to connect with customers{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label
            htmlFor="connect-1"
            className={`${common_card} cursor-pointer`}
          >
            <Checkbox
              type="radio"
              name="connect"
              id="connect-1"
              checked={chatConfig?.connectType === "Allow Live chat messages"}
              onChange={() =>
                handleRadioChange("connectType", "Allow Live chat messages")
              }
            />
            <h4 className="text-lg !leading-normal mt-2 mb-1">
              Allow Live chat messages
            </h4>
            <p>
              Creates live chat tickets when an agent is available during
              business hours.{" "}
            </p>
          </label>
          <label
            htmlFor="connect-2"
            className={`${common_card} cursor-pointer`}
          >
            <Checkbox
              type="radio"
              name="connect"
              id="connect-2"
              checked={
                chatConfig?.connectType ===
                "Allow only offline capture messages"
              }
              onChange={() =>
                handleRadioChange(
                  "connectType",
                  "Allow only offline capture messages"
                )
              }
            />
            <h4 className="text-lg !leading-normal mt-2 mb-1">
              Allow only offline capture messages
            </h4>
            <p>
              Creates offline capture tickets that you can respond to by email
              at any moment.{" "}
            </p>
          </label>
        </div>
      </div>
    </>
  );
}
