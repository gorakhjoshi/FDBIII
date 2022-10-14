import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utils/utils";

export function AddThoughtForm(props) {
  const [text, setText] = useState("");
  const handleTextChange = ({ target }) => {
    const { value } = target;
    setText(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length) {
      setTimeout(() => {
        const thought = {
          id: generateId(),
          text: text,
          expiresAt: getNewExpirationTime(),
        };
        props.addThought(thought);
        setText("");
      }, 1000);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
        role="input"
      />
      <input type="submit" value="Add" role="submit" />
    </form>
  );
}
