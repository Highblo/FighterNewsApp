import { Box, Center, Flex, Heading, Image, Link, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { FC, memo, useEffect, useState } from "react";

import { useAuth } from "../../hooks/useAuth";

export const News: FC = memo(() => {
  const [articles, setArticles] = useState([]);
  const { loading, setLoading } = useAuth();

  useEffect(() => {
    setLoading(true);
    const url = "https://newsapi.org/v2/everything?" +
    "q=格闘技&" +
    "sortBy=popularity&" +
    "apiKey=68663194d6644ba2bf011c5dc0d7f053";
    const data = axios.get(url);
    data.then(({data: {articles}}) => setArticles(articles))
    .catch(() => alert("時間をおいてから、もう一度お試しください"))
    .finally(() => setLoading(false));
  }, []);

  return (
    <>
    {loading ? (
      <Center h="100vh">
        <Spinner color="cyan.400" size="xl" />
      </Center>
    ) : (
      <Box maxW="1200px" mx="auto" mt={4} px={2}>
        {articles.map(({ url, urlToImage, title, description }) => (
          <Link href={url} _hover={{ textDecoration: "none" }} >
            <Flex 
              justify="space-between" 
              _hover={{ boxShadow: "1px 1px 5px gray", transition: "all 0.2s" }} 
              my={3}
            >
              <Box w="28%" h="200px">
                <Image 
                  src={urlToImage}
                  alt={title}
                  w="100%" 
                  h="100%" 
                  objectFit="cover" 
                />
              </Box>
              <Box w="71%" p={2}>
                <Heading fontSize={{ base: "lg", md: "2xl" }}>
                  {title}
                </Heading>
                <Text>{description}</Text>
              </Box>
            </Flex>
          </Link>
        ))}
      </Box>
    )}
    </>
  );
});