import { Box, SystemProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends SystemProps {
  title: string;
  children: ReactNode;
}
export function BoxWithTitle({ title, children, ...props }: IProps) {
  return (
    <Box
      {...props}
      w={props.w ? props.w : "100%"}
      border={props.border ? props.border : "1px solid #adaaaa"}
      p={props.p ? props.p : 3}
    >
      <Text fontWeight="bold">{title}</Text>
      {children}
    </Box>
  );
}
