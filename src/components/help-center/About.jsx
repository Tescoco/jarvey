import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

export default function About() {
  const card = [
    {
      title: "About",
      des: "With the Jarvey AI native Help Center, you can set up help articles on your website for free. This is a great way to allow your customers to self serve and get instant answers before reaching out to your Support team. You can add images, videos, and GIFs to help your customers learn about your products and services in-depth!",
    },
    {
      title: "Highlights",
      list: [
        "Multiple help centers for multi-brands",
        "Multilingual, customizable settings to match with your brand;",
        "Contact cards (including contact form) to direct inquiries to one central location;",
        "Google Analytics to get insights about your customers behavior;",
        "Internal knowledge base to transfer knowledge with your team.",
      ],
    },
    {
      title: "For Automate subscribers only:",
      list: [
        "Self-Service Flows available in the Help Center to deflect even more tickets;",
        "Articles Recommendations in chat.",
      ],
    },
  ];
  return (
    <>
      <div className="about flex items-center gap-3 lg:gap-4 mb-4 lg:mb-5">
        <img src={logo} alt="" />
        <div className="text">
          <h2 className="text-lg text-[#0A0D14] font-semibold font-inter !leading-normal">
            Help Center
          </h2>
          <p className="text-sx text-gray font-inter font-medium !leading-normal">
            Set up a free Help Center/FAQ site and let your customers find
            answers.
          </p>
        </div>
      </div>
      <div className="bg-[#F7F7F7] px-14 md:px-[83px] py-[34px] rounded-2xl max-w-max mx-auto mb-5">
        <div className="flex justify-center">
          <Link
            to="/app/create-help-center"
            className="btn shadow !text-white mb-[10px]"
          >
            Create help Center
          </Link>
        </div>
        <div className="flex justify-center gap-3 lg:gap-4 mb-1">
          <p className="text-sx text-gray font-inter font-medium !leading-normal">
            Resource
          </p>
          <a
            href="#"
            className="text-sx text-btn font-inter font-medium !leading-normal !underline hover:!no-underline"
          >
            Document
          </a>
          <a
            href="#"
            className="text-sx text-btn font-inter font-medium !leading-normal !underline hover:!no-underline"
          >
            Live Webinar
          </a>
        </div>
        <div className="flex justify-center gap-3 lg:gap-4">
          <h3 className="text-sx text-gray font-inter font-medium !leading-normal">
            Support
          </h3>
          <a
            href="mailto:support@jarvey.com"
            className="text-sx text-btn font-inter font-medium !leading-normal !underline hover:!no-underline"
          >
            support@jarvey.com
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {card.map((item, index) => (
          <div className="" key={index}>
            <h3 className="mb-1 text-lg text-[#0A0D14] text-center md:text-start font-semibold font-inter !leading-normal">
              {item.title}
            </h3>
            {item.list && (
              <ul>
                {item.list.map((item, index) => (
                  <li
                    key={index}
                    className="flex text-xs !leading-normal text-gray gap-2"
                  >
                    <span className="flex-none size-1 bg-gray rounded-full relative top-[6px]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {item.des && (
              <p className="font-inter font-medium text-xs !leading-normal">
                {item.des}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
