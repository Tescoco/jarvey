import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOnboardingProgress } from "../hooks/useOnboardingProgress";

export default function OnboardingWrapper({
  children,
  currentStep,
  nextStep,
  title,
  description,
  timeEstimate,
}) {
  const { completeStep, skipStep } = useOnboardingProgress();
  const navigate = useNavigate();

  const handleSkip = () => {
    skipStep(currentStep);
    if (nextStep) {
      navigate(`/onboarding/${nextStep}`);
    } else {
      navigate("/onboarding/complete");
    }
  };

  const handleContinue = () => {
    completeStep(currentStep);
    if (nextStep) {
      navigate(`/onboarding/${nextStep}`);
    } else {
      navigate("/onboarding/complete");
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5FF]">
      <div className="max-w-2xl mx-auto pt-8 pb-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0A0D14] mb-4">{title}</h1>
          <p className="text-lg text-[#525866] mb-2">{description}</p>
          <p className="text-sm text-[#858585]">{timeEstimate}</p>
        </div>

        {/* Main Content */}
        <div className="mb-8">{children}</div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-[#525866] hover:text-[#0A0D14] font-medium"
          >
            ← Back to overview
          </Link>

          <div className="flex gap-4">
            <button
              onClick={handleSkip}
              className="btn border-[#E2E4E9] text-[#525866] hover:bg-[#F7F7F7]"
            >
              Skip for now
            </button>
            <button
              onClick={handleContinue}
              className="btn bg-[#7856FF] text-white hover:bg-[#6B4EE6]"
            >
              {nextStep ? "Continue" : "Complete Setup"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
