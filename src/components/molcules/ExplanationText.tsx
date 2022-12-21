import { Box, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  text1: ReactNode;
  text2: ReactNode;
};

export const ExplanationText: FC<Props> = (props) => {
  const { text1, text2 } = props;
  return (
    <Box mb={2}>
      <Text fontWeight="bold" fontSize="lg">
        {text1}
      </Text>
      <Text>{text2}</Text>
    </Box>
  );
};
