import React from "react";
import Checkbox from "../Checkbox";

export default function TriggerModal({ onClick, onInstall, title }) {
  const Items = [
    {
      title: "INSTALL TO TARGET UP TO",
      value: "20",
    },
    {
      title: "How it works",
      des: "This rule tags tickets created during and outside business hours. Use this rule to track support performance and monitor support coverage during vs. outside business hours.",
    },
    {
      title: "Customize it",
      des: "You can customize this rule after installing to fit your needs.",
    },
  ];
  return (
    <div className="p-1">
      <div className="md:flex items-center gap-4 lg:gap-5 mb-4 lg:mb-5">
        <h6 className="!font-inter mb-3 md:mb-0 text-[#0A0D14] text-lg lg:text-xl xl:text-2xl font-semibold !leading-[1.5]">
          {title || "Tag tickets by business hour"}
        </h6>
        <p
          className={`text-[#7856FF] bg-[rgba(120,86,255,0.10)] text-xs font-semibold !leading-[1.42] tracking-[-0.084px] rounded-md lg:rounded-lg py-[6px] px-[10px] max-w-max`}
        >
          Auto Tag
        </p>
      </div>
      <div className="md:flex items-center gap-1 lg:gap-2 mb-4 lg:mb-5">
        {Items.map((item, idx) => (
          <div
            className="border border-[#E2E4E9] rounded-lg lg:rounded-xl p-2 lg:p-3 w-full md:min-h-[90px] lg:min-h-[105px] xl:min-h-[88px] mb-3 md:mb-0"
            key={idx}
          >
            <p className="text-[#858585] text-xs font-bold !leading-[1.66] uppercase mb-1 lg:mb-2">
              {item.title}
            </p>
            {item.des && (
              <p className="text-[#858585] text-xs font-medium !leading-[1.4]">
                {item.des.length > 95
                  ? item.des.slice(0, 95) + "..."
                  : item.des}
              </p>
            )}
            {item.value && (
              <p className="text-[#111] text-xs font-medium !leading-[1.5] tracking-[-0.084px]">
                <span className="text-xl lg:text-2xl font-semibold">
                  {item.value}
                </span>{" "}
                tickets/month
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="flex !items-start md:items-center gap-2">
        <Checkbox />
        <div>
          <p className="text-[#0A0D14] text-sm font-semibold !leading-[1.42] tracking-[-0.084px]">
            Create the ticket views "During business hours" and "Outside
            business hours" to see tickets that trigger this rule.
          </p>
          <p className="mt-1 text-[#858585] text-xs font-medium !leading-[1.4]">
            You can always edit ticket view names after installing.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 lg:mt-5">
        <button
          onClick={onClick}
          className="btn !border-[#7856FF] !text-[#7856FF] hover:!text-white"
        >
          Cancel
        </button>
        <button onClick={onInstall} className="btn !bg-[#7856FF] !text-white">
          Install Rule
        </button>
      </div>
    </div>
  );
}
