import React, { useState } from "react";
import Switch from "../../components/Switch";
import Top from "../../layouts/Top";
import { arrow_left } from "../../utilities/Classes";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

export default function TriggerSetting() {
  const [value, setValue] = useState(0);
  const Btns = ["Trigger Setting", "Affected Tickets"];
  const ListItem = [
    {
      title: "Newsletter",
      des: "Check out our new product!",
    },
    {
      title: "Product question",
      des: "Thave ordered...",
    },
    {
      title: "Promotion! -50%..",
      des: "Until Monday all of our products...",
    },
  ];
  return (
    <div>
      <Top title={" "}>
        <Link
          to="/app/triggers"
          className="mr-auto flex items-center gap-2.5 group"
        >
          <span className="size-6 md:size-8 rounded-full border border-solid border-stroke text-[#858585] transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white flex items-center justify-center">
            {arrow_left}
          </span>
          <span className="text-heading text-sm md:text-base lg:text-lg font-medium">
            Triggers
          </span>
        </Link>
      </Top>
      <div className="p-4 lg:p-5 xl:p-6">
        <div className="md:flex items-center justify-between mb-4 lg:mb-5 xl:mb-6">
          <h6 className="text-lg lg:text-xl xl:text-2xl text-[#0A0D14] font-semibold !leading-[1.5] mb-3 md:mb-0">
            [Auto Close] Auto-Close Spam Emails
          </h6>
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="border border-[#E2E4E9] rounded-md lg:rounded-[10px] p-2 lg:p-[10px]">
              <label
                htmlFor="switch1"
                className="flex items-center gap-1 lg:gap-2"
              >
                <p className="text-[#7856FF] text-sm font-medium !leading-[142%] tracking-[-0.084px]">
                  Enable Trigger
                </p>
                <Switch id="switch1" checked />
              </label>
            </div>
            <button className="border border-[#E2E4E9] group transform hover:scale-[1.1] p-2 lg:p-[10px] rounded-md lg:rounded-[10px] flex items-center justify-center">
              <svg
                className="group-hover:!text-black"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.69139 15.149L4.31509 15.1087L3.69139 15.149ZM14.3093 15.149L13.6856 15.1087L13.6856 15.1087L14.3093 15.149ZM1.29199 3.16666C0.946814 3.16666 0.666992 3.44648 0.666992 3.79166C0.666992 4.13683 0.946814 4.41666 1.29199 4.41666V3.16666ZM16.7087 4.41666C17.0538 4.41666 17.3337 4.13683 17.3337 3.79166C17.3337 3.44648 17.0538 3.16666 16.7087 3.16666V4.41666ZM7.75033 7.95832C7.75033 7.61315 7.4705 7.33332 7.12533 7.33332C6.78015 7.33332 6.50033 7.61315 6.50033 7.95832H7.75033ZM6.50033 12.5417C6.50033 12.8868 6.78015 13.1667 7.12533 13.1667C7.4705 13.1667 7.75033 12.8868 7.75033 12.5417H6.50033ZM11.5003 7.95832C11.5003 7.61315 11.2205 7.33332 10.8753 7.33332C10.5301 7.33332 10.2503 7.61315 10.2503 7.95832H11.5003ZM10.2503 12.5417C10.2503 12.8868 10.5301 13.1667 10.8753 13.1667C11.2205 13.1667 11.5003 12.8868 11.5003 12.5417H10.2503ZM11.6234 3.94744C11.7094 4.28173 12.0502 4.48297 12.3844 4.39693C12.7187 4.31089 12.92 3.97015 12.8339 3.63587L11.6234 3.94744ZM2.33496 3.8319L3.06768 15.1892L4.31509 15.1087L3.58236 3.75142L2.33496 3.8319ZM5.3546 17.3333H12.6461V16.0833H5.3546V17.3333ZM14.933 15.1892L15.6657 3.8319L14.4183 3.75142L13.6856 15.1087L14.933 15.1892ZM15.042 3.16666H2.95866V4.41666H15.042V3.16666ZM1.29199 4.41666H2.95866V3.16666H1.29199V4.41666ZM15.042 4.41666H16.7087V3.16666H15.042V4.41666ZM12.6461 17.3333C13.8544 17.3333 14.8552 16.3951 14.933 15.1892L13.6856 15.1087C13.6502 15.6568 13.1953 16.0833 12.6461 16.0833V17.3333ZM3.06768 15.1892C3.14548 16.3951 4.14623 17.3333 5.3546 17.3333V16.0833C4.80534 16.0833 4.35045 15.6568 4.31509 15.1087L3.06768 15.1892ZM6.50033 7.95832V12.5417H7.75033V7.95832H6.50033ZM10.2503 7.95832V12.5417H11.5003V7.95832H10.2503ZM9.00034 1.91666C10.2615 1.91666 11.3227 2.77919 11.6234 3.94744L12.8339 3.63587C12.3946 1.92875 10.8456 0.666656 9.00034 0.666656V1.91666ZM6.3773 3.94744C6.67799 2.77919 7.73922 1.91666 9.00034 1.91666V0.666656C7.15506 0.666656 5.60613 1.92875 5.16675 3.63587L6.3773 3.94744Z"
                  fill="#858585"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" xl:flex gap-4 lg:gap-5 xl:gap-6 w-full">
          <div className="w-full h-full mb-3 xl:mb-0">
            <div className="border-b border-b-[#E2E4E9] mb-4 lg:mb-5 xl:mb-6">
              {Btns.map((item, idx) => (
                <button
                  onClick={() => setValue(idx)}
                  key={idx}
                  className={`${
                    idx === value
                      ? " text-[#7856FF] !border-b-[#7856FF]"
                      : "text-[#0A0D14] !border-b-transparent"
                  } px-5 lg:px-6 text-sm font-medium !leading-[1.42] tracking-[-0.084px] pb-2 lg:pb-3 border-b `}
                >
                  {item}
                </button>
              ))}
            </div>
            {value === 0 && (
              <div>
                <p className="text-[#0A0D14] text-sm font-medium !leading-[1.42] tracking-[-0.084px] mb-4 lg:mb-5 xl:mb-6">
                  This Trigger detects and closes irrelevant emails that don't
                  require a response such as newsletters and spam to save you
                  time filtering through tickets.
                </p>
                <p className="text-[#0A0D14] text-sm font-medium !leading-[1.42] tracking-[-0.084px] mb-4 lg:mb-5 xl:mb-6">
                  Keep this Trigger at the top of your Triggers to ensure it
                  triggers first, preventing irrelevant billable tickets.
                </p>
                <div className="w-full mb-4 lg:mb-5 xl:mb-6">
                  <Input
                    type="email"
                    placeholder="Add emails"
                    label="Email exclusion list"
                    des="This Trigger will never trigger on incoming emails from the addresses below."
                    required
                  />
                </div>
                <div className="w-full mb-4 lg:mb-5 xl:mb-6">
                  <Input
                    type="email"
                    placeholder="Add emails"
                    label="Always apply list"
                    des="Emails in the following list will always be closed by this Trigger."
                    required
                  />
                </div>
                <a
                  href="#"
                  className="btn !text-[#7856FF] !border-[#7856FF] hover:!text-white  "
                >
                  View Tickets Closed by Trigger
                </a>
              </div>
            )}
            {value === 1 && (
              <div>
                <h1 className="text-black text-xl">Content-2</h1>
              </div>
            )}
          </div>
          <div className="w-full h-full bg-[#F7F7F7] px-5 py-20 lg:py-[100px] xl:py-[121px] flex items-center justify-center rounded-xl lg:rounded-2xl xl:rounded-3xl ">
            <div>
              {ListItem.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-[322px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)] bg-white rounded-lg lg:rounded-xl py-2 lg:py-3 px-4 lg:px-5 mb-2 lg:mb-3 last:mb-0 "
                >
                  <div className="flex items-center gap-2 lg:gap-[13px]">
                    <p className="text-[#0A0D14] text-sm font-medium !leading-[1.42] tracking-[-0.084px]">
                      {item.title}
                    </p>
                    <p
                      className={`${
                        idx === 0 ? "block" : "hidden"
                      } text-[#FE4333] text-xs font-medium !leading-[1.5] mt-1 py-1 px-2 bg-[rgba(254,67,51,0.10)] rounded-md lg:rounded-lg max-w-max`}
                    >
                      Closed{" "}
                    </p>
                  </div>
                  <p className="text-[#858585] text-xs font-medium !leading-[1.5]">
                    Check out our new product!
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
