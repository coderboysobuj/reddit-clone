import { Flex } from "@chakra-ui/react";

const PageContent = ({ children }) => {
  return (
    <Flex justify="center" p="16px 0px">
      <Flex width="95%" maxWidth="860px" justify="center">
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
        >
          {children[0]}
        </Flex>
        <Flex
          direction="column"
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
        >
          {children[1]}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageContent;
