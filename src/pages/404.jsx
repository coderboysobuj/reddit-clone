import { Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { BiError } from "react-icons/bi";
const Custom404 = () => {
  return (
    <Flex
      justify={"center"}
      align="center"
      width="100%"
      height="calc(100vh - 44px)"
    >
      <Flex>
        <Icon as={BiError} fontSize="60px" color="red" />
        <Text fontSize="50px" color="red.400">
          404
        </Text>
      </Flex>
    </Flex>
  );
};

export default Custom404;
