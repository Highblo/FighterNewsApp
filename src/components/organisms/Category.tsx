import { FC, memo } from "react";
import { Box, List, HStack, ListItem, Input, Button } from "@chakra-ui/react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  serch: string;
  onClick: () => void;
};

export const Category: FC<Props> = memo((props) => {
  const { onChange, serch, onClick } = props;

  return (
    <Box position="sticky" top="0" py={2} bg="#20232a" color="white">
      <List maxW="1200px" mx="auto" px={2} display="flex" justifyContent="center">
        <HStack spacing={8}>
          <ListItem 
            fontSize={{ base: "sm", md: "md" }} 
            _hover={{ color: "cyan.400", transition: "all 0.3s" }}
          >
            MMA
          </ListItem>
          <ListItem 
            fontSize={{ base: "sm", md: "md" }} 
            _hover={{ color: "cyan.400", transition: "all 0.3s" }}
          >
            Boxing
          </ListItem>
          <ListItem 
            fontSize={{ base: "sm", md: "md" }} 
            _hover={{ color: "cyan.400", transition: "all 0.3s" }}
          >
            KickBoxing
          </ListItem>
          <ListItem 
            fontSize={{ base: "sm", md: "md" }} 
            _hover={{ color: "cyan.400", transition: "all 0.3s" }}
          >
            柔術
          </ListItem>
          <ListItem display={{ base: "none", md: "block" }}>
            <HStack>
              <Input size={{ base: "sm", md: "md" }} placeholder="検索" value={serch} onChange={onChange} />
              <Button fontSize={{ base: "sm", md: "md" }} onClick={onClick} bg="gray.600">検索</Button>
            </HStack>
          </ListItem>
        </HStack>
      </List>
    </Box>
  );
});