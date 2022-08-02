import React, { useEffect, useState } from "react";

import { Input, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import { auth } from "../../../firebase/clientApp";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const setModalState = useSetRecoilState(authModalState);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const toast = useToast();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setLoginForm((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };
  useEffect(() => {
    if (error) {
      toast({
        title: "Invalid email or password!",
        position: "top-right",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [error]);
  return (
    <form onSubmit={submitHandler}>
      <Input
        name="email"
        onChange={changeHandler}
        type="email"
        placeholder="Email"
        required
        fontSize="10pt"
        bg="gray.50"
        _placeholder={{
          color: "gray.500",
        }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        mb={2}
      />
      <Input
        name="password"
        onChange={changeHandler}
        type="password"
        placeholder="Password"
        required
        fontSize="10pt"
        bg="gray.50"
        _placeholder={{
          color: "gray.500",
        }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        mb={2}
      />

      <Button
        isLoading={loading}
        height="36px"
        width="100%"
        mt={3}
        mb={2}
        type="submit"
      >
        Login
      </Button>

      <Flex justifyContent="center" mb="2">
        <Text fontSize="9pt" mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize="9pt"
          color="blue.500"
          cursor="pointer"
          onClick={() =>
            setModalState((pre) => ({ ...pre, view: "resetPassword" }))
          }
        >
          Reset
        </Text>
      </Flex>

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New here?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => setModalState((pre) => ({ ...pre, view: "signup" }))}
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};

export default Login;
