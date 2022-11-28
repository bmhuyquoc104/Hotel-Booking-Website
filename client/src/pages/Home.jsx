import React from "react";
import { TextHeading1 } from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Flex from "@/components/containers/Flex/Flex";
function Home() {
  return (
    <Flex jc="center" ai="center" width="100%" direction="column">
      <TextHeading1 textDecoration="underline" text="home" color="red" />
      <Button color="yellow" bg="black">
        Hello
      </Button>
    </Flex>
  );
}

export default Home;
