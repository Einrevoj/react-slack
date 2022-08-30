import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../Firebase";
import firebase from "firebase/compat/app";

export default function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Jovernie Cano",
      userImage:
        "https://cdn.vox-cdn.com/thumbor/SZwKRTpONbDDFLCHvBleq8OspmY=/0x0:1920x1080/1200x800/filters:focal(760x348:1066x654)/cdn.vox-cdn.com/uploads/chorus_image/image/65224808/chrome_2019_09_11_12_39_56.0.jpg",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <button hidden type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </ChatInputContainer>
  );
}

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 75%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`;