import { MoodMessage } from "../enums";

export const getMoodMessage = (
  score: number
): { mood: string; icon: string; color: string; message: string } => {
  const MOOD_DATA = [
    {
      range: [0, 20],
      mood: "Very Poor",
      icon: "sentiment-very-dissatisfied",
      color: "#673AB7",
      message: MoodMessage.VeryPoor,
    },
    {
      range: [21, 40],
      mood: "Poor",
      icon: "sentiment-dissatisfied",
      color: "#FF7043",
      message: MoodMessage.Poor,
    },
    {
      range: [41, 60],
      mood: "Neutral",
      icon: "sentiment-neutral",
      color: "#8D6E63",
      message: MoodMessage.Neutral,
    },
    {
      range: [61, 80],
      mood: "Good",
      icon: "sentiment-satisfied",
      color: "#FFEB3B",
      message: MoodMessage.Good,
    },
    {
      range: [81, 100],
      mood: "Excellent",
      icon: "sentiment-very-satisfied",
      color: "#7CB342",
      message: MoodMessage.Excellent,
    },
  ];

  const moodData = MOOD_DATA.find(
    ({ range }) => score >= range[0] && score <= range[1]
  );

  return (
    moodData ?? {
      mood: "Unknown",
      icon: "help-outline",
      color: "#BDBDBD",
      message: "We couldn't determine your mood. Try again!",
    }
  );
};
