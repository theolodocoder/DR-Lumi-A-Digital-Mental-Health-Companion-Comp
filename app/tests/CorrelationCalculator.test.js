import { calculatePearson } from "./correlationCalculator";

describe("calculatePearson", () => {
  it("returns 1 for perfect positive correlation", () => {
    const x = [1, 2, 3];
    const y = [1, 2, 3];
    expect(calculatePearson(x, y)).toBeCloseTo(1, 2);
  });

  it("returns -1 for perfect negative correlation", () => {
    const x = [1, 2, 3];
    const y = [3, 2, 1];
    expect(calculatePearson(x, y)).toBeCloseTo(-1, 2);
  });
});
