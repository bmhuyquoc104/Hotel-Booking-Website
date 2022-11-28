import styled, { css } from "styled-components";

const GeneralStyled = css`
  line-height: ${({ lh }) => lh || 1};
  font-weight: ${({ fw }) => fw || 300};
  font-size: ${({ fs }) => fs || "1em"};
  color: ${({ color }) => color || "black"};
  text-decoration: ${({ textDecoration }) => textDecoration || "none"};
  text-align: ${({ ta }) => ta || "left"};
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
`;
const StyledHeading1 = styled.h1`
  ${GeneralStyled}
`;
const StyledHeading2 = styled.h2`
  ${GeneralStyled}
`;
const StyledHeading3 = styled.h3`
  ${GeneralStyled}
`;
const StyledHeading4 = styled.h3`
  ${GeneralStyled}
`;
const StyledParagraph = styled.p`
  ${GeneralStyled}
`;
const StyledSpan = styled.span`
  ${GeneralStyled}
`;

export {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledParagraph,
  StyledSpan
};
