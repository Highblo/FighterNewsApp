import { HStack, Link, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export const Footer: FC = memo(() => {
  return (
    <HStack bg="#282c34" justify="center" py={3}>
      <Text fontSize={{ base: "sm", md: "md" }} color="cyan.400">
        ©2022Haruki Yamamoto
      </Text>
      <HStack>
        <Link href="https://twitter.com/harufront_515">
          <FaTwitter size={22} color={"#55acee"} />
        </Link>
        <Link href="https://www.instagram.com/haruharu._515/">
          <FaInstagram size={22} color={"#e1306c"} />
        </Link>
        <Link href="https://github.com/Highblo">
          <FaGithub size={22} color={"white"} />
        </Link>
      </HStack>
    </HStack>
  );
});
