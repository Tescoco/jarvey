import React from "react";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Dropdown from "../Dropdown";
import message from "../../assets/img/chat/message.png";
import chat from "../../assets/img/chat/chat-us.png";
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

  return (
    <>
      <div className="mb-3 md:mb-4">
        <h4 className="text-lg !leading-normal mb-1">Customize your chat</h4>
        <p>Give the chat widget your brand's look and feel</p>
      </div>
      <h4 className="text-lg !leading-normal mb-3 md:mb-4">Colors</h4>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3">
          <Dropdown
            className="mb-0"
            label="Main Color"
            search={false}
            placeholder={{
              name: "Select Color",
              color: chatConfig?.mainColor || "#7856FF",
            }}
            items={colorOptions}
            required={true}
            value={chatConfig?.mainColor}
            onChange={(value) => handleInputChange("mainColor", value)}
          />
          <Dropdown
            className="mb-0"
            label="Conversion Color"
            search={false}
            placeholder={{
              name: "Select Color",
              color: chatConfig?.conversionColor || "#FE4234",
            }}
            items={colorOptions}
            required={true}
            value={chatConfig?.conversionColor}
            onChange={(value) => handleInputChange("conversionColor", value)}
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
            <button className="hover:scale-110 size-[45px]">
              <img src={message} className="w-full h-full" alt="" />
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
            <button className="hover:scale-105 w-[127px] h-[43px]">
              <img src={chat} className="w-full h-full" alt="" />
            </button>
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
