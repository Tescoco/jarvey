import React from "react";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Dropdown from "../Dropdown";
import ColorPicker from "../ColorPicker";
import { common_card } from "../../utilities/Classes";

export default function Customize({ chatConfig, updateChatConfig }) {
  const handleInputChange = (field, value) => {
    updateChatConfig({ [field]: value });
  };

  const handleRadioChange = (field, value) => {
    updateChatConfig({ [field]: value });
  };

  const colorOptions = [
    { name: "Primary", color: "#7856FF" },
    { name: "Purple", color: "#886AFF" },
    { name: "Green", color: "#10B981" },
    { name: "Blue", color: "#3B82F6" },
    { name: "Red", color: "#EF4444" },
    { name: "Orange", color: "#F97316" },
    { name: "Black", color: "#000000" },
  ];

  const mainColor = chatConfig?.mainColor || "#7856FF";

  return (
    <>
      <div className="mb-3 md:mb-4">
        <h4 className="text-lg !leading-normal mb-1">Customize your chat</h4>
        <p>Give the chat widget your brand's look and feel</p>
      </div>
      <h4 className="text-lg !leading-normal mb-3 md:mb-4">Colors</h4>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3">
          <ColorPicker
            className="mb-0"
            label="Main Color"
            value={chatConfig?.mainColor || "#7856FF"}
            onChange={(value) => handleInputChange("mainColor", value)}
            required={true}
          />
          <ColorPicker
            className="mb-0"
            label="Conversion Color"
            value={chatConfig?.conversionColor || "#FE4234"}
            onChange={(value) => handleInputChange("conversionColor", value)}
            required={true}
          />
        </div>
        <p className="text-sm font-semibold text-[#0A0D14]">Launcher</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`${common_card} flex items-center justify-between`}>
            <div className="flex items-center gap-2">
              <Checkbox
                type="radio"
                checked={chatConfig?.launcherType === "Icon"}
                name="launcher"
                id="icon1"
                onChange={() => handleRadioChange("launcherType", "Icon")}
              />
              <label htmlFor="icon1" className="!leading-normal cursor-pointer">
                Icon
              </label>
            </div>
            <button
              className="hover:scale-110 size-[45px] rounded-full bg-white border flex items-center justify-center transition-transform"
              style={{ borderColor: mainColor, borderWidth: 1 }}
              aria-label="Launcher icon preview"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12C21 16.4183 16.9706 20 12 20C10.5575 20 9.19918 19.6993 8 19.1686L3 21L4.83143 16C4.30075 14.8008 4 13.4425 4 12C4 7.58172 8.02944 4 12 4C16.9706 4 21 7.58172 21 12Z"
                  stroke={mainColor}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className={`${common_card} flex items-center justify-between`}>
            <div className="flex items-center gap-2">
              <Checkbox
                type="radio"
                name="launcher"
                id="icon2"
                checked={chatConfig?.launcherType === "Icon and Label"}
                onChange={() =>
                  handleRadioChange("launcherType", "Icon and Label")
                }
              />
              <label htmlFor="icon2" className="!leading-normal cursor-pointer">
                Icon and Label
              </label>
            </div>
            <div
              className="hover:scale-105 h-[43px] inline-flex items-center gap-2 px-3 rounded-lg bg-white transition-transform"
              style={{ border: `1px solid ${mainColor}`, color: mainColor }}
              aria-label="Launcher icon and label preview"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12C21 16.4183 16.9706 20 12 20C10.5575 20 9.19918 19.6993 8 19.1686L3 21L4.83143 16C4.30075 14.8008 4 13.4425 4 12C4 7.58172 8.02944 4 12 4C16.9706 4 21 7.58172 21 12Z"
                  stroke={mainColor}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm whitespace-nowrap">
                {chatConfig?.launcherLabel || "Chat with us"}
              </span>
            </div>
          </div>
        </div>
        <Input
          className="mb-0"
          label="Label"
          placeholder="Chat with us"
          des="12/20 characters"
          required={true}
          value={chatConfig?.launcherLabel || ""}
          onChange={(e) => handleInputChange("launcherLabel", e.target.value)}
        />
        <Input
          className="mb-0"
          label="Welcome Message"
          placeholder="We will replay in a few moments."
          des="Customize the welcome message shown in chat header"
          required={true}
          value={chatConfig?.welcomeMessage || ""}
          onChange={(e) => handleInputChange("welcomeMessage", e.target.value)}
        />
      </div>
    </>
  );
}
