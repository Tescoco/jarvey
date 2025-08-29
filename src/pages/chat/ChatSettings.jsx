import React, { useState } from "react";
import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import Right from "../../components/chat/Right";
import Appearances from "../../components/chat/Appearances";
import Preferences from "../../components/chat/Preferences";
import Languages from "../../components/chat/Languages";
import Campaigns from "../../components/chat/Campaigns";
import Installation from "../../components/chat/Installation";
import Automate from "../../components/chat/SettingAutomate";
import StoreDropdown from "../../components/StoreDropdown";
import { c_border } from "../../utilities/Classes";

export default function ChatSettings() {
  const tabBtns = [
    "Appearances",
    "Preferences",
    "Languages",
    "Campaigns",
    "Installation",
    "Automate",
  ];
  const [activeTab, setActiveTab] = useState(tabBtns[0]);
  const [chatTab, setChatTab] = useState("During Business hours");

  // Add state for chat configuration
  const [chatConfig, setChatConfig] = useState({
    chatTitle: "Chat Title",
    defaultLanguage: "English",
    mainColor: "#7856FF",
    conversionColor: "#FE4234",
    launcherType: "Icon",
    launcherLabel: "Chat with us",
    welcomeMessage: "We will replay in a few moments.",
    welcomeMessageDuringHours: "We will replay in a few moments.",
    welcomeMessageOutsideHours:
      "We are currently offline. Leave us a message and we'll get back to you.",
    backgroundStyle: "Gradient",
    font: "Inter",
    keepMainColorOutside: false,
    showBotLabel: false,
    quickButtons: [
      "Track order",
      "Report Issue",
      "Cancel Order",
      "Product Questions",
      "Other",
    ],
  });

  // Function to update chat config
  const updateChatConfig = (updates) => {
    setChatConfig((prev) => ({ ...prev, ...updates }));
  };

  return (
    <>
      <Top title="Chat Settings">
        <div className="flex items-center gap-2">
          <StoreDropdown includeAllStores={false} className="min-w-[120px]" />
          {activeTab === "Languages" && (
            <button className="btn shadow !text-white">Add Language</button>
          )}
        </div>
      </Top>
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
        <div className="flex flex-wrap gap-4 md:gap-6">
          <div
            className={`flex-none w-full xl:w-[calc(100%-24px-var(--layout-right,350px))] ${
              activeTab === "Appearances" || activeTab === "Preferences"
                ? null
                : "!w-full"
            }`}
          >
            <div
              className={`!pr-0 ${
                activeTab !== "Languages" &&
                activeTab !== "Campaigns" &&
                activeTab !== "Installation"
                  ? c_border
                  : ""
              }  `}
            >
              <div className="md:h-[calc(100vh-325px)] overflow-y-auto pr-4 lg:pr-5'">
                {activeTab === "Appearances" && (
                  <Appearances
                    chatConfig={chatConfig}
                    updateChatConfig={updateChatConfig}
                  />
                )}
                {activeTab === "Preferences" && <Preferences />}
                {activeTab === "Languages" && <Languages />}
                {activeTab === "Campaigns" && <Campaigns />}
                {activeTab === "Installation" && <Installation />}
                {activeTab === "Automate" && <Automate />}
              </div>
            </div>
            {(activeTab === "Appearances" || activeTab === "Preferences") && (
              <div className="border-t border-solid border-stroke px-4 md:px-5 lg:px-6 py-3 flex items-center justify-end gap-4 flex-wrap mt-6">
                <button className="btn !px-3">Cancel</button>
                <button className="btn !px-3 shadow !text-white">
                  Save Changes
                </button>
              </div>
            )}
          </div>
          {(activeTab === "Appearances" || activeTab === "Preferences") && (
            <div className="flex-none hidden xl:block w-full md:w-[var(--layout-right,350px)] md:h-[calc(100vh-230px)]">
              <div className="chat-btns flex items-center mb-3">
                {["During Business hours", "Outside Business hours"].map(
                  (item, index) => (
                    <button
                      key={index}
                      onClick={() => setChatTab(item)}
                      className={`btn hover:scale-100 hover:bg-transparent text-gray hover:!text-gray  px-0 grow ${
                        index === 0 ? "rounded-r-none" : "rounded-l-none"
                      } ${chatTab === item && "!border-primary !text-primary"}`}
                    >
                      {item}{" "}
                    </button>
                  )
                )}
              </div>
              <Right chatConfig={chatConfig} chatTab={chatTab} />
            </div>
          )}
        </div>
      </MainInner>
    </>
  );
}
