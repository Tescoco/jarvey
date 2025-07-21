import React from "react";
import MainInner from "../../components/MainInner";
import StayinControlComponent from "../../components/home/StayinControl";
import OnboardingWrapper from "../../components/OnboardingWrapper";
import { ONBOARDING_STEPS_CONFIG } from "../../utils/onboardingSteps";
import { c_24 } from "../../utilities/Classes";

export default function SLAs() {
  const stepConfig = ONBOARDING_STEPS_CONFIG["slas"];

  return (
    <MainInner>
      <OnboardingWrapper
        currentStep="slas"
        nextStep={stepConfig.nextStep}
        title={stepConfig.title}
        description={stepConfig.description}
        timeEstimate={stepConfig.timeEstimate}
      >
        <div className={`${c_24}`}>
          <StayinControlComponent />
        </div>
      </OnboardingWrapper>
    </MainInner>
  );
}
