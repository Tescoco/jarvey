import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function OnboardingLayout() {
  const pathname = useLocation();
  useEffect(() => {
    document.querySelector(".main").scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-wrap">
      {/* No Left sidebar for onboarding */}
      <div className={`main w-full h-screen overflow-auto`}>
        <Outlet />
      </div>
    </div>
  );
}
