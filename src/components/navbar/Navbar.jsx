import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Directory from "./Directory/Directory";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <Flex h="44px" bg="white" padding="6px 12px">
      <Flex align="center">
        <Image height="30px" src="/images/redditFace.svg" alt="Logo" />
        <Image
          height="46px"
          src="/images/redditText.svg"
          alt="Reddit"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>

      <Directory />
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};

export default Navbar;
