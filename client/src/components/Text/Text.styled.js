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
  text-transform: ${({ transform }) => transform};
  width: ${({ width }) => width || "auto"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || 0};
  line-height: ${({ lineHeight }) => lineHeight};
  cursor: ${({ cursor }) => cursor};
`;
const StyledHeading1 = styled.h1`
  ${GeneralStyled}
  font-family:var(--logo_font);
  width: 20ch;
  text-align: center;
  line-height: 1.5rem;
  margin-left: -15%;
  cursor:pointer;
  @media (max-width: 950px) {
    margin-left: 0em;
  }
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
  :hover {
    color: ${({ needHover }) =>
      needHover ? "var(--primary_color)" : ""};
  }
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
  StyledSpan,
};
