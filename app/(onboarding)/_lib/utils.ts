import {
  MoodScore,
  HadProfessionalHelpScore,
  SleepQualityScore,
  StressLevelScore,
  PhysicalSymptomsScore,
  MedicationsScore,
} from "./enums";

type OnboardingData = {
  mood: keyof typeof MoodScore;
  hadProfessionalHelp: keyof typeof HadProfessionalHelpScore;
  sleepQuality: keyof typeof SleepQualityScore;
  stressLevel: keyof typeof StressLevelScore;
  physicalSymptoms: keyof typeof PhysicalSymptomsScore;
  medications: keyof typeof MedicationsScore;
};

export const calculateStressScore = (data: OnboardingData): number => {
  const moodScore = MoodScore[data.mood];
  const professionalHelpScore =
    HadProfessionalHelpScore[data.hadProfessionalHelp];
  const sleepQualityScore = SleepQualityScore[data.sleepQuality];
  const stressLevelScore = StressLevelScore[data.stressLevel];
  const physicalSymptomsScore = PhysicalSymptomsScore[data.physicalSymptoms];
  const medicationsScore = MedicationsScore[data.medications];

  const totalScore =
    moodScore +
    professionalHelpScore +
    sleepQualityScore +
    stressLevelScore +
    physicalSymptomsScore +
    medicationsScore;

  return totalScore;
};
