import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = require("./database.json");

const emojis = Object.keys(emojiDictionary);

const appStyle = {
  maxWidth: "9900px",
  margin: "auto",
  backgroundColor: "#d50eeb"
};

const inputstyle = {
  display: "block",
  margin: "auto",
  padding: "1rem",
  width: "70%",
  placeholder: "Enter any Symbol",
  backgroundColor: "#e3a4eb",
  border: "dotted",
  borderRadius: "2.5rem",
  fontSize: "1rem"
};

const outputStyle = {
  display: "block",
  margin: "auto",
  padding: "1rem",
  width: "70%",
  backgroundColor: "#80008f",
  border: "solid",
  borderRadius: "0.5rem",
  color: "white"
};

const emojiStyle = {
  display: "inline",
  textAlign: "left",
  fontSize: "1.5rem",
  margin: "0.5rem",
  padding: "0.5rem",
  lineHeight: "3rem",
  cursor: "pointer"
};

const selectedEmojiStyle = {
  display: "inline",
  textAlign: "left",
  fontSize: "1.5rem",
  margin: "0.5rem",
  padding: "0.5rem",
  lineHeight: "3rem",
  cursor: "pointer",
  backgroundColor: "#80008f",
  borderRadius: "2.5rem"
};

export default function App() {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [meaning, setMeaning] = useState("");
  const [selctedIdx, setSelectedIdx] = useState(-1);
  const [error, setError] = useState(false);

  function clickHandler(emoji, idx) {
    setSelectedIdx(idx);
    setSelectedEmoji(emoji);
    setMeaning(emojiDictionary[emoji]);
    setError(false);
  }

  function inputHandler(event) {
    var inputEmoji = event.target.value;
    if (inputEmoji === "") {
      setError(false);
      setSelectedIdx(-1);
    } else if (emojis.includes(inputEmoji)) {
      setSelectedIdx(emojis.indexof(inputEmoji));
      setSelectedEmoji(inputEmoji);
      setMeaning(emojiDictionary[inputEmoji]);
      setError(false);
    } else {
      setError(true);
      setSelectedIdx(-1);
    }
  }
  return (
    <div className="App" style={appStyle}>
      <h1>!!Animal Emoji Finder!!</h1>
      <br />
      <input
        type="text"
        style={inputstyle}
        placeholder="Enter any Symbol"
        onChange={inputHandler}
      />
      <br />
      <h2>Result</h2>
      <h2 style={outputStyle}>
        {selectedEmoji} {meaning}
      </h2>
      {error ? (
        <>
          <br />
          <p style={{ color: "red" }}>
            We are sorry, This symbol is not in our database!
          </p>
        </>
      ) : null}
      <br />
      <p>ELSE Select any one from the below list</p>
      {emojis.map((emoji, idx) => {
        return (
          <p
            style={idx === selctedIdx ? selectedEmojiStyle : emojiStyle}
            onClick={() => clickHandler(emoji, idx)}
          >
            {emoji}
          </p>
        );
      })}
    </div>
  );
}
