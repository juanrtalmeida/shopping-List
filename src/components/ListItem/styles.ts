import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) => `
  display: flex;
  background-color: #20212c;
  padding: 0.25rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  align-items: center;

  input {
    width: 25px;
    height: 25px;
    margin-right: 1rem;
  }

  label {
    color: #ccc;
    text-decoration: ${done ? "line-through" : "initial"};
  }
  
`
);
