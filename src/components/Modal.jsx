import { IoClose } from "react-icons/io5";
import { useDismissibleModal } from "../hooks/useDismissible";

export default function Modal({
  className = "",
  innerClass = "max-w-[640px]",
  children,
  onClick,
  closeIconHide = true,
  closeOnClick,
  essential = false,
  isOpen = true,
}) {
  // Register modal for global dismiss
  const dismissFn = closeOnClick || onClick;
  useDismissibleModal(isOpen, dismissFn, essential);

  return (
    <div
      className={`fixed top-0 left-0 z-30 w-full h-screen flex flex-col items-center bg-heading/30 overflow-auto py-4 md:py-6 lg:py-8 ${className}`}
    >
      {closeOnClick && (
        <button
          onClick={closeOnClick}
          className="fixed top-0 left-0 size-full"
        ></button>
      )}
      <div
        data-modal-content
        className={`relative z-[1] m-auto bg-white rounded-2xl md:rounded-[20px] p-5 lg:p-6 w-[calc(100%-32px)] flex-none  ${innerClass}`}
      >
        {closeIconHide && (
          <button
            onClick={onClick}
            className="absolute top-0 right-0 m-3 border border-solid border-stroke flex items-center justify-center size-7 rounded-full text-heading hover:bg-primary hover:text-white hover:scale-110 hover:border-primary"
          >
            <IoClose />
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
