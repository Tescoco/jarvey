import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import MainInner from "../components/MainInner";
import { c_16 } from "../utilities/Classes";

export default function Notification() {
  const initialNotifications = [
    {
      id: 1,
      title: "Snooze expired",
      massage: "Let's send your first message!",
      des: "Let us know if we can do anything else for you-we're here to help.",
      status: "active",
      link: "/app/tickets/123" // Example link for navigation
    },
    {
      id: 2,
      title: "Snooze expired",
      massage: "Let's send your first message!",
      des: "Let us know if we can do anything else for you-we're here to help.",
      status: "active",
      link: "/app/tickets/124"
    },
    {
      id: 3,
      title: "Snooze expired",
      massage: "Let's send your first message!",
      des: "Let us know if we can do anything else for you-we're here to help.",
      status: "active",
      link: "/app/tickets/125"
    },
    {
      id: 4,
      title: "Snooze expired",
      massage: "Let's send your first message!",
      des: "Let us know if we can do anything else for you-we're here to help.",
      link: "/app/tickets/126"
    },
    {
      id: 5,
      title: "Snooze expired",
      massage: "Let's send your first message!",
      des: "Let us know if we can do anything else for you-we're here to help.",
      link: "/app/tickets/127"
    },
  ];

  // FIX: Added state management for notifications
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  // FIX 1: Handler for "Mark All as Read" button
  const handleMarkAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({
        ...notification,
        status: undefined // Remove "active" status to mark as read
      }))
    );
  };

  // FIX 2: Handler for "View All Notifications"
  const handleViewAllNotifications = () => {
    // Navigate to full notifications page
    navigate("/app/notification");
    // Alternative: You could also open a modal or expand the view
    // console.log("Navigating to full notifications page");
  };

  // FIX 3: Handler for clicking individual notifications
  const handleNotificationClick = (notification) => {
    // Mark the notification as read
    setNotifications(prev =>
      prev.map(n =>
        n.id === notification.id
          ? { ...n, status: undefined }
          : n
      )
    );

    // Navigate to the notification's link
    if (notification.link) {
      navigate(notification.link);
    }

    // Alternative: You could trigger other actions here
    console.log("Notification clicked:", notification);
  };

  // Filter notifications based on selected filter
  const filteredNotifications = notifications.filter(notification => {
    if (filter === "Read") return !notification.status;
    if (filter === "UnRead") return notification.status === "active";
    return true; // "All"
  });

  // Count unread notifications
  const unreadCount = notifications.filter(n => n.status === "active").length;

  return (
    <>
      <MainInner className="!p-0 mt-16 md:mt-20 lg:mt-[88px]">
        <div
          className={`rounded-[20px] mx-4 md:mx-auto lg:mx-0 px-3 md:px-4 pb-3 md:pb-4 max-w-[380px] md:max-w-[420px] max-h-[70vh] md:max-h-[75vh] min-h-[400px] overflow-y-auto shadow-[0px_4px_24px_0px_rgba(0,0,0,0.16)] bg-white`}
        >
          <div className="flex items-center justify-between mb-3 md:mb-4 border-b border-stroke py-3 md:py-4 -mx-3 md:-mx-4 px-3 md:px-4">
            <div className="flex items-center gap-2 md:gap-3">
              <h4 className="text-sm md:text-base">
                Notifications
                {unreadCount > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-primary rounded-full">
                    {unreadCount}
                  </span>
                )}
              </h4>
              <Dropdown
                info=""
                className="!mb-0 z-[2]"
                btnClass="text-primary max-h-[28px] min-w-[50px] text-xs"
                placeholder={filter}
                isArrow={true}
                items={[{ name: "All" }, { name: "Read" }, { name: "UnRead" }]}
                onChange={(item) => setFilter(item.name)}
              />
            </div>
            {/* FIX 1: Added onClick handler to "Mark All as Read" */}
            <button
              onClick={handleMarkAllAsRead}
              className="text-xs md:text-sm text-heading hover:text-primary transition-colors duration-200"
              disabled={unreadCount === 0}
            >
              Mark All as Read
            </button>
          </div>

          <div className="flex flex-col gap-1.5 md:gap-2">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((item, index) => (
                <div
                  // FIX 3: Added onClick handler to individual notifications
                  onClick={() => handleNotificationClick(item)}
                  className={`flex gap-3 md:gap-4 relative z-[1] ${c_16} ${item.status === "active" && "bg-[#F7F7F7]"
                    } p-3 md:p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer`}
                  key={item.id || index}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleNotificationClick(item);
                    }
                  }}
                >
                  <div className="size-8 md:size-9 bg-primary rounded-full flex items-center justify-center flex-[0_0_auto] mt-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1668 2.83203H3.8335C2.72893 2.83203 1.8335 3.72746 1.8335 4.83203V11.1654C1.8335 12.2699 2.72893 13.1654 3.8335 13.1654H12.1668C13.2714 13.1654 14.1668 12.2699 14.1668 11.1654V4.83203C14.1668 3.72746 13.2714 2.83203 12.1668 2.83203Z"
                        stroke="white"
                        strokeWidth="1.15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.8335 5.33203L7.4435 7.90936C7.61811 7.98959 7.808 8.03113 8.00016 8.03113C8.19232 8.03113 8.38222 7.98959 8.55683 7.90936L14.1668 5.33203"
                        stroke="white"
                        strokeWidth="1.15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm md:text-base font-semibold leading-normal mb-1 truncate">
                      {item.title}{" "}
                    </h5>
                    <h6 className="text-xs md:text-sm line-clamp-2 mb-1 text-gray-700">
                      {item.massage}{" "}
                    </h6>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {item.des}{" "}
                    </p>
                  </div>
                  {item.status === "active" && (
                    <div className="absolute top-3 right-3 size-2 rounded-full bg-[#FE4333]" />
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-sm">
                  {filter === "Read" && "No read notifications"}
                  {filter === "UnRead" && "No unread notifications"}
                  {filter === "All" && "No notifications"}
                </p>
              </div>
            )}
          </div>

          {/* FIX 2: Added "View All Notifications" button */}
          {filteredNotifications.length > 0 && (
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-stroke -mx-3 md:-mx-4 px-3 md:px-4">
              <button
                onClick={handleViewAllNotifications}
                className="w-full text-center text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200"
              >
                View All Notifications →
              </button>
            </div>
          )}
        </div>
      </MainInner>
    </>
  );
}

