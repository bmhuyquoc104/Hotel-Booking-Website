import React from "react";
import AdminHeaderStyled from "./AdminHeader.styled";
import Flex from "@/components/containers/Flex/Flex";
import { useNavigate } from "react-router-dom";
import { TextHeading1, TextParagraph } from "@/components/Text/Text";
import Button from "@/components/Button/Button";

function AdminHeader({ name }) {
  const navigate = useNavigate();
  return (
    <AdminHeaderStyled>
      <TextHeading1
        fs="clamp(1.00rem, calc(0.87rem + 0.65vw), 1.38rem)"
        color="inherit"
        text={name}
      ></TextHeading1>
      <Flex ai="center" gap="1em">
        <TextParagraph
          fw="500"
          cursor="pointer"
          border="1px solid transparent"
          bg="black"
          text="Edit Hotel"
          color="var(--text_color)"
          onClick={() => navigate("/admin")}
        >
          Edit Hotel
        </TextParagraph>
        <TextParagraph
          fw="500"
          cursor="pointer"
          border="1px solid transparent"
          bg="black"
          text="Edit Room Price"
          color="var(--text_color)"
          onClick={() => navigate("/editRoomPrice")}
        ></TextParagraph>
        <Button
          border="1px solid transparent"
          br="3px"
          bg="black"
          color="white"
          padding="1.15em 1.75em"
          onClick={() => navigate("/")}
        >
          Log Out
        </Button>
      </Flex>
    </AdminHeaderStyled>
  );
}

export default AdminHeader;
