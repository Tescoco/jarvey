import React from "react";
import MainInner from "../../components/MainInner";
import { Link } from "react-router-dom";

export default function AIPower() {
  const CardList = [
    {
      title: "Update your Shopify integration",
      url: "/",
    },
    {
      title: "Connect an email to this store",
      url: "/",
    },
    {
      title: "Create or import a Help Center",
      url: "#",
    },
    {
      title: "Add 20+ articles to your Help Center",
      url: "#",
    },
  ];

  return (
    <>
      <MainInner className="ai-agent">
        <div className="flex justify-center px-2">
          <div className="w-full lg:w-[638px]">
            <div className="text-center mb-4 lg:mb-5">
              <p className="text-2xl lg:text-3xl xl:text-[34px] text-[#0A0D14] font-semibold !leading-[1.4] ">
                Al agent*
              </p>
              <p className="text-[#0A0D14] text-sm font-medium !leading-[1.5] lg:px-16">
                Prepare Al Agent to automate 60% of your email, Chat and Contact
                Form tickets by completing these steps:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-5">
              {CardList.map((item, idx) => (
                <div
                  key={idx}
                  className={`${
                    idx === 0 || idx == 1
                      ? "border-[#176448] bg-[rgba(23,100,72,0.05)]"
                      : "border-[#E2E4E9]"
                  } border rounded-lg lg:rounded-xl p-3 lg:p-4`}
                >
                  <div className="mb-5 lg:mb-6 xl:mb-7 2xl:mb-8">
                    {idx === 0 || idx === 1 ? (
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="20" height="20" rx="10" fill="#176448" />
                          <path
                            d="M5.875 11.3737L8.35245 13.3418C8.57476 13.5184 8.89934 13.4746 9.06699 13.2455L14.125 6.33203"
                            stroke="white"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    ) : (
                      <div className="w-4 lg:w-5 h-4 lg:h-5 bg-[#F7F7F7] rounded-full flex items-center justify-center">
                        <p className="text-gray text-xs font-medium !leading-[1.5]">
                          {idx + 1}
                        </p>
                      </div>
                    )}
                  </div>
                  <p className="text-[#0A0D14] text-sm font-semibold !leading-[1.42] flex items-center gap-1">
                    {item.title}
                    <a
                      href={item.url}
                      className={`${
                        idx === 2 || idx == 3 ? "block" : " hidden"
                      } hover:transform hover:scale-[1.1]`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.99984 0.666992H2.79984C2.0531 0.666992 1.67973 0.666992 1.39452 0.812317C1.14363 0.940148 0.93966 1.14412 0.811829 1.395C0.666504 1.68022 0.666504 2.05359 0.666504 2.80033V9.20033C0.666504 9.94706 0.666504 10.3204 0.811829 10.6056C0.93966 10.8565 1.14363 11.0605 1.39452 11.1883C1.67973 11.3337 2.0531 11.3337 2.79984 11.3337H9.19984C9.94657 11.3337 10.3199 11.3337 10.6052 11.1883C10.856 11.0605 11.06 10.8565 11.1878 10.6056C11.3332 10.3204 11.3332 9.94706 11.3332 9.20033V8.00033M7.33317 0.666992H11.3332M11.3332 0.666992V4.66699M11.3332 0.666992L5.33317 6.66699"
                          stroke="#7856FF"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                to="/app/setup-ai-agent"
                className="btn !bg-[#7856FF] !text-white"
              >
                Set up AI Agent
              </Link>
            </div>
            <div className="mt-4 text-center">
              <a
                href="#"
                className="text-sm lg:text-base font-semibold !leading-[1.5] text-[#7856FF] block hover:text-black mb-1"
              >
                Join our Al Agent Masterclass live webinar{" "}
              </a>
              <a
                href="#"
                className="text-sm lg:text-base font-semibold !leading-[1.5] text-[#7856FF] block hover:text-black"
              >
                How to set up Al Agent
              </a>
            </div>
          </div>
        </div>
      </MainInner>
    </>
  );
}
