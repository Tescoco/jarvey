import React, { useState } from "react";
import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import Progress from "../../components/Progress";
import Basics from "../../components/chat/Basics";
import Customize from "../../components/chat/Customize";
import { Link } from "react-router-dom";
import Automate from "../../components/chat/Automate";
import Install from "../../components/chat/Install";
import Right from "../../components/chat/Right";
import { c_border, save_btn } from "../../utilities/Classes";
import Dropdown from "../../components/Dropdown";

export default function Chat() {
  const progressTitle = [
    `Set up the basics`,
    `Customise your Chat`,
    `Automate`,
    `Install & Launch`,
  ];
  const [stepProgress, setStepProgress] = useState(0);
  const [chatTab, setChatTab] = useState("During Business hours");

  // Add state for chat configuration
  const [chatConfig, setChatConfig] = useState({
    chatTitle: "Chat Title",
    defaultLanguage: "English",
    platformType: "E-commerce Platform",
    connectType: "Allow Live chat messages",
    mainColor: "#7856FF",
    conversionColor: "#FE4234",
    launcherType: "Icon",
    launcherLabel: "Chat with us",
    welcomeMessage: "We will replay in a few moments.",
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
    console.log("Updating chat config:", updates); // Debug log
    setChatConfig((prev) => {
      const newConfig = { ...prev, ...updates };
      console.log("New chat config:", newConfig); // Debug log
      return newConfig;
    });
  };

  const stores = [
    { name: "Stores 1" },
    { name: "Stores 2" },
    { name: "Stores 3" },
    { name: "Stores 4" },
    { name: "Stores 5" },
  ];

  return (
    <>
      <Top title="Chat > Store 1">
        <Dropdown
          className="mb-0"
          btnClass="text-primary !font-bold !h-[34px] !min-w-[97px] max-w-max"
          placeholder="Stores 1"
          dropDownClass="max-w-max"
          items={stores}
          required={true}
        />
      </Top>
      <MainInner className="chat">
        <Progress
          className="justify-start md:justify-center mb-5 md:mb-7"
          itemClass="min-w-[120px]"
          items={progressTitle}
          activeItem={stepProgress}
        />
        <div className="flex flex-wrap gap-4 md:gap-6">
          {/* left */}
          <div className="flex flex-col flex-none w-full xl:w-[calc(100%-24px-var(--layout-right,350px))]">
            <div className={`${c_border}`}>
              {stepProgress == 0 && (
                <Basics
                  chatConfig={chatConfig}
                  updateChatConfig={updateChatConfig}
                />
              )}
              {stepProgress == 1 && (
                <Customize
                  chatConfig={chatConfig}
                  updateChatConfig={updateChatConfig}
                />
              )}
              {stepProgress == 2 && (
                <Automate
                  chatConfig={chatConfig}
                  updateChatConfig={updateChatConfig}
                />
              )}
              {stepProgress == 3 && (
                <Install
                  chatConfig={chatConfig}
                  updateChatConfig={updateChatConfig}
                />
              )}
            </div>

            {stepProgress === 0 && (
              <div className="flex items-center justify-end mt-4 xl:mt-6 gap-2.5">
                <button className="btn !border-primary !text-primary hover:!text-white !min-w-[98px]">
                  Cancel
                </button>
                <button
                  onClick={() => setStepProgress(stepProgress + 1)}
                  className="btn shadow !text-white"
                >
                  Create & Customize
                </button>
              </div>
            )}
            {stepProgress != 0 && (
              <div className="flex items-center justify-between mt-auto pt-6">
                <Link to="/" className={`${save_btn}`}>
                  Save & Customize latter
                </Link>
                <div className="flex items-center gap-3 lg:gap-4">
                  <button
                    className="btn !min-w-[61px] !border-primary !text-primary hover:!text-white"
                    onClick={() => setStepProgress(stepProgress - 1)}
                  >
                    Back
                  </button>
                  {stepProgress === 3 ? (
                    <Link
                      to="/app/chat-settings"
                      className="btn !min-w-[61px] shadow !text-white"
                    >
                      Next
                    </Link>
                  ) : (
                    <button
                      className="btn !min-w-[61px] shadow !text-white"
                      onClick={() => setStepProgress(stepProgress + 1)}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* left */}
          {/* right bar */}
          <div className="flex-none hidden xl:block  w-full md:w-[var(--layout-right,350px)]">
            {stepProgress === 0 ? null : (
              <div className="flex items-center mb-3">
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
            )}
            <Right
              heightMinus={stepProgress === 0 ? 544 : 496}
              chatConfig={chatConfig}
              chatTab={chatTab}
            />
          </div>
          {/* right bar */}
        </div>
      </MainInner>
    </>
  );
}
