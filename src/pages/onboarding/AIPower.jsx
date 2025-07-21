import React from "react";
import MainInner from "../../components/MainInner";
import AIPowerComponent from "../../components/home/AIPower";
import OnboardingWrapper from "../../components/OnboardingWrapper";
import { ONBOARDING_STEPS_CONFIG } from "../../utils/onboardingSteps";
import { c_24 } from "../../utilities/Classes";

export default function AIPower() {
  const stepConfig = ONBOARDING_STEPS_CONFIG["ai-power"];

  return (
    <MainInner>
      <OnboardingWrapper
        currentStep="ai-power"
        nextStep={stepConfig.nextStep}
        title={stepConfig.title}
        description={stepConfig.description}
        timeEstimate={stepConfig.timeEstimate}
      >
        <div className={`${c_24}`}>
          <AIPowerComponent />
        </div>
      </OnboardingWrapper>
    </MainInner>
  );
}
