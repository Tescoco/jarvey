import React from "react";
import { Link } from "react-router-dom";
import Top from "../../../layouts/Top";
import MainInner from "../../../components/MainInner";
import { c_24, langList } from "../../../utilities/Classes";
import Dropdown from "../../../components/Dropdown";
import TableFilter from "../../../components/TableFilter";

export default function Macros() {
  const breakdown = [
    {
      id: "other/no_reply",
      total: 5,
      percentage: 50,
      delta: "100%",
    },
    {
      id: "product/question",
      total: 1,
      percentage: 5,
      delta: "100%",
    },
    {
      id: "refund/request",
      total: 3,
      percentage: 10,
      delta: "100%",
    },
    {
      id: "other/no_reply",
      total: 1,
      percentage: 5,
      delta: "100%",
    },
  ];

  return (
    <div>
      <Top
        title={
          <>
            <Link
              to="/app/dashboard/tickets"
              className="text-primary underline hover:no-underline"
            >
              Tickets Insights
            </Link>
            {" > Predefined response"}
          </>
        }
      >
        <div className="flex items-center gap-4">
          <Dropdown
            className="mb-0 !hidden md:!flex"
            dropDownClass="!left-auto right-0 w-max"
            btnClass="text-primary"
            placeholder="Data Range"
            items={[
              { name: "Data Range - 1" },
              { name: "Data Range - 2" },
              { name: "Data Range - 3" },
            ]}
          />
          <Dropdown
            className="mb-0"
            dropDownClass="!left-auto right-0 w-max"
            btnClass="!bg-primary text-white"
            placeholder="Language"
            search
            items={langList}
          />
        </div>
      </Top>
      <MainInner>
        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Breakdown of Intent Occurrence</h4>
            <TableFilter
              className="!mb-0"
              searchClass="max-w-full md:max-w-[160px] w-full md:w-max"
              csv
            />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {["Macro", "Total", "Percentage", "Delta"].map(
                    (item, index) => (
                      <th
                        key={index}
                        className={`${
                          item === "Total" || item === "Percentage"
                            ? "!text-center"
                            : ""
                        }`}
                      >
                        {item}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {breakdown.map((item, index) => (
                  <tr key={index}>
                    <td className="!font-medium !text-heading">{item.id}</td>
                    <td className="!font-medium text-center !text-heading">
                      {item.total}
                    </td>
                    <td className="text-center">{item.percentage}%</td>
                    <td className="!font-medium">
                      <div className="flex items-center gap-1">
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.29102 7.70841L9.32082 3.67859C9.9717 3.02771 11.027 3.02771 11.6778 3.67858L15.7077 7.70841M10.4993 3.95841V16.8751"
                            stroke="#111111"
                            strokeOpacity="0.5"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item.delta}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MainInner>
    </div>
  );
}
