import React, { useEffect } from "react";

import { Flex, Button, Image, useToast } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../../firebase/clientApp";
import { addDoc, collection } from "firebase/firestore";

const OAuthButtons = () => {
  const toast = useToast();
  const [signInWithGoogle, userCred, loading, error] =
    useSignInWithGoogle(auth);
  const createUserDocument = async (user) => {
    await addDoc(collection(firestore, "users"), user);
  };

  useEffect(() => {
    if (error) {
      toast({
        title: "Login fail!",
        status: "error",
        position: "top-right",
        duration: 3000,
      });
    }
  }, [error]);

  useEffect(() => {
    if (userCred) {
      const user = {
        uid: userCred.user.uid,
        displayName: userCred.user.displayName,
        photoURL: userCred.user.photoURL,
        phoneNumber: userCred.user.phoneNumber,
        email: userCred.user.email,
      };
      createUserDocument(user);
    }
  }, [userCred]);
  return (
    <Flex flexDir="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => {
          signInWithGoogle();
        }}
      >
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
    </Flex>
  );
};

export default OAuthButtons;
