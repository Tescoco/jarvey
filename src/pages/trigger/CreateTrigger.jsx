import React from "react";
import Top from "../../layouts/Top";
import { Link } from "react-router-dom";
import TriggersTemplate from "./TriggerTemplate";
import { arrow_left } from "../../utilities/Classes";
export default function CreateTrigger() {
  return (
    <>
      <Top title={" "} className="">
        <Link
          to="/app/triggers"
          className="flex items-center gap-2.5 group mr-auto"
        >
          <span className="size-6 md:size-8 rounded-full border border-solid border-stroke text-[#858585] transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white flex items-center justify-center">
            {arrow_left}
          </span>
          <span className="text-heading text-sm md:text-base lg:text-lg font-medium">
            Create Triggers
          </span>
        </Link>
      </Top>
      <TriggersTemplate />
    </>
  );
}
