import { useOnboardingStore } from "@/stores/onboarding";
import Sentiment from "sentiment";

const analyzeSentiment = (text: string) => {
  const sentiment = new Sentiment();
  const result = sentiment.analyze(text);

  return result.comparative;
};

export { analyzeSentiment };
