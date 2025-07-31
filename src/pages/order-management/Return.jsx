import { useEffect, useState, useContext } from "react";
import Dropdown from "../../components/Dropdown";
import TextEditor from "../../components/OrderMangemanget/TextEditor";
import { number } from "../../utilities/Classes";
import { OrderContext } from "./Layout";

export default function Return() {
  const { textEditorContent, setTextEditorContent } = useContext(OrderContext);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      const timer = setTimeout(() => {
        setModal(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [modal]);

  return (
    <div className="flex flex-col gap-4 relative z-[1]">
      <div className="">
        <p className="mb-2 !leading-normal text-xs font-medium">
          Allow customer to request a return if an order has been delivered.
        </p>
        <a
          href="#"
          className="text-primary !underline !leading-normal text-xs font-medium"
        >
          Learn About order Statuses in Jarvey
        </a>
      </div>
      <div className="">
        <h6 className="text-sm font-semibold !leading-[1.42] mb-0.5">
          Eligibility window
        </h6>
        <p className="leading-normal text-xs font-medium">
          Customers can request a cancellation when an order meets the following
          criteria:
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-2 md:gap-4">
        <Dropdown
          className=""
          placeholder="Order Created"
          btnClass="min-w-[145px]"
          items={[{ name: "Order Created" }, { name: "Order Created-2" }]}
        />
        <p className="text-sm font-semibold !leading-[1.42] text-heading">
          Less than
        </p>
        <Dropdown
          className=""
          placeholder="1"
          btnClass="min-w-[57px]"
          items={number}
        />
        <p className="text-sm font-semibold !leading-[1.42] text-heading">
          day(s) ago
        </p>
        <button>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6654 11.6654L2.33203 2.33203M11.6654 2.33203L2.33203 11.6654"
              stroke="#525866"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className="">
        <h6 className="text-sm font-semibold !leading-[1.42] mb-0.5">
          Response text
        </h6>
        <p className="leading-normal text-xs font-medium">
          After customers request a cancellation, reply with an automated
          message.
        </p>
      </div>
      <TextEditor
        onClick={() => setModal(true)}
        value={textEditorContent}
        onChange={setTextEditorContent}
      />
      {modal && (
        <div className="absolute -top-16 left-[55%] -translate-x-1/2 flex items-center gap-2 px-4 py-3 bg-white max-w-max rounded-lg border border-[#176448]/30 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#176448" />
            <path
              d="M16.3327 8.75L10.3743 14.7083L7.66602 12"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-heading text-base font-semibold">
            Successfully Updated!
          </span>
        </div>
      )}
    </div>
  );
}
