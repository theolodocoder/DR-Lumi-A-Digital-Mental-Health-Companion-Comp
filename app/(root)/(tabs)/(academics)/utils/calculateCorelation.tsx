export const calculateCorrelations = (
  moods: any,
  studySessions: any,
  grades: any
) => {
  // Map data to daily aggregates
  interface DataMap {
    [date: string]: {
      mood?: number;
      count?: number;
      studyDuration?: number;
      productivity?: number;
    };
  }

  const dataMap: DataMap = {};

  // Aggregate mood data
  moods.forEach((mood: any) => {
    const date = mood.logged_at.split("T")[0];
    if (!dataMap[date]) dataMap[date] = { mood: 0, count: 0 };
    dataMap[date].mood += mood.rating;
    dataMap[date].count += 1;
  });

  // Aggregate study data
  studySessions.forEach((session) => {
    const date = session.created_at.split("T")[0];
    if (!dataMap[date])
      dataMap[date] = { studyDuration: 0, productivity: 0, count: 0 };
    dataMap[date].studyDuration += session.duration_minutes;
    dataMap[date].productivity += session.productivity_rating;
  });

  // Calculate averages
  Object.keys(dataMap).forEach((date) => {
    if (dataMap[date].mood) {
      dataMap[date].mood = dataMap[date].mood / dataMap[date].count;
    }
    if (dataMap[date].productivity) {
      dataMap[date].productivity =
        dataMap[date].productivity / dataMap[date].count;
    }
  });

  // Calculate correlation between mood and study productivity
  const moodProductivityCorrelation = calculatePearson(
    Object.values(dataMap).map((d) => d.mood),
    Object.values(dataMap).map((d) => d.productivity)
  );

  return {
    moodProductivityCorrelation,
    dataMap,
  };
};

// Pearson correlation coefficient
const calculatePearson = (x, y) => {
  const n = x.length;
  const sumX = x.reduce((a, b) => a + b, 0);
  const sumY = y.reduce((a, b) => a + b, 0);
  const sumXY = x.reduce((a, b, i) => a + b * y[i], 0);
  const sumX2 = x.reduce((a, b) => a + b * b, 0);
  const sumY2 = y.reduce((a, b) => a + b * b, 0);

  const numerator = sumXY - (sumX * sumY) / n;
  const denominator = Math.sqrt(
    (sumX2 - (sumX * sumX) / n) * (sumY2 - (sumY * sumY) / n)
  );

  return denominator === 0 ? 0 : numerator / denominator;
};
