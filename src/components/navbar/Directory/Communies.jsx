import { MenuItem, Flex, Icon } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import { useState } from "react";
import CreateCommunityModal from "../../modal/CreateCommunity/CreateCommunityModal";

const Communies = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "gray.100" }}
        onClick={() => setOpen(true)}
      >
        <Flex align={"center"}>
          <Icon as={GrAdd} fontSize={20} mr={2} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};

export default Communies;
