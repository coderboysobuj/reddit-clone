import React from "react";

import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import Login from "./Login";
import Signup from "./Signup";

const AuthInputs = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex align="center" flexDir="column" width="100%" mt={4}>
      {modalState.view === "login" && <Login />}
      {modalState.view === "signup" && <Signup />}
    </Flex>
  );
};

export default AuthInputs;
