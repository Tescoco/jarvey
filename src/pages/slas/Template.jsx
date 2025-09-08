import React from "react";
import Top from "../../layouts/Top";
import { Link } from "react-router-dom";

export default function Template() {
  const items = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="40"
            height="40"
            rx="8"
            fill="url(#paint0_linear_11881_278536)"
          />
          <path
            d="M20 13.125V20M20 20V26.875M20 20H13.125M20 20H26.875"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_11881_278536"
              x1="25.9592"
              y1="5.66667"
              x2="55.4034"
              y2="18.6037"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6B5F" />
              <stop offset="1" stopColor="#FFC563" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Create SLA",
      des: "Create an SLA policy from scratch.",
      btn: {
        text: "Create",
        url: "/app/new-slas",
      },
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
            d="M10.0003 18.3346C14.6028 18.3346 18.3337 14.6038 18.3337 10.0013C18.3337 5.3988 14.6028 1.66797 10.0003 1.66797C5.39783 1.66797 1.66699 5.3988 1.66699 10.0013C1.66699 11.3346 1.98033 12.5946 2.53616 13.7121C2.68449 14.0088 2.73366 14.348 2.64783 14.6688L2.15199 16.5238C2.10288 16.7074 2.10293 16.9006 2.15212 17.0842C2.20131 17.2677 2.29792 17.4351 2.43225 17.5695C2.56658 17.704 2.73391 17.8007 2.91743 17.85C3.10095 17.8993 3.29422 17.8995 3.47783 17.8505L5.33283 17.3538C5.65481 17.2725 5.99544 17.3119 6.29033 17.4646C7.44278 18.0384 8.71292 18.3363 10.0003 18.3346Z"
            stroke="white"
            strokeWidth="1.25"
          />
          <path
            d="M10.0003 13.3346V6.66797M6.66699 11.668V8.33464M13.3337 11.668V8.33464"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Chat",
      des: "Provide customers with best-in-class chat support by using the suggested SLA settings for chat.",
      btn: "",
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
            d="M16 9.41699C16.4199 9.41699 16.8232 9.58393 17.1201 9.88086C17.4168 10.1777 17.583 10.5803 17.583 11V16C17.583 16.4197 17.4168 16.8223 17.1201 17.1191C16.8232 17.4161 16.4199 17.583 16 17.583H9C8.5801 17.583 8.17778 17.4161 7.88086 17.1191C7.58395 16.8222 7.41699 16.4199 7.41699 16V14.3936C7.47218 14.3978 7.52751 14.4013 7.58301 14.4043V16C7.58301 16.3757 7.73239 16.7363 7.99805 17.002C8.26371 17.2676 8.6243 17.417 9 17.417H16C16.3757 17.417 16.7363 17.2676 17.002 17.002C17.2676 16.7363 17.417 16.3757 17.417 16V12.1348L12.5381 14.5742H12.5371C12.5256 14.58 12.5129 14.583 12.5 14.583L12.4629 14.5742H12.4619L10.9355 13.8105C11.0013 13.7821 11.0661 13.752 11.1309 13.7217L12.3135 14.3135L12.5 14.4072L12.6865 14.3135L17.417 11.9482V11C17.417 10.6243 17.2676 10.2637 17.002 9.99805C16.7363 9.73239 16.3757 9.58301 16 9.58301H14.9531C14.9736 9.52785 14.9945 9.47278 15.0137 9.41699H16ZM8 1.41699C8.7493 1.41725 9.48988 1.56772 10.1777 1.85938L10.4688 1.99316C11.1407 2.3248 11.7386 2.78772 12.2266 3.35352L12.4287 3.60254C12.9498 4.28217 13.3078 5.07306 13.4746 5.91309C13.6204 6.64788 13.6167 7.4034 13.4648 8.13477L13.3906 8.44727C13.1687 9.27431 12.7592 10.039 12.1943 10.6826C11.7001 11.2458 11.0986 11.7035 10.4258 12.0283L10.1328 12.1592C9.34148 12.4866 8.4854 12.6276 7.63086 12.5713C6.77629 12.515 5.94562 12.2625 5.2041 11.834L5.04199 11.7402L4.86426 11.7998L2.52734 12.5781C2.51297 12.5829 2.49718 12.5844 2.48242 12.5811C2.46771 12.5777 2.45427 12.57 2.44336 12.5596C2.43248 12.5491 2.4239 12.536 2.41992 12.5215L2.4209 12.4766L3.13086 9.98633L3.17773 9.82227L3.0957 9.67285C2.69003 8.92875 2.46018 8.1032 2.4209 7.25977L2.41602 6.89746C2.43387 5.929 2.7026 4.98123 3.19727 4.14844C3.69193 3.31567 4.39541 2.62644 5.2373 2.14746C5.97402 1.72835 6.79501 1.48321 7.6377 1.42871L8 1.41699ZM10.1504 2.0293C9.04726 1.55229 7.81639 1.45584 6.65234 1.75488C5.48832 2.05393 4.45634 2.73104 3.71973 3.68066C2.98314 4.63029 2.58319 5.79819 2.58301 7L2.5957 7.36328C2.64415 8.08854 2.83815 8.79658 3.16602 9.44531L3.34082 9.76465L3.3418 9.76562C3.34763 9.77538 3.35105 9.78659 3.35254 9.79785C3.35396 9.80863 3.35337 9.81958 3.35059 9.83008L2.84082 11.6113L2.62305 12.3711L5.03125 11.5684C5.0429 11.5645 5.0552 11.563 5.06738 11.5645L5.10156 11.5771H5.10254C6.11785 12.22 7.31836 12.5067 8.51465 12.3926C9.71094 12.2784 10.8355 11.7695 11.7109 10.9463C12.5863 10.123 13.1633 9.03174 13.3506 7.84473C13.5378 6.65788 13.3253 5.44237 12.7461 4.38965C12.1668 3.33687 11.2533 2.50634 10.1504 2.0293ZM6.5 7.91699H8.5C8.52209 7.91699 8.54297 7.9258 8.55859 7.94141C8.57422 7.95703 8.58301 7.9779 8.58301 8C8.58301 8.0221 8.57422 8.04297 8.55859 8.05859C8.54297 8.0742 8.52209 8.08301 8.5 8.08301H6.5C6.47792 8.08299 6.45702 8.07421 6.44141 8.05859C6.4258 8.04297 6.41699 8.02209 6.41699 8C6.41699 7.97791 6.4258 7.95703 6.44141 7.94141C6.45702 7.92579 6.47792 7.91701 6.5 7.91699ZM6.5 5.91699H9.5C9.52209 5.91699 9.54297 5.9258 9.55859 5.94141C9.57422 5.95703 9.58301 5.9779 9.58301 6C9.58301 6.0221 9.57422 6.04297 9.55859 6.05859C9.54297 6.0742 9.52209 6.08301 9.5 6.08301H6.5C6.47792 6.08299 6.45702 6.07421 6.44141 6.05859C6.4258 6.04297 6.41699 6.02209 6.41699 6C6.41699 5.97791 6.4258 5.95703 6.44141 5.94141C6.45702 5.92579 6.47792 5.91701 6.5 5.91699Z"
            fill="black"
            stroke="white"
            strokeWidth="0.833333"
          />
        </svg>
      ),
      title: "Email",
      des: "Provide customers with best-in-class chat support by using the suggested SLA settings for chat.",
      btn: "",
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
            d="M9.99984 8.33464C11.8408 8.33464 13.3332 6.84225 13.3332 5.0013C13.3332 3.16035 11.8408 1.66797 9.99984 1.66797C8.15889 1.66797 6.6665 3.16035 6.6665 5.0013C6.6665 6.84225 8.15889 8.33464 9.99984 8.33464Z"
            stroke="white"
            strokeWidth="1.25"
          />
          <path
            d="M14.9995 7.50065C16.3803 7.50065 17.4995 6.56732 17.4995 5.41732C17.4995 4.26732 16.3803 3.33398 14.9995 3.33398M4.99951 7.50065C3.61868 7.50065 2.49951 6.56732 2.49951 5.41732C2.49951 4.26732 3.61868 3.33398 4.99951 3.33398"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M9.99951 17.5007C12.7609 17.5007 14.9995 16.0083 14.9995 14.1673C14.9995 12.3264 12.7609 10.834 9.99951 10.834C7.23809 10.834 4.99951 12.3264 4.99951 14.1673C4.99951 16.0083 7.23809 17.5007 9.99951 17.5007Z"
            stroke="white"
            strokeWidth="1.25"
          />
          <path
            d="M16.6663 15.8346C18.128 15.5138 19.1663 14.7021 19.1663 13.7513C19.1663 12.8005 18.128 11.9888 16.6663 11.668M3.33301 15.8346C1.87134 15.5138 0.833008 14.7021 0.833008 13.7513C0.833008 12.8005 1.87134 11.9888 3.33301 11.668"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Social media",
      des: "Provide customers with best-in-class chat support by using the suggested SLA settings for chat.",
      btn: "",
    },
  ];
  return (
    <>
      <Top title="SLAs">
        <div className=" hidden md:flex items-center gap-4">
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
      <div className="grid grid-cols-1 gap-6 p-4 md:p-5 lg:p-6 ">
        <div className="bg-primary/10 rounded-2xl md:rounded-[20px] p-4 md:p-6 text-center">
          <div className="mx-auto max-w-[500px]">
            <h4 className="text-heading font-semibold text-xl md:text-2xl lg:text-3xl xl:text-[34px] !leading-[140%] mb-3 md:mb-4 lg:mb-5">
              Get started with service level agreements (SLAs)
            </h4>
            <p className="text-sm font-medium text-heading !leading-normal">
              Service Level Agreements (SLAs) boost customer satisfaction,
              enhance accountability, optimize resource allocation, streamline
              problem resolution, and minimize disputes.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              className="group flex flex-col p-4 rounded-xl border border-solid border-stroke hover:border-primary bg-white hover:bg-primary/5 transition-all duration-300 max-w-[260px] min-w-full md:min-w-[260px]"
              key={index}
            >
              <div className="size-10 rounded-lg bg-btn text-white flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h4 className="font-semibold text-base mb-1">{item.title}</h4>
              <p className="font-medium text-gray text-xs !leading-[140%]">
                {item.des}
              </p>
              <div className="mt-auto">
                <Link
                  to={item.btn.url || ""}
                  className="btn w-full mt-4 capitalize border-primary text-primary"
                >
                  {item.btn.text || "use Template"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
