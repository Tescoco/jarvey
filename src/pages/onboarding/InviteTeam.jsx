import React from "react";
import MainInner from "../../components/MainInner";
import InviteYourTeamComponent from "../../components/home/InviteYourTeam";
import OnboardingWrapper from "../../components/OnboardingWrapper";
import { ONBOARDING_STEPS_CONFIG } from "../../utils/onboardingSteps";
import { c_24 } from "../../utilities/Classes";

export default function InviteTeam() {
  const stepConfig = ONBOARDING_STEPS_CONFIG["invite-team"];

  return (
    <MainInner>
      <OnboardingWrapper
        currentStep="invite-team"
        nextStep={stepConfig.nextStep}
        title={stepConfig.title}
        description={stepConfig.description}
        timeEstimate={stepConfig.timeEstimate}
      >
        <div className={`${c_24}`}>
          <InviteYourTeamComponent />
        </div>
      </OnboardingWrapper>
    </MainInner>
  );
}
