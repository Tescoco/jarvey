import React, { useState } from "react";
import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import TableFilter from "../../components/TableFilter";
import Checkbox from "../../components/Checkbox";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";

import sop11 from "../../assets/img/manager/table-img-17.png";
import sop8 from "../../assets/img/manager/table-img-15.png";
import sop3 from "../../assets/img/manager/table-img-5.png";
import sop1 from "../../assets/img/manager/table-img-6.png";
import sop4 from "../../assets/img/manager/table-img-7.png";
import sop5 from "../../assets/img/manager/table-img-12.png";
import sop2 from "../../assets/img/manager/table-img-13.png";
import sop6 from "../../assets/img/manager/table-img-14.png";
import sop7 from "../../assets/img/manager/table-img-19.png";
import sop9 from "../../assets/img/manager/table-img-2.png";
import sop10 from "../../assets/img/manager/table-img-16.png";
import sop12 from "../../assets/img/manager/table-img-3.png";
import sop13 from "../../assets/img/manager/table-img-01.png";
import sop14 from "../../assets/img/manager/table-img-18.png";
import { Link } from "react-router-dom";

export default function Index() {
  const emailTable = [
    {
      name: "Jenny Wilson",
      Email: "Wade Warren",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 1",
      img: sop1,
    },
    {
      name: "Albert Flores",
      Email: "Esther Howard",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 2",
      img: sop2,
    },
    {
      name: "Jerome Bell",
      Email: "Bessie Cooper",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 1",
      img: sop3,
    },
    {
      name: "Ralph Edwards",
      Email: "Cameron Williamson",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 3",
      img: sop4,
    },
    {
      name: "Darlene Robertson",
      Email: "Kristin Watson",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 2",
      img: sop5,
    },
    {
      name: "Esther Howard",
      Email: "Devon Lane",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 1",
      img: sop6,
    },
    {
      name: "Bessie Cooper",
      Email: "Ralph Edwards",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 3",
      img: sop7,
    },
    {
      name: "Brooklyn Simmons",
      Email: "Dianne Russell",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 2",
      img: sop8,
    },
    {
      name: "Devon Lane",
      Email: "Theresa Webb",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 1",
      img: sop9,
    },
    {
      name: "Robert Fox",
      Email: "Annette Black",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 2",
      img: sop10,
    },
    {
      name: "Jane Cooper",
      Email: "Jerome Bell",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 3",
      img: sop11,
    },
    {
      name: "Marvin McKinney",
      Email: "Albert Flores",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 1",
      img: sop12,
    },
    {
      name: "Theresa Webb",
      Email: "Robert Fox",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 2",
      img: sop13,
    },
    {
      name: "Jacob Jones",
      Email: "Savannah Nguyen",
      Phone: "(+33)7 35 5 46 14",
      Date: "23 Apr 2022",
      Store: "Store 3",
      img: sop14,
    },
  ];
  const [editArticle, setEditArticle] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formNote, setFormNote] = useState("");
  const [formStore, setFormStore] = useState("");

  const storeOptions = [
    { name: "Store 1" },
    { name: "Store 2" },
    { name: "Store 3" },
    { name: "Store 4" },
    { name: "Store 5" },
  ];

  const openAddCustomer = () => {
    setEditingCustomer(null);
    setFormName("");
    setFormPhone("");
    setFormEmail("");
    setFormNote("");
    setFormStore("");
    setEditArticle(true);
  };

  const openEditCustomer = (customer) => {
    setEditingCustomer(customer || null);
    setFormName(customer?.name || "");
    setFormPhone(customer?.Phone || "");
    setFormEmail(customer?.Email || "");
    setFormNote("");
    setFormStore(customer?.Store || "");
    setEditArticle(true);
  };

  return (
    <>
      <Top title="All Customer">
        <button
          className="btn flex items-center gap-1 !bg-primary !text-white text-nowrap p-2.5 !w-[151px]"
          onClick={openAddCustomer}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
              fill="white"
            />
          </svg>
          New Customer
        </button>
      </Top>
      <MainInner>
        <TableFilter />
        <div className="overflow-auto">
          <table className="w-full table">
            <thead>
              <tr className="bg-[#F6F8FA]">
                <th width={42}>
                  <Checkbox id="selectAll" />
                </th>
                {[
                  "Name",
                  "Email ",
                  "Phone",
                  "Store",
                  "Creation Date",
                  "Actions",
                ].map((item, index) => (
                  <th
                    className="text-left text-sm text-[#525866] !font-normal py-2 px-3 last:text-right"
                    key={index}
                  >
                    {item}{" "}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {emailTable.map((item, index) => (
                <tr key={index} className="!border-b border-[#E2E4E9]">
                  <td className="!py-2">
                    <Checkbox id={`select_${index + 1}`} />
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <img src={item.img} alt="" />
                      <Link
                        to={`/app/customer/${index + 1}`}
                        className="md:text-sm text-[#0A0D14] hover:text-primary font-medium"
                      >
                        {item.name}
                      </Link>
                    </div>
                  </td>
                  <td className="!text-[#0A0D14] !md:text-sm !font-medium">
                    {item.Email}
                  </td>
                  <td className="!text-[#0A0D14] !md:text-sm !font-medium">
                    {item.Phone}
                  </td>
                  <td className="!text-[#0A0D14] !md:text-sm !font-medium">
                    {item.Store}
                  </td>
                  <td className="!text-[#0A0D14] !md:text-sm !font-medium">
                    {item.Date}
                  </td>
                  <td className="!text-[#0A0D14] !md:text-sm !font-medium">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        onClick={() => openEditCustomer(item)}
                        className="hover:scale-105"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.042 5.20678L13.4051 2.84362C14.056 2.19275 15.1113 2.19275 15.7622 2.84362L17.1551 4.2366C17.806 4.88748 17.806 5.94275 17.1551 6.59362L14.792 8.95678M11.042 5.20678L2.78015 13.4686C2.46759 13.7812 2.29199 14.2051 2.29199 14.6471V17.7068H5.35164C5.79366 17.7068 6.21759 17.5312 6.53015 17.2186L14.792 8.95678M11.042 5.20678L14.792 8.95678"
                            stroke="#7856FF"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.042 5.20678L13.4051 2.84362C14.056 2.19275 15.1113 2.19275 15.7622 2.84362L17.1551 4.2366C17.806 4.88748 17.806 5.94275 17.1551 6.59362L14.792 8.95678M11.042 5.20678L2.78015 13.4686C2.46759 13.7812 2.29199 14.2051 2.29199 14.6471V17.7068H5.35164C5.79366 17.7068 6.21759 17.5312 6.53015 17.2186L14.792 8.95678M11.042 5.20678L14.792 8.95678"
                            stroke="url(#paint0_linear_11811_104721)"
                            strokeOpacity="0.12"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_11811_104721"
                              x1="9.96765"
                              y1="2.35547"
                              x2="9.96765"
                              y2="17.7068"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </button>
                      <button className="hover:scale-105">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.69139 16.1503L5.31509 16.11L4.69139 16.1503ZM15.3093 16.1503L14.6856 16.11L15.3093 16.1503ZM2.29199 4.16797C1.94681 4.16797 1.66699 4.44779 1.66699 4.79297C1.66699 5.13815 1.94681 5.41797 2.29199 5.41797V4.16797ZM17.7087 5.41797C18.0538 5.41797 18.3337 5.13815 18.3337 4.79297C18.3337 4.44779 18.0538 4.16797 17.7087 4.16797V5.41797ZM8.75033 8.95964C8.75033 8.61446 8.4705 8.33464 8.12533 8.33464C7.78015 8.33464 7.50033 8.61446 7.50033 8.95964H8.75033ZM7.50033 13.543C7.50033 13.8881 7.78015 14.168 8.12533 14.168C8.4705 14.168 8.75033 13.8881 8.75033 13.543H7.50033ZM12.5003 8.95964C12.5003 8.61446 12.2205 8.33464 11.8753 8.33464C11.5301 8.33464 11.2503 8.61446 11.2503 8.95964H12.5003ZM11.2503 13.543C11.2503 13.8881 11.5301 14.168 11.8753 14.168C12.2205 14.168 12.5003 13.8881 12.5003 13.543H11.2503ZM12.6234 4.94876C12.7094 5.28304 13.0502 5.48428 13.3844 5.39824C13.7187 5.3122 13.92 4.97147 13.8339 4.63718L12.6234 4.94876ZM3.95866 4.79297L3.33496 4.83321L4.06768 16.1905L4.69139 16.1503L5.31509 16.11L4.58236 4.75273L3.95866 4.79297ZM6.3546 17.7096V18.3346H13.6461V17.7096V17.0846H6.3546V17.7096ZM15.3093 16.1503L15.933 16.1905L16.6657 4.83321L16.042 4.79297L15.4183 4.75273L14.6856 16.11L15.3093 16.1503ZM16.042 4.79297V4.16797H3.95866V4.79297V5.41797H16.042V4.79297ZM2.29199 4.79297V5.41797H3.95866V4.79297V4.16797H2.29199V4.79297ZM16.042 4.79297V5.41797H17.7087V4.79297V4.16797H16.042V4.79297ZM13.6461 17.7096V18.3346C14.8544 18.3346 15.8552 17.3964 15.933 16.1905L15.3093 16.1503L14.6856 16.11C14.6502 16.6582 14.1953 17.0846 13.6461 17.0846V17.7096ZM4.69139 16.1503L4.06768 16.1905C4.14548 17.3964 5.14623 18.3346 6.3546 18.3346V17.7096V17.0846C5.80534 17.0846 5.35045 16.6582 5.31509 16.11L4.69139 16.1503ZM8.12533 8.95964H7.50033V13.543H8.12533H8.75033V8.95964H8.12533ZM11.8753 8.95964H11.2503V13.543H11.8753H12.5003V8.95964H11.8753ZM10.0003 2.29297V2.91797C11.2615 2.91797 12.3227 3.7805 12.6234 4.94876L13.2287 4.79297L13.8339 4.63718C13.3946 2.93006 11.8456 1.66797 10.0003 1.66797V2.29297ZM6.77202 4.79297L7.3773 4.94876C7.67799 3.7805 8.73922 2.91797 10.0003 2.91797V2.29297V1.66797C8.15506 1.66797 6.60613 2.93006 6.16675 4.63718L6.77202 4.79297Z"
                            fill="#858585"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MainInner>

      {editArticle && (
        <Modal
          innerClass="max-w-[985px]"
          onClick={() => setEditArticle(false)}
          closeIconHide={false}
        >
          <div className="mb-4 md:mb-5">
            <h2 className="text-2xl text-black font-inter font-semibold leading-normal">
              {editingCustomer ? "Edit Customer" : "Add New Customer"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-5">
            <div className="col-span-2 md:col-span-1">
              <div className={`w-full`}>
                <label
                  htmlFor="drop"
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
                  <input
                    type="file"
                    id="drop"
                    className="hidden"
                    name=""
                    placeholder=""
                  />
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
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                />
                <Dropdown
                  className="mb-3"
                  label="Store"
                  placeholder="Select store"
                  required={true}
                  isArrow={true}
                  items={storeOptions}
                  value={formStore}
                  onChange={(value) => setFormStore(value)}
                />
                <label
                  htmlFor=""
                  className="text-sm text-heading font-semibold leading-[150%] mb-1"
                >
                  Note <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="min-h-[136px] w-full py-2.5 px-3 border border-solid border-[#E2E4E9] rounded-[10px]"
                  placeholder="Type here"
                  value={formNote}
                  onChange={(e) => setFormNote(e.target.value)}
                />
                <div className="flex gap-2 mb-5">
                  <div className="w-full">
                    <Input
                      className="mb-1 w-full"
                      type="text"
                      placeholder="Type here"
                      label="Phone"
                      required={true}
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                    />
                    <a
                      href=""
                      className="text-xs text-primary font-medium !leading-[150%] !underline"
                    >
                      + Add new{" "}
                    </a>
                  </div>
                  <button>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.62928 19.8788L6.25298 19.8385L5.62928 19.8788ZM18.3707 19.8788L17.747 19.8385L17.747 19.8385L18.3707 19.8788ZM2.75 5.625C2.40482 5.625 2.125 5.90482 2.125 6.25C2.125 6.59518 2.40482 6.875 2.75 6.875V5.625ZM21.25 6.875C21.5952 6.875 21.875 6.59518 21.875 6.25C21.875 5.90482 21.5952 5.625 21.25 5.625V6.875ZM10.375 11.25C10.375 10.9048 10.0952 10.625 9.75 10.625C9.40482 10.625 9.125 10.9048 9.125 11.25H10.375ZM9.125 16.75C9.125 17.0952 9.40482 17.375 9.75 17.375C10.0952 17.375 10.375 17.0952 10.375 16.75H9.125ZM14.875 11.25C14.875 10.9048 14.5952 10.625 14.25 10.625C13.9048 10.625 13.625 10.9048 13.625 11.25H14.875ZM13.625 16.75C13.625 17.0952 13.9048 17.375 14.25 17.375C14.5952 17.375 14.875 17.0952 14.875 16.75H13.625ZM15.2687 6.40579C15.3548 6.74007 15.6955 6.94131 16.0298 6.85527C16.3641 6.76923 16.5653 6.4285 16.4793 6.09421L15.2687 6.40579ZM4.75 6.25L4.1263 6.29024L5.00557 19.919L5.62928 19.8788L6.25298 19.8385L5.3737 6.20976L4.75 6.25ZM7.62513 21.75V22.375H16.3749V21.75V21.125H7.62513V21.75ZM18.3707 19.8788L18.9944 19.919L19.8737 6.29024L19.25 6.25L18.6263 6.20976L17.747 19.8385L18.3707 19.8788ZM19.25 6.25V5.625H4.75V6.25V6.875H19.25V6.25ZM2.75 6.25V6.875H4.75V6.25V5.625H2.75V6.25ZM19.25 6.25V6.875H21.25V6.25V5.625H19.25V6.25ZM16.3749 21.75V22.375C17.759 22.375 18.9053 21.3003 18.9944 19.919L18.3707 19.8788L17.747 19.8385C17.7003 20.562 17.0999 21.125 16.3749 21.125V21.75ZM5.62928 19.8788L5.00557 19.919C5.09469 21.3003 6.24099 22.375 7.62513 22.375V21.75V21.125C6.9001 21.125 6.29966 20.562 6.25298 19.8385L5.62928 19.8788ZM9.75 11.25H9.125V16.75H9.75H10.375V11.25H9.75ZM14.25 11.25H13.625V16.75H14.25H14.875V11.25H14.25ZM12 3.25V3.875C13.5718 3.875 14.894 4.94999 15.2687 6.40579L15.874 6.25L16.4793 6.09421C15.9659 4.09955 14.1559 2.625 12 2.625V3.25ZM8.12604 6.25L8.73131 6.40579C9.10601 4.94999 10.4283 3.875 12 3.875V3.25V2.625C9.8441 2.625 8.03415 4.09955 7.52076 6.09421L8.12604 6.25Z"
                        fill="#858585"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-2 mb-5">
                  <div className="w-full">
                    <Input
                      className="mb-1 w-full"
                      type="text"
                      placeholder="Type here"
                      label="Email"
                      required={true}
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                    />
                    <a
                      href=""
                      className="text-xs text-primary font-medium !leading-[150%] !underline"
                    >
                      + Add new{" "}
                    </a>
                  </div>
                  <button>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.62928 19.8788L6.25298 19.8385L5.62928 19.8788ZM18.3707 19.8788L17.747 19.8385L17.747 19.8385L18.3707 19.8788ZM2.75 5.625C2.40482 5.625 2.125 5.90482 2.125 6.25C2.125 6.59518 2.40482 6.875 2.75 6.875V5.625ZM21.25 6.875C21.5952 6.875 21.875 6.59518 21.875 6.25C21.875 5.90482 21.5952 5.625 21.25 5.625V6.875ZM10.375 11.25C10.375 10.9048 10.0952 10.625 9.75 10.625C9.40482 10.625 9.125 10.9048 9.125 11.25H10.375ZM9.125 16.75C9.125 17.0952 9.40482 17.375 9.75 17.375C10.0952 17.375 10.375 17.0952 10.375 16.75H9.125ZM14.875 11.25C14.875 10.9048 14.5952 10.625 14.25 10.625C13.9048 10.625 13.625 10.9048 13.625 11.25H14.875ZM13.625 16.75C13.625 17.0952 13.9048 17.375 14.25 17.375C14.5952 17.375 14.875 17.0952 14.875 16.75H13.625ZM15.2687 6.40579C15.3548 6.74007 15.6955 6.94131 16.0298 6.85527C16.3641 6.76923 16.5653 6.4285 16.4793 6.09421L15.2687 6.40579ZM4.75 6.25L4.1263 6.29024L5.00557 19.919L5.62928 19.8788L6.25298 19.8385L5.3737 6.20976L4.75 6.25ZM7.62513 21.75V22.375H16.3749V21.75V21.125H7.62513V21.75ZM18.3707 19.8788L18.9944 19.919L19.8737 6.29024L19.25 6.25L18.6263 6.20976L17.747 19.8385L18.3707 19.8788ZM19.25 6.25V5.625H4.75V6.25V6.875H19.25V6.25ZM2.75 6.25V6.875H4.75V6.25V5.625H2.75V6.25ZM19.25 6.25V6.875H21.25V6.25V5.625H19.25V6.25ZM16.3749 21.75V22.375C17.759 22.375 18.9053 21.3003 18.9944 19.919L18.3707 19.8788L17.747 19.8385C17.7003 20.562 17.0999 21.125 16.3749 21.125V21.75ZM5.62928 19.8788L5.00557 19.919C5.09469 21.3003 6.24099 22.375 7.62513 22.375V21.75V21.125C6.9001 21.125 6.29966 20.562 6.25298 19.8385L5.62928 19.8788ZM9.75 11.25H9.125V16.75H9.75H10.375V11.25H9.75ZM14.25 11.25H13.625V16.75H14.25H14.875V11.25H14.25ZM12 3.25V3.875C13.5718 3.875 14.894 4.94999 15.2687 6.40579L15.874 6.25L16.4793 6.09421C15.9659 4.09955 14.1559 2.625 12 2.625V3.25ZM8.12604 6.25L8.73131 6.40579C9.10601 4.94999 10.4283 3.875 12 3.875V3.25V2.625C9.8441 2.625 8.03415 4.09955 7.52076 6.09421L8.12604 6.25Z"
                        fill="#858585"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="btn text-primary border-primary"
              onClick={() => setEditArticle(false)}
            >
              Cancel
            </button>
            <button className="btn bg-primary text-white">
              {editingCustomer ? "Save Changes" : "Add Customer"}
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
