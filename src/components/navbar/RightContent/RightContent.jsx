import React from "react";

import { Flex } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModal from "../../modal/auth/AuthModal";

import Icons from "./Icons";
import UserMenu from "./UserMenu";

const RightContent = ({ user }) => {
  return (
    <>
      <AuthModal />

      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};

export default RightContent;
