import { Thought } from "../Thought.js";
import { render, screen } from "@testing-library/react";
import App from "../App.js";

import userEvent from "@testing-library/user-event";

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

test("Posting Oreos are delicious", () => {
  render(<App />);
  const emptyThought = screen.queryByText("Oreos are delicious");
  expect(emptyThought).toBeNull();
});

test("Should display posted thought", async () => {
  render(<App />);

  const input = screen.getByRole("input");
  const addButton = screen.getByRole("submit");

  userEvent.type(input, "Oreos are delicious");
  userEvent.click(addButton);

  const header = await screen.findByText("Oreos are delicious");
  // Bug

  screen.debug();

  expect(header).toBeInTheDocument();
});
