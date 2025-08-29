import { useState } from "react";
import MainInner from "../components/MainInner";
import Top from "../layouts/Top";
import chat from "../assets/img/chat.png";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import TrainProgress from "../components/TrainProgress";
import {
  arrow_down,
  arrow_right,
  c_16,
  c_24,
  copyIcon2,
  deleteIcon,
  edit,
  langList,
  search,
  share,
} from "../utilities/Classes";
import greatWork from "../assets/img/great-work.png";
import Modal from "../components/Modal";
import Checkbox from "../components/Checkbox";

export default function ArticleRecommendation() {
  const tabBtns = ["Train", "Configuration"];
  const [activeTab, setActiveTab] = useState(tabBtns[0]);
  const [trainArticle, setTrainArticle] = useState(0);
  const [trainModal, setTrainModal] = useState(false);
  const [articleSetting, setArticleSetting] = useState(false);

  const Icons = [
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.33333 2H14V6.66667M14 9.82467V13C14 13.2652 13.8946 13.5196 13.7071 13.7071C13.5196 13.8946 13.2652 14 13 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H6M8.6 7.4L13.7 2.3"
            stroke="#858585"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      url: "#",
    },
    {
      icon: (
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.99935 6.66667C3.99935 7.10869 3.82375 7.53262 3.51119 7.84518C3.19863 8.15774 2.77471 8.33333 2.33268 8.33333C1.89065 8.33333 1.46673 8.15774 1.15417 7.84518C0.84161 7.53262 0.666016 7.10869 0.666016 6.66667C0.666016 6.22464 0.84161 5.80072 1.15417 5.48816C1.46673 5.17559 1.89065 5 2.33268 5C2.77471 5 3.19863 5.17559 3.51119 5.48816C3.82375 5.80072 3.99935 6.22464 3.99935 6.66667Z"
            stroke="#858585"
            strokeWidth="1.2"
          />
          <path
            d="M7.54667 10.1999L4 7.85859M7.61333 3.55859L4.06667 5.89993"
            stroke="#858585"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M10.6654 11.3333C10.6654 11.7754 10.4898 12.1993 10.1772 12.5118C9.86465 12.8244 9.44073 13 8.9987 13C8.55667 13 8.13275 12.8244 7.82019 12.5118C7.50763 12.1993 7.33203 11.7754 7.33203 11.3333C7.33203 10.8913 7.50763 10.4674 7.82019 10.1548C8.13275 9.84226 8.55667 9.66667 8.9987 9.66667C9.44073 9.66667 9.86465 9.84226 10.1772 10.1548C10.4898 10.4674 10.6654 10.8913 10.6654 11.3333ZM10.6654 2.66667C10.6654 3.10869 10.4898 3.53262 10.1772 3.84518C9.86465 4.15774 9.44073 4.33333 8.9987 4.33333C8.55667 4.33333 8.13275 4.15774 7.82019 3.84518C7.50763 3.53262 7.33203 3.10869 7.33203 2.66667C7.33203 2.22464 7.50763 1.80072 7.82019 1.48816C8.13275 1.17559 8.55667 1 8.9987 1C9.44073 1 9.86465 1.17559 10.1772 1.48816C10.4898 1.80072 10.6654 2.22464 10.6654 2.66667Z"
            stroke="#858585"
            strokeWidth="1.2"
          />
        </svg>
      ),
      url: "#",
    },
    {
      icon: (
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.666016 13.0002H11.3327M1.77668 7.79156C1.49243 8.07645 1.33275 8.46244 1.33268 8.86489V11.0002H3.48135C3.88402 11.0002 4.27002 10.8402 4.55468 10.5549L10.888 4.21822C11.1722 3.93329 11.3317 3.5473 11.3317 3.14489C11.3317 2.74248 11.1722 2.35649 10.888 2.07156L10.2627 1.44489C10.1217 1.30379 9.9542 1.19187 9.76989 1.11554C9.58559 1.0392 9.38804 0.999938 9.18854 1C8.98905 1.00006 8.79153 1.03944 8.60727 1.1159C8.42301 1.19235 8.25562 1.30437 8.11468 1.44556L1.77668 7.79156Z"
            stroke="#858585"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      url: "#",
    },
    {
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.666016 7.0013C0.666016 4.01597 0.666016 2.52264 1.59335 1.5953C2.52068 0.667969 4.01335 0.667969 6.99935 0.667969C9.98468 0.667969 11.478 0.667969 12.4053 1.5953C13.3327 2.52264 13.3327 4.0153 13.3327 7.0013C13.3327 9.98664 13.3327 11.48 12.4053 12.4073C11.478 13.3346 9.98535 13.3346 6.99935 13.3346C4.01402 13.3346 2.52068 13.3346 1.59335 12.4073C0.666016 11.48 0.666016 9.9873 0.666016 7.0013Z"
            stroke="#858585"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.69141 7.0207H8.34207M8.34207 7.0207C8.34207 7.4007 6.90541 8.6787 6.90541 8.6787M8.34207 7.0207C8.34207 6.63003 6.90541 5.37736 6.90541 5.37736M10.3587 4.33203V9.66536"
            stroke="#858585"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      url: "#",
    },
  ];
  const IconsLIst = [
    {
      icon: (
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.83874 2.15597C5.57782 0.830635 5.94707 0.167969 6.49949 0.167969C7.0519 0.167969 7.42115 0.830635 8.16024 2.15597L8.35157 2.49897C8.56157 2.8758 8.66657 3.06422 8.8299 3.18847C8.99324 3.31272 9.1974 3.3588 9.60574 3.45097L9.97674 3.53497C11.4117 3.85989 12.1287 4.02205 12.2996 4.57097C12.4699 5.1193 11.9811 5.69155 11.0028 6.83547L10.7497 7.13122C10.472 7.45614 10.3326 7.61889 10.2702 7.81955C10.2077 8.0208 10.2287 8.2378 10.2707 8.67122L10.3092 9.06614C10.4568 10.5927 10.5309 11.3557 10.0841 11.6946C9.63724 12.0336 8.96524 11.7244 7.6224 11.1061L7.27415 10.9462C6.89265 10.7701 6.7019 10.6826 6.49949 10.6826C6.29707 10.6826 6.10632 10.7701 5.72482 10.9462L5.37715 11.1061C4.03374 11.7244 3.36174 12.0336 2.91549 11.6952C2.46807 11.3557 2.54215 10.5927 2.68974 9.06614L2.72824 8.6718C2.77024 8.2378 2.79124 8.0208 2.72824 7.82014C2.6664 7.61889 2.52699 7.45613 2.24932 7.1318L1.99615 6.83547C1.0179 5.69214 0.529069 5.11989 0.699403 4.57097C0.869736 4.02205 1.58782 3.8593 3.02282 3.53497L3.39382 3.45097C3.80157 3.3588 4.00515 3.31272 4.16907 3.18847C4.33299 3.06422 4.4374 2.8758 4.6474 2.49897L4.83874 2.15597Z"
            fill="#858585"
          />
        </svg>
      ),
      value: "0%",
    },
    {
      icon: (
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.83268 12.2513H3.41602V4.66797H2.83268C2.52326 4.66797 2.22652 4.79089 2.00772 5.00968C1.78893 5.22847 1.66602 5.52522 1.66602 5.83464V11.0846C1.66602 11.3941 1.78893 11.6908 2.00772 11.9096C2.22652 12.1284 2.52326 12.2513 2.83268 12.2513ZM12.166 4.66797H8.08268L8.73718 2.7033C8.79558 2.52796 8.81149 2.34125 8.7836 2.15856C8.75571 1.97586 8.68481 1.80241 8.57675 1.65248C8.46869 1.50255 8.32656 1.38044 8.16206 1.29621C7.99757 1.21197 7.81541 1.16802 7.6306 1.16797H7.49935L4.58268 4.34014V12.2513H10.9993L13.2814 7.23697L13.3327 7.0013V5.83464C13.3327 5.52522 13.2098 5.22847 12.991 5.00968C12.7722 4.79089 12.4754 4.66797 12.166 4.66797Z"
            fill="#858585"
          />
        </svg>
      ),
      value: "34",
    },
    {
      icon: (
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1673 1.7487H11.584V9.33203H12.1673C12.4767 9.33203 12.7735 9.20911 12.9923 8.99032C13.2111 8.77153 13.334 8.47478 13.334 8.16536V2.91537C13.334 2.60595 13.2111 2.3092 12.9923 2.09041C12.7735 1.87161 12.4767 1.7487 12.1673 1.7487ZM2.83398 9.33203H6.91732L6.26282 11.2967C6.20442 11.472 6.18851 11.6587 6.2164 11.8414C6.24429 12.0241 6.31519 12.1976 6.42325 12.3475C6.53131 12.4974 6.67344 12.6196 6.83794 12.7038C7.00243 12.788 7.18459 12.832 7.3694 12.832H7.50065L10.4173 9.65986V1.7487H4.00065L1.71865 6.76303L1.66732 6.9987V8.16536C1.66732 8.47478 1.79023 8.77153 2.00903 8.99032C2.22782 9.20911 2.52456 9.33203 2.83398 9.33203Z"
            fill="#858585"
          />
        </svg>
      ),
      value: "34",
    },
  ];
  return (
    <>
      <Top>
        <Dropdown
          btnClass="px-4 text-primary !font-bold"
          dropDownClass="w-max min-w-full"
          items={[
            { name: "Store 1" },
            { name: "Store 2" },
            { name: "Store 3" },
          ]}
          placeholder="Store 1"
        />
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
        {activeTab === "Train" && (
          <>
            {trainArticle === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="mx-auto md:mx-0 mb-5 md:mb-0 max-w-[300px] xl:max-w-[351px] max-h-[555px]">
                  <img src={chat} alt="" />
                </div>
                <div className="max-w-[546px] my-auto text-center md:text-start">
                  <span className="max-w-max px-2.5 py-1 rounded-lg bg-primary/10 mx-auto md:mx-0 text-primary font-semibold text-xs !leading-normal block mb-1">
                    AI Powered
                  </span>
                  <h2 className="mb-3 md:mb-5 lg:mb-6 xl:mb-[26px] text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] !leading-normal ">
                    Configure Article Recommendation to access AI Training
                  </h2>
                  <p className="mb-4 md:mb-5 lg:mb-6 xl:mb-[26px] max-w-[546px] md:text-base">
                    Review recommendations and provide feedback to optimized AI
                    performance.
                  </p>
                  <button
                    className="btn bg-prim"
                    onClick={() => setTrainArticle(trainArticle + 1)}
                  >
                    Set Up Article Recommendation
                  </button>
                </div>
              </div>
            )}
            {trainArticle === 1 && (
              <div className="max-w-[615px] mx-auto text-center">
                <div className="mb-8 md:mb-14 xl:mb-[174px]">
                  <h2 className="mb-4 md:mb-5 lg:mb-6 xl:mb-[26px] text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] !leading-normal ">
                    Train Article Recommendation
                  </h2>
                  <p className="mb-3 max-w-[546px] mx-auto md:text-base">
                    Review customer messages, check if recommended articles are
                    helpful, and provide feedback to improve future
                    recommendations.
                  </p>
                  <Link
                    to=""
                    className="text-[#176448] !underline block font-semibold md:text-base"
                  >
                    How To Train Article Recommendations
                  </Link>
                </div>
                <p className="mb-4  md:text-base">
                  There are no articles published in quickstart-b3e2d5d9 Help
                  Center.
                </p>
                <button
                  className="btn bg-prim"
                  // onClick={() => setTrainArticle(trainArticle + 1)}
                  // onClick={() => navigate("/app/help-center/add-articles")}
                >
                  <Link to="/app/create-help-center">
                    Add Articles To Your Help Center
                  </Link>
                </button>
              </div>
            )}
            {trainArticle === 2 && (
              <div className="max-w-[615px] mx-auto text-center">
                <div className="mb-8 md:mb-14 xl:mb-[174px]">
                  <h2 className="mb-4 md:mb-5 lg:mb-6 xl:mb-[26px] text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] !leading-normal ">
                    Train Article Recommendation
                  </h2>
                  <p className="mb-3 max-w-[546px] mx-auto md:text-base">
                    Review customer messages, check if recommended articles are
                    helpful, and provide feedback to improve future
                    recommendations.
                  </p>
                  <Link
                    to=""
                    className="text-[#176448] !underline block font-semibold md:text-base"
                  >
                    How To Train Article Recommendations
                  </Link>
                </div>
                <p className="mb-4  md:text-base">
                  No recommendations have been sent yet
                </p>
                <button
                  className="btn bg-off"
                  onClick={() => setTrainArticle(trainArticle + 1)}
                >
                  Learn about Article Recommendation and Al training
                </button>
              </div>
            )}
            {trainArticle === 3 && (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <div>
                  <div className="">
                    <div className="flex items-center flex-wrap md:flex-nowrap text-center md:text-start justify-between gap-4">
                      <div className="max-w-[453px]">
                        <h3 className="text-lg xl:text-xl mb-2">
                          Train Article Recommendation
                        </h3>
                        <p className="mb-2">
                          Review customer messages, check if recommended
                          articles are helpful, and provide feedback to improve
                          future recommendations.
                        </p>
                        <Link
                          to=""
                          className="text-primary !underline block font-semibold"
                        >
                          How To Train Article Recommendations
                        </Link>
                      </div>
                      <TrainProgress
                        className="mx-auto md:mx-0"
                        completed={0}
                        total={1}
                      />
                    </div>
                    <div className="flex items-center flex-wrap md:flex-nowrap justify-center gap-3 md:justify-between my-4">
                      <div className="flex items-center gap-4 md:gap-5">
                        <Dropdown
                          className=""
                          placeholder="All Customer Feedback"
                          btnClass="max-h-10"
                          items={[{ name: "All Customer Feedback" }]}
                        />
                        <Dropdown
                          className=""
                          placeholder="All Articles"
                          btnClass="max-h-10"
                          items={[{ name: "All Articles" }]}
                        />
                      </div>
                      <h5 className="text-sm font-semibold !leading-normal">
                        Show Completed
                      </h5>
                    </div>
                  </div>
                  <div className={`${c_24}`}>
                    <Input
                      className="mb-4 md:mb-5"
                      placeholder="Search..."
                      leftIcon={search}
                      inputClass="max-h-[36px]"
                    />
                    <div className="">
                      <ul className="flex flex-col gap-0.5 border-b border-stroke">
                        <li className="bg-[#F6F8FA] px-3 py-2 flex items-center">
                          <p className="w-1/2 md:w-[70%]">Message</p>
                          <p>Recommended Article</p>
                        </li>
                        <li className="bg-[#F6F8FA] px-3 py-2 min-h-[54px] flex items-center">
                          <div className="flex items-center gap-2 w-1/2 md:w-[70%]">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 11.1287 2.74932 12.1991 3.1959 13.1593C3.28073 13.3417 3.30707 13.547 3.25938 13.7424L2.6105 16.4017C2.46385 17.0027 3.00016 17.5483 3.60364 17.4121L6.37762 16.7857C6.56458 16.7435 6.75968 16.7686 6.93457 16.847C7.87043 17.2666 8.90796 17.5 10 17.5Z"
                                stroke="#111111"
                                strokeOpacity="0.7"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <h5>Hello</h5>
                          </div>
                          <h5>01/09/2025</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${c_16}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 16.693 4.12398 18.2987 4.79384 19.7389C4.9211 20.0125 4.9606 20.3205 4.88907 20.6136L3.91576 24.6025C3.69577 25.5041 4.50024 26.3225 5.40546 26.1181L9.56642 25.1785C9.84687 25.1152 10.1395 25.1528 10.4019 25.2705C11.8056 25.8999 13.3619 26.25 15 26.25Z"
                        stroke="#111111"
                        strokeOpacity="0.7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h4 className="text-lg md:text-xl xl:text-2xl !leading-[1.4] font-semibold ">
                      Name of help center or chat]
                    </h4>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FFC563]/10 flex items-center gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10 7L9.484 8.394C8.808 10.222 8.47 11.136 7.803 11.803C7.136 12.47 6.222 12.808 4.394 13.484L3 14L4.394 14.516C6.222 15.192 7.136 15.531 7.803 16.197C8.47 16.863 8.808 17.778 9.484 19.606L10 21L10.516 19.606C11.192 17.778 11.531 16.864 12.197 16.197C12.863 15.53 13.778 15.192 15.606 14.516L17 14L15.606 13.484C13.778 12.808 12.864 12.47 12.197 11.803C11.53 11.136 11.192 10.222 10.516 8.394L10 7ZM18 3L17.779 3.597C17.489 4.381 17.344 4.773 17.059 5.058C16.773 5.344 16.381 5.489 15.597 5.778L15 6L15.598 6.221C16.381 6.511 16.773 6.656 17.058 6.941C17.344 7.227 17.489 7.619 17.778 8.403L18 9L18.221 8.403C18.511 7.619 18.656 7.227 18.941 6.942C19.227 6.656 19.619 6.511 20.403 6.222L21 6L20.402 5.779C19.619 5.489 19.227 5.344 18.942 5.059C18.656 4.773 18.511 4.381 18.222 3.597L18 3Z"
                        stroke="#FFC563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-[11px] font-medium !leading-normal">
                      Our Al suggested that How much does shipping cost? copy
                      might be helpful.
                    </p>
                  </div>
                  <p className="mt-3 mb-[18px]">
                    CUSTOMER FEEDBACK: NEEDED MORE HELP
                  </p>
                  <div className="pb-[18px] border-b border-stroke">
                    <h5 className="mb-2.5">
                      Was this the best article to recommend?
                    </h5>
                    <div className="flex items-center gap-3">
                      <button
                        className="text-xs px-2 md:px-8 md:text-sm btn bg-prim"
                        onClick={() => setTrainArticle(trainArticle + 1)}
                      >
                        Keep Recommendation
                      </button>
                      <button
                        className="text-xs px-2 md:px-8 md:text-sm btn bg-off"
                        onClick={() => setTrainModal(!trainModal)}
                      >
                        Improve Recommendation
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2.5">
                    <div className="">
                      <p className="text-xs md:text-sm">ARTICLE PREVIEW</p>
                      <h5 className="md:text-base">
                        How much does shipping cost? copy
                      </h5>
                    </div>
                    <div className="flex items-center gap-1 ">
                      <button
                        onClick={() => setArticleSetting(!articleSetting)}
                        className="hover:text-primary"
                      >
                        {edit}
                      </button>
                      <button className="hover:text-primary">{share}</button>
                    </div>
                  </div>
                  <div className={`${c_16} border-0 mt-2.5 bg-primary/[8%]`}>
                    <p>
                      Domestic Shipping [Country]: We offer free standard
                      shipping on orders over [$X]. We also offer expedited
                      shipping for [$X]. Canadian Shipping: We offer free
                      standard shipping to Canada on orders over [$X] or about
                      [X CAD], which can vary based on the exchange rate. Faster
                      Canadian shipping is available for [$X] on orders over
                      [$X]. UK & EU: Free shipping is available for UK and EU
                      for orders over [X€]. For orders under that amount, fees
                      are calculated at checkout. International Shipping:
                      International shipping cost is [$X] for [Countries you
                      ship to]. Unfortunately, we do not ship to the following
                      countries: [Countries you do not ship to].
                    </p>
                  </div>
                </div>
              </div>
            )}
            {trainArticle === 4 && (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <div>
                  <div className="">
                    <div className="flex flex-wrap gap-3 text-center md:text-start items-center justify-between">
                      <div className="max-w-[453px]">
                        <h3 className="text-lg xl:text-xl mb-2">
                          Train Article Recommendation
                        </h3>
                        <p className="mb-2">
                          Review customer messages, check if recommended
                          articles are helpful, and provide feedback to improve
                          future recommendations.
                        </p>
                        <Link
                          to=""
                          className="text-primary !underline block font-semibold"
                        >
                          How To Train Article Recommendations
                        </Link>
                      </div>
                      <TrainProgress
                        className="mx-auto md:mx-0"
                        completed={1}
                        total={1}
                      />
                    </div>
                    <div className="flex items-center flex-wrap gap-3 md:flex-nowrap justify-center md:justify-between my-4">
                      <div className="flex items-center gap-4 md:gap-5">
                        <Dropdown
                          className=""
                          placeholder="All Customer Feedback"
                          btnClass="max-h-10"
                          items={[{ name: "All Customer Feedback" }]}
                        />
                        <Dropdown
                          className=""
                          placeholder="All Articles"
                          btnClass="max-h-10"
                          items={[{ name: "All Articles" }]}
                        />
                      </div>
                      <h5 className="text-sm font-semibold !leading-normal">
                        Show Completed
                      </h5>
                    </div>
                  </div>
                  <div className={`${c_24}`}>
                    <Input
                      className="mb-4 md:mb-5"
                      placeholder="Search..."
                      leftIcon={search}
                      inputClass="max-h-[36px]"
                    />
                    <div className="">
                      <ul className="flex flex-col gap-0.5 border-b border-stroke">
                        <li className="bg-[#F6F8FA] px-3 py-2 flex items-center">
                          <p className="w-1/2 md:w-[70%]">Message</p>
                          <p>Recommended Article</p>
                        </li>
                        <li className="bg-[#F6F8FA] px-3 py-2 min-h-[54px] flex items-center">
                          <div className="flex items-center gap-2 w-1/2 md:w-[70%]">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="20"
                                height="20"
                                rx="10"
                                fill="#7856FF"
                              />
                              <rect
                                width="20"
                                height="20"
                                rx="10"
                                fill="url(#paint0_linear_11834_154981)"
                                fillOpacity="0.12"
                              />
                              <path
                                d="M14.3327 6.75L8.37435 12.7083L5.66602 10"
                                stroke="white"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_11834_154981"
                                  x1="10"
                                  y1="0"
                                  x2="10"
                                  y2="20"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="white" />
                                  <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0"
                                  />
                                </linearGradient>
                              </defs>
                            </svg>
                            <h5>Hello</h5>
                          </div>
                          <h5>01/09/2025</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={`${c_16} py-8 !border-primary bg-primary/[4%] flex flex-col items-center justify-center`}
                >
                  <div className="img mb-4 md:mb-5 xl:mb-6">
                    <img src={greatWork} alt="" />
                  </div>
                  <div className="text-center max-w-[388px] mx-auto">
                    <h3 className="text-lg md:text-xl xl:text-2xl mb-0.5">
                      Great work!
                    </h3>
                    <p className="text-xs font-medium !leading-[1.4]">
                      You’ve provided feedback on every Article Recommendation.
                      Check again later for more
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {activeTab === "Configuration" && (
          <div className="flex flex-wrap md:flex-nowrap text-center md:text-start justify-between gap-4">
            <div className="max-w-[400px] xl:max-w-[615px]">
              <div className="mb-8 md:mb-14 xl:mb-[86px]">
                <p className="mb-3 md:text-base">
                  Automatically send a Help Center article in response to
                  customer questions in Chat, if a relevant article exists. If a
                  customer requests more help, a ticket will be created for an
                  agent to handle.
                </p>
                <Link
                  to=""
                  className="text-[#176448] !underline block font-semibold md:text-base"
                >
                  Learn About Article Recommendation In Chat|
                </Link>
              </div>
              <Input
                className="mb-8 md:mb-14 xl:mb-[86px]"
                label="Help Center"
                placeholder="jarvey"
                des="Control where customers receive article recommendations in Channels."
              />
              <div className="flex justify-center md:justify-start gap-2 items-center">
                <button
                  className="btn bg-prim min-w-[123px] px-0"
                  onClick={() => setTrainArticle(trainArticle + 1)}
                >
                  Save Changes
                </button>
                <button
                  className="btn bg-off px-0 min-w-[74px]"
                  onClick={() => setTrainArticle(trainArticle - 1)}
                >
                  Cancel
                </button>
              </div>
            </div>
            <div className="mx-auto md:mx-0 mb-5 md:mb-0 max-w-[300px] xl:max-w-[351px] max-h-[555px]">
              <img src={chat} alt="" />
            </div>
          </div>
        )}
        {trainModal && (
          <Modal
            innerClass="max-w-[499px] !rounded-lg xl:min-h-[472px] !pt-11"
            onClick={() => setTrainModal(!trainModal)}
          >
            <Input leftIcon={search} />
            <ul className="flex flex-col gap-4">
              <li className="pb-4 border-b border-stroke">
                <p className="text-xs font-semibold mb-2 text-primary">
                  No Response
                </p>
                <p className="font-semibold text-heading">
                  No relevant articles
                </p>
              </li>
              <li className="pb-4 border-b border-stroke">
                <p className="text-xs font-semibold mb-2 text-primary">
                  Categories
                </p>
                <div className="font-semibold mb-2 text-heading flex justify-between items-center">
                  Refund {arrow_right}{" "}
                </div>
                <div className="font-semibold text-heading flex justify-between items-center">
                  Refund {arrow_right}{" "}
                </div>
              </li>
              <li className="">
                <p className="text-xs font-semibold mb-2 text-primary">
                  Uncategoraes Articles
                </p>
                <p className="font-semibold text-heading">
                  No relevant articles
                </p>
              </li>
            </ul>
          </Modal>
        )}
        {/* {articleSetting &&
          <Modal closeIconHide={false} innerClass="max-w-[698px] !m-0 !ml-auto !mr-4 lg:!mr-6">
            <div className="md:flex items-center justify-between mb-4 lg:mb-5">
              <h5 className="text-[#0A0D14] mb-3 md:mb-0 text-xl lg:text-2xl !leading-[1.5]">Article Settings</h5>
              <div className="flex items-center gap-3 lg:gap-4 ">
                <div className="flex items-center gap-3 lg:gap-4">
                  <button className="btn bg-[#1764481A]/10 rounded-lg text-[#176448] !text-xs !font-semibold !leading-[1.5] min-w-max h-9 !px-2.5">Published</button>
                  <Dropdown className="mb-0" btnClass="!h-9 !px-2.5" dropDownClass="w-max !left-auto right-0" items={langList} />
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  {Icons.map((item, idx) => <a key={idx} href={`${item.url}`} className="flex items-center justify-center">{item.icon}</a>)}
                </div>
              </div>
            </div>
            <Input label="Title" className="mb-3 lg:mb-4" required placeholder="Do you offer refunds or exchanges" />
            <Input label="Category" className="mb-3 lg:mb-4" placeholder="Do you offer refunds or exchanges" />
            <div className="mb-3 lg:mb-4">
              <div className="flex items-center justify-between mb-1">
                <h6 className="text-[#0A0D14] text-sm font-semibold !leading-[1.42]">Slug <span className="text-[#FE4333]">*</span></h6>
                <button className="text-[#7856FF] flex items-center gap-2 text-sm font-semibold !leading-[1.42]">{copyIcon2} Copy</button>
              </div>
              <div className="md:flex items-center justify-between rounded-[10px] border border-[#E2E4E9] py-[14px] px-3 mb-1">
                <p className="text-xs font-medium !leading-[1.66] text-[#7856FF] mb-1 md:flex items-center gap-3">https://jarvey.jarveyai.help/en-US/ <span className="text-[#888888] border-l border-l-[#E2E4E9] md:pl-3">do-you-offer-refunds-or-exchanges</span></p>
                <p className="text-[#888888] text-xs font-medium !leading-[1.66]">#E2E4E9</p>
              </div>
              <p className="text-[#11111180]/50 text-sm !leading-[1.42]" >A short summary displayed below the title of your article.</p>
            </div>
            <div className="mb-3 lg:mb-4">
              <label className="text-[#0A0D14] text-sm font-semibold !leading-[1.42] flex items-center gap-2 mb-1">Excerpt
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_12219_98731)">
                      <path d="M8.00065 14.6693C11.6825 14.6693 14.6673 11.6845 14.6673 8.0026C14.6673 4.32071 11.6825 1.33594 8.00065 1.33594C4.31875 1.33594 1.33398 4.32071 1.33398 8.0026C1.33398 11.6845 4.31875 14.6693 8.00065 14.6693Z" stroke="#858585" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 10.6693V8.0026M8 5.33594H8.00667" stroke="#858585" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_12219_98731">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </label>
              <textarea name="" className="border border-[#E2E4E9] rounded-[10px] py-[10px] px-3 w-full resize-none" rows={3} value="['Yes' answer]. Yes, we offer refunds and exchanges within [# of days] days of purchase. To be eligible for a refund or exchange, items must be returned in their original condition, with all tags and packaging intact. Please note that [any" id=""></textarea>
              <p className="text-[#858585] text-xs font-medium !leading-[1.66]">ex. when order status is delivered </p>
            </div>
            <Input label="Meta Title" required className="mb-3 lg:mb-4" placeholder="Do you offer refunds or exchanges" />
            <div className="flex items-center gap-2 lg:gap-[10px] mb-3 lg:mb-4">
              <Checkbox id="check" />
              <label htmlFor="check" className="text-[#0A0D14] cursor-pointer text-sm font-semibold !leading-[1.42]">Use the same as Title</label>
            </div>
            <div className="mb-3 lg:mb-4">
              <label className="text-[#0A0D14] text-sm font-semibold !leading-[1.42] mb-1">Search Engine Preview</label>
              <textarea name="" className="border border-[#E2E4E9] rounded-[10px] py-[10px] px-3 w-full resize-none" rows={4} value="https://jarvey.jarveyai.help > do-you-offer-refunds-or-exchanges-1224851 Do you offer refunds or exchanges? ['Yes' answer]. Yes, we offer refunds and exchanges within [# of days] days of purchase. To be eligible for a refund or exchange, items must be returned in their original condition, with all tags and packaging intact. Please note that" id=""></textarea>
              <p className="text-[#858585] text-xs font-medium !leading-[1.66]">This is a preview of how your article is going to look like in search engines (e.g. Google, Duckduckgo, Bing...) </p>
            </div>
            <p className="text-[#858585] text-xs font-medium !leading-[1.66] mb-3 lg:mb-4">Article id: 1224851</p>
            <div className="md:flex items-center justify-between">
              <div className="flex items-center gap-10 lg:gap-14 xl:gap-[60px] mb-3 md:mb-0">
                <button className="text-[#FE4333] text-sm font-medium !leading-[1.42] flex items-center gap-2">{deleteIcon} Delete Article</button>
                <div className="flex items-center gap-4 lg:gap-5">
                  {IconsLIst.map((item, idx) => <span key={idx} className="text-[#0A0D14] text-xs font-medium !leading-[1.66] flex items-center gap-[3px]">{item.icon} {item.value}</span>)}
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-4">
                <button className="btn !border-[#7856FF] !text-[#7856FF] !py-[10px] !px-3 hover:!text-white">Discard Changes</button>
                <button onClick={() => setArticleSetting(!articleSetting)} className="btn !bg-[#7856FF] !text-white !py-[10px] !px-[14px] !min-w-[94px]">Published</button>
              </div>
            </div>
          </Modal>
          } */}
      </MainInner>
    </>
  );
}
