import React from "react";
import { render } from "@testing-library/react-native";
import StargazerList from "../src/components/StargazerList";
import UserStar from "../src/components/userStar";

describe("StargazerList", () => {
  
  it("displays a message when the list is empty", () => {
    const { getByText } = render(<StargazerList users={[]} />);
    const message = getByText("I could not find any results😣");
    expect(message).toBeTruthy();
  });

});


