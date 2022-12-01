import {
  StyledSpan,
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledParagraph,
} from "@/components/Text/Text.styled";
import { Link, animateScroll as scroll } from "react-scroll";

function TextHeading3({ children, text, ...props }) {
  let generalPropsList = {
    ...props,
  };
  return (
    <StyledHeading3 {...generalPropsList}>
      {text}
      {children}
    </StyledHeading3>
  );
}

function TextHeading2({ onClick, children, text, ...props }) {
  let generalPropsList = {
    ...props,
  };
  return (
    <StyledHeading2 onClick = {onClick} {...generalPropsList}>
      {text} {children}
    </StyledHeading2>
  );
}

function TextHeading1({ children, text, ...props }) {
  let generalPropsList = {
    ...props,
  };
  return (
    <StyledHeading1 onClick={() => scroll.scrollToTop()} {...generalPropsList}>
      {text} {children}
    </StyledHeading1>
  );
}

function TextHeading4({ children, text, ...props }) {
  let generalPropsList = {
    ...props,
  };
  return (
    <StyledHeading4 {...generalPropsList}>
      {text} {children}
    </StyledHeading4>
  );
}

function TextSpan({ children, text, ...props }) {
  let generalPropsList = {
    ...props,
  };
  return (
    <StyledSpan {...generalPropsList}>
      {text} {children}
    </StyledSpan>
  );
}

function TextParagraph({ text, ...props }) {
  let generalPropsList = {
    ...props,
  };
  return <StyledParagraph {...generalPropsList}>{text}</StyledParagraph>;
}

export {
  TextHeading1,
  TextHeading3,
  TextHeading4,
  TextSpan,
  TextHeading2,
  TextParagraph,
};
