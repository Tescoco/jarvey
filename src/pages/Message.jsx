import React, { useEffect, useState, useRef } from "react";

import Top from "../layouts/Top";
import Input from "../components/Input";
import { c_16, search } from "../utilities/Classes";

import sop from "../assets/img/manager/table-img-9.png";
import sop2 from "../assets/img/manager/table-img-12.png";
import sop3 from "../assets/img/manager/table-img-7.png";
import sop4 from "../assets/img/manager/table-img-13.png";

export default function Message() {
  const [messagesList, setMessagesList] = useState([
    {
      name: "Eleanor Pena",
      img: sop,
      conversions: [
        {
          data: "23 Mar 2025",
          messages: [
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "to",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
          ],
        },
      ],
    },
    {
      name: "Marvin McKinney",
      img: sop2,
      conversions: [
        {
          data: "23 Mar 2025",
          messages: [
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "to",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "to",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
          ],
        },
        {
          data: "23 Mar 2025",
          messages: [
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "to",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "to",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
          ],
        },
      ],
    },
    {
      name: "Guy Hawkins",
      img: sop3,
    },
    {
      name: "Jenny Wilson",
      img: sop4,
    },
    {
      name: "Esther Howard",
      img: sop,
    },
    {
      name: "Cody Fisher",
      img: sop3,
    },
    {
      name: "Darrell Steward",
      img: sop3,
    },
    {
      name: "Jerome Bell",
      img: sop3,
    },
    {
      name: "Robert Fox",
      img: sop,
    },
    {
      name: "Brooklyn Simmons",
      img: sop4,
    },
    {
      name: "Ronald Richards",
      img: sop4,
    },
    {
      name: "Eleanor Pena",
      img: sop,
      conversions: [
        {
          data: "23 Mar 2025",
          messages: [
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "to",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
          ],
        },
      ],
    },
    {
      name: "Marvin McKinney",
      img: sop2,
      conversions: [
        {
          data: "23 Mar 2025",
          messages: [
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "to",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "to",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
          ],
        },
        {
          data: "23 Mar 2025",
          messages: [
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "to",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "form",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
            {
              status: "to",
              text: "Hoi Ik heb besloten dat ik de cadeaubon niet meer wil Kan je deze weghalen",
            },
          ],
        },
      ],
    },
    {
      name: "Guy Hawkins",
      img: sop3,
    },
    {
      name: "Jenny Wilson",
      img: sop4,
    },
    {
      name: "Esther Howard",
      img: sop,
    },
    {
      name: "Cody Fisher",
      img: sop3,
    },
    {
      name: "Darrell Steward",
      img: sop3,
    },
    {
      name: "Jerome Bell",
      img: sop3,
    },
    {
      name: "Robert Fox",
      img: sop,
    },
    {
      name: "Brooklyn Simmons",
      img: sop4,
    },
    {
      name: "Ronald Richards",
      img: sop4,
    },
  ]);

  const [activeMessageTab, setActiveMessageTab] = useState(messagesList[1]);

  // Random online/offline status per user (persist for session)
  const [userStatus, setUserStatus] = useState({});
  useEffect(() => {
    const statuses = {};
    messagesList.forEach((u) => {
      if (u?.name) statuses[u.name] = Math.random() > 0.5;
    });
    setUserStatus(statuses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isUserOnline = (name) => Boolean(userStatus[name]);

  const scrollRef = useRef();
  const autoScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    autoScroll();
  }, [messagesList, autoScroll]);

  const topBtn = [
    {
      icon: (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 5H10M10 5H11.5M10 5V3.5M10 5V6.5M0.5 10V9.5C0.5 8.57174 0.868749 7.6815 1.52513 7.02513C2.1815 6.36875 3.07174 6 4 6M4 6C4.92826 6 5.8185 6.36875 6.47487 7.02513C7.13125 7.6815 7.5 8.57174 7.5 9.5V10M4 6C4.53043 6 5.03914 5.78929 5.41421 5.41421C5.78929 5.03914 6 4.53043 6 4C6 3.46957 5.78929 2.96086 5.41421 2.58579C5.03914 2.21071 4.53043 2 4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4C2 4.53043 2.21071 5.03914 2.58579 5.41421C2.96086 5.78929 3.46957 6 4 6Z"
            stroke="#888888"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.81464 9.68938L3.3136 9.65719L2.81464 9.68938ZM9.18536 9.68938L8.6864 9.65719L9.18536 9.68938ZM1.375 2.375C1.09886 2.375 0.875 2.59886 0.875 2.875C0.875 3.15114 1.09886 3.375 1.375 3.375V2.375ZM10.625 3.375C10.9011 3.375 11.125 3.15114 11.125 2.875C11.125 2.59886 10.9011 2.375 10.625 2.375V3.375ZM5.375 5.375C5.375 5.09886 5.15114 4.875 4.875 4.875C4.59886 4.875 4.375 5.09886 4.375 5.375H5.375ZM4.375 8.125C4.375 8.40114 4.59886 8.625 4.875 8.625C5.15114 8.625 5.375 8.40114 5.375 8.125H4.375ZM7.625 5.375C7.625 5.09886 7.40114 4.875 7.125 4.875C6.84886 4.875 6.625 5.09886 6.625 5.375H7.625ZM6.625 8.125C6.625 8.40114 6.84886 8.625 7.125 8.625C7.40114 8.625 7.625 8.40114 7.625 8.125H6.625ZM7.45278 2.99963C7.52161 3.26706 7.7942 3.42805 8.06163 3.35922C8.32906 3.29039 8.49005 3.0178 8.42122 2.75037L7.45278 2.99963ZM2.375 2.875L1.87604 2.90719L2.31567 9.72157L2.81464 9.68938L3.3136 9.65719L2.87396 2.84281L2.375 2.875ZM3.81256 10.625V11.125H8.18744V10.625V10.125H3.81256V10.625ZM9.18536 9.68938L9.68433 9.72157L10.124 2.90719L9.625 2.875L9.12604 2.84281L8.6864 9.65719L9.18536 9.68938ZM9.625 2.875V2.375H2.375V2.875V3.375H9.625V2.875ZM1.375 2.875V3.375H2.375V2.875V2.375H1.375V2.875ZM9.625 2.875V3.375H10.625V2.875V2.375H9.625V2.875ZM8.18744 10.625V11.125C8.97837 11.125 9.6334 10.5109 9.68433 9.72157L9.18536 9.68938L8.6864 9.65719C8.66943 9.92029 8.45108 10.125 8.18744 10.125V10.625ZM2.81464 9.68938L2.31567 9.72157C2.3666 10.5109 3.02163 11.125 3.81256 11.125V10.625V10.125C3.54892 10.125 3.33057 9.92029 3.3136 9.65719L2.81464 9.68938ZM4.875 5.375H4.375V8.125H4.875H5.375V5.375H4.875ZM7.125 5.375H6.625V8.125H7.125H7.625V5.375H7.125ZM6.00001 1.375V1.875C6.69826 1.875 7.28624 2.35256 7.45278 2.99963L7.937 2.875L8.42122 2.75037C8.14372 1.67221 7.1656 0.875 6.00001 0.875V1.375ZM4.06302 2.875L4.54724 2.99963C4.71378 2.35256 5.30176 1.875 6.00001 1.875V1.375V0.875C4.83442 0.875 3.8563 1.67221 3.5788 2.75037L4.06302 2.875Z"
            fill="#888888"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99958 9C7.66295 9.88295 6.89415 10.5 5.99958 10.5C5.10502 10.5 4.33622 9.88295 3.99958 9M3.14177 9H8.8574C9.46219 9 9.92856 8.46732 9.84863 7.86784L9.39607 4.47368C9.1691 2.77135 7.71698 1.5 5.99958 1.5C4.28219 1.5 2.83007 2.77135 2.60309 4.47368L2.15054 7.86784C2.07061 8.46732 2.53698 9 3.14177 9Z"
            stroke="#888888"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <Top />
      <div className="flex">
        <div className="left max-w-[296px] border-r border-solid border-stroke hidden md:block">
          <Input
            className="p-3"
            type="text"
            placeholder="Search..."
            leftIcon={search}
            inputClass="!h-[36px]"
          />
          <div className="max-h-[calc(100vh-140px)] lg:max-h-[calc(100vh-150px)] overflow-y-auto">
            <h4 className="px-4 mb-0 text-heading/50 font-medium">Direct</h4>
            {messagesList.map((item, index) => (
              <div className="mb-0 w-full" key={index}>
                <button
                  onClick={() => {
                    autoScroll();
                    setActiveMessageTab(item);
                  }}
                  className={`w-full flex items-center text-left gap-2 py-4 px-3 border-b border-solid border-[#E2E4E9] border-l-2 ${
                    item.name === activeMessageTab.name
                      ? "bg-gradient-to-tr from-[#F4F2FF] to-white border-l-primary"
                      : "bg-transparent border-l-transparent"
                  }`}
                  key={index}
                >
                  <span className="relative inline-block">
                    <img src={item.img} alt="" />
                    <div
                      style={{
                        backgroundColor: isUserOnline(item.name)
                          ? "#00FF00"
                          : "#FF0000",
                      }}
                      className={`absolute bottom-0 left-0 size-2.5 rounded-full border border-white ${
                        isUserOnline(item.name) ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                  </span>
                  <p className="text-sm text-heading font-semibold !leading-[150%] line-clamp-1">
                    {item.name}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <div
            className={`${c_16} border-t-0 border-l-0 flex flex-wrap items-center justify-between gap-y-3 !rounded-none`}
          >
            <div className="flex items-center gap-2">
              <span className="relative inline-block">
                <img src={activeMessageTab?.img || sop2} alt="" />
                <div
                  style={{
                    backgroundColor: isUserOnline(
                      activeMessageTab?.name || "Marvin McKinney"
                    )
                      ? "#00FF00"
                      : "#FF0000",
                  }}
                  className={`absolute bottom-0 left-0 size-2.5 rounded-full border border-white ${
                    isUserOnline(activeMessageTab?.name || "Marvin McKinney")
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                />
              </span>
              <h3>{activeMessageTab?.name || "Marvin McKinney"}</h3>
            </div>
            <div className="flex items-center gap-3">
              {topBtn.map((item, index) => (
                <div className="" key={index}>
                  <button className="size-6 rounded-lg border border-solid border-[#E2E4E9] flex items-center justify-center hover:scale-105 hover:border-primary">
                    {item.icon}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div
            ref={scrollRef}
            className="overflow-y-auto h-[calc(100vh-189px)] md:h-[calc(100vh-217px)] lg:h-[calc(100vh-225px)] p-4"
          >
            {activeMessageTab.conversions?.length > 0 ? (
              activeMessageTab.conversions?.map((item, index) => (
                <div className="" key={index}>
                  <p className="text-xs text-center pb-4">{item.data}</p>
                  {item.messages.map((mes, i) => {
                    const timeLabel = item.data || "";
                    return (
                      <div
                        className={`p-3 max-w-[456px] rounded-xl mb-3 ${
                          mes.status === "to"
                            ? "ml-auto bg-primary"
                            : "mr-auto bg-[#F7F7F7]"
                        }`}
                        key={i}
                      >
                        <h6
                          className={`text-xs font-semibold ${
                            mes.status === "to"
                              ? "text-right text-white"
                              : "text-left"
                          }`}
                        >
                          {mes.status === "to" ? "ME" : activeMessageTab.name}
                        </h6>
                        <p
                          className={`text-xs font-medium mt-1 !leading-normal ${
                            mes.status != "to" ? "text-gray" : "text-white"
                          }`}
                        >
                          {mes.text}
                        </p>
                        <div
                          className={`mt-1 flex ${
                            mes.status === "to"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <span
                            className={`text-[10px] ${
                              mes.status === "to"
                                ? "text-white/70"
                                : "text-[#858585]"
                            }`}
                          >
                            {timeLabel}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))
            ) : (
              <p className="text-sm font-medium bg-gray/5 rounded-2xl font-inter text-center flex h-full justify-center items-center text-heading capitalize">
                no more conversions
              </p>
            )}
          </div>
          <div className="relative z-[1] w-full p-4 bg-[#F8F7FF]">
            <Input type="text" className="" placeholder="Type a message" />
            <button className="bg-primary text-white flex items-center justify-center rounded-lg size-9 absolute top-1/2 -translate-y-1/2 right-[22px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33313 8L2.93046 4.37533C2.81513 3.338 3.88313 2.576 4.82646 3.02333L12.7891 6.79533C13.8058 7.27666 13.8058 8.72333 12.7891 9.20466L4.82646 12.9773C3.88313 13.424 2.81513 12.6627 2.93046 11.6253L3.33313 8ZM3.33313 8H7.9998"
                  stroke="currentColor"
                  strokeWidth="1.24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
