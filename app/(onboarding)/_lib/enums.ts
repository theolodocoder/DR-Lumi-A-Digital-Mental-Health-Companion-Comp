// health.enums.ts
export enum MoodScore {
  Angry = 1,
  Anxious = 2,
  Sad = 3,
  Meh = 4,
  Happy = 5,
  Overjoyed = 6,
}

export enum HadProfessionalHelpScore {
  No = 1,
  Yes = 3,
}

export enum SleepQualityScore {
  Worst = 1,
  Poor = 2,
  Fair = 3,
  Good = 4,
  Excellent = 5,
}

export enum StressLevelScore {
  Extreme = 1,
  High = 2,
  Moderate = 3,
  Mild = 4,
  Low = 5,
}

export enum PhysicalSymptomsScore {
  Severe = 1,
  Mild = 3,
  None = 5,
}

export enum MedicationsScore {
  Prescribed = 1,
  OverTheCounter = 3,
  PreferNotToSay = 4,
  None = 5,
}

export enum PhysicalSymptomsText {
  None = "No physical pain at all.",
  Mild = "Yes,But just a bit",
  Severe = "Yes, Very Painful.",
}

export enum MeidcationText {
  Prescribed = "Prescribed",
  OverTheCounter = "Over The Counter",
  None = "None",
  PreferNotToSay = "Prefer Not To Say",
}

export enum MoodMessage {
  VeryPoor = "You're not alone in this. Small steps forward matter, and support is available when you need it. 💜",
  Poor = "It's okay to have tough days. Be gentle with yourself and take one moment at a time. 🌱",
  Neutral = "You're finding your balance. Notice what helps you feel grounded today. 🌿",
  Good = "You're doing great! Keep nurturing what brings you joy and peace. ✨",
  Excellent = "You're thriving! Your journey can inspire others - keep shining bright! 🌟",
}
