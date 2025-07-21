import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-router-dom";
import { langList } from "../utilities/Classes";
import Dropdown from "../components/Dropdown";

import user_img from "../assets/img/user.png";
import Switch from "./Switch";

export default function LeftUser({ className }) {
  const menu = [
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 7.5C10.6569 7.5 12 6.15685 12 4.5C12 2.84315 10.6569 1.5 9 1.5C7.34315 1.5 6 2.84315 6 4.5C6 6.15685 7.34315 7.5 9 7.5Z"
            stroke="black"
            strokeWidth="1.15"
          />
          <path
            d="M15 13.125C15 14.9887 15 16.5 9 16.5C3 16.5 3 14.9887 3 13.125C3 11.2613 5.6865 9.75 9 9.75C12.3135 9.75 15 11.2613 15 13.125Z"
            stroke="black"
            strokeWidth="1.15"
          />
        </svg>
      ),
      name: "Your Profile",
      path: "/profile",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.6875 3.9375H11.8125M6.75 2.25V3.9375M9.5625 15.75L12.9375 7.875L16.3125 15.75M10.5996 13.5H15.2754M9.88945 3.9375C9.88945 3.9375 9.03516 7.24219 6.99609 9.73828C4.95703 12.2344 2.8125 13.5 2.8125 13.5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11.8125C9 11.8125 7.76953 10.8633 6.46875 9.17578C5.16797 7.48828 4.5 6.1875 4.5 6.1875"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "language",
      path: null,
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.75 9C15.75 7.66504 15.3542 6.36006 14.6125 5.25006C13.8709 4.14006 12.8168 3.2749 11.5835 2.76396C10.3501 2.25302 8.99303 2.11926 7.68369 2.37959C6.37436 2.63992 5.17163 3.28265 4.22756 4.2265C3.2835 5.17036 2.6405 6.37295 2.37989 7.68222C2.11927 8.9915 2.25272 10.3486 2.76339 11.5821C3.27405 12.8155 4.13898 13.8698 5.24881 14.6117C6.35865 15.3536 7.66354 15.7497 8.9985 15.75M14.2508 15.75C13.8529 15.75 13.4714 15.592 13.1901 15.3107C12.9088 15.0294 12.7508 14.6478 12.7508 14.25C12.7508 13.8522 12.9088 13.4706 13.1901 13.1893C13.4714 12.908 13.8529 12.75 14.2508 12.75M14.2508 15.75C14.6486 15.75 15.0301 15.592 15.3114 15.3107C15.5927 15.0294 15.7508 14.6478 15.7508 14.25C15.7508 13.8522 15.5927 13.4706 15.3114 13.1893C15.0301 12.908 14.6486 12.75 14.2508 12.75M14.2508 15.75V16.875M14.2508 12.75V11.625M16.524 12.9375L15.5498 13.5M12.9525 15L11.9775 15.5625M11.9775 12.9375L12.9525 13.5M15.5498 15L16.5248 15.5625"
            stroke="black"
            strokeWidth="1.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 5.25V9L10.5 10.5"
            stroke="black"
            strokeWidth="1.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Jarvey Updates",
      path: "admin/updates",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.93725 5.42829C7.1925 5.82579 8.5365 6.65754 9 7.13529C9.4635 6.65754 10.8075 5.82579 13.0635 5.42829C14.2057 5.22654 14.7772 5.12604 15.2632 5.51229C15.75 5.89779 15.75 6.52479 15.75 7.77879V12.284C15.75 13.4308 15.75 14.0038 15.438 14.3615C15.1252 14.7193 14.4382 14.8408 13.0635 15.083C11.8372 15.299 10.881 15.6433 10.1888 15.989C9.507 16.3295 9.1665 16.4998 9 16.4998M9 16.4998C8.8335 16.4998 8.49225 16.3295 7.81125 15.9898C7.119 15.6433 6.16275 15.299 4.93725 15.0823C3.56175 14.8408 2.87475 14.7193 2.562 14.3615C2.24925 14.0038 2.25 13.4308 2.25 12.284V7.77879C2.25 6.52479 2.25 5.89779 2.73675 5.51229C3.22275 5.12604 3.79425 5.22729 4.9365 5.42829M9 16.4998V6.74979M6.375 2.29404C7.15238 1.77504 8.06643 1.49867 9.00114 1.5C9.93585 1.50134 10.8491 1.78032 11.625 2.30154M10.2165 4.12479C9.85006 3.90218 9.4298 3.78383 9.00104 3.78251C8.57229 3.78119 8.15131 3.89694 7.7835 4.11729"
            stroke="black"
            strokeWidth="1.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Learn",
      path: "/admin/learn",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 4.12523L8.595 4.51523C8.64747 4.56967 8.71038 4.61298 8.77997 4.64255C8.84955 4.67213 8.92439 4.68737 9 4.68737C9.07561 4.68737 9.15045 4.67213 9.22003 4.64255C9.28962 4.61298 9.35253 4.56967 9.405 4.51523L9 4.12523ZM7.0695 13.7417C5.9325 12.8455 4.68975 11.9702 3.7035 10.8602C2.7375 9.77123 2.0625 8.50148 2.0625 6.85298H0.9375C0.9375 8.85248 1.77 10.378 2.86275 11.6072C3.93525 12.8147 5.30325 13.7822 6.37275 14.6252L7.0695 13.7417ZM2.0625 6.85298C2.0625 5.24048 2.97375 3.88748 4.218 3.31823C5.427 2.76548 7.0515 2.91173 8.595 4.51523L9.405 3.73598C7.575 1.83323 5.448 1.51898 3.75 2.29523C2.0895 3.05498 0.9375 4.81898 0.9375 6.85298H2.0625ZM6.37275 14.6252C6.7575 14.9282 7.17 15.2507 7.58775 15.4952C8.0055 15.7397 8.4825 15.9377 9 15.9377V14.8127C8.7675 14.8127 8.4945 14.7227 8.1555 14.524C7.81575 14.326 7.464 14.053 7.0695 13.7417L6.37275 14.6252ZM11.6273 14.6252C12.6968 13.7815 14.0648 12.8155 15.1373 11.6072C16.23 10.3772 17.0625 8.85248 17.0625 6.85298H15.9375C15.9375 8.50148 15.2625 9.77123 14.2965 10.8602C13.3103 11.9702 12.0675 12.8455 10.9305 13.7417L11.6273 14.6252ZM17.0625 6.85298C17.0625 4.81898 15.9112 3.05498 14.25 2.29523C12.552 1.51898 10.4265 1.83323 8.595 3.73523L9.405 4.51523C10.9485 2.91248 12.573 2.76548 13.782 3.31823C15.0262 3.88748 15.9375 5.23973 15.9375 6.85298H17.0625ZM10.9305 13.7417C10.536 14.053 10.1843 14.326 9.8445 14.524C9.50475 14.722 9.2325 14.8127 9 14.8127V15.9377C9.5175 15.9377 9.9945 15.739 10.4123 15.4952C10.8308 15.2507 11.2425 14.9282 11.6273 14.6252L10.9305 13.7417Z"
            fill="black"
          />
        </svg>
      ),
      name: "Refer a friend & earn",
      path: "/admin/refer",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_11915_69329)">
            <path
              d="M11.2485 12.75C11.2395 14.3812 11.1668 15.2648 10.5908 15.8407C9.93154 16.5 8.87103 16.5 6.75003 16.5L6.00003 16.5C3.87828 16.5 2.81778 16.5 2.15853 15.8407C1.50003 15.1822 1.50003 14.121 1.50003 12L1.50004 6C1.50004 3.879 1.50004 2.81775 2.15854 2.15925C2.81854 1.5 3.87829 1.5 6.00004 1.5L6.75004 1.5C8.87104 1.5 9.93154 1.5 10.5908 2.15925C11.1668 2.73525 11.2395 3.61875 11.2485 5.25"
              stroke="black"
              strokeWidth="1.15"
              strokeLinecap="round"
            />
            <path
              d="M6.75 9L16.5 9M16.5 9L13.875 11.25M16.5 9L13.875 6.75"
              stroke="black"
              strokeWidth="1.15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_11915_69329">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      name: "Logout",
      path: "/",
    },
  ];
  const [popup, setPopup] = useState(false);

  return (
    <div
      className={`border-t border-solid border-stroke p-4 md:p-5 lg:p-6 flex items-center gap-2 ${className}`}
    >
      <div className="flex-none size-8 relative rounded-full">
        <img
          src={user_img}
          className="w-full h-auto min-h-full object-cover absolute top-0 left-0"
          alt=""
        />
      </div>
      <div className="flex-none grow">
        <div className="flex items-center justify-between gap-1">
          <div className="flex-none">
            <strong className="font-inter font-medium text-sm text-heading">
              Cameron Williamson
            </strong>
            <p className="font-inter font-normal text-xs text-[#525866]">
              Tickets used{" "}
              <span className="inline-block ml-2 font-semibold text-heading">
                50/100
              </span>
            </p>
          </div>
          <div className="relative z-[1]">
            <button
              onClick={() => setPopup(!popup)}
              className={`flex-none size-6 flex items-center justify-center border border-solid ${
                popup ? "bg-primary border-primary" : "bg-white border-stroke"
              } rounded-lg text-[#111]/50 shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]`}
            >
              {popup ? (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99992 1.97933C5.23004 1.97933 5.41659 1.79278 5.41659 1.56266C5.41659 1.33254 5.23004 1.146 4.99992 1.146C4.7698 1.146 4.58325 1.33254 4.58325 1.56266C4.58325 1.79278 4.7698 1.97933 4.99992 1.97933Z"
                    fill="white"
                  />
                  <path
                    d="M4.99992 5.41683C5.23004 5.41683 5.41659 5.23028 5.41659 5.00016C5.41659 4.77004 5.23004 4.5835 4.99992 4.5835C4.7698 4.5835 4.58325 4.77004 4.58325 5.00016C4.58325 5.23028 4.7698 5.41683 4.99992 5.41683Z"
                    fill="white"
                  />
                  <path
                    d="M4.99992 8.85433C5.23004 8.85433 5.41659 8.66778 5.41659 8.43766C5.41659 8.20755 5.23004 8.021 4.99992 8.021C4.7698 8.021 4.58325 8.20755 4.58325 8.43766C4.58325 8.66778 4.7698 8.85433 4.99992 8.85433Z"
                    fill="white"
                  />
                  <path
                    d="M4.99992 1.97933C5.23004 1.97933 5.41659 1.79278 5.41659 1.56266C5.41659 1.33254 5.23004 1.146 4.99992 1.146C4.7698 1.146 4.58325 1.33254 4.58325 1.56266C4.58325 1.79278 4.7698 1.97933 4.99992 1.97933Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.99992 5.41683C5.23004 5.41683 5.41659 5.23028 5.41659 5.00016C5.41659 4.77004 5.23004 4.5835 4.99992 4.5835C4.7698 4.5835 4.58325 4.77004 4.58325 5.00016C4.58325 5.23028 4.7698 5.41683 4.99992 5.41683Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.99992 8.85433C5.23004 8.85433 5.41659 8.66778 5.41659 8.43766C5.41659 8.20755 5.23004 8.021 4.99992 8.021C4.7698 8.021 4.58325 8.20755 4.58325 8.43766C4.58325 8.66778 4.7698 8.85433 4.99992 8.85433Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00016 1.97786C5.23028 1.97786 5.41683 1.79132 5.41683 1.5612C5.41683 1.33108 5.23028 1.14453 5.00016 1.14453C4.77004 1.14453 4.5835 1.33108 4.5835 1.5612C4.5835 1.79132 4.77004 1.97786 5.00016 1.97786Z"
                    fill="black"
                  />
                  <path
                    d="M5.00016 5.41537C5.23028 5.41537 5.41683 5.22882 5.41683 4.9987C5.41683 4.76858 5.23028 4.58203 5.00016 4.58203C4.77004 4.58203 4.5835 4.76858 4.5835 4.9987C4.5835 5.22882 4.77004 5.41537 5.00016 5.41537Z"
                    fill="black"
                  />
                  <path
                    d="M5.00016 8.85287C5.23028 8.85287 5.41683 8.66632 5.41683 8.4362C5.41683 8.20608 5.23028 8.01953 5.00016 8.01953C4.77004 8.01953 4.5835 8.20608 4.5835 8.4362C4.5835 8.66632 4.77004 8.85287 5.00016 8.85287Z"
                    fill="black"
                  />
                  <path
                    d="M5.00016 1.97786C5.23028 1.97786 5.41683 1.79132 5.41683 1.5612C5.41683 1.33108 5.23028 1.14453 5.00016 1.14453C4.77004 1.14453 4.5835 1.33108 4.5835 1.5612C4.5835 1.79132 4.77004 1.97786 5.00016 1.97786Z"
                    stroke="#111111"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.00016 5.41537C5.23028 5.41537 5.41683 5.22882 5.41683 4.9987C5.41683 4.76858 5.23028 4.58203 5.00016 4.58203C4.77004 4.58203 4.5835 4.76858 4.5835 4.9987C4.5835 5.22882 4.77004 5.41537 5.00016 5.41537Z"
                    stroke="#111111"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.00016 8.85287C5.23028 8.85287 5.41683 8.66632 5.41683 8.4362C5.41683 8.20608 5.23028 8.01953 5.00016 8.01953C4.77004 8.01953 4.5835 8.20608 4.5835 8.4362C4.5835 8.66632 4.77004 8.85287 5.00016 8.85287Z"
                    stroke="#111111"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            {popup && (
              <div className="absolute bottom-full right-0 mb-5 bg-white rounded-2xl shadow-[0px_8px_20px_0px_rgba(0,0,0,0.12)] w-full min-w-[230px]">
                <label
                  htmlFor="available"
                  className="p-4 flex items-center justify-between gap-2 cursor-pointer border-b border-solid border-stroke"
                >
                  <span className="text-sm text-heading font-medium">
                    Available
                  </span>
                  <Switch checked id="available" />
                </label>

                <div className="p-4 flex flex-col gap-2 max-h-[450px] overflow-y-auto">
                  {menu.map((item, index) => (
                    <div key={index}>
                      {item.name === "language" ? (
                        <div className="relative z-[1]">
                          <div className="flex items-center gap-2">
                            {item.icon}
                            <Dropdown
                              popUpText={
                                "This will change you so many like an 15 amount of tickets."
                              }
                              showPopup={true}
                              search={true}
                              dropDownClass="!max-h-[150px]"
                              className="mb-0 w-full"
                              btnClass="!h-auto border-none !text-sm !text-heading !font-medium capitalize !p-0"
                              placeholder={item.name}
                              items={langList}
                            />
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className="py-1 capitalize flex items-center gap-2 text-sm text-heading font-medium hover:text-primary"
                        >
                          <span className="flex items-center gap-2">
                            {item.icon} {item.name}
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <ProgressBar className="mt-0.5 bg-primary/10 h-2" value={50} />
      </div>
    </div>
  );
}
