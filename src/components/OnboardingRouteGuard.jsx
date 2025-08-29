import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useOnboardingProgress } from "../hooks/useOnboardingProgress";

export default function OnboardingRouteGuard({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { getProgressPercentage, getNextStep } = useOnboardingProgress();

  useEffect(() => {
    const progressPercentage = getProgressPercentage();
    const currentPath = location.pathname;

    // If user is on the main onboarding page (/onboarding or /)
    if (currentPath === "/onboarding" || currentPath === "/") {
      // If onboarding is completed (100%), redirect to /app
      if (progressPercentage === 100) {
        navigate("/app");
        return;
      }

      // If onboarding is not completed but user is on main page, stay on current page
      // (this allows them to continue from where they left off)
      return;
    }

    // If user is on a specific onboarding step
    if (currentPath.startsWith("/onboarding/")) {
      // If onboarding is completed (100%), redirect to /app
      if (progressPercentage === 100) {
        navigate("/app");
        return;
      }

      // If onboarding is not completed, allow access to onboarding steps
      return;
    }

    // For any other routes, allow normal access
  }, [navigate, location.pathname, getProgressPercentage]);

  return <>{children}</>;
}
