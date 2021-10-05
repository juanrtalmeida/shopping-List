import { useState } from "react";
import * as Styled from "./styles";
import { Item } from "../../types/Item";
type ListItemProps = {
  item: Item;
};
export default function ListItem({ item }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <Styled.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      ></input>
      <label>{item.name}</label>
    </Styled.Container>
  );
}
