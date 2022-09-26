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
    <Box position="sticky" top="0" p={2} bg="#20232a" color="white">
      <List display="flex" justifyContent="center">
        <HStack spacing={8}>
          <ListItem _hover={{ color: "cyan.400", transition: "all 0.3s" }}>MMA</ListItem>
          <ListItem _hover={{ color: "cyan.400", transition: "all 0.3s" }}>Boxing</ListItem>
          <ListItem _hover={{ color: "cyan.400", transition: "all 0.3s" }}>KickBoxing</ListItem>
          <ListItem>
            <HStack>
              <Input placeholder="検索" value={serch} onChange={onChange} />
              <Button onClick={onClick} bg="gray.600">検索</Button>
            </HStack>
          </ListItem>
        </HStack>
      </List>
    </Box>
  );
});