import React from "react";
import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import { Link, useNavigate } from "react-router-dom";
import { c_24 } from "../../utilities/Classes";
import Input from "../../components/Input";
import { search } from "../../utilities/Classes";

import flag from "../../assets/img/flag.png";
import StoreDropdown from "../../components/StoreDropdown";

export default function Flows() {
  const navigate = useNavigate();
  const Create = [
    {
      title: "Join our Flows Masterclass live webinar",
    },
    {
      title: "10 Flows use cases and best practices",
    },
    {
      title: "How to create a Flow",
    },
  ];
  const flowTable = [
    {
      name: "Shipping policy",
      stock: "49",
      date: "01/09/2025",
      img: flag,
    },
    {
      name: "Shelf life information",
      stock: "49",
      date: "01/09/2025",
      img: flag,
    },
    {
      name: "Shipping policy",
      stock: "49",
      date: "01/09/2025",
      img: flag,
    },
    {
      name: "Shipping policy",
      stock: "49",
      date: "01/09/2025",
      img: flag,
    },
  ];
  return (
    <>
      <Top>
        <div className="hidden md:flex items-center gap-4">
          <StoreDropdown
            includeAllStores={true}
            className="mb-0 min-w-[120px]"
          />
          <Link
            to="/app/flows-details/1"
            className="btn min-w-max border-primary"
          >
            Create custom Flow
          </Link>
          <Link
            to="/app/create-flows"
            className="btn min-w-max shadow text-white"
          >
            Create from Template
          </Link>
        </div>
      </Top>
      <MainInner>
        <div className="mb-5">
          <p className="text-sm font-medium !leading-[150%] mb-1.5">
            Create multi-step Flows with branching and conditional logic to
            answer FAQs, recommend products and more.
          </p>
          {Create.map((item, index) => (
            <div className="mb-1.5" key={index}>
              <a
                href=""
                className="text-sm text-primary font-medium !underline !leading-[150%]"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
        <div className={`${c_24}`}>
          <Input
            className="mb-4 md:mb-5"
            type="text"
            placeholder="Search..."
            leftIcon={search}
            inputClass="!h-[36px]"
          />
          <div className="overflow-auto">
            <table className="w-full table">
              <thead>
                <tr className="bg-[#F6F8FA]">
                  {["Flow", "Language", "Flow", "Actions"].map(
                    (item, index) => (
                      <th
                        className="text-left text-sm text-[#525866] !font-normal py-2 px-3 last:text-right"
                        key={index}
                      >
                        {item}{" "}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {flowTable.map((item, index) => (
                  <tr
                    key={index}
                    className="!border-b border-[#E2E4E9] cursor-pointer group"
                    onClick={() => navigate(`/app/flows-details/${index}`)}
                  >
                    <td className="md:text-sm text-[#0A0D14] font-medium group-hover:text-primary transition-all duration-300">
                      {item.name}
                    </td>
                    <td>
                      <img src={item.img} alt="" />
                    </td>
                    <td className="text-[#0A0D14] md:text-sm font-medium">
                      {item.date}{" "}
                    </td>
                    <td>
                      <div className=" flex items-center justify-end gap-2 ">
                        <button>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.33317 8.89714H8.1665C8.56921 8.89714 8.89567 8.57068 8.89567 8.16797V2.33464C8.89567 1.93193 8.56921 1.60547 8.1665 1.60547H2.33317C1.93046 1.60547 1.604 1.93193 1.604 2.33464V8.16797C1.604 8.57068 1.93046 8.89714 2.33317 8.89714Z"
                              fill="#7856FF"
                            />
                            <path
                              d="M5.104 8.89714V11.668C5.104 12.0707 5.43046 12.3971 5.83317 12.3971H11.6665C12.0692 12.3971 12.3957 12.0707 12.3957 11.668V5.83464C12.3957 5.43193 12.0692 5.10547 11.6665 5.10547H8.89567M8.1665 8.89714H2.33317C1.93046 8.89714 1.604 8.57068 1.604 8.16797V2.33464C1.604 1.93193 1.93046 1.60547 2.33317 1.60547H8.1665C8.56921 1.60547 8.89567 1.93193 8.89567 2.33464V8.16797C8.89567 8.57068 8.56921 8.89714 8.1665 8.89714Z"
                              stroke="#7856FF"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <button>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.28358 11.3056L3.78254 11.2734L3.28358 11.3056ZM10.7161 11.3056L10.2171 11.2734V11.2734L10.7161 11.3056ZM1.604 2.85547C1.32786 2.85547 1.104 3.07933 1.104 3.35547C1.104 3.63161 1.32786 3.85547 1.604 3.85547V2.85547ZM12.3957 3.85547C12.6718 3.85547 12.8957 3.63161 12.8957 3.35547C12.8957 3.07933 12.6718 2.85547 12.3957 2.85547V3.85547ZM6.18734 6.27214C6.18734 5.99599 5.96348 5.77214 5.68734 5.77214C5.4112 5.77214 5.18734 5.99599 5.18734 6.27214H6.18734ZM5.18734 9.48047C5.18734 9.75661 5.4112 9.98047 5.68734 9.98047C5.96348 9.98047 6.18734 9.75661 6.18734 9.48047H5.18734ZM8.81234 6.27214C8.81234 5.99599 8.58848 5.77214 8.31234 5.77214C8.0362 5.77214 7.81234 5.99599 7.81234 6.27214H8.81234ZM7.81234 9.48047C7.81234 9.75661 8.0362 9.98047 8.31234 9.98047C8.58848 9.98047 8.81234 9.75661 8.81234 9.48047H7.81234ZM8.77545 3.4801C8.84429 3.74752 9.11688 3.90852 9.3843 3.83969C9.65173 3.77086 9.81272 3.49827 9.74389 3.23084L8.77545 3.4801ZM2.77067 3.35547L2.27171 3.38766L2.78462 11.3378L3.28358 11.3056L3.78254 11.2734L3.26963 3.32328L2.77067 3.35547ZM4.44783 12.3971V12.8971H9.55185V12.3971V11.8971H4.44783V12.3971ZM10.7161 11.3056L11.2151 11.3378L11.728 3.38766L11.229 3.35547L10.73 3.32328L10.2171 11.2734L10.7161 11.3056ZM11.229 3.35547V2.85547H2.77067V3.35547V3.85547H11.229V3.35547ZM1.604 3.35547V3.85547H2.77067V3.35547V2.85547H1.604V3.35547ZM11.229 3.35547V3.85547H12.3957V3.35547V2.85547H11.229V3.35547ZM9.55185 12.3971V12.8971C10.4307 12.8971 11.1585 12.2148 11.2151 11.3378L10.7161 11.3056L10.2171 11.2734C10.1945 11.6242 9.90337 11.8971 9.55185 11.8971V12.3971ZM3.28358 11.3056L2.78462 11.3378C2.8412 12.2148 3.56901 12.8971 4.44783 12.8971V12.3971V11.8971C4.0963 11.8971 3.80518 11.6242 3.78254 11.2734L3.28358 11.3056ZM5.68734 6.27214H5.18734V9.48047H5.68734H6.18734V6.27214H5.68734ZM8.31234 6.27214H7.81234V9.48047H8.31234H8.81234V6.27214H8.31234ZM6.99985 1.60547V2.10547C7.85342 2.10547 8.57191 2.68926 8.77545 3.4801L9.25967 3.35547L9.74389 3.23084C9.42939 2.00891 8.32075 1.10547 6.99985 1.10547V1.60547ZM4.74003 3.35547L5.22424 3.4801C5.42779 2.68926 6.14628 2.10547 6.99985 2.10547V1.60547V1.10547C5.67894 1.10547 4.57031 2.00891 4.25581 3.23084L4.74003 3.35547Z"
                              fill="#111111"
                              fillOpacity="0.7"
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
        </div>
      </MainInner>
    </>
  );
}
