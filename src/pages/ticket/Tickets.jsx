import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Top from "../../layouts/Top";
import { common_card, deleteIcon, three_dots } from "../../utilities/Classes";
import TableFilter from "../../components/TableFilter";
import Checkbox from "../../components/Checkbox";
import Modal from "../../components/Modal";

import user from "../../assets/img/user.png";

export default function Tickets() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      user: {
        img: "https://images.unsplash.com/photo-1560863418-1413dc37da6e?q=80&w=2185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      tags: ["order Status", "Refund"],
      assignee: {
        img: "https://plus.unsplash.com/premium_photo-1672860872885-d26afe731608?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      created: {
        time: "05/02/2025",
        name: "AI Agent",
      },
      status: "Closed",
    },
    {
      id: 2,
      user: {
        img: "",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      tags: ["order Status", "Refund"],
      assignee: {
        img: "",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      created: {
        time: "04/29/2025",
        name: "Julien",
      },
      status: "Open",
    },
    {
      id: 3,
      user: {
        img: "https://images.unsplash.com/photo-1560863418-1413dc37da6e?q=80&w=2185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      issue:
        "Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets",
      assignee: {
        img: "https://plus.unsplash.com/premium_photo-1672860872885-d26afe731608?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      created: {
        time: "05/02/2025",
        name: "AI Agent",
      },
      status: "Open",
    },
    {
      id: 4,
      user: {
        img: "",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      tags: ["order Status", "Refund"],
      assignee: {
        img: "",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      created: {
        time: "04/29/2025",
        name: "Julien",
      },
      status: "Open",
    },
    {
      id: 5,
      user: {
        img: "https://images.unsplash.com/photo-1560863418-1413dc37da6e?q=80&w=2185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      issue:
        "Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets",
      assignee: {
        img: "https://plus.unsplash.com/premium_photo-1672860872885-d26afe731608?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      created: {
        time: "05/02/2025",
        name: "AI Agent",
      },
      status: "Closed",
    },
    {
      id: 6,
      user: {
        img: "",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      tags: ["order Status", "Refund"],
      assignee: {
        img: "",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      created: {
        time: "04/29/2025",
        name: "Julien",
      },
      status: "Closed",
    },
    {
      id: 7,
      user: {
        img: "https://images.unsplash.com/photo-1560863418-1413dc37da6e?q=80&w=2185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      issue:
        "Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets",
      assignee: {
        img: "https://plus.unsplash.com/premium_photo-1672860872885-d26afe731608?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      created: {
        time: "05/02/2025",
        name: "AI Agent",
      },
      status: "Closed",
    },
    {
      id: 8,
      user: {
        img: "",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      tags: ["order Status", "Refund"],
      assignee: {
        img: "",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      created: {
        time: "04/29/2025",
        name: "Julien",
      },
      status: "Closed",
    },
    {
      id: 9,
      user: {
        img: "https://images.unsplash.com/photo-1560863418-1413dc37da6e?q=80&w=2185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      issue:
        "Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets Topics detected in tickets",
      assignee: {
        img: "https://plus.unsplash.com/premium_photo-1672860872885-d26afe731608?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      created: {
        time: "05/02/2025",
        name: "AI Agent",
      },
      status: "Closed",
    },
    {
      id: 10,
      user: {
        img: "",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      tags: ["order Status", "Refund"],
      assignee: {
        img: "",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      created: {
        time: "04/29/2025",
        name: "Julien",
      },
      status: "Closed",
    },
    {
      id: 11,
      user: {
        img: "https://images.unsplash.com/photo-1560863418-1413dc37da6e?q=80&w=2185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      tags: ["order Status", "Refund"],
      assignee: {
        img: "https://plus.unsplash.com/premium_photo-1672860872885-d26afe731608?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jhon Doe",
        email: "examples@gmail.com",
      },
      created: {
        time: "04/28/2025",
        name: "AI Agent",
      },
      status: "Open",
    },
  ]);

  const [selected, setSelected] = useState([]);
  const handleSelectAll = () => {
    if (selected.length === tickets.length) {
      setSelected([]);
    } else {
      setSelected(tickets.map((item) => item.id));
    }
  };
  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const isAllChecked = selected.length === tickets.length;
  const [deleteModal, setDeleteModal] = useState(false);

  const formatTimeAgo = (createdDate, currentDate = new Date()) => {
    const created = new Date(createdDate);
    const current = new Date(currentDate);
    const oneDayMs = 1000 * 60 * 60 * 24;
    const startOfCreated = new Date(
      created.getFullYear(),
      created.getMonth(),
      created.getDate()
    );
    const startOfCurrent = new Date(
      current.getFullYear(),
      current.getMonth(),
      current.getDate()
    );
    const totalDays = Math.floor((startOfCurrent - startOfCreated) / oneDayMs);
    if (totalDays === 0) {
      return "Today";
    } else if (totalDays === 1) {
      return "Yesterday";
    } else if (totalDays < 7) {
      return `${totalDays} day${totalDays !== 1 ? "s" : ""} ago`;
    } else if (totalDays < 30) {
      const weeks = Math.floor(totalDays / 7);
      return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    } else {
      const yearDiff = current.getFullYear() - created.getFullYear();
      const monthDiff = current.getMonth() - created.getMonth();
      const dayDiff = current.getDate() - created.getDate();
      let totalMonths = yearDiff * 12 + monthDiff;
      if (dayDiff < 0) totalMonths--;
      if (totalMonths >= 12) {
        const years = Math.floor(totalMonths / 12);
        return `${years} year${years !== 1 ? "s" : ""} ago`;
      } else {
        return `${totalMonths} month${totalMonths !== 1 ? "s" : ""} ago`;
      }
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Top title="Ticket List">
        <Link to="/app/new-ticket" className="btn !bg-primary !text-white">
          Create Field
        </Link>
      </Top>
      <div className="p-4 md:p-5 lg:py-7 lg:px-6">
        <div className={`${common_card} !p-4 md:p-6`}>
          <TableFilter className="mb-4 md:mb-5" lang={true}>
            {selected.length ? (
              <button
                onClick={() => setDeleteModal(true)}
                className="bg-[#EF4444] border-0 text-white btn !h-[38px] !rounded-md min-w-max !px-3 gap-1 text-sm"
              >
                {deleteIcon}
              </button>
            ) : null}
          </TableFilter>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th width={42}>
                    <Checkbox
                      checked={isAllChecked}
                      onChange={handleSelectAll}
                      id="selectAll"
                    />
                  </th>
                  {[
                    "Name",
                    "Tags",
                    "Assignee",
                    "Last Message",
                    "Status",
                    "Actions",
                  ].map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tickets.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => navigate(`/app/ticket/${index + 1}`)}
                    className="cursor-pointer"
                  >
                    <td className="!py-2">
                      <Checkbox
                        checked={selected.includes(index + 1)}
                        onChange={() => handleSelect(index + 1)}
                        id={`select_${index + 1}`}
                      />
                    </td>
                    <td className="!py-2 2xl:w-[230px]">
                      <div className="flex items-center gap-2">
                        <div className="size-8 bg-slate-50 rounded-full overflow-hidden">
                          <img src={item.user.img || user} alt="" />
                        </div>
                        <div className="flex flex-col gap-0">
                          <strong className="text-heading font-inter font-medium text-sm">
                            {item.user.name}
                          </strong>
                          <span className="text-xs font-medium text-gray">
                            {item.user.email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="!py-2">
                      <div className="flex items-center gap-2 lg:gap-3">
                        {item.tags?.map((itm, idx) => (
                          <p
                            key={idx}
                            className="text-[#0A0D14] flex items-center gap-1 text-xs font-semibold !leading-[1.5] uppercase bg-[#F6F8FA] rounded-md lg:rounded-lg py-1 px-[10px] max-w-max"
                          >
                            <svg
                              width="7"
                              height="7"
                              viewBox="0 0 7 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="3.5"
                                cy="3.5"
                                r="3.5"
                                fill="#858585"
                              />
                            </svg>
                            {itm}
                          </p>
                        ))}
                        {/* {item.value && <p className='text-[#0A0D14] text-xs font-semibold !leading-[1.5] uppercase'>+{item.value}</p>} */}
                      </div>
                    </td>
                    <td className="!py-2">
                      <div className="flex items-center gap-2">
                        <div className="size-8 bg-slate-50 rounded-full overflow-hidden">
                          <img src={item.assignee.img || user} alt="" />
                        </div>
                        <div className="flex flex-col gap-0">
                          <strong className="text-heading font-inter font-medium text-sm">
                            {item.assignee.name}
                          </strong>
                          <span className="text-xs font-medium text-gray">
                            {item.assignee.email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="!py-2">
                      <div className="flex flex-col gap-0">
                        <span className="text-heading font-inter font-medium text-sm">
                          <span className="font-semibold">
                            {item.created.name}
                          </span>{" "}
                          - {formatTimeAgo(item.created.time)}
                        </span>
                      </div>
                    </td>
                    <td className="!py-2" width={110}>
                      <span className="font-medium font-inter text-heading text-sm">
                        {item.status}
                      </span>
                    </td>
                    <td className="!py-2 text-center" width={80}>
                      <button>{three_dots}</button>
                    </td>
                  </tr>
                ))}
                {tickets.length === 0 && (
                  <tr>
                    <td className="text-center" colSpan={6}>
                      No tickets found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {deleteModal && (
        <Modal innerClass="max-w-[300px]">
          <p className="text-xl mb-4 font-bold text-center text-heading">
            Are you sure?
          </p>
          <div className="flex item-center gap-3 justify-center">
            <button
              onClick={() => setDeleteModal(false)}
              className="text-center btn min-w-24 bg-red-500 border-red-500 text-white"
            >
              No
            </button>
            <button
              onClick={() => {
                setTickets([]);
                setDeleteModal(false);
              }}
              className="text-center btn min-w-24 shadow text-white"
            >
              Yes
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
