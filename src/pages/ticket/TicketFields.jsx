import React, { useState } from "react";
import { Link } from "react-router-dom";
import Top from "../../layouts/Top";

import {
  archive,
  common_card,
  deleteIcon,
  restore,
} from "../../utilities/Classes";
import TableFilter from "../../components/TableFilter";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import Checkbox from "../../components/Checkbox";

export default function TicketFields() {
  const [activeTab, setActiveTab] = useState("active");
  const [activeTicket, setActiveTable] = useState([
    {
      name: "AI Intent",
      descriptions: "Topics detected in tickets",
      lastUpdate: "01/20/2025",
    },
    {
      name: "AI Intent 2",
      descriptions: "Topics detected in tickets",
      lastUpdate: "01/20/2025",
    },
    {
      name: "AI Intent 3",
      descriptions: "Topics detected in tickets",
      lastUpdate: "01/20/2025",
    },
    {
      name: "AI Intent 4",
      descriptions: "Topics detected in tickets",
      lastUpdate: "01/20/2025",
    },
    {
      name: "AI Intent 5",
      descriptions: "Topics detected in tickets",
      lastUpdate: "01/20/2025",
    },
    {
      name: "AI Intent 7",
      descriptions: "Topics detected in tickets",
      lastUpdate: "01/20/2025",
    },
  ]);
  const [archiveTicket, setArchiveTicket] = useState([]);
  const [archiveModal, setArchiveModal] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handlePush = () => {
    setArchiveTicket((prev) => [archiveModal, ...prev]);
    setShowModal(false);
    setActiveTable((prev) =>
      prev.filter((item) => item.name != archiveModal.name)
    );
  };

  const handleRemove = (e) => {
    setItemToDelete(e);
    setShowModal2(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      setArchiveTicket((prev) =>
        prev.filter((item) => item.name !== itemToDelete.name)
      );
    }
    setShowModal2(false);
    setItemToDelete(null);
  };

  const ModalList = [
    "Archiving Product will make it unavailable to new tickets. Tickets with existing fields will keep the values associated to them.",
    "This field may be in use in Rules, Macros and Saved Filters. Make sure to edit them, as they will not be able to apply a value on an archived field.",
    "Are you sure you want to archive this field?",
  ];
  return (
    <>
      <Top title="Ticket Fields">
        <Link to="/app/create-fields" className="btn !bg-primary !text-white">
          Create Field
        </Link>
      </Top>
      <div className="p-4 md:p-5 xl:p-6">
        <div className="text-center mb-6 md:mb-7 lg:mb-8 xl:mb-9">
          <h4 className="text-base md:text-lg font-semibold text-[##0A0D14] !leading-[1.5] mb-4 md:mb-5">
            Use Ticket Fields to track and report common ticket categories.
          </h4>
          <div className="flex items-center justify-center gap-4">
            <button className="btn border !border-primary !text-primary !px-4 !py-2.5 hover:!text-white">
              How to set up Ticket Fields
            </button>
            <button className="btn border !border-primary !text-primary !px-4 !py-2.5 hover:!text-white">
              Ticket Fields Playbook
            </button>
          </div>
        </div>
        <div className={`${common_card} !p-6 !rounded-2xl`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div className="flex items-center ">
              <div className="border-b border-solid border-stroke flex items-center overflow-x-auto mb-5 md:mb-6">
                {["active", "archive"].map((item, index) => (
                  <button
                    onClick={() => setActiveTab(item)}
                    key={index}
                    className={`grow capitalize font-inter font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${
                      item === activeTab
                        ? "border-btn text-btn"
                        : "border-transparent text-heading"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <TableFilter
              className="!flex-nowrap !justify-end"
              searchClass="!mr-0"
              lang={true}
            />
          </div>
          {activeTab === "active" && (
            <div className="overflow-x-auto">
              <table className="w-max lg:w-full">
                <thead>
                  <tr className="bg-[#F6F8FA]">
                    {["Name", "Descriptions", "Last Update", "Actions"].map(
                      (item, index) => (
                        <th
                          key={index}
                          className={`text-left p-[8px_12px] text-[#525866] font-medium !leading-[1.42] ${
                            index === 0 && "pl-[52px]"
                          }`}
                        >
                          {item}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {activeTicket.length ? (
                    activeTicket.map((item, index) => (
                      <tr key={index} className="border-b border-[#E2E4E9]">
                        <td className="p-[17px_12px] text-[#0A0D14] font-medium !leading-[1.42]">
                          <button className="flex items-center gap-5">
                            <svg
                              className="cursor-move"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M7.5 3.75C7.83152 3.75 8.14946 3.8817 8.38388 4.11612C8.6183 4.35054 8.75 4.66848 8.75 5C8.75 5.33152 8.6183 5.64946 8.38388 5.88388C8.14946 6.1183 7.83152 6.25 7.5 6.25C7.16848 6.25 6.85054 6.1183 6.61612 5.88388C6.3817 5.64946 6.25 5.33152 6.25 5C6.25 4.66848 6.3817 4.35054 6.61612 4.11612C6.85054 3.8817 7.16848 3.75 7.5 3.75ZM8.75 10C8.75 9.66848 8.6183 9.35054 8.38388 9.11612C8.14946 8.8817 7.83152 8.75 7.5 8.75C7.16848 8.75 6.85054 8.8817 6.61612 9.11612C6.3817 9.35054 6.25 9.66848 6.25 10C6.25 10.3315 6.3817 10.6495 6.61612 10.8839C6.85054 11.1183 7.16848 11.25 7.5 11.25C7.83152 11.25 8.14946 11.1183 8.38388 10.8839C8.6183 10.6495 8.75 10.3315 8.75 10ZM8.75 15C8.75 14.6685 8.6183 14.3505 8.38388 14.1161C8.14946 13.8817 7.83152 13.75 7.5 13.75C7.16848 13.75 6.85054 13.8817 6.61612 14.1161C6.3817 14.3505 6.25 14.6685 6.25 15C6.25 15.3315 6.3817 15.6495 6.61612 15.8839C6.85054 16.1183 7.16848 16.25 7.5 16.25C7.83152 16.25 8.14946 16.1183 8.38388 15.8839C8.6183 15.6495 8.75 15.3315 8.75 15ZM13.75 10C13.75 9.66848 13.6183 9.35054 13.3839 9.11612C13.1495 8.8817 12.8315 8.75 12.5 8.75C12.1685 8.75 11.8505 8.8817 11.6161 9.11612C11.3817 9.35054 11.25 9.66848 11.25 10C11.25 10.3315 11.3817 10.6495 11.6161 10.8839C11.8505 11.1183 12.1685 11.25 12.5 11.25C12.8315 11.25 13.1495 11.1183 13.3839 10.8839C13.6183 10.6495 13.75 10.3315 13.75 10ZM12.5 13.75C12.8315 13.75 13.1495 13.8817 13.3839 14.1161C13.6183 14.3505 13.75 14.6685 13.75 15C13.75 15.3315 13.6183 15.6495 13.3839 15.8839C13.1495 16.1183 12.8315 16.25 12.5 16.25C12.1685 16.25 11.8505 16.1183 11.6161 15.8839C11.3817 15.6495 11.25 15.3315 11.25 15C11.25 14.6685 11.3817 14.3505 11.6161 14.1161C11.8505 13.8817 12.1685 13.75 12.5 13.75ZM13.75 5C13.75 4.66848 13.6183 4.35054 13.3839 4.11612C13.1495 3.8817 12.8315 3.75 12.5 3.75C12.1685 3.75 11.8505 3.8817 11.6161 4.11612C11.3817 4.35054 11.25 4.66848 11.25 5C11.25 5.33152 11.3817 5.64946 11.6161 5.88388C11.8505 6.1183 12.1685 6.25 12.5 6.25C12.8315 6.25 13.1495 6.1183 13.3839 5.88388C13.6183 5.64946 13.75 5.33152 13.75 5Z"
                                fill="currentColor"
                              />
                            </svg>
                            <Link to={`/app/ticket/${index + 1}`}>
                              {item.name}
                            </Link>
                          </button>
                        </td>
                        <td className="p-[17px_12px] text-[#0A0D14] font-medium !leading-[1.42]">
                          {item.descriptions}{" "}
                        </td>
                        <td className="p-[17px_12px] text-[#0A0D14] font-medium !leading-[1.42]">
                          {item.lastUpdate}{" "}
                        </td>
                        <td
                          className="p-[17px_12px] text-[#0A0D14] font-medium !leading-[1.42]"
                          width={100}
                        >
                          <button
                            onClick={() => {
                              setShowModal(true);
                              setArchiveModal(item);
                            }}
                            className="pl-4 hover:text-primary"
                          >
                            {archive}
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center py-4">
                        No active tickets
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "archive" && (
            <div className="overflow-x-auto">
              <table className="w-max lg:w-full">
                <thead>
                  <tr className="bg-[#F6F8FA]">
                    {["Name", "Descriptions", "Last Update", "Actions"].map(
                      (item, index) => (
                        <th
                          key={index}
                          className={`text-left p-[8px_12px] text-[#525866] font-medium !leading-[1.42] ${
                            index === 0 && "pl-[52px]"
                          }`}
                        >
                          {item}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {archiveTicket.length ? (
                    archiveTicket.map((item, index) => (
                      <tr key={index} className="border-b border-[#E2E4E9]">
                        <td className="p-[17px_12px] text-[#0A0D14] font-medium !leading-[1.42]">
                          <button className="flex items-center gap-5">
                            <svg
                              className="cursor-move"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M7.5 3.75C7.83152 3.75 8.14946 3.8817 8.38388 4.11612C8.6183 4.35054 8.75 4.66848 8.75 5C8.75 5.33152 8.6183 5.64946 8.38388 5.88388C8.14946 6.1183 7.83152 6.25 7.5 6.25C7.16848 6.25 6.85054 6.1183 6.61612 5.88388C6.3817 5.64946 6.25 5.33152 6.25 5C6.25 4.66848 6.3817 4.35054 6.61612 4.11612C6.85054 3.8817 7.16848 3.75 7.5 3.75ZM8.75 10C8.75 9.66848 8.6183 9.35054 8.38388 9.11612C8.14946 8.8817 7.83152 8.75 7.5 8.75C7.16848 8.75 6.85054 8.8817 6.61612 9.11612C6.3817 9.35054 6.25 9.66848 6.25 10C6.25 10.3315 6.3817 10.6495 6.61612 10.8839C6.85054 11.1183 7.16848 11.25 7.5 11.25C7.83152 11.25 8.14946 11.1183 8.38388 10.8839C8.6183 10.6495 8.75 10.3315 8.75 10ZM8.75 15C8.75 14.6685 8.6183 14.3505 8.38388 14.1161C8.14946 13.8817 7.83152 13.75 7.5 13.75C7.16848 13.75 6.85054 13.8817 6.61612 14.1161C6.3817 14.3505 6.25 14.6685 6.25 15C6.25 15.3315 6.3817 15.6495 6.61612 15.8839C6.85054 16.1183 7.16848 16.25 7.5 16.25C7.83152 16.25 8.14946 16.1183 8.38388 15.8839C8.6183 15.6495 8.75 15.3315 8.75 15ZM13.75 10C13.75 9.66848 13.6183 9.35054 13.3839 9.11612C13.1495 8.8817 12.8315 8.75 12.5 8.75C12.1685 8.75 11.8505 8.8817 11.6161 9.11612C11.3817 9.35054 11.25 9.66848 11.25 10C11.25 10.3315 11.3817 10.6495 11.6161 10.8839C11.8505 11.1183 12.1685 11.25 12.5 11.25C12.8315 11.25 13.1495 11.1183 13.3839 10.8839C13.6183 10.6495 13.75 10.3315 13.75 10ZM12.5 13.75C12.8315 13.75 13.1495 13.8817 13.3839 14.1161C13.6183 14.3505 13.75 14.6685 13.75 15C13.75 15.3315 13.6183 15.6495 13.3839 15.8839C13.1495 16.1183 12.8315 16.25 12.5 16.25C12.1685 16.25 11.8505 16.1183 11.6161 15.8839C11.3817 15.6495 11.25 15.3315 11.25 15C11.25 14.6685 11.3817 14.3505 11.6161 14.1161C11.8505 13.8817 12.1685 13.75 12.5 13.75ZM13.75 5C13.75 4.66848 13.6183 4.35054 13.3839 4.11612C13.1495 3.8817 12.8315 3.75 12.5 3.75C12.1685 3.75 11.8505 3.8817 11.6161 4.11612C11.3817 4.35054 11.25 4.66848 11.25 5C11.25 5.33152 11.3817 5.64946 11.6161 5.88388C11.8505 6.1183 12.1685 6.25 12.5 6.25C12.8315 6.25 13.1495 6.1183 13.3839 5.88388C13.6183 5.64946 13.75 5.33152 13.75 5Z"
                                fill="currentColor"
                              />
                            </svg>
                            <Link to={`/app/ticket/${index + 1}`}>
                              {item.name}
                            </Link>
                          </button>
                        </td>
                        <td className="p-[17px_12px] text-[#0A0D14] font-medium !leading-[1.42]">
                          {item.descriptions}{" "}
                        </td>
                        <td className="p-[17px_12px] text-[#0A0D14] font-medium !leading-[1.42]">
                          {item.lastUpdate}{" "}
                        </td>
                        <td
                          className="p-[17px_12px] text-[#0A0D14] font-medium !leading-[1.42]"
                          width={100}
                        >
                          <div className="flex items-center gap-2">
                            <button className="pl-4 hover:text-primary">
                              {restore}
                            </button>
                            <button
                              onClick={() => handleRemove(item)}
                              className="hover:text-primary"
                            >
                              {deleteIcon}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center py-4">
                        No archive tickets
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {showModal && (
        <Modal closeIconHide={false}>
          <div>
            <h6 className="text-[#0A0D14] text-lg lg:text-xl xl:text-2xl font-semibold !leading-[1.5] mb-1 lg:mb-2">
              Archive ticket field
            </h6>
            {ModalList.map((item, idx) => (
              <p
                key={idx}
                className="text-[#858585] text-sm font-semibold !leading-[1.5] mb-5 lg:mb-6 xl:mb-[3opx]"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => setShowModal(false)}
              className="btn min-w-max"
            >
              Cancel
            </button>
            <button
              onClick={() => handlePush()}
              className="btn shadow text-white min-w-max"
            >
              Archive
            </button>
          </div>
        </Modal>
      )}
      {showModal2 && (
        <Modal closeIconHide={false} innerClass="max-w-[400px]">
          <h6 className="text-heading text-lg lg:text-xl xl:text-2xl text-center mb-2 lg:mb-4 font-medium !leading-normal">
            Are you sure?
          </h6>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setShowModal2(false)}
              className="btn min-w-max"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              className="btn shadow text-white min-w-max"
            >
              Yes
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
