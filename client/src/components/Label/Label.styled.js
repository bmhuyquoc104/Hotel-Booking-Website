import styled from "styled-components";

const LabelStyled = styled.label`
  background-color: ${({ bg }) => bg || "transparent"};
  cursor: pointer;
  outline: none;
  font-weight: ${({ fw }) => fw};
  font-size: ${({ fs }) => fs};
  color: ${({ color }) => color || "white"};
  &:hover {
    color: ${({ isHover }) => (isHover ? "var(--primary_color)" : null)};
  }
`;

export default LabelStyled;
