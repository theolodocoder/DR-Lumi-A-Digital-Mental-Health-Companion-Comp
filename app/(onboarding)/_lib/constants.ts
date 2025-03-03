import { MedicationsScore, StressLevelScore } from "./enums";

export const moodEmotes = {
  Happy: "😄",
  Sad: "😢",
  Meh: "😐",
  Angry: "😡",
  Overjoyed: "🤩",
  Anxious: "😨",
};

export const stressLevels = [
  {
    label: "1",
    value: "Low",
    meaning: "You are Not stressed out at all",
  },
  {
    label: "2",
    value: "Mild",
    meaning: "You are a little stressed out",
  },
  {
    label: "3",
    value: "Moderate",
    meaning: "You are Moderately Stressed out",
  },
  {
    label: "4",
    value: "High",
    meaning: "You are Highly Stressed",
  },
  {
    label: "5",
    value: "Extreme",
    meaning: "You are Extreme Stressed Out",
  },
];

export const medicationOptions = [
  {
    label: "Prescribed Medications",
    icon: "science",
    value: "Prescribed",
  },
  {
    label: "Over the Counter Supplements",
    icon: "local-pharmacy",
    value: "OverTheCounter",
  },
  {
    label: "I’m not taking any",
    icon: "remove-circle-outline",
    value: "None",
  },
  {
    label: "Prefer not to say",
    icon: "close",
    value: "PreferNotToSay",
  },
];

export const physicalSymptomsOptions = [
  {
    label: "None",
    value: "None",
  },
  {
    label: "Mild",
    value: "Mild",
  },
  {
    label: "Severe",
    value: "Severe",
  },
];

export const sleepQualityOptions = [
  { label: "Worst", hours: "<3 HOURS", value: 0 },
  { label: "Poor", hours: "3-4 HOURS", value: 1 },
  { label: "Fair", hours: "5 HOURS", value: 2 },
  { label: "Good", hours: "6-7 HOURS", value: 3 },
  { label: "Excellent", hours: "7-9 HOURS", value: 4 },
];

export const METRIC_WEIGHTS = {
  mood: 0.15,
  hadProfessionalHelp: 0.1,
  sleepQuality: 0.15,
  stressLevel: 0.15,
  physicalSymptoms: 0.1,
  medications: 0.05,
  sentiment: 0.3, // Increased weight for sentiment
};

export const HEALTH_RANGES = {
  CRITICAL: { min: 0, max: 20, label: "Critical", color: "#FF0000" },
  POOR: { min: 21, max: 40, label: "Poor", color: "#FF7043" },
  MODERATE: { min: 41, max: 60, label: "Moderate", color: "#FFA726" },
  GOOD: { min: 61, max: 80, label: "Good", color: "#66BB6A" },
  EXCELLENT: { min: 81, max: 100, label: "Excellent", color: "#43A047" },
};
