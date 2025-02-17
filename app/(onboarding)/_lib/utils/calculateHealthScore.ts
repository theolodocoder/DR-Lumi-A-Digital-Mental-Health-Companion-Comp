import {
  MoodScore,
  HadProfessionalHelpScore,
  SleepQualityScore,
  StressLevelScore,
  PhysicalSymptomsScore,
  MedicationsScore,
} from "../enums";

type OnboardingData = {
  mood: keyof typeof MoodScore;
  hadProfessionalHelp: keyof typeof HadProfessionalHelpScore;
  sleepQuality: keyof typeof SleepQualityScore;
  stressLevel: keyof typeof StressLevelScore;
  physicalSymptoms: keyof typeof PhysicalSymptomsScore;
  medications: keyof typeof MedicationsScore;
  sentimentScore: number; // Sentiment "comparative" score (-5 to 5)
};

export const calculateHealthScore = (
  data: OnboardingData
): {
  score: number;
} => {
  // Sentiment has 40% weight, others 60% combined
  const SENTIMENT_WEIGHT = 0.4;

  const normalize = (value: number, min: number, max: number) =>
    ((value - min) / (max - min)) * 100;

  // Base factors (60% weight)
  const baseScore =
    ((normalize(MoodScore[data.mood], 1, 6) +
      normalize(HadProfessionalHelpScore[data.hadProfessionalHelp], 1, 3) +
      normalize(SleepQualityScore[data.sleepQuality], 1, 5) +
      normalize(StressLevelScore[data.stressLevel], 1, 5) +
      normalize(PhysicalSymptomsScore[data.physicalSymptoms], 1, 5) +
      normalize(MedicationsScore[data.medications], 1, 5)) /
      6) *
    0.6;

  // Sentiment (40% weight)
  const sentiment = Math.max(-5, Math.min(data.sentimentScore, 5));
  const sentimentScore = ((sentiment + 5) / 10) * 100 * 0.4;

  const totalScore = baseScore + sentimentScore;
  const roundedScore = Math.round(totalScore);

  return {
    score: roundedScore,
  };
};
