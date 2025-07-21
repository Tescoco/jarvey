import React from "react";
import MainInner from "../../components/MainInner";
import GuidanceComponent from "../../components/home/Guidance";
import OnboardingWrapper from "../../components/OnboardingWrapper";
import { ONBOARDING_STEPS_CONFIG } from "../../utils/onboardingSteps";
import { c_24 } from "../../utilities/Classes";

export default function AIGuidance() {
  const stepConfig = ONBOARDING_STEPS_CONFIG["ai-guidance"];

  return (
    <MainInner>
      <OnboardingWrapper
        currentStep="ai-guidance"
        nextStep={stepConfig.nextStep}
        title={stepConfig.title}
        description={stepConfig.description}
        timeEstimate={stepConfig.timeEstimate}
      >
        <div className={`${c_24}`}>
          <GuidanceComponent />
        </div>
      </OnboardingWrapper>
    </MainInner>
  );
}
