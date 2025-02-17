// stores/onboardingStore.ts
import { create } from "zustand";
import {
  HadProfessionalHelpScore,
  MedicationsScore,
  MoodScore,
  PhysicalSymptomsScore,
  SleepQualityScore,
  StressLevelScore,
} from "@/app/(onboarding)/_lib/enums";
import { calculateHealthScore } from "@/app/(onboarding)/_lib/utils/calculateHealthScore";

type OnboardingState = {
  mood: keyof typeof MoodScore | null;
  sleepQuality: keyof typeof SleepQualityScore | null;
  stressLevel: keyof typeof StressLevelScore | null;
  hadProfessionalHelp: keyof typeof HadProfessionalHelpScore | null;
  physicalSymptoms: keyof typeof PhysicalSymptomsScore | null;
  medications: keyof typeof MedicationsScore | null;
  expression: string;
  sentimentScore: number | null;
  healthScore: number | null;
  setMood: (mood: keyof typeof MoodScore) => void;
  setSleepQuality: (quality: keyof typeof SleepQualityScore) => void;
  setHadProfessionalHelp: (help: keyof typeof HadProfessionalHelpScore) => void;
  setStressLevel: (level: keyof typeof StressLevelScore) => void;
  setPhysicalSymptoms: (symptoms: keyof typeof PhysicalSymptomsScore) => void;
  setMedications: (medications: keyof typeof MedicationsScore) => void;
  setExpression: (expression: string) => void;
  setSentimentScore: (score: number) => void;
  calculateAndSetHealthScore: () => void;
  reset: () => void;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  mood: null,
  sleepQuality: null,
  stressLevel: null,
  hadProfessionalHelp: null,
  physicalSymptoms: null,
  medications: null,
  sentimentScore: null,
  expression: "",
  healthScore: null,
  setMood: (mood) => set({ mood }),
  setSleepQuality: (sleepQuality) => set({ sleepQuality }),
  setHadProfessionalHelp: (hadProfessionalHelp) => set({ hadProfessionalHelp }),
  setStressLevel: (stressLevel) => set({ stressLevel }),
  setPhysicalSymptoms: (physicalSymptoms) => set({ physicalSymptoms }),
  setExpression: (expression) => set({ expression }),
  setMedications: (medications) => set({ medications }),
  setSentimentScore: (sentimentScore) => set({ sentimentScore }),
  calculateAndSetHealthScore: () =>
    set((state) => {
      if (
        state.mood &&
        state.hadProfessionalHelp &&
        state.sleepQuality &&
        state.stressLevel &&
        state.physicalSymptoms &&
        state.medications &&
        state.sentimentScore !== null
      ) {
        const { score } = calculateHealthScore({
          mood: state.mood,
          hadProfessionalHelp: state.hadProfessionalHelp,
          sleepQuality: state.sleepQuality,
          stressLevel: state.stressLevel,
          physicalSymptoms: state.physicalSymptoms,
          medications: state.medications,
          sentimentScore: state.sentimentScore,
        });

        return {
          healthScore: score,
        };
      }
      return {};
    }),

  reset: () =>
    set({
      mood: null,
      sleepQuality: null,
      stressLevel: null,
      physicalSymptoms: null,
      medications: null,
      hadProfessionalHelp: null,
      sentimentScore: null,
      expression: "",
    }),
}));
