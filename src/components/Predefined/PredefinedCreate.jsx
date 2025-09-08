import React from "react";
import Top from "../../layouts/Top";
import { Link, Links } from "react-router-dom";
import { arrow_left, plus } from "../../utilities/Classes";
import TableFilter from "../TableFilter";

export default function PredefinedCreate() {
  const CardItems = [
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
  ];
  // handle back button
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div>
      <Top title={" "} className="!justify-start">
        <Link
          to="/app/predefined"
          // onClick={handleBack}
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
        <div className="mb-5 lg:mb-6 flex items-center justify-between gap-2 flex-wrap">
          <h6 className="text-lg lg:text-xl xl:text-2xl text-[#0A0D14] font-semibold !leading-[1.5]">
            Predefined Response Template
          </h6>
          <div className="flex items-center gap-2 flex-wrap">
            <TableFilter className="!mb-0" searchClass="min-w-[220px]" />
            <Link
              to="/app/predefined-update"
              className="btn gap-2 flex items-center px-4 shadow-[0px_1px_2px_0px_rgba(90,54, 91,0.48), 0px_0px_0px_1px_#6E3FF3] border-primary text-primary"
            >
              {plus} Custom template
            </Link>
          </div>
        </div>
        <div>
          <p className="text-[#858585] text-xs !leading-[1.5] text-center mb-2 lg:mb-3">
            Choose a template and customize it to fit your needs{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
            {CardItems.map((item, idx) => (
              <div
                className="border border-[#E2E4E9] rounded-lg lg:rounded-xl  p-3 lg:p-4 cursor-pointer"
                key={idx}
              >
                <p className="text-[#0A0D14] text-sm lg:text-base font-semibold !leading-[1.5] mb-3 lg:mb-4">
                  {item.title}
                </p>
                <p className="text-xs text-[#858585] font-normal !leading-[1.4] mb-2">
                  Action tag
                </p>
                <div className="flex items-center gap-1 flex-wrap lg:gap-2 mb-3 lg:mb-4">
                  {item.tags.map((itm, id) => (
                    <p
                      key={id}
                      className={`text-[#0A0D14] bg-[#F6F8FA] text-xs font-semibold !leading-[1.5] rounded-md lg:rounded-lg uppercase py-1 px-[10px]`}
                    >
                      {itm}
                    </p>
                  ))}
                  {item.value && (
                    <p className="text-[#0A0D14] text-xs font-semibold !leading-[1.5] uppercase">
                      +{item.value}
                    </p>
                  )}
                </div>
                <Link
                  to="/app/predefined-install"
                  className="btn  !shadow-[0px_1px_2px_0px_rgba(90,54,191,0.48),_0px_0px_0px_1px_#6E3FF3] !border-[#7856FF] !text-[#7856FF] !text-xs !font-semibold !leading-[1.66] hover:!text-white !w-full"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
