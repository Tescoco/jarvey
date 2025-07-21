import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import Top from "../../layouts/Top";
import Dropdown from "../../components/Dropdown";
import MainInner from "../../components/MainInner";
import { c_16 } from "../../utilities/Classes";

import img from "../../assets/img/help-center/test5.png";
import img1 from "../../assets/img/help-center/test.png";
import img2 from "../../assets/img/help-center/test1.png";
import img3 from "../../assets/img/help-center/test2.png";
import img4 from "../../assets/img/help-center/test3.png";

export default function Layout() {
  const pathname = useLocation();
  const tabBtns = ["Configuration", "Channels"];
  const [activeTab, setActiveTab] = useState(tabBtns[0]);

  const helpList = [
    {
      img: img,
      name: "What’s you product’s shelf life",
    },
    {
      img: img1,
      name: "What type of ingredients do you..",
    },
    {
      name: "What shoe is right for me",
    },
    {
      img: img2,
      name: "Track",
      path: "/app/order/track",
    },
    {
      img: img3,
      name: "Return",
      path: "/app/order/return",
    },
    {
      img: img4,
      name: "Cancel",
      path: "/app/order/cancel",
    },
  ];
  const getTop = pathname.pathname.split("/order/").join("");

  return (
    <>
      {/* remove /app from title */}
      <Top
        title={
          `Order Mangemanget ${
            getTop === "edit-scenario"
              ? "> Report order issue > Edit scenario"
              : ""
          } ${
            getTop === "management" || getTop === "edit-scenario"
              ? ""
              : `> ${getTop} order ${getTop.includes("report") ? "issue" : ""}`
          }`.split("/app/")[1]
        }
      >
        <Dropdown
          btnClass="!h-10 !text-primary"
          placeholder="All Stores"
          items={[{ name: "All Stores" }, { name: "All Stores 1" }]}
        />
      </Top>
      <MainInner>
        <div className="flex gap-4 md:gap-0 flex-wrap justify-between">
          <div className="flex-none w-full xl:w-[calc(100%-390px)] md:pr-5 lg:pr-10 mb-5 md:mb-0">
            <div className="border-b border-solid border-stroke flex items-center justify-center overflow-x-auto mb-5 md:mb-6">
              {tabBtns.map((item, index) => (
                <button
                  onClick={() => setActiveTab(item)}
                  key={index}
                  className={`min-w-[140px] font-inter font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${
                    item === activeTab
                      ? "border-btn text-btn"
                      : "border-transparent text-heading"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Outlet />
          </div>
          <div className="right flex-none w-full xl:w-[390px]">
            <div className="mb-4 md:mb-5 !max-w-[122px] mx-auto">
              <Dropdown
                className="mb-0"
                label=""
                placeholder="Chanel"
                btnClass="!h-10 !border-primary text-primary font-semibold text-sm"
                items={[
                  { name: "Chanel" },
                  { name: "Chanel-2" },
                  { name: "Chanel-3" },
                ]}
              />
            </div>
            <div className={`${c_16} !bg-primary`}>
              <p className="text-xs text-white font-inter font-medium !leading-[150%]">
                Help
              </p>
              <h3 className="text-base text-white font-inter font-semibold !leading-[150%] mb-4">
                How can we help ?
              </h3>
              {helpList.map((item, index) => (
                <button
                  className="p-4 w-full bg-white border border-solid border-[#E2E4E9] rounded-xl flex items-center justify-between mb-4"
                  key={index}
                >
                  <div className="flex items-center gap-3">
                    <img className="flex-none" src={item.img} alt="" />
                    <h4 className="font-inter font-medium text-sm text-heading leading-[140%]">
                      {item.name}
                    </h4>
                  </div>
                  <svg
                    className="flex-none"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.04541 13.1955C6.98902 13.2551 6.94494 13.3253 6.91568 13.402C6.88642 13.4787 6.87256 13.5605 6.87488 13.6425C6.8772 13.7246 6.89566 13.8054 6.92921 13.8803C6.96276 13.9552 7.01074 14.0228 7.07041 14.0792C7.13008 14.1356 7.20027 14.1797 7.27698 14.2089C7.35368 14.2382 7.4354 14.2521 7.51746 14.2497C7.59953 14.2474 7.68033 14.229 7.75526 14.1954C7.83019 14.1619 7.89777 14.1139 7.95416 14.0542L13.2667 8.42922C13.3764 8.31318 13.4375 8.15954 13.4375 7.99984C13.4375 7.84015 13.3764 7.68651 13.2667 7.57047L7.95416 1.94484C7.89815 1.88387 7.83058 1.83463 7.75537 1.79999C7.68017 1.76535 7.59883 1.746 7.51608 1.74306C7.43334 1.74012 7.35083 1.75365 7.27336 1.78286C7.19588 1.81208 7.12499 1.8564 7.06479 1.91324C7.00459 1.97009 6.95628 2.03833 6.92268 2.11401C6.88908 2.18968 6.87084 2.27127 6.86904 2.35405C6.86724 2.43683 6.8819 2.51915 6.91218 2.59621C6.94246 2.67327 6.98774 2.74355 7.04541 2.80297L11.9529 7.99984L7.04541 13.1955Z"
                      fill="black"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </MainInner>
    </>
  );
}
