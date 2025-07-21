import { useState, useEffect } from "react";

const STORAGE_KEY = "jarvey_onboarding_progress";

// Define all onboarding steps in order
const ONBOARDING_STEPS = [
  // Step Group 1
  "connect-store",
  "connect-support",
  "answer-ticket",
  "add-support-channels",
  "invite-team",
  // Step Group 2
  "predefined-responses",
  "install-triggers",
  "install-flows",
  // Step Group 3
  "help-center",
  // Step Group 4
  "ai-power",
  "ai-guidance",
  "ai-test",
  // Step Group 5
  "slas",
];

export const useOnboardingProgress = () => {
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [skippedSteps, setSkippedSteps] = useState(new Set());

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const { completed = [], skipped = [] } = JSON.parse(savedProgress);
        setCompletedSteps(new Set(completed));
        setSkippedSteps(new Set(skipped));
      } catch (error) {
        console.error("Error loading onboarding progress:", error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  const saveProgress = (completed, skipped) => {
    const progress = {
      completed: Array.from(completed),
      skipped: Array.from(skipped),
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  };

  // Mark a step as completed
  const completeStep = (stepId) => {
    setCompletedSteps((prev) => {
      const newCompleted = new Set(prev);
      newCompleted.add(stepId);

      setSkippedSteps((prevSkipped) => {
        const newSkipped = new Set(prevSkipped);
        newSkipped.delete(stepId); // Remove from skipped if it was there
        saveProgress(newCompleted, newSkipped);
        return newSkipped;
      });

      return newCompleted;
    });
  };

  // Mark a step as skipped
  const skipStep = (stepId) => {
    setSkippedSteps((prev) => {
      const newSkipped = new Set(prev);
      newSkipped.add(stepId);

      setCompletedSteps((prevCompleted) => {
        const newCompleted = new Set(prevCompleted);
        newCompleted.delete(stepId); // Remove from completed if it was there
        saveProgress(newCompleted, newSkipped);
        return newCompleted;
      });

      return newSkipped;
    });
  };

  // Check if a step is completed
  const isStepCompleted = (stepId) => completedSteps.has(stepId);

  // Check if a step is skipped
  const isStepSkipped = (stepId) => skippedSteps.has(stepId);

  // Get overall progress percentage
  const getProgressPercentage = () => {
    const totalSteps = ONBOARDING_STEPS.length;
    const completedCount = completedSteps.size;
    return Math.round((completedCount / totalSteps) * 100);
  };

  // Get next step to complete
  const getNextStep = () => {
    for (const step of ONBOARDING_STEPS) {
      if (!completedSteps.has(step) && !skippedSteps.has(step)) {
        return step;
      }
    }
    return null; // All steps completed or skipped
  };

  // Reset all progress
  const resetProgress = () => {
    setCompletedSteps(new Set());
    setSkippedSteps(new Set());
    localStorage.removeItem(STORAGE_KEY);
  };

  // Get step status (completed, skipped, or pending)
  const getStepStatus = (stepId) => {
    if (completedSteps.has(stepId)) return "completed";
    if (skippedSteps.has(stepId)) return "skipped";
    return "pending";
  };

  return {
    completedSteps: Array.from(completedSteps),
    skippedSteps: Array.from(skippedSteps),
    completeStep,
    skipStep,
    isStepCompleted,
    isStepSkipped,
    getProgressPercentage,
    getNextStep,
    resetProgress,
    getStepStatus,
    totalSteps: ONBOARDING_STEPS.length,
  };
};
