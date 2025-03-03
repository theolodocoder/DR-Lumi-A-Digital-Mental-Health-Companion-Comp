import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../screens/HomeScreen";

describe("HomeScreen", () => {
  it("navigates to Mood screen when button is pressed", () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<HomeScreen navigation={navigation} />);

    fireEvent.press(getByText("Log Mood"));
    expect(navigation.navigate).toHaveBeenCalledWith("Mood");
  });
});
