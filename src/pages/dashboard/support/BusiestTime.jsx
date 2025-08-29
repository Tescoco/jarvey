import React from "react";
import Top from "../../../layouts/Top";
import MainInner from "../../../components/MainInner";
import Dropdown from "../../../components/Dropdown";
import { c_24 } from "../../../utilities/Classes";
import TableFilter from "../../../components/TableFilter";

export default function Overview() {
  const scheduleData = [
    { day: "Wednesday", hour: "16:00", count: 1 },
    { day: "Saturday", hour: "07:00", count: 100 },
    { day: "Thursday", hour: "15:00", count: 11 },
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const hours = [
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];
  const getColor = (count) => {
    if (!count) return "bg-white";
    if (count > 0) return "bg-primary";
    return "bg-red-50";
  };

  return (
    <>
      <Top>
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
        </div>
      </Top>
      <MainInner className="flex flex-col gap-4 md:gap-5 lg:gap-6">
        <div className={`${c_24} !pb-0 overflow-hidden`}>
          <div className="flex items-center flex-wrap gap-2 mb-4 md:mb-6">
            <h4>Busiest Times of the Week</h4>
            <TableFilter
              searchClass="max-w-[160px]"
              className="!mb-0 ml-auto"
            />
          </div>
          <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm text-heading font-medium !leading-[140%] mb-4 md:mb-6">
            <p>Least Busy</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="size-5 bg-[#7856FF] opacity-[20%]"></div>
                <div className="size-5 bg-[#7856FF] opacity-[40%]"></div>
                <div className="size-5 bg-[#7856FF]"></div>
              </div>
              <p>Busiest</p>
            </div>
            <div className="flex items-center md:gap-2">
              <svg
                className="flex-none"
                width="31"
                height="32"
                viewBox="0 0 31 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="7" width="20" height="20" fill="#FE4333" />
                <line
                  x1="11.433"
                  y1="2.25"
                  x2="1.43301"
                  y2="19.5705"
                  stroke="white"
                />
                <line
                  x1="10.433"
                  y1="0.25"
                  x2="0.433012"
                  y2="17.5705"
                  stroke="white"
                />
                <line
                  x1="12.433"
                  y1="5.25"
                  x2="2.43301"
                  y2="22.5705"
                  stroke="white"
                />
                <line
                  x1="14.433"
                  y1="6.25"
                  x2="4.43301"
                  y2="23.5705"
                  stroke="white"
                />
                <path d="M17.5 5.5L4.5 27" stroke="white" />
                <path d="M20.5 5L6.5 28.5" stroke="white" />
                <path d="M22.5 6L9.5 28" stroke="white" />
                <path d="M25.0017 5.50047L12.4342 27.5708" stroke="white" />
                <path d="M25.5 9.5L14.4342 28.5709" stroke="white" />
                <line
                  x1="26.433"
                  y1="12.25"
                  x2="16.433"
                  y2="29.5705"
                  stroke="white"
                />
                <line
                  x1="28.433"
                  y1="13.25"
                  x2="18.433"
                  y2="30.5705"
                  stroke="white"
                />
                <line
                  x1="30.433"
                  y1="14.25"
                  x2="20.433"
                  y2="31.5705"
                  stroke="white"
                />
              </svg>
              <p>Business Hours</p>
            </div>
          </div>
          <div className="overflow-x-auto -mx-6">
            <table className="table">
              <thead>
                <tr>
                  <th className="!px-6">Hour</th>
                  {days.map((day) => (
                    <th key={day} className="!text-center !font-light">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hours.map((hour) => (
                  <tr key={hour}>
                    <td className="!text-heading !px-6 !font-medium h-[40px]">
                      {hour}
                    </td>
                    {days.map((day) => {
                      const cell = scheduleData.find(
                        (entry) => entry.day === day && entry.hour === hour
                      );
                      return (
                        <td
                          key={day + hour}
                          data-kay={day + hour}
                          style={{
                            borderLeft: cell?.count && "4px dashed #FE4234",
                          }}
                          className={`h-[40px] !p-0 border-l-2 border-dashed ${
                            cell?.count ? "border-[#FE4234]" : "border-stroke"
                          }`}
                        >
                          <div
                            className={`text-xl ${getColor(
                              cell?.count
                            )} h-full w-full flex items-center justify-center ${
                              cell?.count ? "text-white" : "text-heading"
                            }`}
                          >
                            {cell?.count || "-"}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MainInner>
    </>
  );
}
