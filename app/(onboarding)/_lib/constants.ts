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
