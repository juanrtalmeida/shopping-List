import * as Styled from "./styles";
import { useState, KeyboardEvent } from "react";

type InputItemProps = {
  onEnter: (taskName: string) => void;
};

export default function InputItem({ onEnter }: InputItemProps) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };
  return (
    <Styled.Container>
      <div className="image">➕</div>
      <input
        type="text"
        value={inputText}
        placeholder="Whats the item on the list to buy"
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleSubmit}
      ></input>
    </Styled.Container>
  );
}
