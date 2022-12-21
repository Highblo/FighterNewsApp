import { FC, memo } from "react";
import { Box, List, HStack, ListItem } from "@chakra-ui/react";

import { SerchInput } from "../molcules/SerchInput";

type Props = {
  onClickSerch: () => void;
  onClickMMA: () => void;
  onClickBoxing: () => void;
  onClickKickBoxing: () => void;
  onClickJiujitsu: () => void;
};

export const Category: FC<Props> = memo((props) => {
  const {
    onClickSerch,
    onClickMMA,
    onClickBoxing,
    onClickKickBoxing,
    onClickJiujitsu,
  } = props;

  return (
    <Box position="sticky" top="0" py={2} bg="#20232a" color="white">
      <List
        maxW="1200px"
        mx="auto"
        px={2}
        display="flex"
        justifyContent="center"
      >
        <HStack spacing={8}>
          <ListItem
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ color: "cyan.400", transition: "all 0.3s" }}
            cursor="pointer"
            onClick={onClickMMA}
          >
            MMA
          </ListItem>
          <ListItem
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ color: "cyan.400", transition: "all 0.3s" }}
            cursor="pointer"
            onClick={onClickBoxing}
          >
            Boxing
          </ListItem>
          <ListItem
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ color: "cyan.400", transition: "all 0.3s" }}
            cursor="pointer"
            onClick={onClickKickBoxing}
          >
            KickBoxing
          </ListItem>
          <ListItem
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ color: "cyan.400", transition: "all 0.3s" }}
            cursor="pointer"
            onClick={onClickJiujitsu}
          >
            柔術
          </ListItem>
          <ListItem display={{ base: "none", md: "block" }}>
            <SerchInput onClick={onClickSerch} />
          </ListItem>
        </HStack>
      </List>
    </Box>
  );
});
