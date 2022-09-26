import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { FC, memo} from "react";
import { useHistory } from "react-router-dom";

export const Header: FC = memo(() => {
  const history = useHistory();

  const onClickMySite = () => history.push("/news/mysite");
  const onClickNews = () => history.push("/news");

  return (
    <>
    <Box bg="#282c34">
      <Flex 
        as="div" 
        align="center" 
        maxW="1200px" 
        mx="auto" 
        p={{ base: 2, md: 4 }}
      >
        <Heading 
          as="h1" 
          fontSize={{ base: "2xl", md: "3xl" }}
          _hover={{ cursor: "pointer" }}
          userSelect="none"
          onClick={onClickNews}
          color="cyan.400"
        >
          格闘技News
        </Heading>
        <Box ml={6}>
          <Link 
            fontSize={{ base: "lg", md: "2xl" }}
            _hover={{ textDecoration: "none" }}
            userSelect="none"
            onClick={onClickMySite}
            color="cyan.400"
            p={1}
          >
            MySite
          </Link>
        </Box>
      </Flex>
    </Box>
    </>
  );
});