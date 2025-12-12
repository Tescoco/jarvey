import { useState, useRef, useEffect } from "react";
import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import { c_16, c_24 } from "../../utilities/Classes";
import profile from "../../assets/img/profile.png";
import Input from "../../components/Input";
import Switch from "../../components/Switch";
import Dropdown from "../../components/Dropdown";
import Checkbox from "../../components/Checkbox";

export default function Profile() {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    timezone: "",
    dateFormat: "",
    timeFormat: "",
    forwardingNumber: "",
  });

  // State for profile image
  const [profileImage, setProfileImage] = useState(profile);

  // State for switches and checkboxes
  const [macroSettings, setMacroSettings] = useState({
    macroPrediction: true,
    macroSuggestions: true,
    macroSearchView: true,
  });

  const [callSettings, setCallSettings] = useState({
    enableCallForwarding: true,
    forwardWhenOffline: true,
  });

  // State for loading and feedback
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const fileInputRef = useRef(null);

  const macro = [
    {
      id: "macroPrediction",
      title: "Macro prediction",
      des: "Automatically select macros based on previous macro usage.",
    },
    {
      id: "macroSuggestions",
      title: "Macro suggestions",
      des: "Display suggested macros that can be applied to tickets with one click.",
    },
    {
      id: "macroSearchView",
      title: "Display macro search view by default",
      des: "Always display the macro search view when responding to incoming emails.",
    },
  ];

  // Load saved data from localStorage on mount
  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem("userProfile");
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        setFormData(parsed.formData || formData);
        setProfileImage(parsed.profileImage || profile);
        setMacroSettings(parsed.macroSettings || macroSettings);
        setCallSettings(parsed.callSettings || callSettings);
      }
    } catch (error) {
      console.error("Error loading profile:", error);
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle profile image click
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (500KB)
    if (file.size > 500 * 1024) {
      alert("Image must be less than 500KB");
      return;
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    // Preview image
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfileImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  // Handle macro switch changes
  const handleMacroToggle = (id) => {
    setMacroSettings((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Handle call settings changes
  const handleCallSettingToggle = (id) => {
    setCallSettings((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Handle dropdown changes
  const handleDropdownChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission - Save to localStorage
  const handleSaveChanges = () => {
    try {
      setIsSaving(true);
      setSaveMessage("");

      // Create profile object to save
      const profileData = {
        formData,
        profileImage,
        macroSettings,
        callSettings,
        lastUpdated: new Date().toISOString(),
      };

      // Save to localStorage
      localStorage.setItem("userProfile", JSON.stringify(profileData));

      setSaveMessage("Profile updated successfully!");

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSaveMessage("");
      }, 3000);

      // TO REPLACE WITH BACKEND API:
      // When you get backend, replace this function with:
      /*
      const response = await fetch("/api/profile/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        throw new Error("Failed to save profile");
      }

      const data = await response.json();
      setSaveMessage("Profile updated successfully!");
      */

    } catch (error) {
      console.error("Error saving profile:", error);
      setSaveMessage("Error saving profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

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
              <div
                className="my-2.5 img size-[200px] mx-auto md:mx-0 md:size-[254px] overflow-hidden flex items-center justify-center rounded-2xl bg-[#ADB6D7] cursor-pointer hover:opacity-80 transition-opacity relative group"
                onClick={handleImageClick}
                title="Click to change profile picture"
              >
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Change Photo</span>
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <p className="text-xs !leading-normal text-center md:text-start">
                The picture must be square and weigh less than 500kB.
              </p>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-5 ">
                <Input
                  className=""
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Input
                  className=""
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <div className="xl:col-span-2">
                  <label
                    htmlFor="bio"
                    className="block mb-1 font-inter font-semibold text-sm !leading-normal text-heading"
                  >
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    id="bio"
                    placeholder="Type here"
                    value={formData.bio}
                    onChange={handleInputChange}
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
              value={formData.timezone}
              onChange={(val) => handleDropdownChange("timezone", val)}
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
              value={formData.dateFormat}
              onChange={(val) => handleDropdownChange("dateFormat", val)}
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
              value={formData.timeFormat}
              onChange={(val) => handleDropdownChange("timeFormat", val)}
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
                    <Switch
                      id={item.id}
                      className="mt-1"
                      checked={macroSettings[item.id]}
                      onChange={() => handleMacroToggle(item.id)}
                    />
                    <label htmlFor={item.id} className="">
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
                  <Switch
                    id="enableCallForwarding"
                    className="mt-1"
                    checked={callSettings.enableCallForwarding}
                    onChange={() => handleCallSettingToggle("enableCallForwarding")}
                  />
                  <label htmlFor="enableCallForwarding">
                    <h5 className="text-sm">Enable call forwarding</h5>
                  </label>
                </div>
                <Input
                  className=""
                  placeholder="US +1"
                  name="forwardingNumber"
                  value={formData.forwardingNumber}
                  onChange={handleInputChange}
                />
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="forwardWhenOffline"
                    className="mt-1"
                    checked={callSettings.forwardWhenOffline}
                    onChange={() => handleCallSettingToggle("forwardWhenOffline")}
                  />
                  <label htmlFor="forwardWhenOffline" className="">
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

        {/* Save message */}
        {saveMessage && (
          <div className={`p-4 rounded-lg ${saveMessage.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
            {saveMessage}
          </div>
        )}

        <div className="flex items-center justify-end mt-4 xl:mt-[100px]">
          <button
            className="btn bg-prim disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSaveChanges}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </MainInner>
    </>
  );
}


// import Top from "../../layouts/Top";
// import MainInner from "../../components/MainInner";
// import { c_16, c_24 } from "../../utilities/Classes";
// import profile from "../../assets/img/profile.png";
// import Input from "../../components/Input";
// import Switch from "../../components/Switch";
// import Dropdown from "../../components/Dropdown";
// import Checkbox from "../../components/Checkbox";

// export default function Profile() {
//   const macro = [
//     {
//       title: "Macro prediction",
//       des: "Automatically select macros based on previous macro usage.",
//     },
//     {
//       title: "Macro suggestions",
//       des: "Display suggested macros that can be applied to tickets with one click.",
//     },
//     {
//       title: "Display macro search view by default",
//       des: "Always display the macro search view when responding to incoming emails.",
//     },
//   ];

//   return (
//     <>
//       <Top title="Your Profile" />
//       <MainInner className="flex flex-col gap-4 md:gap-5 xl:gap-6">
//         <div className={`${c_24}`}>
//           <h4 className="text-base md:text-lg font-medium mb-4 md:mb-5">
//             Personal Information
//           </h4>
//           <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-5">
//             <div className="max-w-[254px] mx-auto md:mx-0">
//               <h5 className="text-center md:text-start">Profile Image</h5>
//               <div className="my-2.5 img size-[200px] mx-auto md:mx-0 md:size-[254px] overflow-hidden flex items-center justify-center rounded-2xl bg-[#ADB6D7]">
//                 <img src={profile} alt="" />
//               </div>
//               <p className="text-xs !leading-normal text-center md:text-start">
//                 The picture must be square and weigh less than 500kB.
//               </p>
//             </div>
//             <div className="w-full">
//               <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-5 ">
//                 <Input className="" label="Name" />
//                 <Input className="" label="Email" />
//                 <div className="xl:col-span-2">
//                   <label
//                     htmlFor=""
//                     className="block mb-1 font-inter font-semibold text-sm !leading-normal text-heading"
//                   >
//                     Bio
//                   </label>
//                   <textarea
//                     name=""
//                     id=""
//                     placeholder="Type here"
//                     className="min-h-[108px] p-3 w-full bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-[10px] font-inter font-normal text-sm text-[#111111]/80 placeholder:text-[#111111]/50 resize-none"
//                   ></textarea>
//                 </div>
//               </div>
//               <p className="mt-1">
//                 Your bio can be used in signatures as a variable. Admins can set
//                 up signatures in{" "}
//                 <a href="" className="text-primary">
//                   each email integration
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className={`${c_24}`}>
//           <h4 className="text-base md:text-lg font-medium mb-4 md:mb-5">
//             Date and time settings
//           </h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5 ">
//             <Dropdown
//               className="!mb-0"
//               label="Time Zone"
//               placeholder="Select"
//               isArrow={true}
//               items={[
//                 { name: "select-1" },
//                 { name: "select-2" },
//                 { name: "select-3" },
//               ]}
//             />
//             <Dropdown
//               className="!mb-0"
//               label="Date Format"
//               placeholder="Select"
//               isArrow={true}
//               items={[
//                 { name: "select-1" },
//                 { name: "select-2" },
//                 { name: "select-3" },
//               ]}
//             />
//             <Dropdown
//               className="!mb-0"
//               label="Time Format"
//               placeholder="Select"
//               isArrow={true}
//               items={[
//                 { name: "select-1" },
//                 { name: "select-2" },
//                 { name: "select-3" },
//               ]}
//             />
//           </div>
//         </div>
//         <div className={`${c_24}`}>
//           <h4 className="text-base md:text-lg font-medium mb-4 md:mb-5">
//             Account Preferences
//           </h4>
//           <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-5 xl:gap-6">
//             <div className={`${c_16} `}>
//               <h5 className="text-sm font-semibold !leading-[142%] mb-3 md:mb-4">
//                 Macro Display
//               </h5>
//               <div className="flex flex-col gap-2.5">
//                 {macro.map((item, index) => (
//                   <div className="flex items-start gap-2" key={index}>
//                     <Switch id={index} className="mt-1" checked />
//                     <label htmlFor={index} className="">
//                       <h5 className="text-sm">{item.title} </h5>
//                       <p>
//                         {item.des}{" "}
//                         <a href="" className="text-primary">
//                           Learn more
//                         </a>{" "}
//                       </p>
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className={`${c_16} `}>
//               <div className="mb-3 md:mb-4">
//                 <h5 className="text-sm font-semibold !leading-[142%] mb-1">
//                   Forward calls to an external number
//                 </h5>
//                 <p>
//                   When you are routed a call in Jarvey AI, forward the call to a
//                   mobile device or landline.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2.5">
//                 <div className="flex items-start gap-2">
//                   <Switch id="enableCall" className="mt-1" checked />
//                   <label htmlFor="enableCall">
//                     <h5 className="text-sm">Enable call forwarding</h5>
//                   </label>
//                 </div>
//                 <Input className="" placeholder="US +1" />
//                 <div className="flex items-start gap-2">
//                   <Checkbox id="forward" className="mt-1" checked />
//                   <label htmlFor="forward" className="">
//                     <h5 className="text-sm">Forward calls when offline</h5>
//                     <p>
//                       Calls will be forwarded to this number when agent is
//                       available or offline.
//                     </p>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center justify-end mt-4 xl:mt-[100px]">
//           <button className="btn bg-prim">Save Changes</button>
//         </div>
//       </MainInner>
//     </>
//   );
// }
