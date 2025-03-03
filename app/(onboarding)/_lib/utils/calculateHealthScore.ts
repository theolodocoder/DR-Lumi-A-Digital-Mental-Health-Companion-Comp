import { SentimentAnalyzer } from "@/utils/sentiment";
import { HEALTH_RANGES, METRIC_WEIGHTS } from "../constants";
import {
  HadProfessionalHelpScore,
  MedicationsScore,
  MoodScore,
  PhysicalSymptomsScore,
  SleepQualityScore,
  StressLevelScore,
} from "../enums";
import { HealthMetrics, SentimentAnalysisResult } from "../types";

export class HealthScoreCalculator {
  private static normalize(value: number, min: number, max: number): number {
    return ((value - min) / (max - min)) * 100;
  }

  private static calculateMetricScore(metrics: HealthMetrics): number {
    const scores = {
      mood: this.normalize(MoodScore[metrics.mood], 1, 6),
      hadProfessionalHelp: this.normalize(
        HadProfessionalHelpScore[metrics.hadProfessionalHelp],
        1,
        3
      ),
      sleepQuality: this.normalize(
        SleepQualityScore[metrics.sleepQuality],
        1,
        5
      ),
      stressLevel: this.normalize(StressLevelScore[metrics.stressLevel], 1, 5),
      physicalSymptoms: this.normalize(
        PhysicalSymptomsScore[metrics.physicalSymptoms],
        1,
        5
      ),
      medications: this.normalize(MedicationsScore[metrics.medications], 1, 5),
    };

    return Object.entries(scores).reduce((total, [metric, score]) => {
      return total + score * METRIC_WEIGHTS[metric as keyof typeof scores];
    }, 0);
  }

  static calculateHealthScore(metrics: HealthMetrics): {
    score: number;
    sentiment: SentimentAnalysisResult;
    breakdown: Record<string, number>;
  } {
    // Analyze sentiment from expression
    const sentiment = SentimentAnalyzer.analyzeSentiment(metrics.expression);

    // Calculate base metric score
    const metricScore = this.calculateMetricScore(metrics);

    // Calculate sentiment score (normalized to 0-100 range)
    const sentimentScore =
      ((sentiment.score + 5) / 10) * 100 * METRIC_WEIGHTS.sentiment;

    // Calculate final score
    const totalScore = Math.round(metricScore + sentimentScore);

    // Prepare score breakdown
    const breakdown = {
      metricScore: metricScore,
      sentimentScore: sentimentScore,
      sentimentMagnitude: sentiment.magnitude,
      keywordsFound: sentiment.keywords.length,
    };

    console.log({
      score: Math.max(0, Math.min(100, totalScore)),
      sentiment,
      breakdown,
    });

    return {
      score: Math.max(0, Math.min(100, totalScore)),
      sentiment,
      breakdown,
    };
  }

  static getHealthRange(score: number) {
    return (
      Object.values(HEALTH_RANGES).find(
        (range) => score >= range.min && score <= range.max
      ) || HEALTH_RANGES.CRITICAL
    );
  }
}
