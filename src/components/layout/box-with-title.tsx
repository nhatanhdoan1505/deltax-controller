import { Box, SystemProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends SystemProps {
  title: string;
  children: ReactNode;
}
export function BoxWithTitle({ title, children, ...props }: IProps) {
  return (
    <Box {...props}>
      <Text fontWeight="bold">{title}</Text>
      {children}
    </Box>
  );
}
