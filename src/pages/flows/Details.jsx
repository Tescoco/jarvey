import React, { useEffect, useState } from "react";

import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import bg from "../../assets/img/flows-bg.png";
import { arrow_left } from "../../utilities/Classes";
import { Link } from "react-router-dom";
import FlowChart from "../../components/FlowChart";
import { useSearchParams } from "react-router-dom";

export default function Details() {
  const [searchParams] = useSearchParams();
  const install = searchParams.get("install");

  const editBtn = [
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33301 13.332C10.6467 13.332 13.333 10.6457 13.333 7.33203C13.333 4.01832 10.6467 1.33203 7.33301 1.33203C4.0193 1.33203 1.33301 4.01832 1.33301 7.33203C1.33301 10.6457 4.0193 13.332 7.33301 13.332Z"
        stroke="white"
      />
      <path
        d="M6 7.33333H7.33333M7.33333 7.33333H8.66667M7.33333 7.33333V8.66667M7.33333 7.33333V6M14.5413 13.9833C14.4993 14.0467 14.424 14.122 14.2727 14.2727C14.122 14.424 14.046 14.4993 13.9833 14.5413C13.8959 14.5992 13.7974 14.6383 13.6941 14.6559C13.5908 14.6736 13.4849 14.6695 13.3833 14.6439C13.2816 14.6183 13.1864 14.5717 13.1038 14.5072C13.0211 14.4427 12.9529 14.3617 12.9033 14.2693C12.868 14.2027 12.8373 14.1 12.7767 13.8953C12.7093 13.672 12.676 13.56 12.6693 13.4813C12.6605 13.3725 12.6754 13.2629 12.7131 13.1604C12.7507 13.0579 12.8102 12.9647 12.8875 12.8875C12.9647 12.8102 13.0579 12.7507 13.1604 12.7131C13.2629 12.6754 13.3725 12.6605 13.4813 12.6693C13.56 12.676 13.6713 12.7093 13.8953 12.776C14.1 12.8373 14.202 12.868 14.2687 12.904C14.361 12.9535 14.442 13.0217 14.5065 13.1042C14.571 13.1868 14.6176 13.2819 14.6432 13.3835C14.6689 13.4851 14.6731 13.5909 14.6555 13.6942C14.638 13.7974 14.5991 13.8959 14.5413 13.9833Z"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>,
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11809_98591)">
        <path
          d="M7.33301 13.332C10.6467 13.332 13.333 10.6457 13.333 7.33203C13.333 4.01832 10.6467 1.33203 7.33301 1.33203C4.0193 1.33203 1.33301 4.01832 1.33301 7.33203C1.33301 10.6457 4.0193 13.332 7.33301 13.332Z"
          stroke="white"
        />
        <path
          d="M6 7.33203H8.66667M14.5413 13.982C14.4993 14.0454 14.424 14.1207 14.2727 14.2714C14.122 14.4227 14.046 14.498 13.9833 14.54C13.8959 14.5979 13.7974 14.637 13.6941 14.6546C13.5908 14.6723 13.4849 14.6682 13.3833 14.6426C13.2816 14.617 13.1864 14.5704 13.1038 14.5059C13.0211 14.4414 12.9529 14.3604 12.9033 14.268C12.868 14.2014 12.8373 14.0987 12.7767 13.894C12.7093 13.6707 12.676 13.5587 12.6693 13.48C12.6605 13.3711 12.6754 13.2616 12.7131 13.1591C12.7507 13.0566 12.8102 12.9634 12.8875 12.8862C12.9647 12.8089 13.0579 12.7494 13.1604 12.7118C13.2629 12.6741 13.3725 12.6592 13.4813 12.668C13.56 12.6747 13.6713 12.708 13.8953 12.7747C14.1 12.836 14.202 12.8667 14.2687 12.9027C14.361 12.9522 14.442 13.0204 14.5065 13.1029C14.571 13.1855 14.6176 13.2806 14.6432 13.3822C14.6689 13.4838 14.6731 13.5896 14.6555 13.6929C14.638 13.7961 14.5991 13.8946 14.5413 13.982Z"
          stroke="white"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_11809_98591">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>,
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11822_114377)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.96167 0.832031H8.03767C9.57701 0.832031 10.783 0.832031 11.7243 0.958698C12.687 1.08803 13.447 1.3587 14.0437 1.9547C14.6403 2.55136 14.9103 3.31136 15.0397 4.2747C15.1663 5.21536 15.1663 6.42136 15.1663 7.9607V8.0367C15.1663 9.57603 15.1663 10.782 15.0397 11.7234C14.9103 12.686 14.6397 13.446 14.0437 14.0427C13.447 14.6394 12.687 14.9094 11.7237 15.0387C10.783 15.1654 9.57701 15.1654 8.03767 15.1654H7.96167C6.42234 15.1654 5.21634 15.1654 4.27501 15.0387C3.31234 14.9094 2.55234 14.6387 1.95567 14.0427C1.35901 13.446 1.08901 12.686 0.959675 11.7227C0.833008 10.782 0.833008 9.57603 0.833008 8.0367V7.9607C0.833008 6.42136 0.833008 5.21536 0.959675 4.27403C1.08901 3.31136 1.35967 2.55136 1.95567 1.9547C2.55234 1.35803 3.31234 1.08803 4.27567 0.958698C5.21634 0.832031 6.42234 0.832031 7.96167 0.832031ZM4.40834 1.94936C3.55634 2.06403 3.04234 2.2827 2.66301 2.66203C2.28301 3.04203 2.06501 3.55536 1.95034 4.40803C1.83434 5.2747 1.83301 6.41336 1.83301 7.9987C1.83301 9.58403 1.83434 10.7227 1.95034 11.5894C2.06501 12.442 2.28367 12.956 2.66301 13.336C3.04301 13.7154 3.55634 13.9334 4.40901 14.048C5.27567 14.164 6.41434 14.1654 7.99967 14.1654C9.58501 14.1654 10.7237 14.164 11.5903 14.048C12.443 13.9334 12.957 13.7147 13.337 13.3354C13.7163 12.9554 13.9343 12.442 14.049 11.5894C14.165 10.7227 14.1663 9.58403 14.1663 7.9987C14.1663 6.41336 14.165 5.2747 14.049 4.40803C13.9343 3.55536 13.7157 3.04136 13.3363 2.66136C12.9563 2.28203 12.443 2.06403 11.5903 1.94936C10.7237 1.83336 9.58501 1.83203 7.99967 1.83203C6.41434 1.83203 5.27501 1.83336 4.40834 1.94936ZM7.16501 3.9947C7.16607 4.12719 7.1145 4.25469 7.02163 4.34919C6.92875 4.44369 6.80217 4.49747 6.66967 4.4987C6.09901 4.50336 5.70034 4.52203 5.40034 4.58136C5.11501 4.63736 4.95634 4.7227 4.84034 4.8387C4.72434 4.9547 4.63901 5.11336 4.58301 5.3987C4.52434 5.6987 4.50501 6.09736 4.50034 6.66803C4.49919 6.80064 4.44541 6.92736 4.35083 7.02031C4.25625 7.11327 4.12862 7.16485 3.99601 7.1637C3.8634 7.16255 3.73668 7.10877 3.64372 7.01419C3.55077 6.91961 3.49919 6.79197 3.50034 6.65936C3.50501 6.0927 3.52301 5.60803 3.60167 5.2067C3.68301 4.79136 3.83567 4.4287 4.13301 4.13136C4.43034 3.83403 4.79301 3.68136 5.20834 3.60003C5.60967 3.52136 6.09367 3.50336 6.66101 3.4987C6.72667 3.49817 6.79179 3.51058 6.85266 3.53522C6.91352 3.55986 6.96894 3.59625 7.01574 3.64231C7.06254 3.68837 7.09981 3.7432 7.12542 3.80366C7.15103 3.86412 7.16448 3.92904 7.16501 3.9947ZM8.83367 3.9947C8.8342 3.92898 8.84767 3.86401 8.87332 3.8035C8.89898 3.743 8.93631 3.68814 8.98318 3.64207C9.03005 3.59601 9.08555 3.55963 9.14649 3.53503C9.20743 3.51043 9.27262 3.49808 9.33834 3.4987C9.90501 3.50336 10.389 3.52136 10.791 3.60003C11.2063 3.68136 11.5683 3.83403 11.8657 4.13136C12.163 4.4287 12.3163 4.79136 12.3977 5.2067C12.4763 5.60803 12.4937 6.09203 12.4983 6.65936C12.4995 6.79197 12.4479 6.91961 12.355 7.01419C12.262 7.10877 12.1353 7.16255 12.0027 7.1637C11.8701 7.16485 11.7424 7.11327 11.6479 7.02031C11.5533 6.92736 11.4995 6.80064 11.4983 6.66803C11.4937 6.09736 11.475 5.6987 11.4163 5.3987C11.3603 5.11336 11.275 4.9547 11.159 4.8387C11.043 4.7227 10.8843 4.63736 10.599 4.58136C10.299 4.5227 9.90034 4.50336 9.32967 4.4987C9.26401 4.49817 9.1991 4.48472 9.13863 4.45911C9.07817 4.4335 9.02335 4.39623 8.97729 4.34943C8.93123 4.30263 8.89484 4.24721 8.8702 4.18635C8.84556 4.12548 8.83315 4.06036 8.83367 3.9947ZM3.99567 8.83203C4.06134 8.8315 4.12646 8.84391 4.18732 8.86856C4.24819 8.8932 4.3036 8.92959 4.3504 8.97564C4.39721 9.0217 4.43448 9.07653 4.46009 9.13699C4.4857 9.19745 4.49915 9.26237 4.49967 9.32803C4.50434 9.8987 4.52301 10.2974 4.58234 10.5967C4.63834 10.8827 4.72367 11.0407 4.83967 11.1567C4.95567 11.2734 5.11434 11.3587 5.39967 11.4147C5.69967 11.4734 6.09834 11.492 6.66901 11.4974C6.80162 11.4985 6.92834 11.5523 7.02129 11.6469C7.11425 11.7415 7.16582 11.8691 7.16467 12.0017C7.16353 12.1343 7.10974 12.261 7.01516 12.354C6.92058 12.4469 6.79295 12.4985 6.66034 12.4974C6.09367 12.492 5.60901 12.4747 5.20767 12.396C4.79234 12.3147 4.42967 12.1614 4.13234 11.864C3.83501 11.5667 3.68234 11.204 3.60101 10.7894C3.52234 10.3874 3.50434 9.90336 3.49967 9.33603C3.49915 9.27037 3.51156 9.20525 3.5362 9.14438C3.56084 9.08352 3.59723 9.0281 3.64329 8.9813C3.68935 8.9345 3.74417 8.89723 3.80463 8.87162C3.8651 8.84601 3.93001 8.83255 3.99567 8.83203ZM12.0023 8.83203C12.068 8.83264 12.1329 8.84618 12.1933 8.87187C12.2538 8.89756 12.3085 8.93491 12.3545 8.98177C12.4005 9.02863 12.4368 9.0841 12.4614 9.145C12.486 9.2059 12.4983 9.27104 12.4977 9.3367C12.493 9.90336 12.4757 10.3874 12.397 10.7894C12.3157 11.2047 12.1623 11.5667 11.865 11.864C11.5677 12.1614 11.205 12.3147 10.7903 12.396C10.3883 12.4747 9.90434 12.492 9.33701 12.4967C9.27135 12.4972 9.20622 12.4848 9.14536 12.4602C9.0845 12.4355 9.02908 12.3991 8.98228 12.3531C8.93548 12.307 8.89821 12.2522 8.8726 12.1917C8.84699 12.1313 8.83353 12.0664 8.83301 12.0007C8.83248 11.935 8.84489 11.8699 8.86954 11.8091C8.89418 11.7482 8.93057 11.6928 8.97663 11.646C9.02268 11.5992 9.07751 11.5619 9.13797 11.5363C9.19843 11.5107 9.26335 11.4972 9.32901 11.4967C9.89967 11.492 10.2983 11.4734 10.5977 11.4147C10.8837 11.3587 11.0417 11.2734 11.1577 11.1574C11.2743 11.0407 11.3597 10.8827 11.4157 10.5974C11.4743 10.2974 11.493 9.8987 11.4983 9.32803C11.4989 9.26237 11.5123 9.19745 11.5379 9.13699C11.5635 9.07653 11.6008 9.0217 11.6476 8.97564C11.6944 8.92959 11.7498 8.8932 11.8107 8.86856C11.8716 8.84391 11.9367 8.8315 12.0023 8.83203Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_11822_114377">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>,
  ];
  const actionsBtns = ["editor", "analysis"];
  const [activeActionBtn, setActiveActionBtn] = useState(actionsBtns[0]);

  // Handle save functionality
  const handleSave = (flowData) => {
    // Here you would typically send the data to your backend
    console.log("Saving flow data:", flowData);
    // You could show a success message or update UI state
  };

  const handlePublish = () => {
    // Call the save function from FlowChart if available
    if (window.flowChartSave) {
      window.flowChartSave();
    }
    // Add your publish logic here
    console.log("Publishing flow...");
  };

  const handleDiscardChanges = () => {
    const confirmed = window.confirm(
      "Are you sure you want to discard all changes?"
    );
    if (confirmed) {
      // Reload the page to discard changes
      window.location.reload();
    }
  };

  const handleInstall = () => {
    if (window.location.pathname.includes("/onboarding")) {
      window.location.href = "/onboarding/install-flows?install=true";
    } else {
      window.location.href = "/app/flows";
    }
  };

  return (
    <>
      <Top title=" " className="!justify-start !px-2">
        <Link
          to="/app/create-flows"
          className="size-7 flex items-center justify-center rounded-full border border-solid border-stroke"
        >
          {arrow_left}
        </Link>
        <h4 className="font-inter font-medium text-base lg:text-lg text-heading capitalize">
          Flows Templates
        </h4>
        {install && (
          <button className="btn bg-off" onClick={handleInstall}>
            Install
          </button>
        )}
      </Top>
      <MainInner>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
          <Input
            placeholder="Shelf life Information"
            des="Flow name will not be visible to customers"
            desClass="!text-[10px]"
            inputClass="max-w-[327px] placeholder:text-heading placeholder:font-medium"
          />
          <div className="overflow-x-auto">
            <div className="flex items-center gap-2">
              <Dropdown
                className="mb-0"
                dropDownClass="min-w-max !left-auto right-0"
                btnClass="text-primary !border-primary max-h-10 text-nowrap "
                placeholder="English Us"
                items={[{ name: "English" }, { name: "Bangla" }]}
              />
              <button className="btn flex-[0_0_auto] text-nowrap min-w-[57px] px-0 bg-green text-white text-sm">
                Test
              </button>
              <button
                className="btn flex-[0_0_auto] text-nowrap bg-off px-3"
                onClick={handleDiscardChanges}
              >
                Discard Changes
              </button>
              <button
                className="btn flex-[0_0_auto] text-nowrap bg-primary border-primary text-white min-w-0 px-3"
                onClick={handlePublish}
              >
                Publish
              </button>
              <button className="btn flex-[0_0_auto] text-nowrap bg-off min-w-0 px-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 10.1287 1.74932 11.1991 2.1959 12.1593C2.28073 12.3417 2.30707 12.547 2.25938 12.7424L1.6105 15.4017C1.46385 16.0027 2.00016 16.5483 2.60364 16.4121L5.37762 15.7857C5.56458 15.7435 5.75968 15.7686 5.93457 15.847C6.87043 16.2666 7.90796 16.5 9 16.5Z"
                    stroke="currentColor"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p className="text-end text-[10px] mt-2.5">
              Last saved May 20 at 5:13 pm
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center  rounded-[20px]"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="flex items-center justify-between gap-4 flex-wrap w-full p-6 pb-0">
            <div className="flex items-center gap-2">
              {editBtn.map((item, index) => (
                <button
                  className="size-10 btn bg-primary border-primary text-white min-w-0 rounded-full p-0"
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center bg-white rounded-lg p-0.5 relative z-10">
              {actionsBtns.map((item, index) => (
                <button
                  onClick={() => setActiveActionBtn(item)}
                  className={`min-w-[68px] capitalize min-h-10 px-2.5 text-sm font-inter font-medium rounded-[10px] hover:text-heading ${
                    item === activeActionBtn
                      ? "bg-heading !text-white"
                      : "text-gray"
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
              {activeActionBtn === "analysis" && (
                <div className="absolute top-full right-0 mt-2.5 w-[360px] bg-white border border-solid border-stroke rounded-xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)]">
                  <div className="p-3">
                    <div className="bg-[#F7F7F7] rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-sm text-heading font-medium">
                            Total starts
                          </p>
                          <p className="text-xl leading-none mt-2">-</p>
                        </div>
                        <div>
                          <p className="text-sm text-heading font-medium">
                            Automation rate
                          </p>
                          <div className="flex items-center justify-center gap-2 mt-2">
                            <span>-</span>
                            <span className="text-heading font-medium">0%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 text-center mt-4">
                      <div>
                        <p className="text-green-700 font-medium">Automated</p>
                        <p className="mt-2">-</p>
                      </div>
                      <div>
                        <p className="text-[#FE4234] font-medium">Drop off</p>
                        <p className="mt-2">-</p>
                      </div>
                      <div>
                        <p className="text-[#6B7280] font-medium">
                          Tickets created
                        </p>
                        <p className="mt-2">-</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="overflow-x-auto w-full">
            <FlowChart
              onSave={handleSave}
              analysisMode={activeActionBtn === "analysis"}
            />
          </div>
        </div>
      </MainInner>
    </>
  );
}
