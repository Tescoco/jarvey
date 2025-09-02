import React, { useState, useRef, useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import Top from "../../layouts/Top";
import TableFilter from "../../components/TableFilter";
import Checkbox from "../../components/Checkbox";
import { Link, NavLink, useLocation } from "react-router-dom";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import RichTextEditor from "../../components/RichTextEditor";
import {
  city,
  country,
  messageFieldCollapse,
  search,
} from "../../utilities/Classes";

import addIcon1 from "../../assets/img/tickets/add/1.png";
import addIcon2 from "../../assets/img/tickets/add/2.png";
import addIcon3 from "../../assets/img/tickets/add/3.png";
import addIcon4 from "../../assets/img/tickets/add/4.png";
import addIcon5 from "../../assets/img/tickets/add/5.png";
import order_logo from "../../assets/img/tickets/order_logo.png";
import { handleChange } from "../../store/MessageSidebarCollapse";
import { useDispatch, useSelector } from "react-redux";
import { useAvailability } from "../../contexts/AvailabilityContext";

export default function Tickets() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(3);

  // Resizable sections state
  const [leftWidth, setLeftWidth] = useState(280);
  const [rightWidth, setRightWidth] = useState(320);
  const [typingHeight, setTypingHeight] = useState(280);
  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const [isResizingRight, setIsResizingRight] = useState(false);
  const [isResizingTyping, setIsResizingTyping] = useState(false);
  const leftResizerRef = useRef(null);
  const rightResizerRef = useRef(null);
  const typingResizerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const initialMouseX = useRef(0);
  const initialMouseY = useRef(0);
  const initialLeftWidth = useRef(280);
  const initialRightWidth = useRef(320);
  const initialTypingHeight = useRef(280);

  // Size constraints
  const MIN_LEFT_WIDTH = 200;
  const MAX_LEFT_WIDTH = 500;
  const MIN_RIGHT_WIDTH = 250;
  const MAX_RIGHT_WIDTH = 450;
  const MIN_TYPING_HEIGHT = 200;
  const MAX_TYPING_HEIGHT = 600;

  function TableFilterCustom({
    children,
    className = "",
    searchClass = "w-full md:max-w-[300px] xl:max-w-[400px]",
    lang = false,
    textHidden = false,
    BtnClass,
    csv = false,
    hideSortDrop,
  }) {
    const btnClass =
      "flex items-center gap-1 py-2 px-[10px] font-inter font-medium text-sm text-[#111]/60 bg-white border border-solid border-[#E2E4E9] rounded-lg shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]";
    const [sortDrop, setSortDrop] = useState(false);
    const sorts = [
      `Last message`,
      `Last message`,
      `Last Received message`,
      `Last Received message `,
      `Created`,
      `Created`,
      `Updated`,
      `Updated`,
    ];
    const [defaultSort, setDefaultSort] = useState(sorts[0]);

    return (
      <div
        className={`flex items-center justify-between flex-wrap gap-3 mb-4 md:mb-5 ${className}`}
      >
        <div className={`search ${searchClass} mr-auto grow-1 md:grow-0`}>
          <Input
            className="mb-0"
            type="text"
            placeholder="Search..."
            leftIcon={search}
            inputClass="!h-[38px]"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => {
              setEditCustomerData({
                name: "Jenny Wilson",
                phone: "(+33)7 35 5 46 14",
                email: "Wade Warren",
                note: "",
              });
              setEditCustomerModalOpen(true);
            }}
            className={`${btnClass} ${BtnClass}`}
            title="Edit customer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0104 3.077C12.8113 2.27612 14.1106 2.27612 14.9115 3.077L16.2565 4.42201C17.0574 5.22289 17.0574 6.5222 16.2565 7.32309L8.9409 14.6387C8.63584 14.9437 8.25892 15.1627 7.84234 15.272L4.99984 16.0313C4.66263 16.1216 4.35217 15.8112 4.44247 15.474L5.20176 12.6315C5.31108 12.2149 5.53006 11.838 5.83513 11.533L12.0104 5.35767M12.0104 3.077L13.3554 4.42201M12.0104 3.077L5.83513 9.25234"
                stroke="#888888"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {!textHidden && <span className="block pr-1">Edit</span>}
          </button>
        </div>

        {/* language */}
        {lang && (
          <Dropdown
            btnClass="!h-[38px]"
            className="mb-0 min-w-[110px]"
            placeholder="Language"
            items={langList}
            dropDownClass="w-max !left-auto !right-0"
            search={true}
          />
        )}
        {/* language */}

        {hideSortDrop && (
          <div className="relative z-[2]">
            <button
              className={`${btnClass} ${BtnClass} ${
                sortDrop === true && "!bg-black !text-white"
              }`}
              onClick={() => setSortDrop(!sortDrop)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00133 3.95801V16.0413M5.00133 16.0413L2.5 13.5413M5.00133 16.0413L7.5 13.5413M9.79167 5.62467H16.875M13.125 14.3747H16.875M11.4583 9.99967H16.875"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {!textHidden && (
                <>
                  <span className="mx-1 block">{defaultSort}</span>
                  <svg
                    className={`${sortDrop ? "-scale-y-100" : "scale-x-100"}`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00005 3.87852L8.71255 0.166016L9.77305 1.22652L5.00005 5.99952L0.227051 1.22652L1.28755 0.166016L5.00005 3.87852Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </>
              )}
            </button>
            {sortDrop && (
              <div className="mt-1 py-1 absolute right-0 w-max max-w-[300px] bg-white border border-solid border-stroke rounded-lg max-h-[250px] overflow-y-auto flex flex-col items-start">
                {sorts.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => {
                      setDefaultSort(item);
                      setSortDrop(false);
                    }}
                    className="flex items-center gap-3 text-sm font-normal py-2 px-3 cursor-pointer text-heading hover:text-primary"
                  >
                    <svg
                      className={`${index % 2 != 0 && "-rotate-180"}`}
                      width="11"
                      height="14"
                      viewBox="0 0 11 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.12416 0.956147C5.22377 0.856661 5.3588 0.800781 5.49958 0.800781C5.64036 0.800781 5.77539 0.856661 5.875 0.956147L10.125 5.20615C10.1772 5.25478 10.2191 5.31343 10.2481 5.3786C10.2771 5.44377 10.2927 5.51411 10.294 5.58544C10.2953 5.65677 10.2821 5.72763 10.2554 5.79378C10.2287 5.85993 10.1889 5.92002 10.1385 5.97047C10.088 6.02091 10.0279 6.06068 9.96179 6.0874C9.89564 6.11412 9.82479 6.12724 9.75346 6.12598C9.68213 6.12472 9.61178 6.10911 9.54661 6.08007C9.48145 6.05104 9.4228 6.00917 9.37416 5.95698L6.03083 2.61365V12.6649C6.03083 12.8058 5.97486 12.9409 5.87523 13.0405C5.7756 13.1402 5.64048 13.1961 5.49958 13.1961C5.35868 13.1961 5.22356 13.1402 5.12393 13.0405C5.0243 12.9409 4.96833 12.8058 4.96833 12.6649V2.61365L1.625 5.95698C1.57636 6.00917 1.51771 6.05104 1.45254 6.08007C1.38738 6.10911 1.31703 6.12472 1.2457 6.12598C1.17437 6.12724 1.10351 6.11412 1.03736 6.0874C0.971215 6.06068 0.911124 6.02091 0.860677 5.97047C0.810231 5.92002 0.770462 5.85993 0.743743 5.79378C0.717024 5.72763 0.703902 5.65677 0.705161 5.58544C0.706419 5.51411 0.722032 5.44377 0.751068 5.3786C0.780104 5.31343 0.821968 5.25478 0.874163 5.20615L5.12416 0.956147Z"
                        fill="black"
                      />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
        {csv && (
          <button className="btn min-w-[79px] gap-1 text-gray">
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5423 10.0417L7.58992 12.9942C7.26448 13.3196 6.73685 13.3196 6.41141 12.9942L3.45898 10.0417M7.00067 1.29175V12.9584M13.0423 16.7084H0.958984"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            CSV
          </button>
        )}
        {children}
      </div>
    );
  }

  // Throttle resize updates for smoother performance
  const throttledResize = useRef(null);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const [activeTab2, setActiveTab2] = useState("Customer Details");
  const [addCustomer, setAddCustomer] = useState(false);
  const [editCustomerModalOpen, setEditCustomerModalOpen] = useState(false);
  const [editCustomerData, setEditCustomerData] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });
  const [chat, setChat] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const message_sidebar_collapse = useSelector(
    (e) => e.toggle_left_bar.isHidden
  );
  // for modal start
  const [modal, setModal] = useState(false);
  const [address, setAddress] = useState(false);
  const [Order, setOrder] = useState(false);
  const [OrderSearch, setSearchOrder] = useState(false);
  const [refund, setRefund] = useState(false);
  // for modal end
  const tickets = [
    {
      id: "1",
      name: "Re: ticket number:YHTGER89B4...",
      des: "Ja Op do 9 jan. 2025 om 14:43 schreef Jarvey Al < tiger.s.ai.2024@gmail.com",
      sender: "Julien C 9",
      time: "10d ago",
    },
    {
      id: "2",
      name: "Re: ticket number:YHTGER89B4...",
      des: "Ja Op do 9 jan. 2025 om 14:43 schreef Jarvey Al < tiger.s.ai.2024@gmail.com",
      sender: "Julien C 9",
      time: "10d ago",
    },
    {
      id: "3",
      name: "Re: ticket number:YHTGER89B4...",
      des: "Ja Op do 9 jan. 2025 om 14:43 schreef Jarvey Al < tiger.s.ai.2024@gmail.com",
      sender: "Julien C 9",
      time: "10d ago",
    },
    {
      id: "4",
      name: "Re: ticket number:YHTGER89B4...",
      des: "Ja Op do 9 jan. 2025 om 14:43 schreef Jarvey Al < tiger.s.ai.2024@gmail.com",
      sender: "Julien C 9",
      time: "10d ago",
    },
    {
      id: "5",
      name: "Re: ticket number:YHTGER89B4...",
      des: "Ja Op do 9 jan. 2025 om 14:43 schreef Jarvey Al < tiger.s.ai.2024@gmail.com",
      sender: "Julien C 9",
      time: "10d ago",
    },
    {
      id: "6",
      name: "Re: ticket number:YHTGER89B4...",
      des: "Ja Op do 9 jan. 2025 om 14:43 schreef Jarvey Al < tiger.s.ai.2024@gmail.com",
      sender: "Julien C 9",
      time: "10d ago",
    },
    {
      id: "7",
      name: "Re: ticket number:YHTGER89B4...",
      des: "Ja Op do 9 jan. 2025 om 14:43 schreef Jarvey Al < tiger.s.ai.2024@gmail.com",
      sender: "Julien C 9",
      time: "10d ago",
    },
    {
      id: "8",
      name: "Re: ticket number:YHTGER89B4...",
      des: "Ja Op do 9 jan. 2025 om 14:43 schreef Jarvey Al < tiger.s.ai.2024@gmail.com",
      sender: "Julien C 9",
      time: "10d ago",
    },
    {
      id: "9",
      name: "Re: ticket number:YHTGER89B4...",
      des: "Ja Op do 9 jan. 2025 om 14:43 schreef Jarvey Al < tiger.s.ai.2024@gmail.com",
      sender: "Julien C 9",
      time: "10d ago",
    },
    {
      id: "10",
      name: "Re: ticket number:YHTGER89B4...",
      des: "Ja Op do 9 jan. 2025 om 14:43 schreef Jarvey Al < tiger.s.ai.2024@gmail.com",
      sender: "Julien C 9",
      time: "10d ago",
    },
    {
      id: "11",
      name: "Re: ticket number:YHTGER89B4...",
      des: "Ja Op do 9 jan. 2025 om 14:43 schreef Jarvey Al < tiger.s.ai.2024@gmail.com",
      sender: "Julien C 9",
      time: "10d ago",
    },
    {
      id: "12",
      name: "Re: ticket number:YHTGER89B4...",
      des: "Ja Op do 9 jan. 2025 om 14:43 schreef Jarvey Al < tiger.s.ai.2024@gmail.com",
      sender: "Julien C 9",
      time: "10d ago",
    },
  ];

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

  const stores = [
    { name: "stores-1" },
    { name: "stores-2" },
    { name: "stores-3" },
    { name: "stores-4" },
    { name: "stores-5" },
  ];
  const customer = [
    {
      icon: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83333 9.83333H8.83333M5.83333 7.16667H10.1667M3.83333 14H12.1667C12.903 14 13.5 13.403 13.5 12.6667V4.33333C13.5 3.59695 12.903 3 12.1667 3H3.83333C3.09695 3 2.5 3.59695 2.5 4.33333V12.6667C2.5 13.403 3.09695 14 3.83333 14Z"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
      text: "This customer has no note.",
    },
    {
      icon: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0011 6.66675C12.3296 7.92257 10.2518 8.66675 8.00016 8.66675C5.74851 8.66675 3.67067 7.92257 1.99919 6.66675M3.16683 3.66675H12.8335C13.5699 3.66675 14.1668 4.2637 14.1668 5.00008V12.0001C14.1668 12.7365 13.5699 13.3334 12.8335 13.3334H3.16683C2.43045 13.3334 1.8335 12.7365 1.8335 12.0001V5.00008C1.8335 4.2637 2.43045 3.66675 3.16683 3.66675Z"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "examples@gmail.com",
    },
    {
      icon: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.16971 6.64524C5.66448 7.6245 6.3209 8.54302 7.13898 9.3611C7.95706 10.1792 8.87558 10.8356 9.85485 11.3304L10.8651 10.3201C11.0809 10.1043 11.4159 10.0626 11.678 10.219L13.4315 11.2651C13.8046 11.4876 13.8685 12.0018 13.5614 12.309L11.7475 14.1229C11.4109 14.4595 10.9187 14.5961 10.4668 14.4468C9.58201 14.1544 8.72192 13.7664 7.9027 13.2825C6.96126 12.7265 6.07382 12.044 5.26493 11.2352C4.45604 10.4263 3.77358 9.53882 3.21756 8.59738C2.73373 7.77817 2.34563 6.91807 2.05327 6.03327C1.90394 5.58134 2.04062 5.08918 2.37717 4.75263L4.19107 2.93873C4.49825 2.63155 5.01245 2.69551 5.235 3.06858L6.28106 4.82205C6.43746 5.08423 6.3958 5.41914 6.17994 5.63501L5.16971 6.64524Z"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      number: "Add Phone Numnber",
    },
  ];
  const shopify = [
    {
      name: "Total spent:",
      value: "€ 1.035,00",
    },
    {
      name: "Orders:",
      value: "1",
    },
    {
      name: "Created at:",
      value: "01/05/2025",
    },
  ];
  const order = [
    {
      name: "Created: ",
      value: " 01/05/2025",
    },
    {
      name: "Total spent:",
      value: "€ 1.035,00",
    },
    {
      name: "Orders:",
      value: "1",
    },
    {
      name: "Created at:",
      value: "01/05/2025",
    },
  ];
  const snipping = [
    {
      li: "Name: Julien C",
    },
    {
      li: "Address1: Heuvelring 40",
    },
    {
      li: "Address2: -",
    },
    {
      li: "City: Tilburg",
    },
    {
      li: "Country: Netherlands",
    },
    {
      li: "Province: -",
    },
    {
      li: "Province code: -",
    },
    {
      li: "Zip: 5038 CL",
    },
  ];
  const wil = [
    {
      icon: (
        <svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.24987 8.83342L3.5058 6.08935C3.18036 5.76391 3.18036 5.23627 3.5058 4.91083L6.24987 2.16675"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width="5"
          height="9"
          viewBox="0 0 5 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.750126 1.16658L3.4942 3.91065C3.81964 4.23609 3.81964 4.76373 3.4942 5.08917L0.750126 7.83325"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_10009_31134)">
            <path
              d="M0.833496 2.6875L2.0835 1.4375M9.16683 2.6875L7.91683 1.4375M5.00016 3.83333V5.5L6.04183 6.54167M8.85433 5.5C8.85433 7.6286 7.12876 9.35417 5.00016 9.35417C2.87157 9.35417 1.146 7.6286 1.146 5.5C1.146 3.3714 2.87157 1.64583 5.00016 1.64583C7.12876 1.64583 8.85433 3.3714 8.85433 5.5Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_10009_31134">
              <rect
                width="10"
                height="10"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];
  const mailIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0011 6.16675C12.3296 7.42257 10.2518 8.16675 8.00016 8.16675C5.74851 8.16675 3.67067 7.42257 1.99919 6.16675M3.16683 3.16675H12.8335C13.5699 3.16675 14.1668 3.7637 14.1668 4.50008V11.5001C14.1668 12.2365 13.5699 12.8334 12.8335 12.8334H3.16683C2.43045 12.8334 1.8335 12.2365 1.8335 11.5001V4.50008C1.8335 3.7637 2.43045 3.16675 3.16683 3.16675Z"
        stroke="#111111"
        strokeOpacity="0.5"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const mail = [];
  const SearchCustomer = [
    {
      name: "Search customer 1",
    },
    {
      name: "Search customer 2",
    },
    {
      name: "Search customer 3",
    },
  ];
  const JarveySupport = [
    {
      name: "Jarvey Support 1",
    },
    {
      name: "Jarvey Support 2",
    },
    {
      name: "Jarvey Support 3",
    },
  ];
  const textEditor = [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.78369 10H11.0418C12.8828 10 14.3752 8.50762 14.3752 6.66667V6.45833C14.3752 4.61738 12.8828 3.125 11.0418 3.125H6.45036C5.52988 3.125 4.78369 3.87119 4.78369 4.79167V10ZM4.78369 10V15.2083C4.78369 16.1288 5.52988 16.875 6.45036 16.875H10.4168M10.8337 16.875H11.8754C13.7163 16.875 15.2087 15.3826 15.2087 13.5417V13.3333C15.2087 11.4924 13.7163 10 11.8754 10H10.8337"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.12516 3.125L12.0835 3.125M16.0418 3.125L12.0835 3.125M12.0835 3.125L7.91683 16.875M7.91683 16.875H3.9585M7.91683 16.875H11.8836"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.7915 17.2917H15.2082M4.7915 3.125V10C4.7915 12.8765 7.12335 15.2083 9.99984 15.2083C12.8763 15.2083 15.2082 12.8765 15.2082 10V3.125"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.62516 9.375C5.27998 9.375 5.00016 9.65482 5.00016 10C5.00016 10.3452 5.27998 10.625 5.62516 10.625V9.375ZM14.3752 10.625C14.7203 10.625 15.0002 10.3452 15.0002 10C15.0002 9.65482 14.7203 9.375 14.3752 9.375V10.625ZM13.1252 13.75C12.78 13.75 12.5002 14.0298 12.5002 14.375C12.5002 14.7202 12.78 15 13.1252 15V13.75ZM13.1252 5C12.78 5 12.5002 5.27982 12.5002 5.625C12.5002 5.97018 12.78 6.25 13.1252 6.25V5ZM6.87516 15C7.22034 15 7.50016 14.7202 7.50016 14.375C7.50016 14.0298 7.22034 13.75 6.87516 13.75V15ZM6.87516 6.25C7.22034 6.25 7.50016 5.97018 7.50016 5.625C7.50016 5.27982 7.22034 5 6.87516 5V6.25ZM5.62516 10.625H14.3752V9.375H5.62516V10.625ZM17.9168 7.29167V12.7083H19.1668V7.29167H17.9168ZM16.8752 13.75H13.1252V15H16.8752V13.75ZM13.1252 6.25H16.8752V5H13.1252V6.25ZM0.833496 7.29167V12.7083H2.0835V7.29167H0.833496ZM3.12516 15H6.87516V13.75H3.12516V15ZM6.87516 5H3.12516V6.25H6.87516V5ZM2.0835 7.29167C2.0835 6.71637 2.54987 6.25 3.12516 6.25V5C1.85951 5 0.833496 6.02601 0.833496 7.29167H2.0835ZM17.9168 12.7083C17.9168 13.2836 17.4505 13.75 16.8752 13.75V15C18.1408 15 19.1668 13.974 19.1668 12.7083H17.9168ZM0.833496 12.7083C0.833496 13.974 1.85951 15 3.12516 15V13.75C2.54987 13.75 2.0835 13.2836 2.0835 12.7083H0.833496ZM19.1668 7.29167C19.1668 6.02601 18.1408 5 16.8752 5V6.25C17.4505 6.25 17.9168 6.71637 17.9168 7.29167H19.1668Z"
            fill="currentColor"
            fillOpacity="0.5"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.48816 11.1785L5.9301 11.6205V11.6205L5.48816 11.1785ZM7.84518 11.1785L8.28712 10.7366L7.84518 11.1785ZM4.79167 3.75H15.2083V2.5H4.79167V3.75ZM16.25 4.79167V15.2083H17.5V4.79167H16.25ZM3.56694 13.9836L5.9301 11.6205L5.04621 10.7366L2.68306 13.0997L3.56694 13.9836ZM3.75 15.2083V13.5417H2.5V15.2083H3.75ZM3.75 13.5417V4.79167H2.5V13.5417H3.75ZM7.40324 11.6205L13.0997 17.3169L13.9836 16.4331L8.28712 10.7366L7.40324 11.6205ZM15.2083 16.25H13.5417V17.5H15.2083V16.25ZM13.5417 16.25H4.79167V17.5H13.5417V16.25ZM5.9301 11.6205C6.33689 11.2137 6.99644 11.2137 7.40324 11.6205L8.28712 10.7366C7.39217 9.84162 5.94116 9.84162 5.04621 10.7366L5.9301 11.6205ZM2.5 15.2083C2.5 16.474 3.52601 17.5 4.79167 17.5V16.25C4.21637 16.25 3.75 15.7836 3.75 15.2083H2.5ZM16.25 15.2083C16.25 15.7836 15.7836 16.25 15.2083 16.25V17.5C16.474 17.5 17.5 16.474 17.5 15.2083H16.25ZM15.2083 3.75C15.7836 3.75 16.25 4.21637 16.25 4.79167H17.5C17.5 3.52601 16.474 2.5 15.2083 2.5V3.75ZM4.79167 2.5C3.52601 2.5 2.5 3.52601 2.5 4.79167H3.75C3.75 4.21637 4.21637 3.75 4.79167 3.75V2.5ZM13.125 7.91667C13.125 8.49196 12.6586 8.95833 12.0833 8.95833V10.2083C13.349 10.2083 14.375 9.18232 14.375 7.91667H13.125ZM12.0833 8.95833C11.508 8.95833 11.0417 8.49196 11.0417 7.91667H9.79167C9.79167 9.18232 10.8177 10.2083 12.0833 10.2083V8.95833ZM11.0417 7.91667C11.0417 7.34137 11.508 6.875 12.0833 6.875V5.625C10.8177 5.625 9.79167 6.65101 9.79167 7.91667H11.0417ZM12.0833 6.875C12.6586 6.875 13.125 7.34137 13.125 7.91667H14.375C14.375 6.65101 13.349 5.625 12.0833 5.625V6.875Z"
            fill="currentColor"
            fillOpacity="0.5"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.20817 6.25008C5.78347 6.25008 6.24984 5.78371 6.24984 5.20841C6.24984 4.63312 5.78347 4.16675 5.20817 4.16675C4.63287 4.16675 4.1665 4.63312 4.1665 5.20841C4.1665 5.78371 4.63287 6.25008 5.20817 6.25008Z"
            fill="currentColor"
          />
          <path
            d="M10.8332 10.784V14.2166C10.8332 14.7222 11.4023 15.0185 11.8166 14.7286L14.2684 13.0123C14.6238 12.7635 14.6238 12.2371 14.2684 11.9883L11.8166 10.272C11.4023 9.98206 10.8332 10.2784 10.8332 10.784Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.6665 3.95841C1.6665 2.69276 2.69252 1.66675 3.95817 1.66675H11.0415C12.3072 1.66675 13.3332 2.69276 13.3332 3.95841V6.66675H16.0415C17.3072 6.66675 18.3332 7.69276 18.3332 8.95841V16.0417C18.3332 17.3074 17.3072 18.3334 16.0415 18.3334H8.95817C7.69252 18.3334 6.6665 17.3074 6.6665 16.0417V13.3334H3.95817C2.69252 13.3334 1.6665 12.3074 1.6665 11.0417V3.95841ZM12.0832 3.95841V6.66675H8.95817C7.77869 6.66675 6.80733 7.55781 6.68052 8.70348L6.26941 8.4294C5.49964 7.91622 4.4968 7.91622 3.72703 8.4294L2.9165 8.96975V3.95841C2.9165 3.38312 3.38287 2.91675 3.95817 2.91675H11.0415C11.6168 2.91675 12.0832 3.38312 12.0832 3.95841ZM5.57603 9.46946L6.6665 10.1964V12.0834H3.95817C3.38287 12.0834 2.9165 11.617 2.9165 11.0417V10.4721L4.42041 9.46946C4.7703 9.2362 5.22614 9.2362 5.57603 9.46946ZM7.9165 16.0417V8.95841C7.9165 8.38312 8.38287 7.91675 8.95817 7.91675H16.0415C16.6168 7.91675 17.0832 8.38312 17.0832 8.95841V16.0417C17.0832 16.617 16.6168 17.0834 16.0415 17.0834H8.95817C8.38287 17.0834 7.9165 16.617 7.9165 16.0417Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M8.74984 7.91675C8.74984 8.6071 8.28347 9.16675 7.70817 9.16675C7.13287 9.16675 6.6665 8.6071 6.6665 7.91675C6.6665 7.22639 7.13287 6.66675 7.70817 6.66675C8.28347 6.66675 8.74984 7.22639 8.74984 7.91675Z"
            fill="currentColor"
          />
          <path
            d="M13.3332 7.91675C13.3332 8.6071 12.8668 9.16675 12.2915 9.16675C11.7162 9.16675 11.2498 8.6071 11.2498 7.91675C11.2498 7.22639 11.7162 6.66675 12.2915 6.66675C12.8668 6.66675 13.3332 7.22639 13.3332 7.91675Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.0085 4.99141C12.2423 2.22519 7.75739 2.22519 4.99117 4.99141C2.22495 7.75761 2.22495 12.2425 4.99117 15.0088C7.75737 17.775 12.2423 17.775 15.0085 15.0087C17.7747 12.2425 17.7747 7.75763 15.0085 4.99141ZM4.10728 4.10753C7.36166 0.853155 12.638 0.853154 15.8924 4.10753C19.1468 7.3619 19.1468 12.6383 15.8924 15.8926C12.638 19.147 7.36164 19.147 4.10728 15.8926C0.852911 12.6383 0.85291 7.36189 4.10728 4.10753Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.20113 11.9152C7.4452 11.6711 7.84093 11.6711 8.08501 11.9152C9.14267 12.9728 10.8575 12.9728 11.9152 11.9152C12.1592 11.6711 12.555 11.6711 12.7991 11.9152C13.0431 12.1592 13.0431 12.555 12.7991 12.799C11.2532 14.3449 8.74694 14.3449 7.20112 12.799C6.95705 12.555 6.95705 12.1592 7.20113 11.9152Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M12.7085 6.45841V5.00008C12.7085 3.50431 11.496 2.29175 10.0002 2.29175C8.50443 2.29175 7.29187 3.50431 7.29187 5.00008V6.45841M5.47364 17.7084H14.5268C15.5445 17.7084 16.3246 16.8042 16.1754 15.7975L15.0026 7.88083C14.8815 7.06361 14.1801 6.45841 13.3539 6.45841H6.64648C5.82034 6.45841 5.11888 7.06361 4.99781 7.88083L3.82497 15.7975C3.67582 16.8042 4.45591 17.7084 5.47364 17.7084Z"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.2915 9.30139V3.95841C2.2915 3.03794 3.0377 2.29175 3.95817 2.29175H9.30115C9.74317 2.29175 10.1671 2.46734 10.4797 2.7799L17.1547 9.4549C17.8055 10.1058 17.8055 11.1611 17.1547 11.8119L11.8117 17.1549C11.1608 17.8058 10.1055 17.8058 9.45466 17.1549L2.77966 10.4799C2.4671 10.1673 2.2915 9.74342 2.2915 9.30139Z"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <path
            d="M6.87484 6.25008C6.87484 6.59526 6.59502 6.87508 6.24984 6.87508C5.90466 6.87508 5.62484 6.59526 5.62484 6.25008C5.62484 5.9049 5.90466 5.62508 6.24984 5.62508C6.59502 5.62508 6.87484 5.9049 6.87484 6.25008Z"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.7915 8.95841V12.7084C4.7915 15.4698 7.03008 17.7084 9.7915 17.7084H10.2082C12.9696 17.7084 15.2082 15.4698 15.2082 12.7084V5.83341C15.2082 3.87741 13.6225 2.29175 11.6665 2.29175C9.7105 2.29175 8.12484 3.87741 8.12484 5.83341V12.3959C8.12484 13.3739 8.91767 14.1667 9.89567 14.1667C10.8737 14.1667 11.6665 13.3739 11.6665 12.3959V6.45841"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];
  const modalTable = [
    {
      product: "Gift Card",
      stock: "49",
      price: "10,00",
    },
    {
      product: "Gift Card",
      stock: "49",
      price: "10,00",
    },
  ];
  const customerType = [
    {
      icon: addIcon1,
      text: "Collaborator",
    },
    {
      icon: addIcon2,
      text: "VIP",
    },
    {
      icon: addIcon3,
      text: "Problematic",
    },
    {
      icon: addIcon4,
      text: "High Returns",
    },
    {
      icon: addIcon5,
      text: "Fraud",
    },
  ];
  const orderTable = [
    {
      logo: order_logo,
      name: "The Videographer Snowboard",
      stock: "45",
      price: "50.00",
      total: "150.00",
    },
    {
      logo: order_logo,
      name: "The Videographer Snowboard",
      stock: "45",
      price: "50.00",
      total: "150.00",
    },
  ];

  const orderSearchTable = [
    {
      logo: order_logo,
      name: "The Videographer Snowboard",
      stock: "45",
    },
    {
      logo: order_logo,
      name: "The Videographer Snowboard",
      stock: "45",
    },
    {
      logo: order_logo,
      name: "The Videographer Snowboard",
      stock: "45",
    },
    {
      logo: order_logo,
      name: "The Videographer Snowboard",
      stock: "45",
    },
    {
      logo: order_logo,
      name: "The Videographer Snowboard",
      stock: "45",
    },
    {
      logo: order_logo,
      name: "The Videographer Snowboard",
      stock: "45",
    },
    {
      logo: order_logo,
      name: "The Videographer Snowboard",
      stock: "45",
    },
  ];

  const orderList = [
    {
      name: "Add Discount",
      value: "€ 0,00",
    },
    {
      name: "Subtotal",
      value: "€150.00",
    },
    {
      name: "Add Shipping",
      value: "€ 0,00",
    },
    {
      name: "Taxes",
      value: "€ 0,00",
    },
    {
      name: "Total",
      value: "€150.00",
    },
  ];
  const location = useLocation();
  const flows = [
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0_12220_111530" x="0" y="0" width="16" height="16">
            <path
              d="M7.99968 14.6654C8.87532 14.6664 9.74254 14.4945 10.5515 14.1594C11.3605 13.8243 12.0953 13.3326 12.7137 12.7127C13.3336 12.0943 13.8253 11.3595 14.1604 10.5505C14.4955 9.74156 14.6674 8.87434 14.6663 7.9987C14.6674 7.12307 14.4955 6.25585 14.1604 5.44687C13.8253 4.63789 13.3336 3.90309 12.7137 3.2847C12.0953 2.66476 11.3605 2.17311 10.5515 1.83801C9.74254 1.50291 8.87532 1.33096 7.99968 1.33204C7.12404 1.33096 6.25682 1.50291 5.44784 1.83801C4.63886 2.17311 3.90407 2.66476 3.28568 3.2847C2.66573 3.90309 2.17409 4.63789 1.83898 5.44687C1.50388 6.25585 1.33193 7.12307 1.33301 7.9987C1.33193 8.87434 1.50388 9.74156 1.83898 10.5505C2.17409 11.3595 2.66573 12.0943 3.28568 12.7127C3.90407 13.3326 4.63886 13.8243 5.44784 14.1594C6.25682 14.4945 7.12404 14.6664 7.99968 14.6654Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M5.33301 8L7.33301 10L11.333 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </mask>
          <g mask="url(#mask0_12220_111530)">
            <path d="M0 0H16V16H0V0Z" fill="#858585" />
          </g>
        </svg>
      ),
      name: "Close",
    },
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99967 6.66536C9.47243 6.66536 10.6663 5.47146 10.6663 3.9987C10.6663 2.52594 9.47243 1.33203 7.99967 1.33203C6.52691 1.33203 5.33301 2.52594 5.33301 3.9987C5.33301 5.47146 6.52691 6.66536 7.99967 6.66536Z"
            fill="#858585"
          />
          <path
            d="M13.3337 11.668C13.3337 13.3246 13.3337 14.668 8.00032 14.668C2.66699 14.668 2.66699 13.3246 2.66699 11.668C2.66699 10.0113 5.05499 8.66797 8.00032 8.66797C10.9457 8.66797 13.3337 10.0113 13.3337 11.668Z"
            fill="#858585"
          />
        </svg>
      ),
      name: "Assign User",
    },
  ];

  const [more, setMore] = useState(false);
  const [summarise, setSummarise] = useState(false);
  // Ticket fields (See More + validation)
  const [showMoreFields, setShowMoreFields] = useState(false);
  const [contactReason, setContactReason] = useState("");
  const [productField, setProductField] = useState("");
  const [resolution, setResolution] = useState("");
  const [showRequiredToast, setShowRequiredToast] = useState(false);
  const [requiredToastMsg, setRequiredToastMsg] = useState(
    "Resolution is required."
  );

  const moreList = [
    `Add tag`,
    `Assign to team`,
    `Mark as unread`,
    `Mark as read`,
    `Apply macro`,
    `Export tickets`,
  ];
  const summariseList = [
    `Merge Ticket`,
    `Mark as unread`,
    `Show all events`,
    `Print Ticket`,
    `Mark as spam`,
  ];

  // Options for ticket fields
  const contactReasonOptions = [
    { name: "Shipping delay" },
    { name: "Damaged item" },
    { name: "Wrong item received" },
    { name: "General inquiry" },
  ];
  const productOptions = [
    { name: "Product A" },
    { name: "Product B" },
    { name: "Product C" },
  ];
  const resolutionOptions = [
    { name: "Refund" },
    { name: "Replacement" },
    { name: "Provided information" },
  ];

  // Validate required ticket fields on send
  const handleSend = (closeAfterSend = false) => {
    if (!resolution) {
      setRequiredToastMsg("Resolution is required.");
      setShowRequiredToast(true);
      setTimeout(() => setShowRequiredToast(false), 2200);
      return;
    }
    // Placeholder for actual send flow
    // ... integrate with API/send action here when available
    console.log("Sending reply", {
      contactReason,
      product: productField,
      resolution,
      closeAfterSend,
      replyContent,
    });
  };

  // Resize handlers

  const handleMouseDownLeft = (e) => {
    e.preventDefault();
    initialMouseX.current = e.clientX;
    initialLeftWidth.current = leftWidth;
    setIsResizingLeft(true);
  };

  const handleMouseDownRight = (e) => {
    e.preventDefault();
    initialMouseX.current = e.clientX;
    initialRightWidth.current = rightWidth;
    setIsResizingRight(true);
  };

  const handleMouseDownTyping = (e) => {
    e.preventDefault();
    initialMouseY.current = e.clientY;
    initialTypingHeight.current = typingHeight;
    setIsResizingTyping(true);
  };

  const handleDoubleClickLeft = () => {
    if (leftWidth > MIN_LEFT_WIDTH + 20) {
      setLeftWidth(MIN_LEFT_WIDTH); // Collapse to minimum
    } else {
      setLeftWidth(280); // Expand to default
    }
  };

  const handleDoubleClickRight = () => {
    if (rightWidth > MIN_RIGHT_WIDTH + 20) {
      setRightWidth(MIN_RIGHT_WIDTH); // Collapse to minimum
    } else {
      setRightWidth(320); // Expand to default
    }
  };

  const handleDoubleClickTyping = () => {
    if (typingHeight > MIN_TYPING_HEIGHT + 20) {
      setTypingHeight(MIN_TYPING_HEIGHT); // Collapse to minimum
    } else {
      setTypingHeight(280); // Expand to default
    }
  };

  const handleMouseMove = (e) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (isResizingLeft) {
        const deltaX = e.clientX - initialMouseX.current;
        const newWidth = Math.max(
          MIN_LEFT_WIDTH,
          Math.min(MAX_LEFT_WIDTH, initialLeftWidth.current + deltaX)
        );
        setLeftWidth(newWidth);
      }
      if (isResizingRight) {
        const deltaX = e.clientX - initialMouseX.current;
        const newWidth = Math.max(
          MIN_RIGHT_WIDTH,
          Math.min(MAX_RIGHT_WIDTH, initialRightWidth.current - deltaX)
        );
        setRightWidth(newWidth);
      }
      if (isResizingTyping) {
        const deltaY = e.clientY - initialMouseY.current;
        const newHeight = Math.max(
          MIN_TYPING_HEIGHT,
          Math.min(MAX_TYPING_HEIGHT, initialTypingHeight.current - deltaY)
        );
        setTypingHeight(newHeight);
      }
    });
  };

  const handleMouseUp = () => {
    setIsResizingLeft(false);
    setIsResizingRight(false);
    setIsResizingTyping(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const resetLayout = () => {
    setLeftWidth(280);
    setRightWidth(320);
    setTypingHeight(280);
  };

  // Resize indicator component
  const ResizeIndicator = () => {
    if (!isResizingLeft && !isResizingRight && !isResizingTyping) return null;

    const getConstraintText = (value, min, max, label) => {
      if (value <= min) return `${label}: ${value}px (MIN)`;
      if (value >= max) return `${label}: ${value}px (MAX)`;
      return `${label}: ${value}px`;
    };

    return (
      <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm text-white px-4 py-3 rounded-lg text-sm z-50 pointer-events-none shadow-xl border border-white/20 animate-in fade-in slide-in-from-top-2 duration-200">
        <div className="flex gap-6 font-mono">
          <span
            className={`transition-colors duration-200 ${
              isResizingLeft ? "text-blue-300" : "text-gray-300"
            }`}
          >
            {getConstraintText(
              leftWidth,
              MIN_LEFT_WIDTH,
              MAX_LEFT_WIDTH,
              "Left"
            )}
          </span>
          <span
            className={`transition-colors duration-200 ${
              isResizingRight ? "text-blue-300" : "text-gray-300"
            }`}
          >
            {getConstraintText(
              rightWidth,
              MIN_RIGHT_WIDTH,
              MAX_RIGHT_WIDTH,
              "Right"
            )}
          </span>
          <span
            className={`transition-colors duration-200 ${
              isResizingTyping ? "text-blue-300" : "text-gray-300"
            }`}
          >
            {getConstraintText(
              typingHeight,
              MIN_TYPING_HEIGHT,
              MAX_TYPING_HEIGHT,
              "Typing"
            )}
          </span>
        </div>
      </div>
    );
  };

  // Event listeners for resize
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (isResizingLeft || isResizingRight || isResizingTyping) {
        handleMouseMove(e);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isResizingLeft || isResizingRight || isResizingTyping) {
        handleMouseUp();
      }
    };

    if (isResizingLeft || isResizingRight || isResizingTyping) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
      document.body.style.cursor = isResizingTyping
        ? "row-resize"
        : "col-resize";
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isResizingLeft, isResizingRight, isResizingTyping]);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleReplyChange = (content) => {
    setReplyContent(content);
  };

  const { isAvailable } = useAvailability();

  // Refs for click-away detection
  const moreRef = useRef(null);
  const summariseRef = useRef(null);
  const addCustomerRef = useRef(null);
  const orderSearchRef = useRef(null);

  // Robust global click-away using capture phase with fresh state refs
  const openStatesRef = useRef({
    more: false,
    summarise: false,
    addCustomer: false,
    orderSearch: false,
  });
  useEffect(() => {
    openStatesRef.current = {
      more,
      summarise,
      addCustomer,
      orderSearch: OrderSearch,
    };
  }, [more, summarise, addCustomer, OrderSearch]);

  useEffect(() => {
    const handleGlobalClickAway = (e) => {
      const {
        more: m,
        summarise: s,
        addCustomer: a,
        orderSearch: o,
      } = openStatesRef.current;
      if (!m && !s && !a && !o) return;
      const target = e.target;
      const insideMore = moreRef.current && moreRef.current.contains(target);
      const insideSummarise =
        summariseRef.current && summariseRef.current.contains(target);
      const insideAddCustomer =
        addCustomerRef.current && addCustomerRef.current.contains(target);
      const insideOrderSearch =
        orderSearchRef.current && orderSearchRef.current.contains(target);
      if (
        insideMore ||
        insideSummarise ||
        insideAddCustomer ||
        insideOrderSearch
      )
        return;
      // Clicked outside all: close everything
      if (m) setMore(false);
      if (s) setSummarise(false);
      if (a) setAddCustomer(false);
      if (o) setSearchOrder(false);
    };
    // Capture phase to run before other handlers can stop propagation
    document.addEventListener("click", handleGlobalClickAway, true);
    document.addEventListener("touchstart", handleGlobalClickAway, true);
    return () => {
      document.removeEventListener("click", handleGlobalClickAway, true);
      document.removeEventListener("touchstart", handleGlobalClickAway, true);
    };
  }, []);

  return (
    <>
      {editCustomerModalOpen && (
        <Modal
          innerClass="max-w-[985px]"
          onClick={() => setEditCustomerModalOpen(false)}
          closeIconHide={false}
        >
          <div className="mb-4 md:mb-5">
            <h2 className="text-2xl text-black font-inter font-semibold leading-normal">
              Edit Customer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-5">
            <div className="col-span-2 md:col-span-1">
              <div className={`w-full`}>
                <label
                  htmlFor="drop_inline"
                  className={`relative z-[1] rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[180px] lg:min-h-[291px]  mx-auto flex items-center flex-col justify-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                  >
                    <path
                      d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337"
                      stroke="#7856FF"
                      strokeWidth="2.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className={`mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs`}
                  >
                    <span className={`block text-primary`}>Upload Image</span>
                  </span>
                  <input type="file" id="drop_inline" className="hidden" />
                </label>
              </div>
            </div>
            <div className="col-span-2">
              <div className="lg:gap-5 mb-3 md:mb-4 lg:mb-5">
                <Input
                  className="mb-1"
                  type="text"
                  placeholder="Type here"
                  label="Name"
                  required={true}
                  value={editCustomerData.name}
                  onChange={(e) =>
                    setEditCustomerData({
                      ...editCustomerData,
                      name: e.target.value,
                    })
                  }
                />
                <label
                  htmlFor="note_inline"
                  className="text-sm text-heading font-semibold leading-[150%] mb-1"
                >
                  Note <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="note_inline"
                  className="min-h-[136px] w-full py-2.5 px-3 border border-solid border-[#E2E4E9] rounded-[10px]"
                  placeholder="Type here"
                  value={editCustomerData.note}
                  onChange={(e) =>
                    setEditCustomerData({
                      ...editCustomerData,
                      note: e.target.value,
                    })
                  }
                />
                <div className="flex gap-2 mb-5">
                  <div className="w-full">
                    <Input
                      className="mb-1 w-full"
                      type="text"
                      placeholder="Type here"
                      label="Phone"
                      required={true}
                      value={editCustomerData.phone}
                      onChange={(e) =>
                        setEditCustomerData({
                          ...editCustomerData,
                          phone: e.target.value,
                        })
                      }
                    />
                    <a
                      href="#"
                      className="text-xs text-primary font-medium !leading-[150%] !underline"
                    >
                      + Add new
                    </a>
                  </div>
                </div>
                <div className="flex gap-2 mb-5">
                  <div className="w-full">
                    <Input
                      className="mb-1 w-full"
                      type="text"
                      placeholder="Type here"
                      label="Email"
                      required={true}
                      value={editCustomerData.email}
                      onChange={(e) =>
                        setEditCustomerData({
                          ...editCustomerData,
                          email: e.target.value,
                        })
                      }
                    />
                    <a
                      href="#"
                      className="text-xs text-primary font-medium !leading-[150%] !underline"
                    >
                      + Add new
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="btn text-primary border-primary"
              onClick={() => setEditCustomerModalOpen(false)}
            >
              Cancel
            </button>
            <button className="btn bg-primary text-white">Save Changes</button>
          </div>
        </Modal>
      )}
      {/* Resize overlay for smoother interaction */}
      {(isResizingLeft || isResizingRight || isResizingTyping) && (
        <div
          className={`fixed inset-0 z-40 ${
            isResizingTyping ? "cursor-row-resize" : "cursor-col-resize"
          }`}
          style={{
            backgroundColor: "transparent",
            pointerEvents: "auto",
          }}
        />
      )}

      <Top title="Tickets">
        <div className="flex items-center gap-2">
          <Dropdown
            className="mb-0 relative z-10"
            btnClass="!min-w-[105px] !h-[34px] !text-primary !text-xs font-medium"
            placeholder="All Stores"
            items={stores}
          />
          <button
            onClick={resetLayout}
            className="btn !min-w-[80px] !h-[34px] !text-xs font-medium text-gray-600 border-gray-300 hover:bg-gray-50"
            title="Reset layout to default sizes"
          >
            Reset Layout
          </button>
        </div>
      </Top>
      <div className="flex h-[calc(100vh-88px)] overflow-hidden">
        {/* Left sidebar */}
        <div
          className={`h-full bg-[#F7F7F7] left flex flex-col flex-shrink-0 ${
            message_sidebar_collapse ? "hidden overflow-hidden" : "md:block"
          } ${
            isResizingLeft
              ? "transition-none"
              : "transition-all duration-200 ease-out"
          }`}
          style={{
            width: message_sidebar_collapse ? 0 : `${leftWidth}px`,
            minWidth: message_sidebar_collapse ? 0 : `${MIN_LEFT_WIDTH}px`,
            maxWidth: message_sidebar_collapse ? 0 : `${MAX_LEFT_WIDTH}px`,
            willChange: isResizingLeft ? "width" : "auto",
          }}
        >
          {/* Left sidebar header - fixed */}
          <div className="flex-shrink-0">
            <div className="p-2 md:p-3 !pb-0">
              <TableFilter
                hideSortDrop={true}
                textHidden
                BtnClass="!p-2"
                className="relative !flex-nowrap md:!justify-end !mb-[8.5px]"
                searchClass="!mr-0"
              />
            </div>
            <div className="flex items-center gap-4 p-2 md:p-3">
              <div className="flex items-center gap-2 mr-auto">
                <Checkbox
                  id="all"
                  checked={isAllChecked}
                  onChange={handleSelectAll}
                />
                <label
                  htmlFor="all"
                  className="text-[#0A0D14] font-medium font-sm font-inter cursor-pointer select-none"
                >
                  Select All
                </label>
              </div>
              {flows.map((item, index) => (
                <button
                  key={index}
                  title={item.name}
                  className="size-4 flex-shrink-0"
                >
                  {item.icon}
                </button>
              ))}
              <div
                className="relative z-[1] flex items-center flex-shrink-0"
                ref={moreRef}
              >
                <button
                  title="More"
                  className={`size-5 flex items-center justify-center text-[#858585] rounded-md ${
                    more === true && "text-white bg-black"
                  }`}
                  onClick={() => setMore(!more)}
                >
                  <svg
                    width="12"
                    height="4"
                    viewBox="0 0 12 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33333 0.667969C0.6 0.667969 0 1.26797 0 2.0013C0 2.73463 0.6 3.33463 1.33333 3.33463C2.06667 3.33463 2.66667 2.73463 2.66667 2.0013C2.66667 1.26797 2.06667 0.667969 1.33333 0.667969ZM10.6667 0.667969C9.93333 0.667969 9.33333 1.26797 9.33333 2.0013C9.33333 2.73463 9.93333 3.33463 10.6667 3.33463C11.4 3.33463 12 2.73463 12 2.0013C12 1.26797 11.4 0.667969 10.6667 0.667969ZM6 0.667969C5.26667 0.667969 4.66667 1.26797 4.66667 2.0013C4.66667 2.73463 5.26667 3.33463 6 3.33463C6.73333 3.33463 7.33333 2.73463 7.33333 2.0013C7.33333 1.26797 6.73333 0.667969 6 0.667969Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                {more && (
                  <div className="absolute top-full right-0 mt-2 min-w-[233px] rounded-2xl bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)] p-4 md:p-5 flex flex-col gap-4 z-10">
                    {moreList.map((item, index) => (
                      <button
                        onClick={() => setMore(false)}
                        className="text-heading font-medium text-left"
                        key={index}
                      >
                        {item}{" "}
                      </button>
                    ))}
                    <button
                      onClick={() => setMore(false)}
                      className="text-[#FE4333] text-left"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Left sidebar content - scrollable */}
          <div
            className="flex-1 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 88px - 120px)" }}
          >
            {tickets.map((item, index) => (
              <div
                className={`p-2 md:p-3 border-b border-[#E2E4E9] relative group  ${
                  location.pathname === `/app/ticket/${index + 1}`
                    ? "bg-[linear-gradient(90deg,#F4F2FF_0%,#FFF_100%)] border-r-0"
                    : ""
                } hover:bg-[linear-gradient(90deg,#F4F2FF_0%,#FFF_100%)] hover:border-r-0`}
                key={index}
              >
                <div
                  className={`absolute top-0 left-0 w-0.5 h-full group-hover:bg-primary ${
                    location.pathname === `/app/ticket/${index + 1}`
                      ? "bg-primary"
                      : ""
                  }`}
                />
                <div className="flex items-center justify-between">
                  <Checkbox
                    id={`checkbox_${item.id}`}
                    checked={selected.includes(item.id)}
                    onChange={() => handleSelect(item.id)}
                    className="mb-2"
                  />
                  <span className="text-[#858585] text-xs">{item.time} </span>
                </div>
                <NavLink to={`/app/ticket/${index + 1}`} className="t_i">
                  <h5 className="text-xs 2xl:text-sm line-clamp-1">
                    {item.name}{" "}
                  </h5>
                  <p className="text-xs mt-1 mb-2">{item.des} </p>
                  <h4 className="text-base 2xl:text-lg">{item.sender} </h4>
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        {/* Left resize handle */}
        {!message_sidebar_collapse && (
          <div
            ref={leftResizerRef}
            className={`hidden md:block w-1 cursor-col-resize transition-all duration-200 relative group flex-shrink-0 ${
              isResizingLeft
                ? "bg-blue-500 shadow-lg"
                : "bg-gray-200 hover:bg-blue-400"
            }`}
            onMouseDown={handleMouseDownLeft}
            onDoubleClick={handleDoubleClickLeft}
            style={{
              height: "100%",
              transform: isResizingLeft ? "scaleX(2)" : "scaleX(1)",
              zIndex: isResizingLeft ? 50 : 10,
            }}
            title="Drag to resize left panel • Double-click to toggle"
          >
            <div
              className={`absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-400 transition-opacity duration-200 ${
                isResizingLeft
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            />
          </div>
        )}

        {/* Middle section */}
        <div
          className={`h-full mid flex-1 flex flex-col min-w-0 ${
            isResizingLeft || isResizingRight || isResizingTyping
              ? "transition-none"
              : "transition-all duration-200 ease-out"
          }`}
          style={{
            willChange:
              isResizingLeft || isResizingRight || isResizingTyping
                ? "width"
                : "auto",
          }}
        >
          <div className="p-3 md:p-4 border-b border-stroke flex-shrink-0">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-lg inline-flex items-center gap-2">
                <button className="btn h-7 px-3 min-w-max font-medium text-xs capitalize text-primary border-primary">
                  close
                </button>
                <button
                  onClick={() => dispatch(handleChange())}
                  className="relative top-0.5 hidden lg:block hover:opacity-80"
                >
                  {messageFieldCollapse}
                </button>
                <span>Wil niet meer</span>
              </h4>
              <div className="flex items-center gap-2">
                <div className="relative z-[1] flex items-center">
                  <button
                    title="More"
                    className={`btn gap-1 h-6 min-w-[96px] px-0 !text-xs text-gray hover:text-white hover:bg-black`}
                  >
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 2.75H10.5M6 5.25H10.5M1.5 7.75H10.5M1.5 10.25H10.5"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 5.25C3.69036 5.25 4.25 4.69036 4.25 4C4.25 3.30964 3.69036 2.75 3 2.75C2.30964 2.75 1.75 3.30964 1.75 4C1.75 4.69036 2.30964 5.25 3 5.25Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Summarise
                  </button>
                </div>
                {wil.map((item, index) => (
                  <button
                    key={index}
                    className="hover:bg-primary text-[#111111]/50 hover:text-white size-6 rounded-lg border border-stroke flex items-center justify-center"
                  >
                    {item.icon}
                  </button>
                ))}
                <div className="relative z-[1]" ref={summariseRef}>
                  <button
                    onClick={() => setSummarise(!summarise)}
                    className={`hover:bg-primary text-[#111111]/50 hover:text-white size-6 rounded-lg border border-stroke flex items-center justify-center ${
                      summarise === true && "text-white bg-black"
                    }`}
                  >
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.00016 2.47909C5.23028 2.47909 5.41683 2.29254 5.41683 2.06242C5.41683 1.8323 5.23028 1.64575 5.00016 1.64575C4.77004 1.64575 4.5835 1.8323 4.5835 2.06242C4.5835 2.29254 4.77004 2.47909 5.00016 2.47909Z"
                        fill="black"
                      />
                      <path
                        d="M5.00016 5.91659C5.23028 5.91659 5.41683 5.73004 5.41683 5.49992C5.41683 5.2698 5.23028 5.08325 5.00016 5.08325C4.77004 5.08325 4.5835 5.2698 4.5835 5.49992C4.5835 5.73004 4.77004 5.91659 5.00016 5.91659Z"
                        fill="black"
                      />
                      <path
                        d="M5.00016 9.35409C5.23028 9.35409 5.41683 9.16754 5.41683 8.93742C5.41683 8.7073 5.23028 8.52075 5.00016 8.52075C4.77004 8.52075 4.5835 8.7073 4.5835 8.93742C4.5835 9.16754 4.77004 9.35409 5.00016 9.35409Z"
                        fill="black"
                      />
                      <path
                        d="M5.00016 2.47909C5.23028 2.47909 5.41683 2.29254 5.41683 2.06242C5.41683 1.8323 5.23028 1.64575 5.00016 1.64575C4.77004 1.64575 4.5835 1.8323 4.5835 2.06242C4.5835 2.29254 4.77004 2.47909 5.00016 2.47909Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.00016 5.91659C5.23028 5.91659 5.41683 5.73004 5.41683 5.49992C5.41683 5.2698 5.23028 5.08325 5.00016 5.08325C4.77004 5.08325 4.5835 5.2698 4.5835 5.49992C4.5835 5.73004 4.77004 5.91659 5.00016 5.91659Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.00016 9.35409C5.23028 9.35409 5.41683 9.16754 5.41683 8.93742C5.41683 8.7073 5.23028 8.52075 5.00016 8.52075C4.77004 8.52075 4.5835 8.7073 4.5835 8.93742C4.5835 9.16754 4.77004 9.35409 5.00016 9.35409Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {summarise && (
                    <div className="absolute top-full right-0 mt-2 min-w-[233px] rounded-2xl bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)] p-4 md:p-5 flex flex-col gap-4">
                      {summariseList.map((item, index) => (
                        <button
                          onClick={() => setSummarise(false)}
                          className="text-heading hover:text-primary font-medium text-left"
                          key={index}
                        >
                          {item}{" "}
                        </button>
                      ))}
                      <button
                        onClick={() => setSummarise(false)}
                        className="text-[#FE4333] text-left"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-3 md:gap-6 lg:gpa-10">
              <button className="text-primary font-medium text-xs flex items-center gap-1">
                Add tags
              </button>
              <button className="text-primary font-medium text-xs flex items-center gap-1">
                Unassigned
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M8.33317 3.74988L5.5891 6.49396C5.26366 6.8194 4.73603 6.8194 4.41059 6.49396L1.6665 3.74988"
                    stroke="#111111"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="font-medium text-xs flex items-center gap-1">
                Contact Reason
                <span className="bg-primary size-5 rounded-[5px] flex items-center justify-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 1.5625V5M5 5V8.4375M5 5H1.5625M5 5H8.4375"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <button className="font-medium text-xs flex items-center gap-1">
                Product
                <span className="bg-primary size-5 rounded-[5px] flex items-center justify-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 1.5625V5M5 5V8.4375M5 5H1.5625M5 5H8.4375"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <button
                type="button"
                onClick={() => setShowMoreFields(!showMoreFields)}
                className="text-primary font-medium text-xs md:ml-auto"
              >
                {showMoreFields ? "See Less" : "See More"}
              </button>
            </div>
            {showMoreFields && (
              <button className="font-medium text-xs flex items-center gap-1 mt-3">
                Resolution
                <span className="bg-primary size-5 rounded-[5px] flex items-center justify-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 1.5625V5M5 5V8.4375M5 5H1.5625M5 5H8.4375"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            )}
          </div>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto">
            {/* Messages area */}
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-start gap-2 max-w-[393px]">
                  <div className="size-[30px] flex items-center justify-center rounded-full bg-[#FFF0EF] relative">
                    <span className="uppercase font-semibold text-xs font-inter !leading-[1.5] bg-[linear-gradient(114deg,#FF6B5F_49.41%,#FFC563_110.43%)] bg-clip-text text-transparent">
                      jc
                    </span>
                    {/* Status dot */}
                  </div>
                  <div className="w-full bg-[#F7F7F7] p-3 rounded-xl">
                    <div className="flex items-center justify-between">
                      <h6 className="text-xs">Julien C</h6>
                      <span className="text-xs">01/09/2025</span>
                    </div>
                    <p className="text-xs mt-1 text-[#0A0D14]">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start flex-row-reverse ml-auto gap-2">
                  <div className="size-[30px] flex items-center justify-center rounded-full bg-[#FFF0EF] flex-none relative">
                    <span className="uppercase font-semibold text-xs font-inter !leading-[1.5] bg-[linear-gradient(114deg,#FF6B5F_49.41%,#FFC563_110.43%)] bg-clip-text text-transparent">
                      jc
                    </span>
                    {/* Status dot */}
                    <div
                      style={{
                        backgroundColor: isAvailable ? "#00FF00" : "#FF0000",
                      }}
                      className={`absolute bottom-0 left-0 size-2.5 rounded-full border border-white ${
                        isAvailable ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                  </div>
                  <div className="w-full p-3 bg-primary rounded-xl max-w-[393px] text-white">
                    <div className="flex items-center justify-between">
                      <h6 className="text-xs text-white">Julien C</h6>
                      <span className="text-xs text-white/70">01/09/2025</span>
                    </div>
                    <p className="text-xs mt-1 text-white">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start flex-row-reverse ml-auto gap-2">
                  <div className="size-[30px] flex items-center justify-center rounded-full bg-[#FFF0EF] flex-none relative">
                    <span className="uppercase font-semibold text-xs font-inter !leading-[1.5] bg-[linear-gradient(114deg,#FF6B5F_49.41%,#FFC563_110.43%)] bg-clip-text text-transparent">
                      jc
                    </span>
                    {/* Status dot */}
                    <div
                      style={{
                        backgroundColor: isAvailable ? "#00FF00" : "#FF0000",
                      }}
                      className={`absolute bottom-0 left-0 size-2.5 rounded-full border border-white ${
                        isAvailable ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                  </div>
                  <div className="w-full p-3 bg-primary rounded-xl max-w-[393px] text-white">
                    <div className="flex items-center justify-between">
                      <h6 className="text-xs text-white">Julien C</h6>
                      <span className="text-xs text-white/70">01/09/2025</span>
                    </div>
                    <p className="text-xs mt-1 text-white">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical resize handle for typing area */}
            <div
              ref={typingResizerRef}
              className={`hidden md:block h-1 cursor-row-resize transition-all duration-200 relative group ${
                isResizingTyping
                  ? "bg-blue-500 shadow-lg"
                  : "bg-gray-200 hover:bg-blue-400"
              }`}
              onMouseDown={handleMouseDownTyping}
              onDoubleClick={handleDoubleClickTyping}
              style={{
                transform: isResizingTyping ? "scaleY(2)" : "scaleY(1)",
                zIndex: isResizingTyping ? 50 : 10,
              }}
              title="Drag to resize typing area • Double-click to toggle"
            >
              <div
                className={`absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-blue-400 transition-opacity duration-200 ${
                  isResizingTyping
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </div>

            {/* Typing area */}
            <div
              className="bg-[#F8F6FF]"
              style={{
                height: `${typingHeight}px`,
                minHeight: `${MIN_TYPING_HEIGHT}px`,
                maxHeight: `${MAX_TYPING_HEIGHT}px`,
              }}
            >
              <div className="p-4 pt-3 h-full flex flex-col overflow-y-auto">
                <div className="flex items-end justify-center flex-wrap md:flex-nowrap gap-4 mb-2">
                  <Dropdown
                    className="mb-0 "
                    btnClass="!min-w-[75px] !rounded-md !h-[34px]"
                    placeholder=""
                    leftIcon={mailIcon}
                    items={mail}
                  />
                  <Dropdown
                    className="mb-0 grow"
                    btnClass="!min-w-[75px] !rounded-md !h-[34px] text-[#111111]/50"
                    label="To"
                    placeholder="Search Customer "
                    items={SearchCustomer}
                  />
                  <Dropdown
                    className="mb-0 grow"
                    btnClass="!min-w-[75px] !rounded-md !h-[34px] text-[#111111]/50"
                    label="From"
                    placeholder="Jarvey Support "
                    items={JarveySupport}
                  />
                </div>
                <div className="flex items-center gap-2 py-2.5 border-y border-stroke">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1663 9.24528C13.1663 15.8035 2.83301 15.8107 2.83301 9.24528C2.83301 4.31646 7.99967 1.5 7.99967 1.5C7.99967 1.5 13.1663 4.31646 13.1663 9.24528Z"
                      stroke="#111111"
                      strokeOpacity="0.5"
                      strokeWidth="1.25"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.4997 11.6412C10.4997 15.0066 5.49967 15.0103 5.49967 11.6412C5.49967 9.11196 7.99967 7.66667 7.99967 7.66667C7.99967 7.66667 10.4997 9.11196 10.4997 11.6412Z"
                      stroke="#111111"
                      strokeOpacity="0.5"
                      strokeWidth="1.25"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="max-w-[280px] text-xs !leading-[1.66] text-gray">
                    Search Predefined Responses by name, tag body
                  </p>
                </div>
                <div className="flex-1 ">
                  {!chat ? (
                    <button
                      onClick={() => setChat(true)}
                      className="max-w-[228px] text-xs !leading-[1.66] text-gray my-3 hover:text-primary"
                    >
                      Click here to reply
                    </button>
                  ) : (
                    <div className="my-3 flex-1">
                      <RichTextEditor
                        value={replyContent}
                        onChange={handleReplyChange}
                        placeholder="Type your reply here..."
                        className="bg-white"
                        minHeight="120px"
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2 mt-auto">
                  <p className="text-xs !leading-[1.66] text-gray">
                    Suggest Predefined Responses
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="btn !text-gray !rounded !bg-white !h-9 text-xs md:!text-sm">
                      Generic: How can i help?
                    </button>
                    <button className="btn !text-gray !rounded !bg-white !h-9 text-xs md:!text-sm">
                      Generic:Sign off
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2 mt-3">
                  <ul className="flex items-center gap-2">
                    {textEditor.map((item, index) => (
                      <li key={index}>
                        <button className="text-[#111111]/50 hover:text-primary">
                          {item.icon}{" "}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleSend(true)}
                      className="btn !border-primary !text-primary hover:!text-white !min-w-[unset] !px-4"
                    >
                      Send $ Close
                    </button>
                    <button
                      onClick={() => handleSend(false)}
                      className="btn !min-w-[63px] !px-0 !bg-primary !text-white"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right resize handle */}
        <div
          ref={rightResizerRef}
          className={`hidden xl:block w-1 cursor-col-resize transition-all duration-200 relative group flex-shrink-0 ${
            isResizingRight
              ? "bg-blue-500 shadow-lg"
              : "bg-gray-200 hover:bg-blue-400"
          }`}
          onMouseDown={handleMouseDownRight}
          onDoubleClick={handleDoubleClickRight}
          style={{
            height: "100%",
            transform: isResizingRight ? "scaleX(2)" : "scaleX(1)",
            zIndex: isResizingRight ? 50 : 10,
          }}
          title="Drag to resize right panel • Double-click to toggle"
        >
          <div
            className={`absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-400 transition-opacity duration-200 ${
              isResizingRight
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
          />
        </div>

        {/* Right sidebar */}
        <div
          className={`h-full md:hidden xl:block right border-l border-stroke flex flex-col flex-shrink-0 ${
            isResizingRight
              ? "transition-none"
              : "transition-all duration-200 ease-out"
          }`}
          style={{
            width: `${rightWidth}px`,
            minWidth: `${MIN_RIGHT_WIDTH}px`,
            maxWidth: `${MAX_RIGHT_WIDTH}px`,
            willChange: isResizingRight ? "width" : "auto",
          }}
        >
          {/* Right sidebar header - fixed */}
          <div className="flex-shrink-0">
            <div className="pt-3">
              <div className="border-b border-solid border-stroke flex items-center">
                {["Customer Details", "AI Feedback"].map((item, index) => (
                  <button
                    onClick={() => setActiveTab2(item)}
                    key={index}
                    className={`first:ml-4 last:mr-4 grow font-inter font-medium text-xs 2xl:text-sm px-4 md:px-5 pb-3 border-b border-solid ${
                      item === activeTab2
                        ? "border-btn text-btn"
                        : "border-transparent text-heading"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <TableFilterCustom
                hideSortDrop={true}
                textHidden
                BtnClass="!p-2"
                className="mt-3 md:mt-4 !mb-0 px-4 !py-0 !flex-nowrap md:!justify-end relative z-[2]"
                searchClass="!mr-0"
              />
            </div>
          </div>

          {/* Right sidebar content - scrollable */}
          <div
            className="flex-1 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 88px - 120px)" }}
          >
            <div className="py-3 px-4 flex flex-col gap-3 border-b border-stroke">
              <div className="flex items-center gap-3 ">
                <div className="size-[30px] flex items-center justify-center rounded-full bg-[#FFF0EF] relative">
                  <span className="uppercase font-semibold text-xs font-inter !leading-[1.5] bg-[linear-gradient(114deg,#FF6B5F_49.41%,#FFC563_110.43%)] bg-clip-text text-transparent">
                    jc
                  </span>
                  {/* Status dot */}
                  <div
                    style={{
                      backgroundColor: isAvailable ? "#00FF00" : "#FF0000",
                    }}
                    className={`absolute bottom-0 left-0 size-2.5 rounded-full border border-white ${
                      isAvailable ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                </div>
                <Link to="/app/customer/1" className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <h4>Julien C</h4>
                    <span className="text-xs text-white font-normal !leading-[1.5] px-[5px] py-px rounded-full font-inter bg-[linear-gradient(114deg,#FF6B5F_49.41%,#FFC563_110.43%)]">
                      ВЕТА
                    </span>
                  </div>
                </Link>
              </div>
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-1 text-xs">
                  Customer Fields
                  <button>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.16667 3H4.63333C3.8866 3 3.51323 3 3.22801 3.14532C2.97713 3.27316 2.77316 3.47713 2.64532 3.72801C2.5 4.01323 2.5 4.3866 2.5 5.13333V11.8667C2.5 12.6134 2.5 12.9868 2.64532 13.272C2.77316 13.5229 2.97713 13.7268 3.22801 13.8547C3.51323 14 3.8866 14 4.63333 14H11.3667C12.1134 14 12.4868 14 12.772 13.8547C13.0229 13.7268 13.2268 13.5229 13.3547 13.272C13.5 12.9868 13.5 12.6134 13.5 11.8667V10.3333M9.16667 3H13.5M13.5 3V7.33333M13.5 3L7.33333 9.16667"
                        stroke="#7856FF"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="relative" ref={addCustomerRef}>
                  <div className="flex items-center gap-1 text-xs">
                    Customer Type:
                    <button onClick={() => setAddCustomer(!addCustomer)}>
                      <span className="text-primary font-semibold"> +Add</span>
                    </button>
                  </div>
                  {addCustomer && (
                    <div className="absolute top-full right-0 p-4 rounded-xl bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)] min-w-[320px] z-10">
                      <div className="grid grid-cols-1 gap-3">
                        <Input
                          className="mb-0"
                          label="Name"
                          value={editCustomerData.name}
                          onChange={(e) =>
                            setEditCustomerData({
                              ...editCustomerData,
                              name: e.target.value,
                            })
                          }
                        />
                        <Input
                          className="mb-0"
                          label="Phone"
                          value={editCustomerData.phone}
                          onChange={(e) =>
                            setEditCustomerData({
                              ...editCustomerData,
                              phone: e.target.value,
                            })
                          }
                        />
                        <Input
                          className="mb-0"
                          label="Email"
                          value={editCustomerData.email}
                          onChange={(e) =>
                            setEditCustomerData({
                              ...editCustomerData,
                              email: e.target.value,
                            })
                          }
                        />
                        <Input
                          className="mb-0"
                          type="textarea"
                          label="Note"
                          value={editCustomerData.note}
                          onChange={(e) =>
                            setEditCustomerData({
                              ...editCustomerData,
                              note: e.target.value,
                            })
                          }
                        />
                        <div className="flex items-center justify-end gap-2 pt-1">
                          <button
                            className="btn text-primary border-primary !h-8 !min-w-[72px]"
                            onClick={() => setAddCustomer(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="btn bg-primary text-white !h-8 !min-w-[92px]"
                            onClick={() => setAddCustomer(false)}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {customer.map((item, index) => (
                  <li className="flex items-center gap-1" key={index}>
                    <div className="icon">{item.icon} </div>
                    {item.text && <p className="text-xs">{item.text} </p>}
                    {item.number && (
                      <a href="#" className="text-xs text-primary">
                        {item.number}{" "}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-3 px-4 flex flex-col gap-3 border-b border-stroke">
              <h5 className="text-sm font-bold !leading-[140%] mb-2">
                Shopify Julien C
              </h5>
              <ul className="flex flex-col gap-2">
                {shopify.map((item, index) => (
                  <li className="flex items-center gap-1" key={index}>
                    <p className="text-xs">
                      {item.name}{" "}
                      <span className="text-base text-heading font-semibold">
                        {" "}
                        {item.value}
                      </span>{" "}
                    </p>
                  </li>
                ))}
                <li className="flex items-center gap-1">
                  <p className="text-xs">
                    Tags:{" "}
                    <button className="text-base font-semibold text-primary">
                      {" "}
                      Add tags..
                    </button>{" "}
                  </p>
                </li>
              </ul>
              <button onClick={() => setOrder(!Order)} className="btn bg-off">
                Create order
              </button>
            </div>
            <div className="py-3 px-4 flex flex-col gap-3 border-b border-stroke">
              <h4 className="text-xl font-bold !leading-[140%] mb-2">
                Order #1009
              </h4>
              <div className="flex items-center gap-1 rounded">
                {["UNFULFILLED", "CANCELLED", "PAID"].map((item, index) => (
                  <button
                    key={index}
                    className="bg-[#7856FF]/10 px-3 py-1 text-heading font-semibold !leading-[140%] text-xs rounded"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <ul className="flex flex-col gap-2">
                {order.map((item, index) => (
                  <li className="flex items-center gap-1" key={index}>
                    <p className="text-xs">
                      {item.name}{" "}
                      <span className="text-base text-heading font-semibold">
                        {" "}
                        {item.value}
                      </span>{" "}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setModal(!modal)}
                  className="btn grow !px-0 !min-w-[unset] !border-primary !text-primary hover:!text-white"
                >
                  Duplicate
                </button>
                <button
                  onClick={() => setRefund(!refund)}
                  className="btn grow !px-0 !min-w-[unset] !bg-primary !text-white"
                >
                  Refund
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          closeIconHide={false}
          innerClass="!max-w-[985px]"
          closeOnClick={() => setModal(false)}
          onClick={() => setModal(false)}
        >
          <h4 className="mb-4 text-lg md:text-xl 2xl:text-2xl">
            Duplicate order
          </h4>
          <Input
            className="mb-4 md:mb-5"
            type="text"
            placeholder="Search..."
            leftIcon={search}
            inputClass="!h-[38px]"
          />
          <table className="w-full">
            <thead>
              <tr className="bg-[#F6F8FA]">
                {["Product", "In Stock", "Item Price"].map((item, index) => (
                  <th
                    className="text-left text-sm text-[#525866] !font-normal py-2 px-3"
                    key={index}
                  >
                    {item}{" "}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {modalTable.map((item, index) => (
                <tr key={index} className="border-b border-[#E2E4E9]">
                  <td className="md:w-[70%] px-3 py-2 md:py-2.5">
                    <p className="text-[#0A0D14] md:text-base font-semibold">
                      {item.product}{" "}
                    </p>
                    <span className="text-[#858585] font-medium font-inter">
                      ${item.price}{" "}
                    </span>
                  </td>
                  <td className="text-[#0A0D14] md:text-base font-semibold px-3 py-2">
                    {item.stock}{" "}
                  </td>
                  <td className="text-[#0A0D14] md:text-base font-semibold px-3 py-2">
                    €{item.price}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col md:flex-row justify-between my-3 md:my-5 gap-3 md:gap-4">
            <div className="max-w-[530px] w-full">
              <Input
                className="mb-3 md:mb-4"
                label="Notes"
                placeholder="Type here"
                name=""
                type="text"
              />
              <Input
                className="mb-0"
                label="Tags"
                placeholder="Type here"
                name=""
                type="text"
              />
            </div>
            <div className=" md:max-w-[183px] w-full flex flex-col justify-between gap-2 ">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-between">
                  <p className="text-[#525866]">Taxes</p>
                  <p className="text-[#0A0D14] text-base font-semibold">
                    € 0,00
                  </p>
                </li>
                <li className="flex items-center justify-between">
                  <p className="text-[#525866]">Taxes</p>
                  <p className="text-[#0A0D14] text-base font-semibold">
                    € 0,00
                  </p>
                </li>
              </ul>
              <button className="btn bg-off w-full">Create Draft Order</button>
            </div>
          </div>
          <div className=" flex md:items-center gap-3 flex-col-reverse md:flex-row justify-between">
            <button
              onClick={() => setModal(!modal)}
              className="btn bg-off !min-w-[74px]"
            >
              Cancel
            </button>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <button className="btn bg-off">Create Order as Pending</button>
              <button className="btn bg-prim">Create Order as Paid</button>
            </div>
          </div>
        </Modal>
      )}
      {address && (
        <Modal
          closeIconHide={false}
          innerClass="!max-w-[985px] "
          className="overflow-auto"
          closeOnClick={() => setAddress(false)}
          onClick={() => setAddress(false)}
        >
          <h4 className="mb-4 text-lg md:text-xl 2xl:text-2xl">Edit Address</h4>
          <div className="grid grid-cols-12 gap-3 md:gap-5 ">
            <Input
              className="mb-0 col-span-12"
              label="Select Another Address"
              id="Select"
              placeholder="Type here"
              name=""
              type="text"
            />
            <Input
              className="mb-0 col-span-12 md:col-span-6"
              label="First Name"
              placeholder="Type here"
              name=""
              type="text"
            />
            <Input
              className="mb-0 col-span-12 md:col-span-6"
              label="Last Name"
              placeholder="Type here"
              name=""
              type="text"
            />
            <Input
              className="mb-0 col-span-12 md:col-span-6"
              label="Company"
              placeholder="Type here"
              name=""
              type="text"
            />
            <Input
              className="mb-0 col-span-12 md:col-span-6"
              label="Phone"
              placeholder="Type here"
              name=""
              type="number"
            />
            <Input
              className="mb-0 col-span-12 md:col-span-6"
              label="Address line 1"
              placeholder="Type here"
              name=""
              type="text"
            />
            <Input
              className="mb-0 col-span-12 md:col-span-6"
              label="Address line 2"
              placeholder="Type here"
              name=""
              type="text"
            />
            <Dropdown
              className="mb-0 col-span-12 md:col-span-6 lg:col-span-4"
              label="Country"
              placeholder="Select"
              items={country}
              search={true}
            />
            <Dropdown
              className="mb-0 col-span-12 md:col-span-6 lg:col-span-4"
              label="City"
              placeholder="Select"
              items={city}
              search={true}
            />
            <Input
              className="mb-0 col-span-12 md:col-span-6 lg:col-span-4"
              label="ZIP/Postal Code"
              placeholder="Type here"
              name=""
              type="text"
            />
            <div className=" flex md:items-center gap-3 col-span-12 justify-between">
              <button
                onClick={() => setAddress(!address)}
                className="!min-w-[74px] btn bg-off"
              >
                Cancel
              </button>
              <button className="btn bg-prim">Save Changes</button>
            </div>
          </div>
        </Modal>
      )}
      {Order && (
        <Modal
          closeIconHide={false}
          innerClass="!max-w-[985px]"
          closeOnClick={() => setOrder(false)}
          onClick={() => setOrder(false)}
        >
          <h4 className="mb-4 text-lg md:text-xl 2xl:text-2xl">Create Order</h4>
          <div className="relative z-[1]">
            <Input
              onClick={() => setSearchOrder(true)}
              className="mb-4 md:mb-5"
              type="text"
              label="Search Product"
              placeholder="Search..."
              leftIcon={search}
              inputClass=""
            />
            {OrderSearch && (
              <div className=" absolute -mt-0.5 top-full left-0 z-[2] border border-primary w-full overflow-hidden rounded-b-2xl bg-white">
                {orderSearchTable.map((item, index) => (
                  <button
                    onClick={() => setSearchOrder(false)}
                    key={index}
                    className="w-full flex items-center justify-between border-stroke border-b px-2 md:px-3 py-1 md:py-2"
                  >
                    <span className="flex items-center gap-2 md:gap-3">
                      <span className="size-[30px]">
                        <img src={item.logo} alt="" />
                      </span>
                      <span className="text-[#0A0D14] text-xs md:text-sm font-semibold font-inter text-left">
                        ${item.name}{" "}
                      </span>
                    </span>
                    <span className="text-[#0A0D14] font-medium px-3 py-2">
                      {item.stock}{" "}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="overflow-x-auto mb-3">
            <table className="w-max md:w-full">
              <thead>
                <tr className="bg-[#F6F8FA]">
                  {[
                    "Product",
                    "In Stock",
                    "Item Price",
                    "Actions",
                    "Item Total",
                  ].map((item, index) => (
                    <th
                      className="text-left text-sm text-[#525866] !font-normal py-2 px-3 last:text-end"
                      key={index}
                    >
                      {item}{" "}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orderTable.map((item, index) => (
                  <tr key={index} className="border-b border-[#E2E4E9]">
                    <td className="px-3 py-2 md:py-2.5">
                      <div className="flex items-center gap-3">
                        <div className="size-[30px]">
                          <img src={item.logo} alt="" />
                        </div>
                        <span className="text-[#0A0D14] font-semibold font-inter line-clamp-1">
                          ${item.name}{" "}
                        </span>
                      </div>
                    </td>
                    <td className=" font-medium px-3 py-2">{item.stock} </td>
                    <td className=" font-medium px-3 py-2">€{item.price} </td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleDecrease}
                          className="size-7 btn !p-0 !min-w-[0] text-[#858585] !rounded-full flex justify-center items-center"
                        >
                          <svg
                            width="14"
                            height="2"
                            viewBox="0 0 14 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 1H12.5"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                        <span>{quantity}</span>
                        <button
                          onClick={handleIncrease}
                          className="size-7 btn !p-0 !min-w-[0] bg-prim !rounded-full flex justify-center items-center"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 1.5V7M7 7V12.5M7 7H1.5M7 7H12.5"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="text-[#0A0D14] md:text-base font-semibold px-3 py-2 text-end">
                      €{item.total}{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row justify-between m5-3 md:mt-5  gap-3 md:gap-4">
            <div className="max-w-[407px] w-full">
              <Input
                className="mb-3 md:mb-4"
                label="Notes"
                placeholder="Add a note"
                name=""
                type="text"
              />
              <Input
                className="mb-0"
                label="Tags"
                placeholder="Add tags"
                name=""
                type="text"
              />
            </div>
            <div className=" md:max-w-[253px] w-full flex flex-col justify-between gap-2 ">
              <ul className="flex flex-col gap-3.5">
                {orderList.map((item, index) => (
                  <li className="flex items-center justify-between">
                    <p
                      className={`text-[#525866] ${
                        index === orderList.length - 1 && "font-semibold"
                      }`}
                    >
                      {item.name}{" "}
                    </p>
                    <p
                      className={`text-base font-semibold ${
                        index == 1
                          ? "text-[#0A0D14]"
                          : index == orderList.length - 1 && "text-[#0A0D14]"
                      }`}
                    >
                      {item.value}{" "}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-5 mt-4">
            <p className=" text-[#0A0D14] font-semibold">
              Create draft order & send shopify invoice
            </p>
            <button className="btn !bg-black !text-white">
              Create Draft Order{" "}
            </button>
          </div>
          <div className=" flex md:items-center gap-3 flex-col-reverse md:flex-row justify-between">
            <button
              onClick={() => setOrder(!Order)}
              className="btn bg-off min-w-[74px]"
            >
              Cancel
            </button>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <button className="btn bg-off">Create Order as Paid </button>
              <button className="btn bg-prim">Create Order as Pending</button>
            </div>
          </div>
        </Modal>
      )}
      {refund && (
        <Modal
          closeIconHide={false}
          innerClass="!max-w-[985px]"
          closeOnClick={() => setRefund(false)}
          onClick={() => setRefund(false)}
        >
          <h4 className="mb-4 text-lg md:text-xl 2xl:text-2xl">Refund Order</h4>
          <div className="overflow-x-auto mb-3">
            <table className="w-max md:w-full">
              <thead>
                <tr className="bg-[#F6F8FA]">
                  {[
                    "Product",
                    "In Stock",
                    "Item Price",
                    "Actions",
                    "Item Total",
                  ].map((item, index) => (
                    <th
                      className="text-left text-sm text-[#525866] !font-normal py-2 px-3 last:text-end"
                      key={index}
                    >
                      {item}{" "}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orderTable.map((item, index) => (
                  <tr key={index} className="border-b border-[#E2E4E9]">
                    <td className="px-3 py-2 md:py-2.5">
                      <div className="flex items-center gap-3">
                        <div className="size-[30px]">
                          <img src={item.logo} alt="" />
                        </div>
                        <span className="text-[#0A0D14] font-semibold font-inter line-clamp-1">
                          ${item.name}{" "}
                        </span>
                      </div>
                    </td>
                    <td className=" font-medium px-3 py-2">{item.stock} </td>
                    <td className=" font-medium px-3 py-2">€{item.price} </td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleDecrease}
                          className="size-7 btn !p-0 !min-w-[0] text-[#858585] !rounded-full flex justify-center items-center"
                        >
                          <svg
                            width="14"
                            height="2"
                            viewBox="0 0 14 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 1H12.5"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                        <span>{quantity}</span>
                        <button
                          onClick={handleIncrease}
                          className="size-7 btn !p-0 !min-w-[0] bg-prim !rounded-full flex justify-center items-center"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 1.5V7M7 7V12.5M7 7H1.5M7 7H12.5"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="text-[#0A0D14] md:text-base font-semibold px-3 py-2 text-end">
                      €{item.total}{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row justify-between my-3 md:my-5  gap-3 md:gap-4">
            <div className="">
              <div className="flex items-start gap-2 mb-2">
                <Checkbox id="res" />
                <div className="">
                  <label
                    htmlFor="res"
                    className="cursor-pointer text-heading font-semibold"
                  >
                    Restock Item
                  </label>
                  <p className="text-xs mt-1">
                    The claimed quantity will be restocked back to your store.
                    Note that custom items can't be restocked.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="Send" />
                <label
                  htmlFor="Send"
                  className="cursor-pointer text-heading font-semibold"
                >
                  Send notification to customer
                </label>
              </div>
            </div>
            <div className=" md:max-w-[253px] w-full flex flex-col justify-between gap-2 ">
              <ul className="flex flex-col gap-3.5">
                {orderList.map((item, index) => (
                  <li className="flex items-center justify-between">
                    <p
                      className={`text-[#525866] ${
                        index === orderList.length - 1 && "font-semibold"
                      }`}
                    >
                      {item.name}{" "}
                    </p>
                    <p
                      className={`text-base font-semibold ${
                        index == 1
                          ? "text-[#0A0D14]"
                          : index == orderList.length - 1 && "text-[#0A0D14]"
                      }`}
                    >
                      {item.value}{" "}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-5">
            <Input
              className="mb-0"
              label="Refund with"
              placeholder="Type here"
              name=""
              type="text"
            />
            <Input
              className="mb-0"
              label="Reason for refund "
              placeholder="Type here"
              name=""
              type="text"
            />
          </div>
          <div className=" flex md:items-center gap-3 flex-col-reverse md:flex-row justify-between">
            <button
              onClick={() => setRefund(!refund)}
              className="btn bg-off min-w-[74px]"
            >
              Cancel
            </button>
            <button className="btn bg-prim">Refund €150 </button>
          </div>
        </Modal>
      )}
      <ResizeIndicator />
      {showRequiredToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-4 py-2 rounded-md shadow-lg z-50">
          {requiredToastMsg}
        </div>
      )}
    </>
  );
}
