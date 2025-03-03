import { SentimentAnalysisResult } from "@/app/(onboarding)/_lib/types";

export class SentimentAnalyzer {
  private static readonly NEGATIVE_KEYWORDS = [
    "anxiety",
    "depression",
    "stress",
    "worried",
    "tired",
    "exhausted",
    "pain",
    "struggle",
    "difficult",
    "overwhelmed",
    "angry",
    "sad",
    "fear",
    "hate",
    "lonely",
    "upset",
    "frustrated",
    "disappointed",
    "miserable",
    "hopeless",
    "nervous",
    "guilty",
    "ashamed",
    "bored",
    "jealous",
    "hurt",
    "grief",
    "regret",
    "resentment",
    "sorrow",
    "trouble",
    "unhappy",
    "pessimistic",
    "discouraged",
    "distressed",
    "insecure",
    "irritated",
    "offended",
    "rejected",
    "tense",
    "vulnerable",
    "worried",
    "worthless",
    "afraid",
    "annoyed",
    "betrayed",
    "confused",
    "defeated",
    "desperate",
    "devastated",
    "embarrassed",
    "fearful",
    "helpless",
    "humiliated",
    "insulted",
    "intimidated",
    "isolated",
    "lost",
    "melancholy",
    "overwhelmed",
    "panicked",
    "pathetic",
    "pressured",
    "regretful",
    "remorseful",
    "shocked",
    "stressed",
    "terrified",
    "troubled",
    "uncomfortable",
    "unloved",
    "unwanted",
    "upset",
    "useless",
    "victimized",
    "vulnerable",
    "weak",
    "worried",
    "wounded",
    "wronged",
  ];
  private static readonly POSITIVE_KEYWORDS = [
    "happy",
    "energetic",
    "motivated",
    "peaceful",
    "relaxed",
    "confident",
    "strong",
    "optimistic",
    "grateful",
    "improving",
    "joyful",
    "excited",
    "content",
    "satisfied",
    "cheerful",
    "hopeful",
    "enthusiastic",
    "inspired",
    "loved",
    "blessed",
    "amazing",
    "awesome",
    "fantastic",
    "great",
    "wonderful",
    "brilliant",
    "delighted",
    "ecstatic",
    "elated",
    "euphoric",
    "glad",
    "jubilant",
    "lively",
    "merry",
    "overjoyed",
    "pleased",
    "radiant",
    "thrilled",
    "upbeat",
    "vibrant",
    "admirable",
    "adored",
    "appreciated",
    "blissful",
    "bubbly",
    "buoyant",
    "charming",
    "chipper",
    "confident",
    "dazzling",
    "effervescent",
    "enlightened",
    "exhilarated",
    "fabulous",
    "fortunate",
    "gleeful",
    "gracious",
    "harmonious",
    "incredible",
    "jovial",
    "kind",
    "lovable",
    "magnificent",
    "marvelous",
    "motivated",
    "optimistic",
    "passionate",
    "playful",
    "positive",
    "proud",
    "refreshed",
    "rejuvenated",
    "resilient",
    "spirited",
    "splendid",
    "stunning",
    "successful",
    "supportive",
    "terrific",
    "tranquil",
    "trusting",
    "uplifted",
    "vital",
    "vivacious",
    "warm",
    "welcoming",
    "wholesome",
    "wondrous",
    "zestful",
    "zealous",
  ];
  static analyzeSentiment(text: string): SentimentAnalysisResult {
    const words = text.toLowerCase().split(/\s+/);
    let score = 0;
    let magnitude = 0;
    const foundKeywords: string[] = [];

    // Calculate base sentiment score
    words.forEach((word, index) => {
      if (this.POSITIVE_KEYWORDS.includes(word)) {
        score += 1;
        magnitude += 1;
        foundKeywords.push(word);
      }
      if (this.NEGATIVE_KEYWORDS.includes(word)) {
        score -= 1;
        magnitude += 1;
        foundKeywords.push(word);
      }

      // Check for context like "not good"
      if (word === "not" && index < words.length - 1) {
        const nextWord = words[index + 1];
        if (this.POSITIVE_KEYWORDS.includes(nextWord)) {
          score -= 2; // Invert the positive word score
          magnitude += 1;
          foundKeywords.push(`not ${nextWord}`);
        }
        if (this.NEGATIVE_KEYWORDS.includes(nextWord)) {
          score += 2; // Invert the negative word score
          magnitude += 1;
          foundKeywords.push(`not ${nextWord}`);
        }
      }
    });

    // Normalize score to range [-5, 5]
    const normalizedScore = Math.max(-5, Math.min(5, score));

    return {
      score: normalizedScore,
      magnitude: magnitude,
      keywords: foundKeywords,
    };
  }
}
