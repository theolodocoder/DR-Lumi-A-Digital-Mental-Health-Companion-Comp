// health.enums.ts
export enum MoodScore {
  Angry = 1, // 😡
  Anxious = 2, // 😰
  Sad = 3, // 😞
  Meh = 4, // 😐
  Happy = 5, //😊
  OverJoyed = 6, // 😄
}

export enum HadProfessionalHelpScore {
  No = 1,
  Yes = 3, // Seeking help improves health
}

export enum SleepQualityScore {
  Worst = 1, // <3 HOURS
  Poor = 2, // 3-4 HOURS
  Fair = 3, // 5 HOURS
  Good = 4, // 6-7 HOURS
  Excellent = 5, // 7-9 HOURS
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
  VeryPoor = "You're going through a tough time. Take a deep breath, and remember, brighter days are ahead. 💙",
  Poor = "It's okay to feel down sometimes. Be kind to yourself, and take it one step at a time. 🌿",
  Neutral = "You’re mentally stable. We’re redirecting you back to the home screen. Are you ready? 😊",
  Good = "You're in a good place! Keep up the positivity and continue doing what makes you happy. 🌞",
  Excellent = "You're thriving! Spread the good vibes and inspire those around you. 🚀",
}
