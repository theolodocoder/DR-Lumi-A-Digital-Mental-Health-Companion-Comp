import {
  HadProfessionalHelpScore,
  MedicationsScore,
  MoodScore,
  PhysicalSymptomsScore,
  SleepQualityScore,
  StressLevelScore,
} from "./enums";

export type SentimentAnalysisResult = {
  score: number;
  magnitude: number;
  keywords: string[];
};

export type HealthMetrics = {
  mood: keyof typeof MoodScore;
  hadProfessionalHelp: keyof typeof HadProfessionalHelpScore;
  sleepQuality: keyof typeof SleepQualityScore;
  stressLevel: keyof typeof StressLevelScore;
  physicalSymptoms: keyof typeof PhysicalSymptomsScore;
  medications: keyof typeof MedicationsScore;
  expression: string;
};
