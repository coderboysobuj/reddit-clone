import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      minHeight="60vh"
      alignItems="center"
    >
      Sorry, this community dose not exists or has been banned
      <Link href="/">
        <Button height={30} mt={4}>
          GO HOME
        </Button>
      </Link>
    </Flex>
  );
};

export default NotFound;
