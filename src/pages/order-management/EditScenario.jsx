import { useContext, useEffect, useRef, useState } from "react";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import { arrow_down, deleteIcon, search } from "../../utilities/Classes";
import TableFilter from "../../components/TableFilter";
import { OrderContext } from "./Layout";

export default function EditScenario() {
  const {
    textEditorContent,
    setTextEditorContent,
    selectedIssue,
    setSelectedIssue,
    responseText,
    setResponseText,
  } = useContext(OrderContext);

  const issueList = [
    {
      message: "I didn't get my refund",
    },
    {
      message: "I'd like to reorder some items",
    },
    {
      message: "Other",
    },
  ];

  const [activeKey, setActiveKey] = useState(null);
  const [issueResponses, setIssueResponses] = useState({
    "I didn't get my refund":
      "Please note a refund was issued back to the original method of payment. Please allow up to 5 business days for the refund to be reflected on your account. If it's been more than 5 business days, let us know you need more help.",
    "I'd like to reorder some items":
      "Happy to help! What would you like to reorder?",
    Other: "How can we help you today?",
  });

  const handleIssueOptionClick = (issueText) => {
    console.log("Issue clicked:", issueText); // Debug log
    setSelectedIssue(issueText);
    setResponseText(issueResponses[issueText] || "");
  };

  const handleResponseTextChange = (issueText, newText) => {
    setIssueResponses((prev) => ({
      ...prev,
      [issueText]: newText,
    }));
    if (selectedIssue === issueText) {
      setResponseText(newText);
    }
  };

  const Shopify = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.53269 1.62572C7.75085 1.55222 7.89669 1.55222 7.89669 1.55222L7.46152 11.8346L0.898438 10.5951C0.898438 10.5951 1.77227 3.95964 1.77227 3.74089C1.77227 3.45039 1.77227 3.45039 2.13627 3.30397C2.16777 3.30397 2.25469 3.27655 2.39002 3.23339C2.64305 3.15119 2.89868 3.07727 3.15652 3.01172C3.37644 2.0638 4.1056 0.167969 5.63627 0.167969C5.85619 0.167969 6.07377 0.239719 6.2196 0.531969H6.2931C6.94935 0.531969 7.31394 1.04239 7.53269 1.62572ZM5.46652 2.28897C5.72202 2.2108 5.98627 2.1303 6.22019 1.98972C6.22019 1.55222 6.14669 1.25997 6.07377 0.967719C5.70977 1.11355 5.27285 1.55105 5.05294 2.42664C5.18883 2.37504 5.32681 2.32911 5.46652 2.28897ZM5.78269 0.678385C5.70977 0.604885 5.63685 0.604885 5.56335 0.604885C4.54135 0.604885 3.88685 1.98972 3.66752 2.86705C3.81335 2.8303 3.95919 2.77547 4.10502 2.72064C4.25085 2.6658 4.39669 2.61097 4.5431 2.5748C4.76244 1.40814 5.34577 0.897719 5.78269 0.678385ZM4.98002 5.41622C5.41752 5.41622 5.85444 5.63555 5.85444 5.63555L6.14552 4.32422C6.14552 4.32422 5.85444 4.17839 5.2711 4.17839C3.66694 4.17839 2.93777 5.19864 2.93777 6.29239C2.93777 7.02739 3.35077 7.35055 3.7136 7.63405C3.99769 7.85572 4.25027 8.05405 4.25027 8.40639C4.25027 8.55105 4.17735 8.8433 3.81335 8.8433C3.30352 8.8433 2.72019 8.33289 2.72019 8.33289L2.42735 9.35372C2.42735 9.35372 3.01069 10.0829 4.17735 10.0829C5.12469 10.0829 5.85444 9.35372 5.85444 8.25997C5.85444 7.36747 5.25302 6.93872 4.78694 6.60739C4.49119 6.39739 4.25027 6.22589 4.25027 5.99955C4.25027 5.85372 4.25027 5.41622 4.98002 5.41622ZM6.43777 0.967719C6.51069 1.18705 6.5836 1.4793 6.5836 1.8433V1.91622C6.69385 1.91622 6.78485 1.89814 6.87527 1.88005C6.96685 1.86139 7.05785 1.8433 7.16694 1.8433C7.0211 1.40464 6.80177 0.967719 6.43777 0.967719ZM9.71844 2.35372C9.79136 2.35372 9.86427 2.35372 9.86427 2.42664C9.86427 2.46339 10.1781 4.63747 10.4896 6.80047C10.7976 8.94014 11.1044 11.0681 11.1044 11.1037L7.60444 11.8329L8.04194 1.62572H8.11485L8.7711 2.28022C8.7711 2.28022 9.64552 2.35372 9.71844 2.35372Z"
        fill="#858585"
      />
    </svg>
  );
  const Shopify2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="24"
      viewBox="0 0 256 292"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z"
        fill="#95BF46"
      />
      <path
        d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357"
        fill="#5E8E3E"
      />
      <path
        d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338"
        fill="#FFF"
      />
    </svg>
  );

  const textEditor = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.7832 10H11.0413C12.8823 10 14.3747 8.50762 14.3747 6.66667V6.45833C14.3747 4.61738 12.8823 3.125 11.0413 3.125H6.44987C5.5294 3.125 4.7832 3.87119 4.7832 4.79167V10ZM4.7832 10V15.2083C4.7832 16.1288 5.5294 16.875 6.44987 16.875H10.4163M10.8332 16.875H11.8749C13.7158 16.875 15.2082 15.3826 15.2082 13.5417V13.3333C15.2082 11.4924 13.7158 10 11.8749 10H10.8332"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M8.12565 3.125L12.084 3.125M16.0423 3.125L12.084 3.125M12.084 3.125L7.91732 16.875M7.91732 16.875H3.95898M7.91732 16.875H11.8841"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.79102 17.2917H15.2077M4.79102 3.125V10C4.79102 12.8765 7.12287 15.2083 9.99935 15.2083C12.8758 15.2083 15.2077 12.8765 15.2077 10V3.125"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.62565 9.375C5.28047 9.375 5.00065 9.65482 5.00065 10C5.00065 10.3452 5.28047 10.625 5.62565 10.625V9.375ZM14.3756 10.625C14.7208 10.625 15.0006 10.3452 15.0006 10C15.0006 9.65482 14.7208 9.375 14.3756 9.375V10.625ZM13.1257 13.75C12.7805 13.75 12.5007 14.0298 12.5007 14.375C12.5007 14.7202 12.7805 15 13.1257 15V13.75ZM13.1257 5C12.7805 5 12.5007 5.27982 12.5007 5.625C12.5007 5.97018 12.7805 6.25 13.1257 6.25V5ZM6.87565 15C7.22083 15 7.50065 14.7202 7.50065 14.375C7.50065 14.0298 7.22083 13.75 6.87565 13.75V15ZM6.87565 6.25C7.22083 6.25 7.50065 5.97018 7.50065 5.625C7.50065 5.27982 7.22083 5 6.87565 5V6.25ZM5.62565 10V10.625H14.3756V10V9.375H5.62565V10ZM18.5423 7.29167H17.9173V12.7083H18.5423H19.1673V7.29167H18.5423ZM16.8756 14.375V13.75H13.1257V14.375V15H16.8756V14.375ZM13.1257 5.625V6.25H16.8756V5.625V5H13.1257V5.625ZM1.45898 7.29167H0.833984V12.7083H1.45898H2.08398V7.29167H1.45898ZM3.12565 14.375V15H6.87565V14.375V13.75H3.12565V14.375ZM6.87565 5.625V5H3.12565V5.625V6.25H6.87565V5.625ZM1.45898 7.29167H2.08398C2.08398 6.71637 2.55035 6.25 3.12565 6.25V5.625V5C1.86 5 0.833984 6.02601 0.833984 7.29167H1.45898ZM18.5423 12.7083H17.9173C17.9173 13.2836 17.4509 13.75 16.8756 13.75V14.375V15C18.1413 15 19.1673 13.974 19.1673 12.7083H18.5423ZM1.45898 12.7083H0.833984C0.833984 13.974 1.86 15 3.12565 15V14.375V13.75C2.55036 13.75 2.08398 13.2836 2.08398 12.7083H1.45898ZM18.5423 7.29167H19.1673C19.1673 6.02601 18.1413 5 16.8756 5V5.625V6.25C17.4509 6.25 17.9173 6.71637 17.9173 7.29167H18.5423Z"
            fill="#111111"
            fillOpacity="0.5"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.48816 11.1785L5.9301 11.6205V11.6205L5.48816 11.1785ZM7.84518 11.1785L8.28712 10.7366L7.84518 11.1785ZM4.79167 3.125V3.75H15.2083V3.125V2.5H4.79167V3.125ZM16.875 4.79167H16.25V15.2083H16.875H17.5V4.79167H16.875ZM3.125 13.5417L3.56694 13.9836L5.9301 11.6205L5.48816 11.1785L5.04621 10.7366L2.68306 13.0997L3.125 13.5417ZM3.125 15.2083H3.75V13.5417H3.125H2.5V15.2083H3.125ZM3.125 13.5417H3.75V4.79167H3.125H2.5V13.5417H3.125ZM7.84518 11.1785L7.40324 11.6205L13.0997 17.3169L13.5417 16.875L13.9836 16.4331L8.28712 10.7366L7.84518 11.1785ZM15.2083 16.875V16.25H13.5417V16.875V17.5H15.2083V16.875ZM13.5417 16.875V16.25H4.79167V16.875V17.5H13.5417V16.875ZM5.48816 11.1785L5.9301 11.6205C6.33689 11.2137 6.99644 11.2137 7.40324 11.6205L7.84518 11.1785L8.28712 10.7366C7.39217 9.84162 5.94116 9.84162 5.04621 10.7366L5.48816 11.1785ZM3.125 15.2083H2.5C2.5 16.474 3.52601 17.5 4.79167 17.5V16.875V16.25C4.21637 16.25 3.75 15.7836 3.75 15.2083H3.125ZM16.875 15.2083H16.25C16.25 15.7836 15.7836 16.25 15.2083 16.25V16.875V17.5C16.474 17.5 17.5 16.474 17.5 15.2083H16.875ZM15.2083 3.125V3.75C15.7836 3.75 16.25 4.21637 16.25 4.79167H16.875H17.5C17.5 3.52601 16.474 2.5 15.2083 2.5V3.125ZM4.79167 3.125V2.5C3.52601 2.5 2.5 3.52601 2.5 4.79167H3.125H3.75C3.75 4.21637 4.21637 3.75 4.79167 3.75V3.125ZM13.75 7.91667H13.125C13.125 8.49196 12.6586 8.95833 12.0833 8.95833V9.58333V10.2083C13.349 10.2083 14.375 9.18232 14.375 7.91667H13.75ZM12.0833 9.58333V8.95833C11.508 8.95833 11.0417 8.49196 11.0417 7.91667H10.4167H9.79167C9.79167 9.18232 10.8177 10.2083 12.0833 10.2083V9.58333ZM10.4167 7.91667H11.0417C11.0417 7.34137 11.508 6.875 12.0833 6.875V6.25V5.625C10.8177 5.625 9.79167 6.65101 9.79167 7.91667H10.4167ZM12.0833 6.25V6.875C12.6586 6.875 13.125 7.34137 13.125 7.91667H13.75H14.375C14.375 6.65101 13.349 5.625 12.0833 5.625V6.25Z"
            fill="#111111"
            fillOpacity="0.5"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.20768 6.2513C5.78298 6.2513 6.24935 5.78493 6.24935 5.20964C6.24935 4.63434 5.78298 4.16797 5.20768 4.16797C4.63239 4.16797 4.16602 4.63434 4.16602 5.20964C4.16602 5.78493 4.63239 6.2513 5.20768 6.2513Z"
            fill="#858585"
          />
          <path
            d="M10.8327 10.7853V14.2178C10.8327 14.7234 11.4019 15.0198 11.8161 14.7298L14.2679 13.0135C14.6233 12.7647 14.6233 12.2383 14.2679 11.9895L11.8161 10.2732C11.4019 9.98328 10.8327 10.2796 10.8327 10.7853Z"
            fill="#858585"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.66602 3.95964C1.66602 2.69398 2.69203 1.66797 3.95768 1.66797H11.041C12.3067 1.66797 13.3327 2.69398 13.3327 3.95964V6.66797H16.041C17.3067 6.66797 18.3327 7.69398 18.3327 8.95964V16.043C18.3327 17.3086 17.3067 18.3346 16.041 18.3346H8.95768C7.69203 18.3346 6.66602 17.3086 6.66602 16.043V13.3346H3.95768C2.69203 13.3346 1.66602 12.3086 1.66602 11.043V3.95964ZM12.0827 3.95964V6.66797H8.95768C7.7782 6.66797 6.80684 7.55903 6.68004 8.7047L6.26892 8.43062C5.49915 7.91744 4.49631 7.91744 3.72654 8.43062L2.91602 8.97097V3.95964C2.91602 3.38434 3.38239 2.91797 3.95768 2.91797H11.041C11.6163 2.91797 12.0827 3.38434 12.0827 3.95964ZM5.57554 9.47068L6.66602 10.1977V12.0846H3.95768C3.38239 12.0846 2.91602 11.6183 2.91602 11.043V10.4733L4.41992 9.47068C4.76981 9.23742 5.22565 9.23742 5.57554 9.47068ZM7.91602 16.043V8.95964C7.91602 8.38434 8.38239 7.91797 8.95768 7.91797H16.041C16.6163 7.91797 17.0827 8.38434 17.0827 8.95964V16.043C17.0827 16.6183 16.6163 17.0846 16.041 17.0846H8.95768C8.38239 17.0846 7.91602 16.6183 7.91602 16.043Z"
            fill="#858585"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M8.74935 7.91797C8.74935 8.60832 8.28298 9.16797 7.70768 9.16797C7.13238 9.16797 6.66601 8.60832 6.66601 7.91797C6.66601 7.22761 7.13238 6.66797 7.70768 6.66797C8.28298 6.66797 8.74935 7.22761 8.74935 7.91797Z"
            fill="#858585"
          />
          <path
            d="M13.3327 7.91797C13.3327 8.60832 12.8663 9.16797 12.291 9.16797C11.7157 9.16797 11.2493 8.60832 11.2493 7.91797C11.2493 7.22761 11.7157 6.66797 12.291 6.66797C12.8663 6.66797 13.3327 7.22761 13.3327 7.91797Z"
            fill="#858585"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.008 4.99263C12.2418 2.22642 7.7569 2.22641 4.99068 4.99263C2.22446 7.75883 2.22446 12.2438 4.99068 15.01C7.75688 17.7762 12.2418 17.7762 15.008 15.01C17.7742 12.2438 17.7742 7.75885 15.008 4.99263ZM4.1068 4.10875C7.36117 0.854376 12.6375 0.854375 15.8919 4.10875C19.1463 7.36312 19.1463 12.6395 15.8919 15.8939C12.6375 19.1482 7.36115 19.1482 4.1068 15.8939C0.852423 12.6395 0.852422 7.36311 4.1068 4.10875Z"
            fill="#858585"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.20064 11.9164C7.44472 11.6723 7.84044 11.6723 8.08452 11.9164C9.14218 12.9741 10.857 12.9741 11.9147 11.9164C12.1588 11.6723 12.5545 11.6723 12.7986 11.9164C13.0426 12.1605 13.0426 12.5562 12.7986 12.8003C11.2527 14.3461 8.74645 14.3461 7.20063 12.8003C6.95656 12.5562 6.95656 12.1605 7.20064 11.9164Z"
            fill="#858585"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M12.7085 6.45964V5.0013C12.7085 3.50553 11.496 2.29297 10.0002 2.29297C8.50443 2.29297 7.29187 3.50553 7.29187 5.0013V6.45964M5.47364 17.7096H14.5268C15.5445 17.7096 16.3246 16.8055 16.1754 15.7987L15.0026 7.88205C14.8815 7.06483 14.1801 6.45964 13.3539 6.45964H6.64648C5.82034 6.45964 5.11888 7.06483 4.99781 7.88205L3.82497 15.7987C3.67582 16.8055 4.45591 17.7096 5.47364 17.7096Z"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.29102 9.30261V3.95964C2.29102 3.03916 3.03721 2.29297 3.95768 2.29297H9.30066C9.74269 2.29297 10.1666 2.46856 10.4792 2.78112L17.1542 9.45612C17.805 10.107 17.805 11.1623 17.1542 11.8131L11.8112 17.1561C11.1603 17.807 10.105 17.807 9.45417 17.1561L2.77917 10.4811C2.46661 10.1686 2.29102 9.74464 2.29102 9.30261Z"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <path
            d="M6.87435 6.2513C6.87435 6.59648 6.59453 6.8763 6.24935 6.8763C5.90417 6.8763 5.62435 6.59648 5.62435 6.2513C5.62435 5.90612 5.90417 5.6263 6.24935 5.6263C6.59453 5.6263 6.87435 5.90612 6.87435 6.2513Z"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.79102 8.95964V12.7096C4.79102 15.4711 7.02959 17.7096 9.79102 17.7096H10.2077C12.9691 17.7096 15.2077 15.4711 15.2077 12.7096V5.83463C15.2077 3.87863 13.622 2.29297 11.666 2.29297C9.71001 2.29297 8.12435 3.87863 8.12435 5.83464V12.3971C8.12435 13.3751 8.91718 14.168 9.89518 14.168C10.8732 14.168 11.666 13.3751 11.666 12.3971V6.45964"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  const [addOption, setAddOption] = useState(false);

  const issueOptions = [
    {
      category: "FEEDBACK",
      items: [
        {
          text: "I'm very happy with the product I received",
          selected: true,
        },
        {
          text: "I'm not happy with the product I received",
          selected: false,
        },
      ],
    },
    {
      category: "RETUEN",
      items: [
        {
          text: "I'd like to return a product",
          selected: true,
        },
      ],
    },
    {
      category: "REFUND",
      items: [
        {
          text: "I'd like to get a refund for this order",
          selected: false,
        },
        {
          text: "I didn’t get my refund",
          selected: true,
        },
      ],
    },
    {
      category: "CHANGE ORDER",
      items: [
        {
          text: "I'd like to cancel my order",
          selected: false,
        },
        {
          text: "I'd like to edit my order",
          selected: true,
        },
      ],
    },
    {
      category: "DAMAGED ORDER",
      items: [
        {
          text: "My order was damaged in delivery",
          selected: false,
        },
        {
          text: "The items in my order are defective",
          selected: true,
        },
      ],
    },
    {
      category: "WRONG ORDER",
      items: [
        {
          text: "The items are different from what I ordered",
          selected: false,
        },
        {
          text: "Some items are missing from my order",
          selected: true,
        },
      ],
    },
  ];

  const close = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.77148 2.76953L11.2298 11.2279M11.2298 2.76953L2.77148 11.2279"
        stroke="#7856FF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.77148 2.76953L11.2298 11.2279M11.2298 2.76953L2.77148 11.2279"
        stroke="url(#paint0_linear_12257_65958)"
        strokeOpacity="0.12"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_12257_65958"
          x1="7.00065"
          y1="2.76953"
          x2="7.00065"
          y2="11.2279"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );

  const btn =
    "flex items-center gap-1 font-semibold text-primary bg-[#F7F7F7] min-h-[35px] px-3 rounded-lg";
  const [selectedItem, setSelectedItem] = useState("");

  // Dynamic conditions state
  const STATUS_OPTIONS = {
    order: ["Open", "Archived", "Cancelled"],
    fulfillment: [
      "Pending",
      "Open",
      "Success",
      "Cancelled",
      "Error",
      "Failure",
    ],
    shipment: [
      "Label printed",
      "Label purchased",
      "Attempted delivery",
      "Ready for pickup",
      "Confirmed",
      "In transit",
      "Out for delivery",
      "Delivered",
      "Failure",
    ],
    financial: [
      "Pending",
      "Authorized",
      "Partially paid",
      "Paid",
      "Partially refunded",
      "Refunded",
      "Voided",
    ],
  };

  const PARENT_META = {
    order: { label: "Order status" },
    fulfillment: { label: "Fulfilment Status" },
    shipment: { label: "Shipment status" },
  };

  // Array of groups for the top section. The first item is the main group, others are OR blocks
  const [conditionGroups, setConditionGroups] = useState([]); // {type, statuses, op: 'one'|'empty'}
  const [financialStatuses, setFinancialStatuses] = useState([]);
  const [financialOp, setFinancialOp] = useState("one");
  const [showFinancial, setShowFinancial] = useState(false);
  const [inputs, setInputs] = useState({}); // key => input text
  const [openSuggestKey, setOpenSuggestKey] = useState(null);
  const conditionsContainerRef = useRef(null);

  // Close suggestions on outside click; also ensures only one is open at a time
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!openSuggestKey) return;
      const host = e.target.closest("[data-suggest-key]");
      if (
        !host ||
        host.getAttribute("data-suggest-key") !== String(openSuggestKey)
      ) {
        setOpenSuggestKey(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openSuggestKey]);

  const keyFor = (type, index) => `${type}-${index}`;

  const addGroup = (type) => {
    setConditionGroups((prev) => [...prev, { type, statuses: [], op: "one" }]);
  };

  const removeGroup = (index) => {
    setConditionGroups((prev) => prev.filter((_, i) => i !== index));
  };

  const addStatusToGroup = (index, type, status) => {
    setConditionGroups((prev) =>
      prev.map((g, i) =>
        i === index && !g.statuses.includes(status)
          ? { ...g, statuses: [...g.statuses, status] }
          : g
      )
    );
    const k = keyFor(type, index);
    setInputs((p) => ({ ...p, [k]: "" }));
    // keep suggestions open for continuous entry
    setOpenSuggestKey(k);
  };

  const removeStatusFromGroup = (index, status) => {
    setConditionGroups((prev) =>
      prev.map((g, i) =>
        i === index
          ? { ...g, statuses: g.statuses.filter((s) => s !== status) }
          : g
      )
    );
  };

  const addFinancialStatus = (status) => {
    setFinancialStatuses((prev) =>
      prev.includes(status) ? prev : [...prev, status]
    );
  };

  const removeFinancialStatus = (status) => {
    setFinancialStatuses((prev) => prev.filter((s) => s !== status));
  };

  const availableForGroup = (type, index) => {
    const taken = new Set(conditionGroups[index]?.statuses || []);
    return STATUS_OPTIONS[type].filter((s) => !taken.has(s));
  };

  const handleAddConditionSelect = (name) => {
    const normalized = name?.toLowerCase();
    if (normalized.includes("order")) return addGroup("order");
    if (normalized.includes("fulfil")) return addGroup("fulfillment");
    if (normalized.includes("shipment")) return addGroup("shipment");
    if (!showFinancial) {
      if (normalized.includes("financial")) return setShowFinancial(true);
    } else {
      if (normalized.includes("financial")) return setShowFinancial(false);
    }
  };

  const isOne = [
    {
      name: "Is one of",
    },
    {
      name: "Is empty",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Input
        className=""
        info
        label="Scenario name"
        placeholder="Refunded"
        des="ex. Delivered"
      />
      <Input
        className=""
        info
        label="Scenario Descriptions"
        placeholder="Refunded"
        des="ex. when order status is delivered "
      />
      <div className="">
        <h6 className="text-sm font-semibold !leading-[1.42] mb-2">
          Order Conditions <span className="text-[#FE4333]">*</span>
        </h6>
        <p className="leading-normal text-xs font-medium">
          Customers will see the options below when an order meets the following
          condition.
        </p>
      </div>
      <div className="overflow-x-auto" ref={conditionsContainerRef}>
        <div className="w-max 4xl:w-full">
          <div className="px-4 py-6 bg-[#F7F7F7] rounded-2xl flex flex-col gap-4">
            {conditionGroups.length === 0 && (
              <div className="text-xs text-gray-500">
                Use "Add conditions" below to add a main condition.
              </div>
            )}
            {conditionGroups.map((group, index) => {
              const k = keyFor(group.type, index);
              const isOr = index > 0;
              const available = availableForGroup(group.type, index);
              const inputVal = inputs[k] || "";
              return (
                <div
                  key={k}
                  className="relative bg-white rounded-xl w-full py-2 px-3"
                  data-suggest-key={k}
                >
                  <div className="flex items-center flex-wrap gap-3">
                    {isOr && (
                      <div className="text-xs text-white font-semibold !leading-normal bg-[#FE4333] rounded-lg px-2.5 py-[8.5px]">
                        OR
                      </div>
                    )}
                    <Dropdown
                      className="mb-0"
                      placeholder={`${PARENT_META[group.type].label} `}
                      leftIcon={Shopify}
                      btnClass="!h-[35px] min-w-[152px] max-w-max text-heading font-semibold text-primary !bg-primary/10 border-0 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)]"
                      items={[{ name: PARENT_META[group.type].label }]}
                      showDropdown={false}
                    />
                    <Dropdown
                      className="mb-0"
                      placeholder={
                        group.op === "empty" ? "Is empty" : "Is one of"
                      }
                      btnClass="!h-[35px] min-w-[88px] w-max text-xs !px-2 font-semibold !bg-transparent"
                      items={isOne}
                      onChange={(val) => {
                        setConditionGroups((prev) =>
                          prev.map((g, i) =>
                            i === index
                              ? {
                                  ...g,
                                  op: val.toLowerCase().includes("empty")
                                    ? "empty"
                                    : "one",
                                  statuses: val.toLowerCase().includes("empty")
                                    ? []
                                    : g.statuses,
                                }
                              : g
                          )
                        );
                        if (val.toLowerCase().includes("empty"))
                          setOpenSuggestKey(null);
                        else setOpenSuggestKey(k);
                      }}
                    />
                    {group.op !== "empty" &&
                      group.statuses.map((s) => (
                        <div key={s} className={`${btn}`}>
                          {s}
                          <button
                            onClick={() => removeStatusFromGroup(index, s)}
                          >
                            {close}
                          </button>
                        </div>
                      ))}
                    {group.op !== "empty" && (
                      <input
                        value={inputVal}
                        onChange={(e) => {
                          setInputs((p) => ({ ...p, [k]: e.target.value }));
                          setOpenSuggestKey(k);
                        }}
                        onFocus={() => setOpenSuggestKey(k)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            const match = available.find(
                              (s) =>
                                s.toLowerCase() ===
                                inputVal.trim().toLowerCase()
                            );
                            if (match) {
                              e.preventDefault();
                              addStatusToGroup(index, group.type, match);
                            }
                          }
                        }}
                        className="outline-none flex-1 min-w-[180px]"
                        type="text"
                        placeholder="Add statuses..."
                      />
                    )}
                    <button
                      onClick={() => removeGroup(index)}
                      className="ml-auto text-[#FE4333] hover:text-red-600"
                      title="Remove condition"
                    >
                      ×
                    </button>
                  </div>
                  {group.op !== "empty" &&
                    openSuggestKey === k &&
                    available.length > 0 && (
                      <div className="absolute left-0 top-full mt-1 w-full max-w-[560px] bg-white border border-stroke rounded-lg shadow-sm p-1 z-50">
                        {available
                          .filter((s) =>
                            s
                              .toLowerCase()
                              .includes((inputVal || "").toLowerCase())
                          )
                          .map((s) => (
                            <button
                              key={s}
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() =>
                                addStatusToGroup(index, group.type, s)
                              }
                              className="block w-full text-left text-sm px-3 py-2 rounded hover:bg-gray-100"
                            >
                              {s}
                            </button>
                          ))}
                      </div>
                    )}
                </div>
              );
            })}
          </div>
          {showFinancial && (
            <div
              className="relative bg-white rounded-xl w-full py-2 px-3 mt-3 flex items-center flex-wrap gap-3"
              data-suggest-key="financial"
            >
              {conditionGroups.length > 0 && (
                <div className="text-xs text-white font-semibold !leading-normal bg-[#FE4333] rounded-lg px-2.5 py-[8.5px]">
                  AND
                </div>
              )}
              <Dropdown
                className="mb-0"
                placeholder={"Financial status "}
                leftIcon={Shopify}
                btnClass="!h-[35px] min-w-[152px] max-w-max text-heading font-semibold text-primary !bg-primary/10 border-0 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)]"
                items={[{ name: "Financial status" }]}
                showDropdown={false}
              />
              <Dropdown
                className="mb-0"
                placeholder={financialOp === "empty" ? "Is empty" : "Is one of"}
                btnClass="!h-[35px] min-w-[88px] w-max text-xs !px-2 font-semibold !bg-transparent"
                items={isOne}
                onChange={(val) => {
                  const isEmpty = val.toLowerCase().includes("empty");
                  setFinancialOp(isEmpty ? "empty" : "one");
                  if (isEmpty) {
                    setFinancialStatuses([]);
                    setOpenSuggestKey(null);
                  } else {
                    setOpenSuggestKey("financial");
                  }
                }}
              />
              {financialOp !== "empty" &&
                financialStatuses.map((s) => (
                  <div key={s} className={`${btn}`}>
                    {s}
                    <button onClick={() => removeFinancialStatus(s)}>
                      {close}
                    </button>
                  </div>
                ))}
              {financialOp !== "empty" && (
                <input
                  type="text"
                  placeholder="Add statuses..."
                  className="outline-none flex-1 min-w-[180px]"
                  onChange={(e) =>
                    setInputs((p) => ({ ...p, financial: e.target.value }))
                  }
                  onFocus={() => setOpenSuggestKey("financial")}
                  value={inputs.financial || ""}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const v = (inputs.financial || "").trim();
                      const match = STATUS_OPTIONS.financial.find(
                        (s) => s.toLowerCase() === v.toLowerCase()
                      );
                      if (match) {
                        e.preventDefault();
                        addFinancialStatus(match);
                        setInputs((p) => ({ ...p, financial: "" }));
                        setOpenSuggestKey("financial");
                      }
                    }
                  }}
                />
              )}
              <button
                onClick={() => {
                  setShowFinancial(false);
                  setFinancialStatuses([]);
                  setFinancialOp("one");
                  setInputs((p) => ({ ...p, financial: "" }));
                  setOpenSuggestKey(null);
                }}
                className="ml-auto text-[#FE4333] hover:text-red-600"
                title="Remove condition"
              >
                ×
              </button>
              {financialOp !== "empty" && openSuggestKey === "financial" && (
                <div className="absolute left-0 top-full mt-1 w-full max-w-[560px] bg-white border border-stroke rounded-lg shadow-sm p-1 z-50">
                  {STATUS_OPTIONS.financial
                    .filter(
                      (s) =>
                        !financialStatuses.includes(s) &&
                        s
                          .toLowerCase()
                          .includes((inputs.financial || "").toLowerCase())
                    )
                    .map((s) => (
                      <button
                        key={s}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          addFinancialStatus(s);
                          setInputs((p) => ({ ...p, financial: "" }));
                          setOpenSuggestKey("financial");
                        }}
                        className="block w-full text-left text-sm px-3 py-2 rounded hover:bg-gray-100"
                      >
                        {s}
                      </button>
                    ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="">
        <Dropdown
          className=""
          placeholder={"Add conditions"}
          btnClass="min-w-[152px] max-w-max text-heading font-semibold !bg-[#F7F7F7] shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)]"
          items={(() => {
            const counts = conditionGroups.reduce((acc, g) => {
              acc[g.type] = (acc[g.type] || 0) + 1;
              return acc;
            }, {});
            const available = [];
            if ((counts.order || 0) < 2)
              available.push({ name: "Order Status" });
            if ((counts.fulfillment || 0) < 2)
              available.push({ name: "Fulfilment status" });
            if ((counts.shipment || 0) < 2)
              available.push({ name: "Shipment Status" });
            if (!showFinancial) available.push({ name: "Financial status" });
            return [{ icon: Shopify2, name: "Shopify" }, ...available];
          })()}
          onChange={handleAddConditionSelect}
        />
      </div>
      <h6 className="text-sm font-semibold !leading-[1.42] -mb-4">
        Issue options <span className="text-[#FE4333]">*</span>
      </h6>
      <div className="overflow-x-auto min-w-full md:w-max">
        <div className="w-full">
          {issueList.map((item, index) => {
            const isActive = activeKey === index;
            return (
              <div key={index}>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleIssueOptionClick(item.message);
                    setActiveKey(isActive ? null : index);
                  }}
                  className="cursor-pointer flex items-center justify-between border-b border-stroke"
                >
                  <div className="px-3 py-4">
                    <div className="flex items-center gap-8">
                      <button className="cursor-move">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.70801 14.165C8.2833 14.165 8.75 14.6317 8.75 15.207C8.75 15.7823 8.2833 16.249 7.70801 16.249C7.13286 16.2488 6.66699 15.7822 6.66699 15.207C6.66699 14.6318 7.13286 14.1652 7.70801 14.165ZM12.292 14.165C12.8671 14.1652 13.333 14.6318 13.333 15.207C13.333 15.7822 12.8671 16.2488 12.292 16.249C11.7167 16.249 11.25 15.7823 11.25 15.207C11.25 14.6317 11.7167 14.165 12.292 14.165ZM7.70801 8.87402C8.2832 8.87402 8.74982 9.33989 8.75 9.91504V9.99902C8.74982 10.5742 8.2832 11.04 7.70801 11.04C7.13297 11.0399 6.66717 10.5741 6.66699 9.99902V9.91504C6.66717 9.34 7.13297 8.8742 7.70801 8.87402ZM12.292 8.87402C12.867 8.8742 13.3328 9.34 13.333 9.91504V9.99902C13.3328 10.5741 12.867 11.0399 12.292 11.04C11.7168 11.04 11.2502 10.5742 11.25 9.99902V9.91504C11.2502 9.33989 11.7168 8.87402 12.292 8.87402ZM7.70801 3.74902C8.2832 3.74902 8.74982 4.21489 8.75 4.79004C8.75 5.36534 8.2833 5.83203 7.70801 5.83203C7.13286 5.83186 6.66699 5.36523 6.66699 4.79004C6.66717 4.215 7.13297 3.7492 7.70801 3.74902ZM12.292 3.74902C12.867 3.7492 13.3328 4.215 13.333 4.79004C13.333 5.36523 12.8671 5.83186 12.292 5.83203C11.7167 5.83203 11.25 5.36534 11.25 4.79004C11.2502 4.21489 11.7168 3.74902 12.292 3.74902Z"
                            fill="#858585"
                            stroke="#858585"
                            strokeWidth="0.833333"
                          />
                        </svg>
                      </button>
                      <p className="text-heading text-sm font-medium hover:text-primary cursor-pointer transition-colors duration-200">
                        {item.message}{" "}
                      </p>
                    </div>
                  </div>
                  <div className={`mr-5 ${isActive ? "rotate-90" : ""}`}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.04541 12.6955C6.98902 12.7551 6.94494 12.8253 6.91568 12.902C6.88642 12.9787 6.87256 13.0605 6.87488 13.1425C6.8772 13.2246 6.89566 13.3054 6.92921 13.3803C6.96276 13.4552 7.01074 13.5228 7.07041 13.5792C7.13008 13.6356 7.20027 13.6797 7.27698 13.7089C7.35368 13.7382 7.4354 13.7521 7.51746 13.7497C7.59953 13.7474 7.68033 13.729 7.75526 13.6954C7.83019 13.6619 7.89777 13.6139 7.95416 13.5542L13.2667 7.92922C13.3764 7.81318 13.4375 7.65954 13.4375 7.49984C13.4375 7.34015 13.3764 7.18651 13.2667 7.07047L7.95416 1.44484C7.89815 1.38387 7.83058 1.33463 7.75537 1.29999C7.68017 1.26535 7.59883 1.246 7.51608 1.24306C7.43334 1.24012 7.35083 1.25365 7.27336 1.28286C7.19588 1.31208 7.12499 1.3564 7.06479 1.41324C7.00459 1.47009 6.95628 1.53833 6.92268 1.61401C6.88908 1.68968 6.87084 1.77127 6.86904 1.85405C6.86724 1.93683 6.8819 2.01915 6.91218 2.09621C6.94246 2.17327 6.98774 2.24355 7.04541 2.30297L11.9529 7.49984L7.04541 12.6955Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                {isActive && (
                  <div className="bg-[#F7F7F7] p-4 w-full">
                    <div className="mb-3">
                      <h6 className="text-sm font-semibold !leading-[1.42] mb-0.5">
                        Response text
                      </h6>
                      <p className="leading-normal text-xs font-medium">
                        After customers choose this option, reply with an
                        automated message.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-stroke rounded-xl flex flex-col justify-between">
                      <textarea
                        name=""
                        id=""
                        className="bg-transparent min-h-[180px] resize-none"
                        value={
                          issueResponses[
                            issueList.find((_, i) => i === activeKey)?.message
                          ] || ""
                        }
                        onChange={(e) => {
                          const currentIssue = issueList.find(
                            (_, i) => i === activeKey
                          )?.message;
                          if (currentIssue) {
                            handleResponseTextChange(
                              currentIssue,
                              e.target.value
                            );
                          }
                        }}
                      />
                      <div className="flex items-center justify-between flex-wrap">
                        <div className="flex flex-col gap-2">
                          <ul className="flex items-center gap-2 py-2">
                            {textEditor.map((item, index) => (
                              <li key={index}>
                                <button className="text-[#111111]/50 hover:text-primary">
                                  {item.icon}{" "}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button className="text-[#FE4333] flex items-center gap-2 font-semibold text-sm ">
                          {deleteIcon} Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative z-[1] h-max w-max">
        <button
          onClick={() => setAddOption(!addOption)}
          className={`min-w-[152px] h-12 flex items-center justify-center gap-2 rounded-[10px] border border-stroke text-heading font-semibold !bg-[#F7F7F7] shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] ${
            addOption === true && "!bg-primary text-white"
          }`}
        >
          Add options
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.6673 7.5L11.1792 12.9882C10.5283 13.639 9.47303 13.639 8.82215 12.9882L3.33398 7.5"
              stroke="currentColor"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {addOption && (
          <div className="p-4 rounded-xl bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] absolute bottom-full left-0 min-w-[300px] md:min-w-[395px] mb-3.5">
            <Input
              className="mb-2"
              inputClass="border-0 !bg-[#F7F7F7]"
              placeholder="Search"
              leftIcon={search}
            />
            <div className="flex flex-col gap-3">
              {issueOptions.map((item, index) => (
                <div key={index} className="border-b border-stroke pb-3">
                  <h4 className="text-sm !leading-[1.42] text-primary font-bold uppercase">
                    {item.category}
                  </h4>
                  <div className="mt-2 space-y-2">
                    {item.items.map((item, index) => {
                      const text = typeof item === "string" ? item : item.text;
                      const isSelected =
                        selectedItem?.text === text ||
                        (typeof item !== "string" && item.selected);
                      return (
                        <div
                          key={index}
                          onClick={() =>
                            setSelectedItem(
                              typeof item === "string" ? { text: item } : item
                            )
                          }
                          className={`flex items-center justify-between gap-2 text-heading font-semibold cursor-pointer`}
                        >
                          <span className="text-sm">{text}</span>
                          {isSelected && (
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.83268 0.75L3.87435 6.70833L1.16602 4"
                                stroke="#0A0D14"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 justify-between">
        <button className="text-[#FE4333] flex items-center gap-2 font-semibold text-sm ">
          {deleteIcon} Delete
        </button>
        <div className="flex items-center gap-2 lg:mt-5 xl:mt-6">
          <button className="btn !border-primary !text-primary hover:!text-white !min-w-[unset] !px-4">
            Cancel
          </button>
          <button className="btn !min-w-[115px] !px-0 !bg-primary !text-white">
            Save Changs
          </button>
        </div>
      </div>
    </div>
  );
}
