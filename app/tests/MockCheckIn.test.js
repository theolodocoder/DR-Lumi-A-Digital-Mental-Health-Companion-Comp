import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MoodCheckIn from "./MoodCheckIn";

describe("MoodCheckIn Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<MoodCheckIn />);
    expect(getByText("How are you feeling today?")).toBeTruthy();
  });

  it("calls onLogMood when a mood is selected", () => {
    const onLogMood = jest.fn();
    const { getByTestId } = render(<MoodCheckIn onLogMood={onLogMood} />);

    fireEvent.press(getByTestId("mood-4"));
    expect(onLogMood).toHaveBeenCalledWith(4);
  });
});
