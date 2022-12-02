import styled from "styled-components";

const NotFoundStyled = styled.div`
  display: flex;
  background-color:#f5f5f5;
  align-items: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  gap: 5em;
  .text {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
  img {
    object-fit: contain;
    width: 100%;
  }
  h1 {
    font-size: 4rem;
    font-weight: bold;
    letter-spacing: 15px;
    color: var(--text_color);
  }
  .message {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text_color);
  }
  .message2 {
    font-size: 1rem;
    color: var(--text_color);
    width: 90%;
    line-height: 1.75;
    letter-spacing: 2px;
    font-weight: revert;
  }
  button {
    display: flex;
    justify-content: center;
    border-radius: 20px;
    text-transform: uppercase;
    border: none;
    width: 30%;
    cursor:pointer;
    padding: 1em;
    color: white;
    background-color: black;
  }

  @media (max-width: 1100px) {
    gap: 2em;
    img {
      width: 60%;
    }
    .message2 {
      width: 100%;
      letter-spacing: 1px;
    }
    button {
      width: 45%;
    }
  }

  @media (max-width: 900px) {
    margin-top: 1em;
    flex-direction: column;
    .text {
      align-items: center;
      gap: 1em;
    }
    .message2 {
      letter-spacing: revert;
      text-align: center;
      width: 50%;
    }
    img {
      width: 70%;
    }
  }
  @media (max-width: 576px) {
    .message2 {
      width: 80%;
    }
    button {
      width: 60%;
    }
  }
`;

export default NotFoundStyled;