// import Dropdown from "../components/Dropdown";
// import MainInner from "../components/MainInner";
// import { c_16 } from "../utilities/Classes";

// export default function Notification() {
//   const card = [
//     {
//       title: "Snooze expired",
//       massage: "Let’s send your first message!",
//       des: "Let us know if we can do anything else for you-we’re here to help.",
//       status: "active",
//     },
//     {
//       title: "Snooze expired",
//       massage: "Let’s send your first message!",
//       des: "Let us know if we can do anything else for you-we’re here to help.",
//       status: "active",
//     },
//     {
//       title: "Snooze expired",
//       massage: "Let’s send your first message!",
//       des: "Let us know if we can do anything else for you-we’re here to help.",
//       status: "active",
//     },
//     {
//       title: "Snooze expired",
//       massage: "Let’s send your first message!",
//       des: "Let us know if we can do anything else for you-we’re here to help.",
//     },
//     {
//       title: "Snooze expired",
//       massage: "Let’s send your first message!",
//       des: "Let us know if we can do anything else for you-we’re here to help.",
//     },
//   ];

//   return (
//     <>
//       <MainInner className="!p-0 mt-16 md:mt-20 lg:mt-[88px]">
//         <div
//           className={`rounded-[20px] mx-4 md:mx-auto lg:mx-0 px-3 md:px-4 pb-3 md:pb-4 max-w-[380px] md:max-w-[420px] max-h-[70vh] md:max-h-[75vh] min-h-[400px] overflow-y-auto shadow-[0px_4px_24px_0px_rgba(0,0,0,0.16)] bg-white`}
//         >
//           <div className="flex items-center justify-between mb-3 md:mb-4 border-b border-stroke py-3 md:py-4 -mx-3 md:-mx-4 px-3 md:px-4">
//             <div className="flex items-center gap-2 md:gap-3">
//               <h4 className="text-sm md:text-base">Notifications</h4>
//               <Dropdown
//                 info=""
//                 className="!mb-0 z-[2]"
//                 btnClass="text-primary max-h-[28px] min-w-[50px] text-xs"
//                 placeholder="All"
//                 isArrow={true}
//                 items={[{ name: "All" }, { name: "Read" }, { name: "UnRead" }]}
//               />
//             </div>
//             <button className="text-xs md:text-sm text-heading hover:text-primary">
//               Mark All as Read
//             </button>
//           </div>
//           <div className="flex flex-col gap-1.5 md:gap-2">
//             {card.map((item, index) => (
//               <div
//                 className={`flex gap-3 md:gap-4 relative z-[1] ${c_16} ${
//                   item.status == "active" && "bg-[#F7F7F7]"
//                 } p-3 md:p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer`}
//                 key={index}
//               >
//                 <div className="size-8 md:size-9 bg-primary rounded-full flex items-center justify-center flex-[0_0_auto] mt-0.5">
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12.1668 2.83203H3.8335C2.72893 2.83203 1.8335 3.72746 1.8335 4.83203V11.1654C1.8335 12.2699 2.72893 13.1654 3.8335 13.1654H12.1668C13.2714 13.1654 14.1668 12.2699 14.1668 11.1654V4.83203C14.1668 3.72746 13.2714 2.83203 12.1668 2.83203Z"
//                       stroke="white"
//                       strokeWidth="1.15"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M1.8335 5.33203L7.4435 7.90936C7.61811 7.98959 7.808 8.03113 8.00016 8.03113C8.19232 8.03113 8.38222 7.98959 8.55683 7.90936L14.1668 5.33203"
//                       stroke="white"
//                       strokeWidth="1.15"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h5 className="text-sm md:text-base font-semibold leading-normal mb-1 truncate">
//                     {item.title}{" "}
//                   </h5>
//                   <h6 className="text-xs md:text-sm line-clamp-2 mb-1 text-gray-700">
//                     {item.massage}{" "}
//                   </h6>
//                   <p className="text-xs text-gray-500 line-clamp-2">
//                     {item.des}{" "}
//                   </p>
//                 </div>
//                 {item.status === "active" && (
//                   <div className="absolute top-3 right-3 size-2 rounded-full bg-[#FE4333]" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </MainInner>
//     </>
//   );
// }
