import React, { useState, useRef } from "react";
import Switch from "../../components/Switch";
import Top from "../../layouts/Top";
import { Link } from "react-router-dom";
import StoreDropdown from "../../components/StoreDropdown";

export default function Slas() {
  const tableHead = [
    "SLAS TRIGGER IN THE ORDER BELOW",
    "Last Updated",
    "Channels",
  ];
  const tableData = [
    {
      status: true,
      name: "Mail SLA",
      update: "Oct 18, 2024",
    },
    {
      status: false,
      name: "Mail SLA",
      update: "Oct 18, 2023",
    },
  ];

  const [items, setItems] = useState(tableData);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [isChannelModalOpen, setIsChannelModalOpen] = useState(false);

  const dragItem = useRef(null);
  const handleDragStart = (index) => {
    dragItem.current = index;
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (dropIndex) => {
    if (dragItem.current !== null && dragItem.current !== dropIndex) {
      const copyItems = [...items];
      [copyItems[dragItem.current], copyItems[dropIndex]] = [
        copyItems[dropIndex],
        copyItems[dragItem.current],
      ];
      setItems(copyItems);
    }
    dragItem.current = null;
  };

  const toggleStatus = (index) => {
    setItems((prev) => {
      const updateData = [...prev];
      updateData[index] = {
        ...updateData[index],
        status: !updateData[index].status,
      };
      return updateData;
    });
  };

  const openChannelSLA = (item) => {
    setSelectedChannel(item);
    setIsChannelModalOpen(true);
  };

  const closeChannelModal = () => {
    setIsChannelModalOpen(false);
    setSelectedChannel(null);
  };

  return (
    <>
      <Top title="SLAs">
        <div className="hidden md:flex items-center gap-4">
          <StoreDropdown
            includeAllStores={true}
            className="mb-0 min-w-[120px]"
          />
          <Link to="/app/new-slas" className="btn min-w-max border-primary">
            Create SLA
          </Link>
          <Link
            to="/app/slas-template"
            className="btn min-w-max shadow text-white"
          >
            Create From Template
          </Link>
        </div>
      </Top>
      <div className="grid grid-cols-1 gap-6 p-4 md:p-5 lg:p-6">
        <div className="bg-primary/10 rounded-2xl md:rounded-[20px] p-4 md:p-6 text-center">
          <div className="mx-auto max-w-[670px]">
            <h4 className="text-heading font-semibold text-xl md:text-2xl lg:text-3xl xl:text-[34px] !leading-[140%] mb-3 md:mb-4 lg:mb-5">
              Service level agreements
            </h4>
            <p className="text-sm font-medium text-heading !leading-normal">
              SLAs (service level agreements) are used to establish clear
              commitments between your support team and your customers by
              setting first response and reply timers to be hit.
            </p>
            <p className="text-sm font-medium text-heading !leading-normal mt-3 md:mt-4 lg:mt-5">
              The first policy that matches a ticket will apply. Edit the order
              below to adjust policy priority.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                {tableHead.map((item, index) => (
                  <th
                    key={index}
                    className={`${index != 0 ? "!text-center" : ""
                      } !text-[#525866]`}
                  >
                    {index === 0 ? (
                      <div className="flex items-center gap-2">
                        <div className="w-10 pl-2">
                          <svg
                            width="12"
                            height="16"
                            viewBox="0 0 12 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.2083 10.3571L7.17844 14.3869C6.52757 15.0377 5.4723 15.0377 4.82142 14.3869L0.791586 10.3571M5.99992 14.1071L5.99992 1.19039"
                              stroke="#858585"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        {item}
                      </div>
                    ) : (
                      item
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((item, index) => (
                  <tr
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={() => handleDrop(index)}
                    key={index}
                  >
                    <td className="!py-4">
                      <div className="flex items-center gap-4 lg:gap-5 xl:gap-7">
                        <button className="flex items-center gap-3 lg:gap-4 cursor-move">
                          <span>
                            <svg
                              width="8"
                              height="14"
                              viewBox="0 0 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.75 6.91666V6.99999C2.75 7.57529 2.28363 8.04166 1.70833 8.04166C1.13304 8.04166 0.666667 7.57529 0.666667 6.99999V6.91666C0.666667 6.34136 1.13304 5.87499 1.70833 5.87499C2.28363 5.87499 2.75 6.34136 2.75 6.91666ZM7.33333 6.91666V6.99999C7.33333 7.57529 6.86696 8.04166 6.29167 8.04166C5.71637 8.04166 5.25 7.57529 5.25 6.99999V6.91666C5.25 6.34136 5.71637 5.87499 6.29167 5.87499C6.86696 5.87499 7.33333 6.34136 7.33333 6.91666ZM6.29167 13.25C5.71637 13.25 5.25 12.7836 5.25 12.2083C5.25 11.633 5.71637 11.1667 6.29167 11.1667C6.86696 11.1667 7.33333 11.633 7.33333 12.2083C7.33333 12.7836 6.86696 13.25 6.29167 13.25ZM1.70833 13.25C1.13304 13.25 0.666667 12.7836 0.666667 12.2083C0.666667 11.633 1.13304 11.1667 1.70833 11.1667C2.28363 11.1667 2.75 11.633 2.75 12.2083C2.75 12.7836 2.28363 13.25 1.70833 13.25ZM6.29167 2.83333C5.71637 2.83333 5.25 2.36696 5.25 1.79166C5.25 1.21637 5.71637 0.749995 6.29167 0.749995C6.86696 0.749995 7.33333 1.21637 7.33333 1.79166C7.33333 2.36696 6.86696 2.83333 6.29167 2.83333ZM1.70833 2.83333C1.13304 2.83333 0.666667 2.36696 0.666667 1.79166C0.666667 1.21637 1.13304 0.749995 1.70833 0.749995C2.28363 0.749995 2.75 1.21637 2.75 1.79166C2.75 2.36696 2.28363 2.83333 1.70833 2.83333Z"
                                fill="#858585"
                                stroke="#858585"
                                strokeWidth="0.833333"
                              />
                            </svg>
                          </span>
                          <Switch
                            id={index}
                            onChange={() => toggleStatus(index)}
                            checked={item.status}
                          />
                        </button>
                        <span className="block ml-4 text-heading font-medium">
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className="text-center">{item.update}</td>
                    {/* <td className="!py-4">
                      <button
                        onClick={() => openChannelSLA(item)}
                        className="flex items-center justify-center text-gray hover:text-primary"
                      > */}
                    <td className="!py-4 text-center">
                      {/* <Link
                        to=""
                        className="flex items-center justify-center text-gray hover:text-primary"
                      > */}
                      <button
                        onClick={() => openChannelSLA(item)}
                        className="inline-flex items-center justify-center text-gray hover:text-primary"
                      >
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.54183 3.33398H15.7918C16.4836 3.33394 17.1492 3.59861 17.652 4.07371C18.1549 4.54881 18.4568 5.19831 18.496 5.88898L18.5002 6.04232V13.959C18.5002 14.6508 18.2355 15.3163 17.7604 15.8192C17.2853 16.322 16.6358 16.624 15.9452 16.6632L15.7918 16.6673H4.54183C3.85005 16.6674 3.18447 16.4027 2.68164 15.9276C2.1788 15.4525 1.87683 14.803 1.83766 14.1123L1.8335 13.959V6.04232C1.83345 5.35054 2.09812 4.68496 2.57322 4.18213C3.04832 3.67929 3.69782 3.37732 4.3885 3.33815L4.54183 3.33398ZM17.2502 7.81148L10.4585 11.3865C10.3818 11.427 10.2975 11.4511 10.211 11.4573C10.1245 11.4634 10.0377 11.4515 9.95599 11.4223L9.87599 11.3873L3.0835 7.81232V13.959C3.08351 14.325 3.22114 14.6776 3.46906 14.9468C3.71699 15.216 4.05708 15.3822 4.42183 15.4123L4.54183 15.4173H15.7918C16.158 15.4173 16.5107 15.2795 16.7799 15.0314C17.0492 14.7833 17.2152 14.443 17.2452 14.0781L17.2502 13.959V7.81148ZM15.7918 4.58398H4.54183C4.17584 4.584 3.82323 4.72163 3.554 4.96955C3.28478 5.21747 3.11861 5.55757 3.0885 5.92232L3.0835 6.04232V6.39982L10.1668 10.1282L17.2502 6.39898V6.04232C17.2501 5.67619 17.1124 5.32348 16.8643 5.05423C16.6162 4.78498 16.2759 4.6189 15.911 4.58898L15.7918 4.58398Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      {/* </Link> */}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="py-4 px-3 text-center text-sm text-[#858585]"
                  >
                    No installed SLAs yet. Add one by clicking on a SLA
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>


        {isChannelModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-xl">
              <h2 className="text-xl font-semibold mb-4">Channel SLA Details</h2>

              <p className="mb-4 text-gray-600">
                Showing SLA details for:
                <span className="font-medium text-primary ml-1">
                  {selectedChannel?.name}
                </span>
              </p>

              <button
                onClick={closeChannelModal}
                className="btn shadow !text-white mt-4"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}