import { Thought } from "./Thought.js";
import { render, screen } from "@testing-library/react";

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
