import React from "react";
import AdminHeaderStyled from "./AdminHeader.styled";
import {useNavigate} from "react-router-dom"
import { TextHeading1 } from "@/components/Text/Text";
import Button from "@/components/Button/Button";


function AdminHeader({name}) {
  const navigate = useNavigate()
  return (
    <AdminHeaderStyled>
      <TextHeading1
        fs="clamp(1.00rem, calc(0.87rem + 0.65vw), 1.38rem)"
        color="inherit"
        text={name}
      ></TextHeading1>
       <Button
        border="1px solid transparent"
        br="3px"
        bg="black"
        color="white"
        padding="1.15em 1.75em"
        onClick = {() => navigate("/")}
      >
        Log Out
      </Button>
    </AdminHeaderStyled>
  );
}

export default AdminHeader;
