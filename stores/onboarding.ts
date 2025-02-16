// stores/onboardingStore.ts
import { create } from "zustand";
import { calculateStressScore } from "@/app/(onboarding)/_lib/utils";
import {
  HadProfessionalHelpScore,
  MedicationsScore,
  MoodScore,
  PhysicalSymptomsScore,
  SleepQualityScore,
  StressLevelScore,
} from "@/app/(onboarding)/_lib/enums";

type OnboardingState = {
  mood: keyof typeof MoodScore | null;
  sleepQuality: keyof typeof SleepQualityScore | null;
  stressLevel: keyof typeof StressLevelScore | null;
  hadProfessionalHelp: keyof typeof HadProfessionalHelpScore | null;
  physicalSymptoms: keyof typeof PhysicalSymptomsScore | null;
  medications: keyof typeof MedicationsScore | null;
  stressScore: number | null;
  mentalState: string | null;
  setMood: (mood: keyof typeof MoodScore) => void;
  setSleepQuality: (quality: keyof typeof SleepQualityScore) => void;
  setHadProfessionalHelp: (help: keyof typeof HadProfessionalHelpScore) => void;
  setStressLevel: (level: keyof typeof StressLevelScore) => void;
  setPhysicalSymptoms: (symptoms: keyof typeof PhysicalSymptomsScore) => void;
  setMedications: (medications: keyof typeof MedicationsScore) => void;
  calculateAndSetStressScore: () => void;
  reset: () => void;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  mood: null,
  sleepQuality: null,
  stressLevel: null,
  hadProfessionalHelp: null,
  physicalSymptoms: null,
  medications: null,
  stressScore: null,
  mentalState: null,
  setMood: (mood) => set({ mood }),
  setSleepQuality: (sleepQuality) => set({ sleepQuality }),
  setHadProfessionalHelp: (hadProfessionalHelp) => set({ hadProfessionalHelp }),
  setStressLevel: (stressLevel) => set({ stressLevel }),
  setPhysicalSymptoms: (physicalSymptoms) => set({ physicalSymptoms }),
  setMedications: (medications) => set({ medications }),
  calculateAndSetStressScore: () => {},
  reset: () =>
    set({
      mood: null,
      sleepQuality: null,
      stressLevel: null,
      physicalSymptoms: null,
      medications: null,
      stressScore: null,
      mentalState: null,
    }),
}));
