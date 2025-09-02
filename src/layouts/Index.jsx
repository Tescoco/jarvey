import React, { useEffect } from "react";
import Left from "./Left";
import { Outlet, useLocation } from "react-router-dom";

export default function Index() {
  const pathname = useLocation();
  useEffect(() => {
    document.querySelector(".main").scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-wrap">
      <Left className={`w-[275px]`} />
      {/* xl:h-[calc(100vh-var(--top-height,88px))] */}
      <div
        className={`main w-full lg:w-[calc(100%-275px)] h-screen overflow-auto`}
      >
        <Outlet />
      </div>
    </div>
  );
}
