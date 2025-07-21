import React from "react";
import { Link } from "react-router-dom";
import Trigger from "../../components/Triggers/Trigger";
import Top from "../../layouts/Top";
import Dropdown from "../../components/Dropdown";
import { plus } from "../../utilities/Classes";

export default function Triggers() {
  return (
    <div>
      <Top>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <Dropdown
            className="mb-0"
            btnClass="!h-10 !text-primary"
            dropDownClass="w-max !left-auto right-0"
            placeholder={"All Stores"}
            items={[
              { name: "All Stores" },
              { name: "Branch Stores" },
              { name: "Sub Stores" },
            ]}
          />
          <Link
            to="/app/create-trigger"
            className="btn gap-2 shadow text-white"
          >
            {plus}
            Create Trigger
          </Link>
        </div>
      </Top>
      <Trigger />
    </div>
  );
}
