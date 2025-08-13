import React, { useState } from "react";
import { Link } from "react-router-dom";

import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import Articles from "../../components/help-center/Articles";
import Contact from "../../components/help-center/Contact";
import Appearance from "../../components/help-center/Appearance";
import Preferences from "../../components/help-center/Preferences";
import Customization from "../../components/help-center/Customization";
import PublishAndTrack from "../../components/help-center/PublishAndTrack";
import Automate from "../../components/help-center/Automate";

export default function HelpCenterSettings() {
  const tabBtns = [
    "Articles",
    "Contact",
    "Appearance",
    "Preferences",
    "Customization",
    "Publish and track",
    "Automate",
  ];
  const [activeTab, setActiveTab] = useState(tabBtns[0]);
  return (
    <>
      <Top
        title={
          <>
            <Link
              to="/app/help-center"
              className="text-primary underline hover:no-underline"
            >
              Help Center
            </Link>
            {" > Store 1"}
          </>
        }
      >
        {(activeTab === "Publish and track" || activeTab === "Automate") && (
          <Link
            to="/app/help-center"
            className="btn border-primary text-primary"
          >
            View help Center{" "}
          </Link>
        )}
      </Top>
      <div className="flex flex-col justify-between h-[calc(100%-88px)]">
        <MainInner>
          <div className="border-b border-solid border-stroke flex items-center overflow-x-auto mb-5 md:mb-6">
            {tabBtns.map((item, index) => (
              <button
                onClick={() => setActiveTab(item)}
                key={index}
                className={`grow font-inter font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${
                  item === activeTab
                    ? "border-btn text-btn"
                    : "border-transparent text-heading"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          {activeTab === "Articles" && <Articles />}
          {activeTab === "Contact" && <Contact />}
          {activeTab === "Appearance" && <Appearance />}
          {activeTab === "Preferences" && <Preferences />}
          {activeTab === "Customization" && <Customization />}
          {activeTab === "Publish and track" && <PublishAndTrack />}
          {activeTab === "Automate" && <Automate />}
        </MainInner>
        {activeTab === "Publish and track" && (
          <div>
            <div className="footer flex px-4 py-3 bg-white border-t border-solid border-[#E2E4E9] mt-5 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3">
                <button className="btn">Save changes</button>
                <button className="btn">Cancel</button>
              </div>
              <button className="btn border-[#FE4333] text-[#FE4333] ml-auto">
                Delete help centre
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
