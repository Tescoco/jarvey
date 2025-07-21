import React from "react";
import Dropdown from "../Dropdown";
import Switch from "../Switch";

export default function Automate({ chatConfig, updateChatConfig }) {
  const contact = [
    { name: "contact-1" },
    { name: "contact-2" },
    { name: "contact-3" },
    { name: "contact-4" },
    { name: "contact-5" },
  ];

  const handleInputChange = (field, value) => {
    updateChatConfig({ [field]: value });
  };

  const handleFeatureToggle = (feature, enabled) => {
    const currentFeatures = chatConfig?.enabledFeatures || {};
    const updatedFeatures = { ...currentFeatures, [feature]: enabled };

    // Update quick buttons based on enabled features
    let quickButtons = [...(chatConfig?.quickButtons || [])];

    if (feature === "orderTracking") {
      if (enabled && !quickButtons.includes("Track order")) {
        quickButtons = [
          "Track order",
          ...quickButtons.filter((btn) => btn !== "Track order"),
        ];
      } else if (!enabled) {
        quickButtons = quickButtons.filter((btn) => btn !== "Track order");
      }
    }

    if (feature === "articleRecommendation") {
      if (enabled && !quickButtons.includes("Help Articles")) {
        quickButtons.push("Help Articles");
      } else if (!enabled) {
        quickButtons = quickButtons.filter((btn) => btn !== "Help Articles");
      }
    }

    updateChatConfig({
      enabledFeatures: updatedFeatures,
      quickButtons: quickButtons,
    });
  };

  return (
    <>
      <div className="mb-3 md:mb-4">
        <h4 className="text-lg !leading-normal mb-1">Automate</h4>
        <p className="text-xs">
          Quickly activate Automate features to start instantly answering common
          questions
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-3 md:gap-3">
          <div className="">
            <label
              htmlFor=""
              className="block mb-1 font-inter font-semibold text-sm !leading-normal text-heading"
            >
              Connect a Store<span className="text-[#FE4234]">*</span>
            </label>
            <p className="text-xs mb-1">
              Connect a Store to use Automate features and to enable
              auto-embedding to your website.
            </p>
            <Dropdown
              className="mb-0"
              placeholder="Connect"
              items={contact}
              search={true}
              required={true}
              value={chatConfig?.automateStore}
              onChange={(value) => handleInputChange("automateStore", value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:gap-4">
          <p className="font-inter font-semibold text-sm !leading-normal text-heading">
            Order management
          </p>
          <div className="flex items-center gap-2">
            <Switch
              checked={chatConfig?.enabledFeatures?.orderTracking || false}
              id="l1"
              onChange={(e) =>
                handleFeatureToggle("orderTracking", e.target.checked)
              }
            />
            <label
              htmlFor="l1"
              className=" cursor-pointer font-inter font-medium text-sm text-heading"
            >
              Allow customers to track orders from my chat
            </label>
          </div>
          <p className="font-inter font-semibold text-sm !leading-normal text-heading">
            Article Recommendation
          </p>
          <div className="flex items-center gap-2">
            <Switch
              checked={
                chatConfig?.enabledFeatures?.articleRecommendation || false
              }
              id="l2"
              onChange={(e) =>
                handleFeatureToggle("articleRecommendation", e.target.checked)
              }
            />
            <label
              htmlFor="l2"
              className="cursor-pointer font-inter font-medium text-sm text-heading"
            >
              Recommend articles from your Help Center with AI
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
