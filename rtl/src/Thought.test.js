import { Thought } from "./Thought.js";
import { render, screen } from "@testing-library/react";
import App from "./App.js";

describe("Testing Thought Component", () => {
  test("Should test Thought component", () => {
    render(
      <Thought
        thought={{
          text: "Testing thoughts",
        }}
        removeThought={() => {}}
      />
    );
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});

describe("Testing App component", () => {
  test("Should render Passing Thoughts text", () => {
    render(<App />);

    const header = screen.getByText("Passing Thoughts");
    expect(header).toHaveTextContent("Passing Thoughts");
  });
});
