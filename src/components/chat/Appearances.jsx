import React from "react";
import Dropdown from "../Dropdown";
import Switch from "../Switch";
import Input from "../Input";
import Checkbox from "../Checkbox";
import { common_card } from "../../utilities/Classes";
import message from "../../assets/img/chat/message.png";
import chat from "../../assets/img/chat/chat-us.png";

export default function Appearances({ chatConfig, updateChatConfig }) {
  const font = [
    { name: "Inter" },
    { name: "Arial" },
    { name: "Helvetica" },
    { name: "Times New Roman" },
    { name: "Georgia" },
  ];
  const type = [
    { name: "Bottom Right" },
    { name: "Bottom Left" },
    { name: "Top Right" },
    { name: "Top Left" },
    { name: "Center" },
  ];

  const colorOptions = [
    { name: "Primary", color: "#7856FF" },
    { name: "Purple", color: "#886AFF" },
    { name: "Green", color: "#10B981" },
    { name: "Blue", color: "#3B82F6" },
    { name: "Red", color: "#EF4444" },
    { name: "Orange", color: "#F97316" },
    { name: "Black", color: "#000000" },
  ];

  const handleInputChange = (field, value) => {
    updateChatConfig({ [field]: value });
  };

  const handleRadioChange = (field, value) => {
    updateChatConfig({ [field]: value });
  };

  const handleCheckboxChange = (field, checked) => {
    updateChatConfig({ [field]: checked });
  };

  const drop = [
    {
      title: "Standard logo",
    },
    {
      title: "Dark logo",
    },
    {
      title: "Avatar logo",
    },
  ];
  const agent = [
    {
      title: "Name",
      list: [
        "First Name Only",
        "First name, Last name Initial",
        "Full Name",
        "Use Chat title instead of agent name",
      ],
    },
    {
      title: "Image",
      list: ["Profile picture", "Initials"],
    },
  ];

  const single = ["pb-4 lg:pb-5 border-b border-[#E2E4E9]"];
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-3 md:gap-3">
          <div className="">
            <Input
              className="mb-0"
              placeholder="Type here"
              label="Chat Title"
              required={true}
              value={chatConfig?.chatTitle || ""}
              onChange={(e) => handleInputChange("chatTitle", e.target.value)}
            />
          </div>
        </div>
        <div className={`flex justify-between`}>
          <h4 className="font-inter font-semibold text-lg !leading-normal text-heading">
            Intro message
          </h4>
          <button className="btn !text-xs !border-primary !text-primary hover:!text-white !px-0 !h-[27px] !min-w-[154px]">
            Customize Translations
          </button>
        </div>
        <div className="flex flex-col gap-4 lg:gap-5">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-3 ${single}`}>
            <Input
              type="text"
              className="mb-0"
              name="during"
              placeholder="Type here"
              label="During Business Hours"
              required={true}
              value={chatConfig?.welcomeMessageDuringHours || ""}
              onChange={(e) =>
                handleInputChange("welcomeMessageDuringHours", e.target.value)
              }
            />
            <Input
              type="text"
              className="mb-0"
              name="Outside"
              placeholder="Type here"
              label="Outside Business Hours"
              required={true}
              value={chatConfig?.welcomeMessageOutsideHours || ""}
              onChange={(e) =>
                handleInputChange("welcomeMessageOutsideHours", e.target.value)
              }
            />
          </div>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-3 ${single}`}>
            <h4 className="text-lg !leading-normal lg:col-span-2">Colors</h4>
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
            <div className="flex items-start gap-2 col-span-1 lg:col-span-2">
              <Checkbox
                checked={chatConfig?.keepMainColorOutside || false}
                id="keep"
                className="relative top-0.5"
                onChange={(e) =>
                  handleCheckboxChange("keepMainColorOutside", e.target.checked)
                }
              />
              <label
                htmlFor="keep"
                className="text-[#0A0D14] text-base font-medium !leading-[150%] cursor-pointer"
              >
                Keep main color when outside business hours
              </label>
            </div>
          </div>
          <div className={` ${single}`}>
            <h4 className="text-lg !leading-normal lg:col-span-2 mb-3 lg:mb-4">
              Background Style
            </h4>
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={chatConfig?.backgroundStyle === "Gradient"}
                  type="radio"
                  name="backgroundStyle"
                  id="Gradient"
                  onChange={() =>
                    handleRadioChange("backgroundStyle", "Gradient")
                  }
                />
                <label
                  htmlFor="Gradient"
                  className="text-[#0A0D14] text-base font-medium !leading-[150%] cursor-pointer"
                >
                  Gradient
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  type="radio"
                  name="backgroundStyle"
                  id="Solid"
                  checked={chatConfig?.backgroundStyle === "Solid"}
                  onChange={() => handleRadioChange("backgroundStyle", "Solid")}
                />
                <label
                  htmlFor="Solid"
                  className="text-[#0A0D14] text-base font-medium !leading-[150%] cursor-pointer"
                >
                  Solid
                </label>
              </div>
            </div>
          </div>
          <div className={` ${single}`}>
            <Dropdown
              className="mb-0"
              label="Font"
              placeholder="Inter"
              items={font}
              required={true}
              value={chatConfig?.font}
              onChange={(value) => handleInputChange("font", value)}
            />
          </div>
          <div className={` ${single}`}>
            <h4 className="text-lg !leading-normal lg:col-span-2 mb-3 lg:mb-4">
              Company Logo
            </h4>
            <p className="text-sm md:text-base font-semibold !leading-[150%] text-[#0A0D14] mb-3 md:mb-4">
              Header logo
            </p>
            <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
              {drop.map((item, index) => (
                <div
                  key={index}
                  className={`max-w-[275px] w-full ${
                    index === 2 && "!max-w-[115px]"
                  }`}
                >
                  <p className="text-sm mb-3 font-semibold !leading-[150%] text-[#0A0D14]">
                    {item.title}{" "}
                  </p>
                  <label
                    htmlFor={`drop-${index}`}
                    className={`rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[119px] flex items-center flex-col justify-center ${
                      index === 2 && "rounded-full"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                    >
                      <path
                        d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337"
                        stroke="#7856FF"
                        strokeWidth="2.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p
                      className={`text-[11px] md:text-sm  mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center ${
                        index === 2 && "!text-xs"
                      }`}
                    >
                      Drop your image here or{" "}
                      <span
                        className={`block text-primary underline ${
                          index === 2 && "!inline-block"
                        }`}
                      >
                        browse
                      </span>
                    </p>
                    <input
                      type="file"
                      id={`drop-${index}`}
                      className="hidden absolute z-[-1]"
                      name=""
                      placeholder=""
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className={` ${single}`}>
            <h4 className="text-lg !leading-normal lg:col-span-2 mb-3 lg:mb-4">
              Agent avatar
            </h4>
            <div className="flex items-start gap-4 lg:gap-[42px]">
              {agent.map((item, index) => (
                <div className="" key={index}>
                  <p className="text-sm md:text-base font-semibold !leading-[150%] text-[#0A0D14] mb-3 md:mb-4">
                    {item.title}{" "}
                  </p>
                  <div className="flex flex-col gap-3 md:gap-4">
                    {item.list.map((Item, Index) => (
                      <label
                        htmlFor={`agent${index === 0 ? "Name" : "Image"}${
                          Index + 1
                        }`}
                        className="flex items-center gap-2.5 cursor-pointer"
                        key={Index}
                      >
                        <Checkbox
                          type="radio"
                          id={`agent${index === 0 ? "Name" : "Image"}${
                            Index + 1
                          }`}
                          name={`agent${item.title}`}
                          checked={chatConfig?.[`agent${item.title}`] === Item}
                          onChange={() =>
                            handleRadioChange(`agent${item.title}`, Item)
                          }
                        />
                        <span className="text-[#0A0D14] md:text-base font-medium !leading-[150%] block">
                          {Item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={` ${single} flex flex-col md:flex-row gap-2 md:gap-0 md:items-center justify-between`}
          >
            <h4 className="text-lg !leading-normal">Chatbot</h4>
            <div className="flex items-center gap-2">
              <Switch
                checked={chatConfig?.showBotLabel || false}
                id="bot"
                onChange={(e) =>
                  handleCheckboxChange("showBotLabel", e.target.checked)
                }
              />
              <label
                htmlFor="bot"
                className="text-[#0A0D14] font-medium !leading-[100%]"
              >
                Display "Bot" next to chat title for automated messages
              </label>
            </div>
          </div>
          <div className="">
            <p className="text-sm font-semibold text-[#0A0D14] mb-3 lg:mb-4">
              Launcher
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={`${common_card} flex items-center justify-between`}
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    type="radio"
                    checked={chatConfig?.launcherType === "Icon"}
                    name="launcher"
                    id="icon1"
                    onChange={() => handleRadioChange("launcherType", "Icon")}
                  />
                  <label
                    htmlFor="icon1"
                    className="!leading-normal cursor-pointer"
                  >
                    Icon
                  </label>
                </div>
                <button className="hover:scale-110 size-[45px]">
                  <img src={message} className="w-full h-full" alt="" />
                </button>
              </div>
              <div
                className={`${common_card} flex items-center justify-between`}
              >
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
                  <label
                    htmlFor="icon2"
                    className="!leading-normal cursor-pointer"
                  >
                    Icon and Label
                  </label>
                </div>
                <button className="hover:scale-105 w-[127px] h-[43px]">
                  <img src={chat} className="w-full h-full" alt="" />
                </button>
              </div>
            </div>
            <Input
              type="text"
              className="mt-3 lg:mt-4"
              name="Level"
              placeholder="Chat with us"
              label="Label"
              required={true}
              value={chatConfig?.launcherLabel || ""}
              onChange={(e) =>
                handleInputChange("launcherLabel", e.target.value)
              }
            />
            <p className="mt-1 mb-3 lg:mb-4">12/20 characters</p>
            <p className="block mb-1 font-inter font-semibold text-sm !leading-normal text-heading">
              Widget Position on Page <span className="text-[#FE4234]">*</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              <Dropdown
                position="bottom"
                className="mb-0"
                placeholder="Bottom Right"
                items={type}
                required={true}
                value={chatConfig?.widgetPosition}
                onChange={(value) => handleInputChange("widgetPosition", value)}
              />
              <Dropdown
                position="bottom"
                className="mb-0"
                placeholder="Move Left/Right"
                items={[
                  { name: "Left" },
                  { name: "Center" },
                  { name: "Right" },
                ]}
                required={true}
                value={chatConfig?.horizontalPosition}
                onChange={(value) =>
                  handleInputChange("horizontalPosition", value)
                }
              />
              <Dropdown
                position="bottom"
                className="mb-0"
                placeholder="Move up/down"
                items={[
                  { name: "Top" },
                  { name: "Middle" },
                  { name: "Bottom" },
                ]}
                required={true}
                value={chatConfig?.verticalPosition}
                onChange={(value) =>
                  handleInputChange("verticalPosition", value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
