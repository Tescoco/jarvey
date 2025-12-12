import React from "react";
import MainInner from "../../components/MainInner";
import TestComponent from "../../components/home/Test";
import OnboardingWrapper from "../../components/OnboardingWrapper";
import { ONBOARDING_STEPS_CONFIG } from "../../utils/onboardingSteps";
import { c_24 } from "../../utilities/Classes";

export default function AITest() {
  const stepConfig = ONBOARDING_STEPS_CONFIG["ai-test"];
  

  return (
    <MainInner>
      <OnboardingWrapper
        currentStep="ai-test"
        nextStep={stepConfig.nextStep}
        title={stepConfig.title}
        description={stepConfig.description}
        timeEstimate={stepConfig.timeEstimate}
      >
        <div className={`${c_24}`}>
          <TestComponent />
        </div>
      </OnboardingWrapper>
    </MainInner>
  );
}
