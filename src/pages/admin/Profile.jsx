import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import { c_16, c_24 } from "../../utilities/Classes";
import profile from "../../assets/img/profile.png";
import Input from "../../components/Input";
import Switch from "../../components/Switch";
import Dropdown from "../../components/Dropdown";
import Checkbox from "../../components/Checkbox";

export default function Profile() {
  const macro = [
    {
      title: "Macro prediction",
      des: "Automatically select macros based on previous macro usage.",
    },
    {
      title: "Macro suggestions",
      des: "Display suggested macros that can be applied to tickets with one click.",
    },
    {
      title: "Display macro search view by default",
      des: "Always display the macro search view when responding to incoming emails.",
    },
  ];

  return (
    <>
      <Top title="Your Profile" />
      <MainInner className="flex flex-col gap-4 md:gap-5 xl:gap-6">
        <div className={`${c_24}`}>
          <h4 className="text-base md:text-lg font-medium mb-4 md:mb-5">
            Personal Information
          </h4>
          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-5">
            <div className="max-w-[254px] mx-auto md:mx-0">
              <h5 className="text-center md:text-start">Profile Image</h5>
              <div className="my-2.5 img size-[200px] mx-auto md:mx-0 md:size-[254px] overflow-hidden flex items-center justify-center rounded-2xl bg-[#ADB6D7]">
                <img src={profile} alt="" />
              </div>
              <p className="text-xs !leading-normal text-center md:text-start">
                The picture must be square and weigh less than 500kB.
              </p>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-5 ">
                <Input className="" label="Name" />
                <Input className="" label="Email" />
                <div className="xl:col-span-2">
                  <label
                    htmlFor=""
                    className="block mb-1 font-inter font-semibold text-sm !leading-normal text-heading"
                  >
                    Bio
                  </label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Type here"
                    className="min-h-[108px] p-3 w-full bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-[10px] font-inter font-normal text-sm text-[#111111]/80 placeholder:text-[#111111]/50 resize-none"
                  ></textarea>
                </div>
              </div>
              <p className="mt-1">
                Your bio can be used in signatures as a variable. Admins can set
                up signatures in{" "}
                <a href="" className="text-primary">
                  each email integration
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={`${c_24}`}>
          <h4 className="text-base md:text-lg font-medium mb-4 md:mb-5">
            Date and time settings
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5 ">
            <Dropdown
              className="!mb-0"
              label="Time Zone"
              placeholder="Select"
              isArrow={true}
              items={[
                { name: "select-1" },
                { name: "select-2" },
                { name: "select-3" },
              ]}
            />
            <Dropdown
              className="!mb-0"
              label="Date Format"
              placeholder="Select"
              isArrow={true}
              items={[
                { name: "select-1" },
                { name: "select-2" },
                { name: "select-3" },
              ]}
            />
            <Dropdown
              className="!mb-0"
              label="Time Format"
              placeholder="Select"
              isArrow={true}
              items={[
                { name: "select-1" },
                { name: "select-2" },
                { name: "select-3" },
              ]}
            />
          </div>
        </div>
        <div className={`${c_24}`}>
          <h4 className="text-base md:text-lg font-medium mb-4 md:mb-5">
            Account Preferences
          </h4>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-5 xl:gap-6">
            <div className={`${c_16} `}>
              <h5 className="text-sm font-semibold !leading-[142%] mb-3 md:mb-4">
                Macro Display
              </h5>
              <div className="flex flex-col gap-2.5">
                {macro.map((item, index) => (
                  <div className="flex items-start gap-2" key={index}>
                    <Switch id={index} className="mt-1" checked />
                    <label htmlFor={index} className="">
                      <h5 className="text-sm">{item.title} </h5>
                      <p>
                        {item.des}{" "}
                        <a href="" className="text-primary">
                          Learn more
                        </a>{" "}
                      </p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${c_16} `}>
              <div className="mb-3 md:mb-4">
                <h5 className="text-sm font-semibold !leading-[142%] mb-1">
                  Forward calls to an external number
                </h5>
                <p>
                  When you are routed a call in Jarvey AI, forward the call to a
                  mobile device or landline.
                </p>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2">
                  <Switch id="enableCall" className="mt-1" checked />
                  <label htmlFor="enableCall">
                    <h5 className="text-sm">Enable call forwarding</h5>
                  </label>
                </div>
                <Input className="" placeholder="US +1" />
                <div className="flex items-start gap-2">
                  <Checkbox id="forward" className="mt-1" checked />
                  <label htmlFor="forward" className="">
                    <h5 className="text-sm">Forward calls when offline</h5>
                    <p>
                      Calls will be forwarded to this number when agent is
                      available or offline.
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4 xl:mt-[100px]">
          <button className="btn bg-prim">Save Changes</button>
        </div>
      </MainInner>
    </>
  );
}
