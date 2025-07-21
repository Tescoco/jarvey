import React from "react";
import Top from "../layouts/Top";
import Predefineds from "../components/Predefined/Predefineds";
import Dropdown from "../components/Dropdown";
import { plus } from "../utilities/Classes";
import { Link } from "react-router-dom";

export default function Predefined() {
  return (
    <>
      <Top title="Predefined Responses ">
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
            to="/app/create-predefined"
            className="btn gap-2 shadow text-white"
          >
            {plus}
            Create Predefined Response
          </Link>
        </div>
      </Top>
      <Predefineds />
    </>
  );
}
