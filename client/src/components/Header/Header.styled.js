import styled from "styled-components";
import { motion } from "framer-motion";
const HeaderStyled = styled(motion.header)`
  width: 100%;
  position: relative;
  & > :last-child {
    position: absolute;
    top: 33vh;
    right: 12vh;
  }
  .info {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    position: fixed;
    z-index:2;
    align-items: center;
    color: var(--text_color2);
    top: 0;
    justify-content: space-between;
    .book {
      padding:1.15em 1.75em;

    }
    & > button {
      color: var(--text_color);
      background-color: #ffffff;
      margin-right: 3em;
      margin-top: 1.5em;
    }

    .hamburger {
      padding: 1.5em 0 0 3em;

      display: flex;
      cursor: pointer;
      flex-direction: column;
      font-size: clamp(0.69rem, calc(0.54rem + 0.3vw), 0.81rem);
      color: inherit;
      gap: 1em;
      .phone,
      .address {
        display: flex;
        align-items: center;
        gap: 1em;
      }
    }
    & > :last-child {
      width: 100%;
    }
    & > h1 {
      margin-top: 0.75em;
    }
    .mobile-hamburger {
      display: none;
      font-size: 30px;
      cursor: pointer;
    }
    .decoration {
      width: 100%;
      margin: 1em 0 0.75em 0;
      border-top: 1px solid white;
    }
    nav {
      width: 100%;
      display: flex;
      margin-bottom: 1em;
      align-items: center;
      justify-content: center;
      gap: 1em;
      text-transform: uppercase;
      font-size: clamp(0.88rem, calc(0.73rem + 0.3vw), 1rem);
    }
    &.active,
    &:hover {
      background-color: var(--header_bg_color);
      box-shadow: 0px 5px 10px 0px rgba(255, 255, 255, 0.5);
      color: var(--text_color);
      .decoration {
        border-top: 1px solid black;
      }
      & > button {
        color: var(--text_color2);
        margin-right: 3em;
        background-color: #000000;
      }
    }
  }
  @media (max-width: 768px) {
    & > :last-child {
      display: none;
    }
    .info {
      & > button {
        padding: 0.5em 0.75em;
        margin-right: 0.75em;
      }
      &.active,
      &:hover {
        & > button {
          margin-right: 0.75em;
        }
      }
      .book {
        width: 5.75ch;
        white-space: nowrap;
        overflow: hidden;
        padding:0;

        text-align: center;
      }
      .decoration {
        margin-bottom: 0;
      }
      nav,
      .hamburger {
        display: none;
      }
      .mobile-hamburger {
        display: flex;
        padding: 1em 0 0 0.5em;
      }
    }
  }
`;

export default HeaderStyled;
