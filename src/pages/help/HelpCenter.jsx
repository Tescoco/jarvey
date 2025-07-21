import React, { useState } from "react";
import { Link } from "react-router-dom";
import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import About from "../../components/help-center/About";
import Manage from "../../components/help-center/Manage";

export default function HelpCenter() {
  const tabBtns = ["About", "Manage"];
  const [activeTab, setActiveTab] = useState(tabBtns[0]);
  return (
    <>
      <Top>
        {activeTab === "Manage" && (
          <Link to="/app/help-center" className="btn shadow text-white">
            Create New
          </Link>
        )}
      </Top>
      <MainInner>
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
        {activeTab === "About" && <About />}
        {activeTab === "Manage" && <Manage />}
      </MainInner>
    </>
  );
}
