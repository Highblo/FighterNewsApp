import { Box, Divider, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { FC, memo, useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState("");
  const { loading, login } = useAuth();

  const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <>
    <Flex 
      bg="#282c34" 
      h={{ base: "350px", md: "500px" }} 
      justify="center" 
      align="center"
    >
      <Box m={4}>
        <Heading 
          as="h1" 
          color="cyan.400"
          fontSize={{ base: "2xl", md: "4xl" }}
          textAlign="center"
        >
          格闘技News
        </Heading>
        <Text color="white" pt={4} fontSize={{ base: "lg", md: "2xl" }}>
          格闘技ファンの為のNewsサイト
        </Text>
      </Box>
    </Flex>
    <Flex align="center" justify="center" pt={10}>
      <Box 
        bg="gray.100"
        w={{ base: "sm", md: "md" }} 
        p={4} 
        borderRadius="md" 
        m={4}
        shadow="xl"
      >
        <Stack spacing="5" py={4} px={8}>
          <Heading 
            as="h1" 
            userSelect="none" 
            size="lg" 
            textAlign="center" 
            color="gray.600"
          >
            Let`s Login
          </Heading>
          <Divider />
          <Input 
            value={userId} 
            onChange={onChangeUserId} 
            placeholder="ユーザーID" 
          />
          <PrimaryButton 
            onClick={onClickLogin}
            loading={loading}
            disabled={userId === "" || loading === true}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
    </>
  );
});