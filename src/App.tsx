import { useState } from "react";
import { Item } from "./types/Item";
import * as Styled from "./App.styles";
import ListItem from "./components/ListItem";
import InputItem from "./components/InputItem";

export default function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Bread", done: false },
    { id: 2, name: "Cake (By the ocean)", done: true },
  ]);

  const handleAddItem = (taskName: string) => {
    const newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };
  return (
    <Styled.Container>
      <Styled.CenterDiv>
        <Styled.Header> Shopping List</Styled.Header>
        {/*Input Area*/}
        <InputItem onEnter={handleAddItem} />
        {/* List Showing Area */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Styled.CenterDiv>
    </Styled.Container>
  );
}
