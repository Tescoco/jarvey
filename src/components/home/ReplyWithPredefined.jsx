import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { c_24, search as searchIcon } from "../../utilities/Classes";
import { useEffect } from "react";

export default function ReplyWithPredefined({ install }) {
  const CardItems = [
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
    {
      title: "Predefined Response 1",
      tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
      value: "2",
    },
  ];
  const [installed, setInstalled] = useState([]);
  const [query, setQuery] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return installed;
    return installed.filter((r) =>
      r.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [installed, query]);

  // if install is true, set the installed state to the selected item
  useEffect(() => {
    if (install) {
      setInstalled([
        {
          title: "Predefined Response 1",
          date: new Date().toLocaleDateString(),
        },
        ...installed,
      ]);
    }
  }, [install]);

  const openPreview = (item) => {
    setSelected(item);
    setPreviewOpen(true);
  };

  const handleInstall = () => {
    if (!selected) return;
    setInstalled((prev) => [
      { title: selected.title, date: new Date().toLocaleDateString() },
      ...prev,
    ]);
    setPreviewOpen(false);
  };

  const handleEdit = () => {
    // if the page is on onboarding page, redirect to /onboarding/predefined-install
    if (window.location.pathname.includes("/onboarding")) {
      window.location.href = "/onboarding/predefined-install";
    } else {
      window.location.href = "/app/predefined-install";
    }
  };

  return (
    <div>
      <div className={`${c_24} mb-5`}>
        <h4 className="text-base md:text-lg font-semibold !leading-normal mb-3">
          Installed Predefined Responses
        </h4>
        <Input
          className="mb-3"
          type="text"
          placeholder="Search..."
          leftIcon={searchIcon}
          inputClass="!h-[36px]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="overflow-auto">
          <table className="w-full table">
            <thead>
              <tr className="bg-[#F6F8FA]">
                {["Response", "Date", "Actions"].map((item, idx) => (
                  <th
                    key={idx}
                    className="text-left text-sm text-[#525866] !font-normal py-2 px-3 last:text-right"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, idx) => (
                <tr key={idx} className="!border-b border-[#E2E4E9]">
                  <td className="md:text-sm text-[#0A0D14] font-medium">
                    {row.title}
                  </td>
                  <td className="md:text-sm text-[#0A0D14] font-medium">
                    {row.date}
                  </td>
                  <td>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit()}
                        className="btn bg-off !px-2 !py-1 text-xs"
                      >
                        Edit
                      </button>
                      <button
                        className="btn bg-off !px-2 !py-1 text-xs"
                        onClick={() =>
                          setInstalled((prev) =>
                            prev.filter((_, i) => i !== idx)
                          )
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td className="py-3 px-3 text-sm text-[#858585]" colSpan={3}>
                    No installed Predefined responses yet. Add one by clicking
                    on a Predefined Response
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
        {CardItems.map((item, idx) => (
          <div
            className="flex flex-col border border-[#E2E4E9] rounded-lg lg:rounded-xl p-3 lg:p-4"
            key={idx}
          >
            <p className="text-[#0A0D14] text-sm lg:text-base font-semibold !leading-[1.5] mb-3 lg:mb-4">
              {item.title}
            </p>
            <p className="text-xs text-[#858585] font-normal !leading-[1.4] mb-2">
              Action tag
            </p>
            <div className="flex items-center gap-1 flex-wrap lg:gap-2 mb-3 lg:mb-4">
              {item.tags.map((itm, id) => (
                <p
                  key={id}
                  className={`text-[#0A0D14] bg-[#F6F8FA] text-xs font-semibold !leading-[1.5] rounded-md lg:rounded-lg uppercase py-1 px-[10px]`}
                >
                  {itm}
                </p>
              ))}
              {item.value && (
                <p className="text-[#0A0D14] text-xs font-semibold !leading-[1.5] uppercase">
                  +{item.value}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => openPreview(item)}
              className="w-full rounded-lg p-2 shadow-[0px_1px_2px_0px_rgba(90,54,191,0.48),_0px_0px_0px_1px_#6E3FF3] border-[#7856FF] text-[#7856FF] text-xs font-semibold leading-[1.66] hover:!text-white mt-auto"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {previewOpen && selected && (
        <Modal
          closeIconHide={false}
          onClick={() => setPreviewOpen(false)}
          innerClass="max-w-[720px]"
        >
          <h4 className="text-lg md:text-xl 2xl:text-2xl mb-3">
            {selected.title}
          </h4>
          <p className="text-xs text-[#858585] mb-4">
            Predefined response preview. You can customize it after installing.
          </p>
          <div className="flex items-center gap-2 flex-wrap mb-4">
            {selected.tags.map((t, i) => (
              <span
                key={i}
                className="text-[#0A0D14] bg-[#F6F8FA] text-xs font-semibold rounded-md py-1 px-[10px] uppercase"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-end gap-2 mt-2">
            <button
              className="btn bg-off"
              onClick={() => setPreviewOpen(false)}
            >
              Cancel
            </button>
            <button className="btn bg-off" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn bg-primary" onClick={handleInstall}>
              Install
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// import React, { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import Input from "../../components/Input";
// import Modal from "../../components/Modal";
// import { c_24, search as searchIcon } from "../../utilities/Classes";
// import { useEffect } from "react";

// export default function ReplyWithPredefined({ install }) {
//   const CardItems = [
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//   ];
//   const [installed, setInstalled] = useState([]);
//   const [query, setQuery] = useState("");
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [selected, setSelected] = useState(null);

//   const filtered = useMemo(() => {
//     if (!query.trim()) return installed;
//     return installed.filter((r) =>
//       r.title.toLowerCase().includes(query.toLowerCase())
//     );
//   }, [installed, query]);

//   // if install is true, set the installed state to the selected item
//   useEffect(() => {
//     if (install) {
//       setInstalled([
//         {
//           title: "Predefined Response 1",
//           date: new Date().toLocaleDateString(),
//         },
//         ...installed,
//       ]);
//     }
//   }, [install]);

//   const openPreview = (item) => {
//     setSelected(item);
//     setPreviewOpen(true);
//   };

//   const handleInstall = () => {
//     if (!selected) return;
//     setInstalled((prev) => [
//       { title: selected.title, date: new Date().toLocaleDateString() },
//       ...prev,
//     ]);
//     setPreviewOpen(false);
//   };

//   const handleEdit = () => {
//     // if the page is on onboarding page, redirect to /onboarding/predefined-install
//     if (window.location.pathname.includes("/onboarding")) {
//       window.location.href = "/onboarding/predefined-install";
//     } else {
//       window.location.href = "/app/predefined-install";
//     }
//   };

//   return (
//     <div>
//       <div className={`${c_24} mb-5`}>
//         <h4 className="text-base md:text-lg font-semibold !leading-normal mb-3">
//           Installed Predefined Responses
//         </h4>
//         <Input
//           className="mb-3"
//           type="text"
//           placeholder="Search..."
//           leftIcon={searchIcon}
//           inputClass="!h-[36px]"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <div className="overflow-auto">
//           <table className="w-full table">
//             <thead>
//               <tr className="bg-[#F6F8FA]">
//                 {["Response", "Date", "Actions"].map((item, idx) => (
//                   <th
//                     key={idx}
//                     className="text-left text-sm text-[#525866] !font-normal py-2 px-3 last:text-right"
//                   >
//                     {item}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map((row, idx) => (
//                 <tr key={idx} className="!border-b border-[#E2E4E9]">
//                   <td className="md:text-sm text-[#0A0D14] font-medium">
//                     {row.title}
//                   </td>
//                   <td className="md:text-sm text-[#0A0D14] font-medium">
//                     {row.date}
//                   </td>
//                   <td>
//                     <div className="flex items-center justify-end gap-2">
//                       <button
//                         onClick={() => handleEdit()}
//                         className="btn bg-off !px-2 !py-1 text-xs"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="btn bg-off !px-2 !py-1 text-xs"
//                         onClick={() =>
//                           setInstalled((prev) =>
//                             prev.filter((_, i) => i !== idx)
//                           )
//                         }
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//               {filtered.length === 0 && (
//                 <tr>
//                   <td className="py-3 px-3 text-sm text-[#858585]" colSpan={3}>
//                     No installed Predefined responses yet. Add one by clicking
//                     on a Predefined Response
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
//         {CardItems.map((item, idx) => (
//           <button
//             type="button"
//             onClick={() => openPreview(item)}
//             className="text-left border border-[#E2E4E9] rounded-lg lg:rounded-xl  p-3 lg:p-4 cursor-pointer"
//             key={idx}
//           >
//             <p className="text-[#0A0D14] text-sm lg:text-base font-semibold !leading-[1.5] mb-3 lg:mb-4">
//               {item.title}
//             </p>
//             <p className="text-xs text-[#858585] font-normal !leading-[1.4] mb-2">
//               Action tag
//             </p>
//             <div className="flex items-center gap-1 flex-wrap lg:gap-2 mb-3 lg:mb-4">
//               {item.tags.map((itm, id) => (
//                 <p
//                   key={id}
//                   className={`text-[#0A0D14] bg-[#F6F8FA] text-xs font-semibold !leading-[1.5] rounded-md lg:rounded-lg uppercase py-1 px-[10px]`}
//                 >
//                   {itm}
//                 </p>
//               ))}
//               {item.value && (
//                 <p className="text-[#0A0D14] text-xs font-semibold !leading-[1.5] uppercase">
//                   +{item.value}
//                 </p>
//               )}
//             </div>
//             <span className="btn  !shadow-[0px_1px_2px_0px_rgba(90,54,191,0.48),_0px_0px_0px_1px_#6E3FF3] !border-[#7856FF] !text-[#7856FF] !text-xs !font-semibold !leading-[1.66] hover:!text-white !w-full">
//               View
//             </span>
//           </button>
//         ))}
//       </div>

//       {previewOpen && selected && (
//         <Modal
//           closeIconHide={false}
//           onClick={() => setPreviewOpen(false)}
//           innerClass="max-w-[720px]"
//         >
//           <h4 className="text-lg md:text-xl 2xl:text-2xl mb-3">
//             {selected.title}
//           </h4>
//           <p className="text-xs text-[#858585] mb-4">
//             Predefined response preview. You can customize it after installing.
//           </p>
//           <div className="flex items-center gap-2 flex-wrap mb-4">
//             {selected.tags.map((t, i) => (
//               <span
//                 key={i}
//                 className="text-[#0A0D14] bg-[#F6F8FA] text-xs font-semibold rounded-md py-1 px-[10px] uppercase"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//           <div className="flex items-center justify-end gap-2 mt-2">
//             <button
//               className="btn bg-off"
//               onClick={() => setPreviewOpen(false)}
//             >
//               Cancel
//             </button>
//             <button className="btn bg-off" onClick={handleEdit}>
//               Edit
//             </button>
//             <button className="btn bg-primary" onClick={handleInstall}>
//               Install
//             </button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }
