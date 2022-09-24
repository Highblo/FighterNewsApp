import { FC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = (props) => {
  const { children, disabled = false, loading, onClick } = props;
  return (
    <Button onClick={onClick} bg="cyan.400" color="white" _hover={{ opacity: 0.8 }} isLoading={loading} disabled={disabled}>
      {children}
    </Button>
  );
}; 