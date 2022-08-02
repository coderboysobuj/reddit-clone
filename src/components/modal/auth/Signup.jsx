import React, { useState, useEffect } from "react";

import { Input, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import { auth, firestore } from "../../../firebase/clientApp";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { addDoc, collection } from "firebase/firestore";

const Signup = () => {
  const toast = useToast();
  const setModalState = useSetRecoilState(authModalState);

  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [createUserWithEmailAndPassword, userCred, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const changeHandler = (e) => {
    setSignupForm((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (signupForm.password !== signupForm.confirmPassword) {
      return toast({
        title: "Password dosen't match!",
        position: "top-right",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    createUserWithEmailAndPassword(signupForm.email, signupForm.password);
  };

  const createUserDocument = async (user) => {
    await addDoc(collection(firestore, "users"), user);
  };

  useEffect(() => {
    if (userCred) {
      const user = {
        uid: userCred.user.uid,
        displayName:
          userCred.user.displayName || userCred.user.email.split("@")[0],
        photoURL: userCred.user.photoURL,
        phoneNumber: userCred.user.phoneNumber,
        email: userCred.user.email,
      };
      createUserDocument(user);
    }
  }, [userCred]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Email already exists!",
        position: "top-right",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    return () => {};
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
      <Input
        name="confirmPassword"
        onChange={changeHandler}
        type="password"
        placeholder="Confirm password"
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
        Sign up
      </Button>

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already have an account?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => setModalState((pre) => ({ ...pre, view: "login" }))}
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};

export default Signup;
