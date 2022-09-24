import { Box, Flex, Image, Link, Text} from "@chakra-ui/react";
import { FC, memo } from "react";

import { ExplanationText } from "../molcules/ExplanationText";

export const MySite: FC = memo(() => {
  return (
    <Flex 
      maxW="1200px" 
      mx="auto" 
      mt={{ base: "40px", md: "100px" }} 
      justify="center"
    >
      <Box>
        <Box 
          w={{ base: "80%", md: "70%" }} 
          h={{ base: "200px", md: "300px" }} 
          mx="auto" 
          mb={{ base: 3, md: 6 }} 
          _hover={{ opacity: 0.8 }}
        >
          <Link href="https://haru-portfolio71.netlify.app">
            <Image 
              src={`${process.env.PUBLIC_URL}../images/スクリーンショット 2022-09-20 140607.png`}
              alt="mysite"
              objectFit="cover"
              w="100%" 
              h="100%"
            />
          </Link>
        </Box>
        <Box textAlign="center" p={4}>
          <ExplanationText 
            text1="*使用技術" 
            text2="HTML/CSS/Javascript"
          />
          <ExplanationText 
            text1="*製作期間" 
            text2="1週間"
          />
          <Box mb={2}>
            <Text fontWeight="bold" fontSize="lg">*こだわったポイント</Text>
            <Text>
              HTML、CSS、Javascriptを学んでから初めて作った作品になります。<br/>
              トップページにはアイコンを大量に表示し、CSSanimationで動きをつけるようにしました。<br/>
              hover時はカラーを付けて足跡のようなものを表現できました。<br/>
              ガラスカードを作成し、よりガラスのよう動きを表現できるようにvanila tilt jsライブラリを取り入れました。
            </Text>
          </Box>
          <ExplanationText 
            text1="*課題" 
            text2="実務では素のJavascriptは使わず、フレームワークやTypescriptで実装することを知り習得を目指す。"
          />
        </Box>
      </Box>
    </Flex>
  );
});