import React from "react";
import Checkbox from "../Checkbox";
import { common_card } from "../../utilities/Classes";

export default function Install({ chatConfig, updateChatConfig }) {
  const handleRadioChange = (field, value) => {
    updateChatConfig({ [field]: value });
  };

  return (
    <>
      <div className="">
        <h4 className="text-lg !leading-normal mb-1">Install and launch</h4>
        <p className="text-xs mb-3 md:mb-4">
          Install the chat widget on your website and make it available for
          customers
        </p>
        <p className="flex items-center gap-1 font-inter font-semibold text-sm !leading-normal text-heading mb-3 md:mb-4">
          Installation method
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label
            htmlFor="install-1"
            className={`${common_card} cursor-pointer`}
          >
            <Checkbox
              type="radio"
              name="installation"
              id="install-1"
              checked={
                chatConfig?.installationMethod ===
                "Quick installation for Shopify"
              }
              onChange={() =>
                handleRadioChange(
                  "installationMethod",
                  "Quick installation for Shopify"
                )
              }
            />
            <h4 className="text-lg !leading-normal mt-2 mb-1">
              Quick installation for Shopify
            </h4>
            <p>
              To add Chat, click Install then Save in the new Shopify window
              without editing anything.{" "}
            </p>
          </label>
          <label
            htmlFor="install-2"
            className={`${common_card} cursor-pointer`}
          >
            <Checkbox
              type="radio"
              name="installation"
              id="install-2"
              checked={chatConfig?.installationMethod === "Manual installation"}
              onChange={() =>
                handleRadioChange("installationMethod", "Manual installation")
              }
            />
            <h4 className="text-lg !leading-normal mt-2 mb-1">
              Manual installation
            </h4>
            <p>
              Add the chat widget to non-Shopify stores, Shopify Headless,
              specific pages on a Shopify store, or any other website.
            </p>
          </label>
        </div>

        {/* Preview Summary */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h5 className="font-semibold text-sm mb-2">Configuration Summary:</h5>
          <div className="text-xs space-y-1">
            <p>
              <span className="font-medium">Chat Title:</span>{" "}
              {chatConfig?.chatTitle || "Chat Title"}
            </p>
            <p>
              <span className="font-medium">Main Color:</span>{" "}
              <span
                className="inline-block w-3 h-3 rounded-full ml-1"
                style={{ backgroundColor: chatConfig?.mainColor || "#7856FF" }}
              ></span>
            </p>
            <p>
              <span className="font-medium">Launcher Type:</span>{" "}
              {chatConfig?.launcherType || "Icon"}
            </p>
            <p>
              <span className="font-medium">Installation:</span>{" "}
              {chatConfig?.installationMethod ||
                "Quick installation for Shopify"}
            </p>
            <p>
              <span className="font-medium">Features:</span>{" "}
              {Object.entries(chatConfig?.enabledFeatures || {})
                .filter(([key, value]) => value)
                .map(([key]) => key)
                .join(", ") || "None"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
