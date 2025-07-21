import React from "react";
import TextEditor from "../../components/OrderMangemanget/TextEditor";
import TableFilter from "../../components/TableFilter";
import { Link, useNavigate } from "react-router-dom";
import { plus } from "../../utilities/Classes";

export default function Report() {
  const navigate = useNavigate();
  const table = [
    {
      status: "Refunded",
      massage: "If order has being fully or partially refunded.",
      path: "/app/order/edit-scenario",
    },
    {
      status: "Cancelled",
      massage: "If order has been cancelled.",
      path: "/app/order/edit-scenario",
    },
    {
      status: "Processing",
      massage: "If order is unfulfilled, pending fulfilment or pending",
      path: "/app/order/edit-scenario",
    },
    {
      status: "Failed",
      massage: "If order is fulfilment or delivery failed.  ",
      path: "/app/order/edit-scenario",
    },
    {
      status: "Shipped",
      massage: "If order has shipped or delivery is ongoing.  ",
      path: "/app/order/edit-scenario",
    },
  ];
  return (
    <div>
      <div className="mb-4">
        <p className="mb-2 !leading-normal text-xs font-medium">
          Customize scenarios and the corresponding options customers can select
          when reporting order issues.
        </p>
        <a
          href="#"
          className="text-primary !underline !leading-normal text-xs font-medium"
        >
          How to Customize The Report Order Issue Flow
        </a>
      </div>
      <TableFilter hideSortDrop />
      <div className="flex items-center flex-wrap gap-3 mb-4 md:mb-5 justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.209 10.357L7.17918 14.3868C6.5283 15.0377 5.47303 15.0377 4.82215 14.3868L0.792319 10.357M6.00065 14.107L6.00065 1.19036"
              stroke="#858585"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs font-semibold !leading-[1.3]">
            SCENARIOS APPLY IN THE ORDER BELOW
          </span>
        </div>
        <button className="btn gap-2 !px-3">{plus} Create Scenario</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-max w-full">
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => (
              <tr
                onClick={() => navigate(item.path)}
                key={index}
                className="border-b cursor-pointer border-stroke"
              >
                <td className="px-3 py-4">
                  <button className="cursor-move flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.70801 14.165C8.2833 14.165 8.75 14.6317 8.75 15.207C8.75 15.7823 8.2833 16.249 7.70801 16.249C7.13286 16.2488 6.66699 15.7822 6.66699 15.207C6.66699 14.6318 7.13286 14.1652 7.70801 14.165ZM12.292 14.165C12.8671 14.1652 13.333 14.6318 13.333 15.207C13.333 15.7822 12.8671 16.2488 12.292 16.249C11.7167 16.249 11.25 15.7823 11.25 15.207C11.25 14.6317 11.7167 14.165 12.292 14.165ZM7.70801 8.87402C8.2832 8.87402 8.74982 9.33989 8.75 9.91504V9.99902C8.74982 10.5742 8.2832 11.04 7.70801 11.04C7.13297 11.0399 6.66717 10.5741 6.66699 9.99902V9.91504C6.66717 9.34 7.13297 8.8742 7.70801 8.87402ZM12.292 8.87402C12.867 8.8742 13.3328 9.34 13.333 9.91504V9.99902C13.3328 10.5741 12.867 11.0399 12.292 11.04C11.7168 11.04 11.2502 10.5742 11.25 9.99902V9.91504C11.2502 9.33989 11.7168 8.87402 12.292 8.87402ZM7.70801 3.74902C8.2832 3.74902 8.74982 4.21489 8.75 4.79004C8.75 5.36534 8.2833 5.83203 7.70801 5.83203C7.13286 5.83186 6.66699 5.36523 6.66699 4.79004C6.66717 4.215 7.13297 3.7492 7.70801 3.74902ZM12.292 3.74902C12.867 3.7492 13.3328 4.215 13.333 4.79004C13.333 5.36523 12.8671 5.83186 12.292 5.83203C11.7167 5.83203 11.25 5.36534 11.25 4.79004C11.2502 4.21489 11.7168 3.74902 12.292 3.74902Z"
                        fill="#858585"
                        stroke="#858585"
                        strokeWidth="0.833333"
                      />
                    </svg>
                  </button>
                </td>
                <td className="px-3 py-4 text-heading font-semibold text-sm">
                  {item.status}{" "}
                </td>
                <td className="px-3 py-4 text-heading text-sm font-medium">
                  {item.massage}{" "}
                </td>
                <td className="px-3 py-4" width={10}>
                  <button className="block text-heading hover:text-primary">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.04541 12.6955C6.98902 12.7551 6.94494 12.8253 6.91568 12.902C6.88642 12.9787 6.87256 13.0605 6.87488 13.1425C6.8772 13.2246 6.89566 13.3054 6.92921 13.3803C6.96276 13.4552 7.01074 13.5228 7.07041 13.5792C7.13008 13.6356 7.20027 13.6797 7.27698 13.7089C7.35368 13.7382 7.4354 13.7521 7.51746 13.7497C7.59953 13.7474 7.68033 13.729 7.75526 13.6954C7.83019 13.6619 7.89777 13.6139 7.95416 13.5542L13.2667 7.92922C13.3764 7.81318 13.4375 7.65954 13.4375 7.49984C13.4375 7.34015 13.3764 7.18651 13.2667 7.07047L7.95416 1.44484C7.89815 1.38387 7.83058 1.33463 7.75537 1.29999C7.68017 1.26535 7.59883 1.246 7.51608 1.24306C7.43334 1.24012 7.35083 1.25365 7.27336 1.28286C7.19588 1.31208 7.12499 1.3564 7.06479 1.41324C7.00459 1.47009 6.95628 1.53833 6.92268 1.61401C6.88908 1.68968 6.87084 1.77127 6.86904 1.85405C6.86724 1.93683 6.8819 2.01915 6.91218 2.09621C6.94246 2.17327 6.98774 2.24355 7.04541 2.30297L11.9529 7.49984L7.04541 12.6955Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
