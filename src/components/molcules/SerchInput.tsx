import { Button, HStack, Input } from "@chakra-ui/react";
import { FC, useContext } from "react";

import { SerchContext } from "../../providers/SerchProvider";

type Props = {
  onClick: () => void;
};

export const SerchInput: FC<Props> = (props) => {
  const { onClick } = props;
  const { serch, setSerch } = useContext(SerchContext);

  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerch(e.target.value);
  };
  return (
    <HStack>
      <Input size={{ base: "sm", md: "md" }} placeholder="検索" value={serch} onChange={onChangeCategory} />
      <Button fontSize={{ base: "sm", md: "md" }} onClick={onClick} bg="gray.600">検索</Button>
    </HStack>
  );
};