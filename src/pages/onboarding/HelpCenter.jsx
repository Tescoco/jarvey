import React from "react";
import MainInner from "../../components/MainInner";
import OnboardingWrapper from "../../components/OnboardingWrapper";
import { ONBOARDING_STEPS_CONFIG } from "../../utils/onboardingSteps";
import { c_24 } from "../../utilities/Classes";

export default function HelpCenter() {
  const stepConfig = ONBOARDING_STEPS_CONFIG["help-center"];

  return (
    <MainInner>
      <OnboardingWrapper
        currentStep="help-center"
        nextStep={stepConfig.nextStep}
        title={stepConfig.title}
        description={stepConfig.description}
        timeEstimate={stepConfig.timeEstimate}
      >
        <div className={`${c_24}`}>
          <div className="p-8 text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-[#7856FF] mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h3 className="text-xl font-semibold text-[#0A0D14] mb-2">
                Create Help Center Articles
              </h3>
              <p className="text-[#525866]">
                Build a knowledge base to help customers find answers quickly
              </p>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#7856FF] rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A0D14] mb-1">
                    Create article categories
                  </h4>
                  <p className="text-sm text-[#525866]">
                    Organize your articles by topic for easy navigation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#7856FF] rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A0D14] mb-1">
                    Write your first article
                  </h4>
                  <p className="text-sm text-[#525866]">
                    Start with your most frequently asked questions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#7856FF] rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A0D14] mb-1">
                    Publish and share
                  </h4>
                  <p className="text-sm text-[#525866]">
                    Make your help center accessible to customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OnboardingWrapper>
    </MainInner>
  );
}
