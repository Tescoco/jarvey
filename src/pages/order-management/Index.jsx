import { Link } from "react-router-dom";

import { c_16 } from "../../utilities/Classes";
import Switch from "../../components/Switch";

export default function OrderManagement() {
  const order = [
    {
      title: "Track order",
      des: "Allow customers to view order tracking information.",
      name: "No response configured",
      path: "/app/order/track",
      icon: (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_11810_102590)">
            <path
              d="M6 5.25C6.14918 5.25 6.29226 5.30926 6.39775 5.41475C6.50324 5.52024 6.5625 5.66332 6.5625 5.8125V8.4375C6.5625 8.58668 6.50324 8.72976 6.39775 8.83525C6.29226 8.94074 6.14918 9 6 9C5.85082 9 5.70774 8.94074 5.60225 8.83525C5.49676 8.72976 5.4375 8.58668 5.4375 8.4375V5.8125C5.4375 5.66332 5.49676 5.52024 5.60225 5.41475C5.70774 5.30926 5.85082 5.25 6 5.25ZM6 4.5C6.19891 4.5 6.38968 4.42098 6.53033 4.28033C6.67098 4.13968 6.75 3.94891 6.75 3.75C6.75 3.55109 6.67098 3.36032 6.53033 3.21967C6.38968 3.07902 6.19891 3 6 3C5.80109 3 5.61032 3.07902 5.46967 3.21967C5.32902 3.36032 5.25 3.55109 5.25 3.75C5.25 3.94891 5.32902 4.13968 5.46967 4.28033C5.61032 4.42098 5.80109 4.5 6 4.5Z"
              fill="#FE4333"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 12C9.315 12 12 9.315 12 6C12 2.685 9.315 0 6 0C2.685 0 0 2.685 0 6C0 9.315 2.685 12 6 12ZM6 11.25C8.9025 11.25 11.25 8.9025 11.25 6C11.25 3.0975 8.9025 0.75 6 0.75C3.0975 0.75 0.75 3.0975 0.75 6C0.75 8.9025 3.0975 11.25 6 11.25Z"
              fill="#FE4333"
            />
          </g>
          <defs>
            <clipPath id="clip0_11810_102590">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Return order",
      des: "Allow customers to request returns based on custom criteria.",
      path: "/app/order/return",
      name: "No response configured",
      icon: (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_11810_102590)">
            <path
              d="M6 5.25C6.14918 5.25 6.29226 5.30926 6.39775 5.41475C6.50324 5.52024 6.5625 5.66332 6.5625 5.8125V8.4375C6.5625 8.58668 6.50324 8.72976 6.39775 8.83525C6.29226 8.94074 6.14918 9 6 9C5.85082 9 5.70774 8.94074 5.60225 8.83525C5.49676 8.72976 5.4375 8.58668 5.4375 8.4375V5.8125C5.4375 5.66332 5.49676 5.52024 5.60225 5.41475C5.70774 5.30926 5.85082 5.25 6 5.25ZM6 4.5C6.19891 4.5 6.38968 4.42098 6.53033 4.28033C6.67098 4.13968 6.75 3.94891 6.75 3.75C6.75 3.55109 6.67098 3.36032 6.53033 3.21967C6.38968 3.07902 6.19891 3 6 3C5.80109 3 5.61032 3.07902 5.46967 3.21967C5.32902 3.36032 5.25 3.55109 5.25 3.75C5.25 3.94891 5.32902 4.13968 5.46967 4.28033C5.61032 4.42098 5.80109 4.5 6 4.5Z"
              fill="#FE4333"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 12C9.315 12 12 9.315 12 6C12 2.685 9.315 0 6 0C2.685 0 0 2.685 0 6C0 9.315 2.685 12 6 12ZM6 11.25C8.9025 11.25 11.25 8.9025 11.25 6C11.25 3.0975 8.9025 0.75 6 0.75C3.0975 0.75 0.75 3.0975 0.75 6C0.75 8.9025 3.0975 11.25 6 11.25Z"
              fill="#FE4333"
            />
          </g>
          <defs>
            <clipPath id="clip0_11810_102590">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Cancel order",
      des: "Allow customers to request order cancellations based on custom criteria.",
      path: "/app/order/cancel",
      name: "No response configured",
      icon: (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_11810_102590)">
            <path
              d="M6 5.25C6.14918 5.25 6.29226 5.30926 6.39775 5.41475C6.50324 5.52024 6.5625 5.66332 6.5625 5.8125V8.4375C6.5625 8.58668 6.50324 8.72976 6.39775 8.83525C6.29226 8.94074 6.14918 9 6 9C5.85082 9 5.70774 8.94074 5.60225 8.83525C5.49676 8.72976 5.4375 8.58668 5.4375 8.4375V5.8125C5.4375 5.66332 5.49676 5.52024 5.60225 5.41475C5.70774 5.30926 5.85082 5.25 6 5.25ZM6 4.5C6.19891 4.5 6.38968 4.42098 6.53033 4.28033C6.67098 4.13968 6.75 3.94891 6.75 3.75C6.75 3.55109 6.67098 3.36032 6.53033 3.21967C6.38968 3.07902 6.19891 3 6 3C5.80109 3 5.61032 3.07902 5.46967 3.21967C5.32902 3.36032 5.25 3.55109 5.25 3.75C5.25 3.94891 5.32902 4.13968 5.46967 4.28033C5.61032 4.42098 5.80109 4.5 6 4.5Z"
              fill="#FE4333"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 12C9.315 12 12 9.315 12 6C12 2.685 9.315 0 6 0C2.685 0 0 2.685 0 6C0 9.315 2.685 12 6 12ZM6 11.25C8.9025 11.25 11.25 8.9025 11.25 6C11.25 3.0975 8.9025 0.75 6 0.75C3.0975 0.75 0.75 3.0975 0.75 6C0.75 8.9025 3.0975 11.25 6 11.25Z"
              fill="#FE4333"
            />
          </g>
          <defs>
            <clipPath id="clip0_11810_102590">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Report order issue",
      des: "Allow customers to report order issues based on custom scenarios.",
      path: "/app/order/report",
    },
  ];

  return (
    <>
      <div className="mb-3">
        <p className="text-base text-[#858585] font-inter font-medium !leading-[150%] mb-3">
          Let customers track and manage orders in Chat, Help Center, and
          Contact Form with personalized options based on order status.
        </p>
        <a
          href=""
          className="text-base text-[#176448] font-inter font-medium !leading-[150%] !underline"
        >
          How To Set Up Order Management
        </a>
      </div>
      <div className={`${c_16} !pb-0`}>
        {order.map((item, index) => (
          <Link
            to={item.path}
            className="flex items-center justify-between border-b border-solid border-[#E2E4E9] last:border-b-0 py-4 mb-3"
            key={index}
          >
            <div className="flex items-start gap-2 lg:gap-3">
              <Switch id={index} />
              <div className="max-w-[230px] md:max-w-full">
                <p className="flex items-start gap-1 text-xs md:text-sm text-heading font-inter font-semibold !leading-[105%] mb-1">
                  {item.title}
                  <span className="text-xs text-[#858585] text-nowrap font-medium">
                    {item.time}
                  </span>{" "}
                </p>
                <p className="text-xs text-[#858585] font-inter font-medium !leading-[150%]">
                  {item.des}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="flex items-center gap-1">
                {item.icon}
                <span className="text-xs !line-clamp-1">{item.name}</span>
              </p>
              <button className="!cursor-pointer">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.99951 2.66536L10.39 7.05588C10.9107 7.57658 10.9107 8.4208 10.39 8.9415L5.99951 13.332"
                    stroke="#858585"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
