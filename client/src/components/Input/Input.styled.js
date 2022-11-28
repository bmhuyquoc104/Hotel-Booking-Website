import styled from "styled-components";

const InputStyled = styled.input`
  color: ${({ color }) => color || "black"};
  width: ${({ width }) => width || "auto"};
  text-align: ${({ ta }) => ta || "left"};
  border-radius: ${({ br }) => br || "4px"};
  min-height: 22px;
  background-color: ${({ bg }) => bg || "transparent"};
  padding: ${({ p }) => p || 0};
  margin: ${({m}) => m || 0};
  ::placeholder {
    color: var(--text_color);
    opacity: 0.3;
  }
  outline: none;
  border: none;
`;

export default InputStyled;
