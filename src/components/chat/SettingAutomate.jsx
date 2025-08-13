import React, { useRef, useState } from "react";
import Switch from "../Switch";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";

import img from "../../assets/img/help-center/test5.png";
import img1 from "../../assets/img/help-center/test.png";
import img2 from "../../assets/img/help-center/test1.png";
import img3 from "../../assets/img/help-center/test2.png";
import img4 from "../../assets/img/help-center/test3.png";

export default function SettingAutomate() {
  const initialItems = [
    {
      icon: (
        <svg
          className="flex-none"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75 9.91634V9.99967C8.75 10.575 8.28363 11.0413 7.70833 11.0413C7.13304 11.0413 6.66667 10.575 6.66667 9.99967V9.91634C6.66667 9.34104 7.13304 8.87467 7.70833 8.87467C8.28363 8.87467 8.75 9.34104 8.75 9.91634ZM13.3333 9.91634V9.99967C13.3333 10.575 12.867 11.0413 12.2917 11.0413C11.7164 11.0413 11.25 10.575 11.25 9.99967V9.91634C11.25 9.34104 11.7164 8.87467 12.2917 8.87467C12.867 8.87467 13.3333 9.34104 13.3333 9.91634ZM12.2917 16.2497C11.7164 16.2497 11.25 15.7833 11.25 15.208C11.25 14.6327 11.7164 14.1663 12.2917 14.1663C12.867 14.1663 13.3333 14.6327 13.3333 15.208C13.3333 15.7833 12.867 16.2497 12.2917 16.2497ZM7.70833 16.2497C7.13304 16.2497 6.66667 15.7833 6.66667 15.208C6.66667 14.6327 7.13304 14.1663 7.70833 14.1663C8.28363 14.1663 8.75 14.6327 8.75 15.208C8.75 15.7833 8.28363 16.2497 7.70833 16.2497ZM12.2917 5.83301C11.7164 5.83301 11.25 5.36664 11.25 4.79134C11.25 4.21604 11.7164 3.74967 12.2917 3.74967C12.867 3.74967 13.3333 4.21604 13.3333 4.79134C13.3333 5.36664 12.867 5.83301 12.2917 5.83301ZM7.70833 5.83301C7.13304 5.83301 6.66667 5.36664 6.66667 4.79134C6.66667 4.21604 7.13304 3.74967 7.70833 3.74967C8.28363 3.74967 8.75 4.21604 8.75 4.79134C8.75 5.36664 8.28363 5.83301 7.70833 5.83301Z"
            fill="#858585"
            stroke="#858585"
            strokeWidth="0.833333"
          />
        </svg>
      ),
      title: "Shipping policy",
      des: "🚚 What's your shipping policy?",
      path: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6667 17.4994H17.5M17.1548 4.23758L15.7618 2.8446C15.111 2.19373 14.0557 2.19373 13.4048 2.8446L2.98816 13.2613C2.67559 13.5738 2.5 13.9978 2.5 14.4398V17.4994H5.55964C6.00167 17.4994 6.42559 17.3238 6.73816 17.0113L17.1548 6.5946C17.8057 5.94373 17.8057 4.88845 17.1548 4.23758Z"
            stroke="black"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      icon2: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7111 3.04442C13.7607 2.99483 13.8 2.93596 13.8268 2.87118C13.8537 2.80639 13.8675 2.73695 13.8675 2.66682C13.8675 2.59669 13.8537 2.52725 13.8268 2.46246C13.8 2.39768 13.7607 2.33881 13.7111 2.28922C13.6615 2.23963 13.6026 2.2003 13.5378 2.17346C13.4731 2.14663 13.4036 2.13281 13.3335 2.13281C13.2634 2.13281 13.1939 2.14663 13.1291 2.17346C13.0643 2.2003 13.0055 2.23963 12.9559 2.28922L8.00015 7.24602L3.04442 2.28922C2.99483 2.23963 2.93596 2.2003 2.87118 2.17346C2.80639 2.14663 2.73695 2.13281 2.66682 2.13281C2.59669 2.13281 2.52725 2.14663 2.46246 2.17346C2.39768 2.2003 2.33881 2.23963 2.28922 2.28922C2.23963 2.33881 2.2003 2.39768 2.17346 2.46246C2.14663 2.52725 2.13281 2.59669 2.13281 2.66682C2.13281 2.73695 2.14663 2.80639 2.17346 2.87118C2.2003 2.93596 2.23963 2.99483 2.28922 3.04442L7.24602 8.00015L2.28922 12.9559C2.18907 13.056 2.13281 13.1919 2.13281 13.3335C2.13281 13.4751 2.18907 13.6109 2.28922 13.7111C2.38937 13.8112 2.52519 13.8675 2.66682 13.8675C2.80845 13.8675 2.94427 13.8112 3.04442 13.7111L8.00015 8.75429L12.9559 13.7111C13.056 13.8112 13.1919 13.8675 13.3335 13.8675C13.4751 13.8675 13.6109 13.8112 13.7111 13.7111C13.8112 13.6109 13.8675 13.4751 13.8675 13.3335C13.8675 13.1919 13.8112 13.056 13.7111 12.9559L8.75429 8.00015L13.7111 3.04442Z"
            fill="#858585"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          className="flex-none"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75 9.91634V9.99967C8.75 10.575 8.28363 11.0413 7.70833 11.0413C7.13304 11.0413 6.66667 10.575 6.66667 9.99967V9.91634C6.66667 9.34104 7.13304 8.87467 7.70833 8.87467C8.28363 8.87467 8.75 9.34104 8.75 9.91634ZM13.3333 9.91634V9.99967C13.3333 10.575 12.867 11.0413 12.2917 11.0413C11.7164 11.0413 11.25 10.575 11.25 9.99967V9.91634C11.25 9.34104 11.7164 8.87467 12.2917 8.87467C12.867 8.87467 13.3333 9.34104 13.3333 9.91634ZM12.2917 16.2497C11.7164 16.2497 11.25 15.7833 11.25 15.208C11.25 14.6327 11.7164 14.1663 12.2917 14.1663C12.867 14.1663 13.3333 14.6327 13.3333 15.208C13.3333 15.7833 12.867 16.2497 12.2917 16.2497ZM7.70833 16.2497C7.13304 16.2497 6.66667 15.7833 6.66667 15.208C6.66667 14.6327 7.13304 14.1663 7.70833 14.1663C8.28363 14.1663 8.75 14.6327 8.75 15.208C8.75 15.7833 8.28363 16.2497 7.70833 16.2497ZM12.2917 5.83301C11.7164 5.83301 11.25 5.36664 11.25 4.79134C11.25 4.21604 11.7164 3.74967 12.2917 3.74967C12.867 3.74967 13.3333 4.21604 13.3333 4.79134C13.3333 5.36664 12.867 5.83301 12.2917 5.83301ZM7.70833 5.83301C7.13304 5.83301 6.66667 5.36664 6.66667 4.79134C6.66667 4.21604 7.13304 3.74967 7.70833 3.74967C8.28363 3.74967 8.75 4.21604 8.75 4.79134C8.75 5.36664 8.28363 5.83301 7.70833 5.83301Z"
            fill="#858585"
            stroke="#858585"
            strokeWidth="0.833333"
          />
        </svg>
      ),
      title: "Shelf life information",
      des: "🍎 What's your products' shelf life?",
      path: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6667 17.4994H17.5M17.1548 4.23758L15.7618 2.8446C15.111 2.19373 14.0557 2.19373 13.4048 2.8446L2.98816 13.2613C2.67559 13.5738 2.5 13.9978 2.5 14.4398V17.4994H5.55964C6.00167 17.4994 6.42559 17.3238 6.73816 17.0113L17.1548 6.5946C17.8057 5.94373 17.8057 4.88845 17.1548 4.23758Z"
            stroke="black"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      icon2: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7111 3.04442C13.7607 2.99483 13.8 2.93596 13.8268 2.87118C13.8537 2.80639 13.8675 2.73695 13.8675 2.66682C13.8675 2.59669 13.8537 2.52725 13.8268 2.46246C13.8 2.39768 13.7607 2.33881 13.7111 2.28922C13.6615 2.23963 13.6026 2.2003 13.5378 2.17346C13.4731 2.14663 13.4036 2.13281 13.3335 2.13281C13.2634 2.13281 13.1939 2.14663 13.1291 2.17346C13.0643 2.2003 13.0055 2.23963 12.9559 2.28922L8.00015 7.24602L3.04442 2.28922C2.99483 2.23963 2.93596 2.2003 2.87118 2.17346C2.80639 2.14663 2.73695 2.13281 2.66682 2.13281C2.59669 2.13281 2.52725 2.14663 2.46246 2.17346C2.39768 2.2003 2.33881 2.23963 2.28922 2.28922C2.23963 2.33881 2.2003 2.39768 2.17346 2.46246C2.14663 2.52725 2.13281 2.59669 2.13281 2.66682C2.13281 2.73695 2.14663 2.80639 2.17346 2.87118C2.2003 2.93596 2.23963 2.99483 2.28922 3.04442L7.24602 8.00015L2.28922 12.9559C2.18907 13.056 2.13281 13.1919 2.13281 13.3335C2.13281 13.4751 2.18907 13.6109 2.28922 13.7111C2.38937 13.8112 2.52519 13.8675 2.66682 13.8675C2.80845 13.8675 2.94427 13.8112 3.04442 13.7111L8.00015 8.75429L12.9559 13.7111C13.056 13.8112 13.1919 13.8675 13.3335 13.8675C13.4751 13.8675 13.6109 13.8112 13.7111 13.7111C13.8112 13.6109 13.8675 13.4751 13.8675 13.3335C13.8675 13.1919 13.8112 13.056 13.7111 12.9559L8.75429 8.00015L13.7111 3.04442Z"
            fill="#858585"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          className="flex-none"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75 9.91634V9.99967C8.75 10.575 8.28363 11.0413 7.70833 11.0413C7.13304 11.0413 6.66667 10.575 6.66667 9.99967V9.91634C6.66667 9.34104 7.13304 8.87467 7.70833 8.87467C8.28363 8.87467 8.75 9.34104 8.75 9.91634ZM13.3333 9.91634V9.99967C13.3333 10.575 12.867 11.0413 12.2917 11.0413C11.7164 11.0413 11.25 10.575 11.25 9.99967V9.91634C11.25 9.34104 11.7164 8.87467 12.2917 8.87467C12.867 8.87467 13.3333 9.34104 13.3333 9.91634ZM12.2917 16.2497C11.7164 16.2497 11.25 15.7833 11.25 15.208C11.25 14.6327 11.7164 14.1663 12.2917 14.1663C12.867 14.1663 13.3333 14.6327 13.3333 15.208C13.3333 15.7833 12.867 16.2497 12.2917 16.2497ZM7.70833 16.2497C7.13304 16.2497 6.66667 15.7833 6.66667 15.208C6.66667 14.6327 7.13304 14.1663 7.70833 14.1663C8.28363 14.1663 8.75 14.6327 8.75 15.208C8.75 15.7833 8.28363 16.2497 7.70833 16.2497ZM12.2917 5.83301C11.7164 5.83301 11.25 5.36664 11.25 4.79134C11.25 4.21604 11.7164 3.74967 12.2917 3.74967C12.867 3.74967 13.3333 4.21604 13.3333 4.79134C13.3333 5.36664 12.867 5.83301 12.2917 5.83301ZM7.70833 5.83301C7.13304 5.83301 6.66667 5.36664 6.66667 4.79134C6.66667 4.21604 7.13304 3.74967 7.70833 3.74967C8.28363 3.74967 8.75 4.21604 8.75 4.79134C8.75 5.36664 8.28363 5.83301 7.70833 5.83301Z"
            fill="#858585"
            stroke="#858585"
            strokeWidth="0.833333"
          />
        </svg>
      ),
      title: "Product ingredients",
      des: "🥬 What type of ingredients do you use?",
      path: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6667 17.4994H17.5M17.1548 4.23758L15.7618 2.8446C15.111 2.19373 14.0557 2.19373 13.4048 2.8446L2.98816 13.2613C2.67559 13.5738 2.5 13.9978 2.5 14.4398V17.4994H5.55964C6.00167 17.4994 6.42559 17.3238 6.73816 17.0113L17.1548 6.5946C17.8057 5.94373 17.8057 4.88845 17.1548 4.23758Z"
            stroke="black"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      icon2: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7111 3.04442C13.7607 2.99483 13.8 2.93596 13.8268 2.87118C13.8537 2.80639 13.8675 2.73695 13.8675 2.66682C13.8675 2.59669 13.8537 2.52725 13.8268 2.46246C13.8 2.39768 13.7607 2.33881 13.7111 2.28922C13.6615 2.23963 13.6026 2.2003 13.5378 2.17346C13.4731 2.14663 13.4036 2.13281 13.3335 2.13281C13.2634 2.13281 13.1939 2.14663 13.1291 2.17346C13.0643 2.2003 13.0055 2.23963 12.9559 2.28922L8.00015 7.24602L3.04442 2.28922C2.99483 2.23963 2.93596 2.2003 2.87118 2.17346C2.80639 2.14663 2.73695 2.13281 2.66682 2.13281C2.59669 2.13281 2.52725 2.14663 2.46246 2.17346C2.39768 2.2003 2.33881 2.23963 2.28922 2.28922C2.23963 2.33881 2.2003 2.39768 2.17346 2.46246C2.14663 2.52725 2.13281 2.59669 2.13281 2.66682C2.13281 2.73695 2.14663 2.80639 2.17346 2.87118C2.2003 2.93596 2.23963 2.99483 2.28922 3.04442L7.24602 8.00015L2.28922 12.9559C2.18907 13.056 2.13281 13.1919 2.13281 13.3335C2.13281 13.4751 2.18907 13.6109 2.28922 13.7111C2.38937 13.8112 2.52519 13.8675 2.66682 13.8675C2.80845 13.8675 2.94427 13.8112 3.04442 13.7111L8.00015 8.75429L12.9559 13.7111C13.056 13.8112 13.1919 13.8675 13.3335 13.8675C13.4751 13.8675 13.6109 13.8112 13.7111 13.7111C13.8112 13.6109 13.8675 13.4751 13.8675 13.3335C13.8675 13.1919 13.8112 13.056 13.7111 12.9559L8.75429 8.00015L13.7111 3.04442Z"
            fill="#858585"
          />
        </svg>
      ),
    },
  ];

  const subItems = [
    {
      img: img2,
      name: "Track",
      path: "#",
    },
    {
      img: img3,
      name: "Return",
      path: "#",
    },
    {
      img: img4,
      name: "Cancel",
      path: "#",
    },
  ];

  const [items, setItems] = useState(initialItems);
  const dragIndexRef = useRef(null);

  const handleDragStart = (index) => {
    dragIndexRef.current = index;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    const from = dragIndexRef.current;
    if (from === null || from === index) return;
    setItems((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(from, 1);
      updated.splice(index, 0, moved);
      return updated;
    });
    dragIndexRef.current = null;
  };

  const handleDelete = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const Test = [
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
  ];
  const contact = [{ name: "Test" }, { name: "Test2" }, { name: "Test3" }];
  return (
    <div className="Automate md:flex justify-between gap-5 ">
      <div className="left mb-6 max-w-[510px] w-full">
        <div className="text mb-4 md:mb-5">
          <h2 className="text-lg text-black font-inter font-semibold !leading-[130%] mb-1">
            Flows
          </h2>
          <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%]">
            Display up to 6 Flows on your Help Center to proactively resolve top
            customer requests.
          </p>
        </div>
        {items.map((item, index) => (
          <div
            className="px-3 py-2 border border-solid border-[#E2E4E9] rounded-2xl  mb-3 select-none"
            key={item.title}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            <div className="flex items-center gap-2 justify-between cursor-move">
              <div className="flex items-center justify-center gap-2">
                <span>{item.icon}</span>
                <div className="text">
                  <h4 className="text-sm text-black font-inter font-medium !leading-[130%] mb-1">
                    {item.title}
                  </h4>
                  <p className="-mt-1 text-xs text-[#858585] font-inter font-medium !leading-[120%]">
                    {item.des}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    window.open(`/app/flows-details/${index + 1}`, "_blank");
                  }}
                >
                  {item.path}
                </span>
                <button
                  type="button"
                  aria-label="Delete flow"
                  onClick={() => handleDelete(index)}
                  className="cursor-pointer hover:opacity-80"
                >
                  {item.icon2}
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex mt-4 mb-3 ml-2">
          <button className="btn shadow !text-[#7856FF] mb-[10px] !bg-transparent cursor-pointer min-w-max">
            Add Flow
          </button>
        </div>
        <div className="text mb-4 md:mb-5">
          <h2 className="text-lg text-black font-inter font-semibold !leading-[130%] mb-1">
            Order Management
          </h2>
          <p className="text-xs text-[#858585] font-inter font-medium !leading-[120%]">
            Allow customers to track and manage their orders directly within
            your Help Center.
          </p>
        </div>
        <label
          htmlFor="policy"
          className="flex items-center gap-2 mb-4 md:mb-5 lg:mb-6"
        >
          <Switch id="policy" />
          <p className="font-inter font-medium text-sm text-heading">
            Enable Order Management
          </p>
        </label>
      </div>
      <div className="right md:max-w-[310px] xl:max-w-[382px] w-full">
        <div className="mb-4 md:mb-5 !max-w-[122px] mx-auto relative z-[1] group">
          <div className="absolute top-full hidden group-hover:block -right-2 md:right-3 -z-10 p-2.5 mt-4 md:mt-5 bg-heading text-white rounded-lg max-w-max min-w-[257px] text-center text-sm">
            <div className="absolute -top-2 right-[8%] md:right-[10%] z-[-1]">
              <svg
                className="flex-none"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5359 2C9.0755 -0.66667 12.9245 -0.666667 14.4641 2L21.3923 14C22.9319 16.6667 21.0074 20 17.9282 20H4.07179C0.992592 20 -0.931905 16.6667 0.607696 14L7.5359 2Z"
                  fill="#0A0D14"
                />
              </svg>
            </div>
            Test your flows without generating tickets.{" "}
            <a href="" className="!underline text-[#7856FF]">
              Learn more
            </a>
          </div>
          <Dropdown
            className="mb-0"
            label=""
            placeholder="Test"
            btnClass="text-primary font-semibold text-sm"
            items={contact}
          />
        </div>
        <div className="mb-6 bg-[#7856FF] p-3 rounded-2xl">
          {items.map((item, index) => (
            <div
              className="p-4 bg-white border border-solid border-[#E2E4E9] rounded-xl flex items-center justify-between mb-4"
              key={`${item.title}-right`}
            >
              <div className="flex items-center gap-3">
                {/* <span>{item.icon}</span> */}
                <h4 className="font-inter font-medium text-sm text-heading leading-[140%]">
                  {item.des}
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
            </div>
          ))}
          {subItems.map((item, index) => (
            <Link
              to={item.path || "#"}
              className="p-4 w-full bg-white border border-solid border-[#E2E4E9] rounded-xl flex items-center justify-between mb-4 hover:bg-gray-50 transition-colors"
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
            </Link>
          ))}
        </div>
        <button className="btn w-full shadow text-white">Live chat</button>
      </div>
    </div>
  );
}
