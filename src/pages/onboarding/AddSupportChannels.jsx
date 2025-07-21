import React from "react";
import MainInner from "../../components/MainInner";
import AddYourSupportComponent from "../../components/home/AddYourSupport";
import OnboardingWrapper from "../../components/OnboardingWrapper";
import { ONBOARDING_STEPS_CONFIG } from "../../utils/onboardingSteps";
import { c_24 } from "../../utilities/Classes";

export default function AddSupportChannels() {
  const stepConfig = ONBOARDING_STEPS_CONFIG["add-support-channels"];

  return (
    <MainInner>
      <OnboardingWrapper
        currentStep="add-support-channels"
        nextStep={stepConfig.nextStep}
        title={stepConfig.title}
        description={stepConfig.description}
        timeEstimate={stepConfig.timeEstimate}
      >
        <div className={`${c_24}`}>
          <AddYourSupportComponent />
        </div>
      </OnboardingWrapper>
    </MainInner>
  );
}
