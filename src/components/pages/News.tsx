import { Box, Center, Flex, Heading, Image, Link, Spinner, Text } from "@chakra-ui/react";
import { FC, memo, useEffect, useCallback, useState } from "react";

import { useGetData } from "../../hooks/useGetData";
import { Category } from "../organisms/Category";

export const News: FC = memo(() => {
  const { articles, getData, newsLoading } = useGetData();
  const [serch, setSerch] = useState("格闘技");

  const onChangeSerch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSerch(e.target.value), []);

  const categorySerch = useCallback(() => {
    if(serch === "") return;
    getData(serch);
    setSerch("");
  }, [serch]);

  useEffect(() => {
    getData(serch);
    setSerch("");
  }, []);

  return (
    <>
    {newsLoading ? (
      <Center h="100vh">
        <Spinner color="cyan.400" size="xl" />
      </Center>
    ) : (
      <>
      <Category onChange={onChangeSerch} serch={serch} onClick={categorySerch} />
      <Box maxW="1200px" mx="auto" mt={4} px={2}>
        {articles.map(({ url, urlToImage, title, description }) => (
          <Link key={url} href={url} _hover={{ textDecoration: "none" }} >
            <Flex 
              justify="space-between" 
              _hover={{ boxShadow: "1px 1px 5px gray", transition: "all 0.2s" }} 
              my={3}
              h={{ base: "100px", md: "200px" }}
              overflow="hidden"
            >
              <Box w="28%" >
                <Image 
                  src={urlToImage}
                  alt={title}
                  w="100%" 
                  h="100%" 
                  objectFit="cover" 
                />
              </Box>
              <Box w="71%" p={2}>
                <Heading fontSize={{ base: "sm", md: "2xl" }}>
                  {title}
                </Heading>
                <Text display={{ base: "none", md: "block" }} fontSize="md">
                  {description}
                </Text>
              </Box>
            </Flex>
          </Link>
        ))}
      </Box>
      </>
    )}
    </>
  );
});