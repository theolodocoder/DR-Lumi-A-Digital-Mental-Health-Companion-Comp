// stores/onboardingStore.ts
import { create } from "zustand";

export type OnboardingState = {
  mood: string | null;
  hadProfessionalHelp: boolean | null;
  sleepQuality: string | null;
  stressLevel: string | null;
  physicalSymptoms: string | null;
  medications: string | null;
  expressions: string | null;
  setMood: (mood: string) => void;
  setHadProfessionalHelp: (hadProfessionalHelp: boolean) => void;
  setSleepQuality: (quality: string) => void;
  setStressLevel: (level: string) => void;
  setPhysicalSymptoms: (symptoms: string) => void;
  setMedications: (medications: string) => void;
  setExpressions: (expressions: string) => void;
  reset: () => void;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  mood: null,
  hadProfessionalHelp: null,
  sleepQuality: null,
  stressLevel: null,
  physicalSymptoms: null,
  medications: null,
  expressions: null,
  setMood: (mood) => set({ mood }),
  setHadProfessionalHelp: (hadProfessionalHelp) => set({ hadProfessionalHelp }),
  setSleepQuality: (sleepQuality) => set({ sleepQuality }),
  setStressLevel: (stressLevel) => set({ stressLevel }),
  setPhysicalSymptoms: (physicalSymptoms) => set({ physicalSymptoms }),
  setMedications: (medications) => set({ medications }),
  setExpressions: (expressions) => set({ expressions }),
  reset: () =>
    set({
      mood: null,
      sleepQuality: null,
      hadProfessionalHelp: null,
      stressLevel: null,
      physicalSymptoms: null,
      medications: null,
      expressions: null,
    }),
}));
