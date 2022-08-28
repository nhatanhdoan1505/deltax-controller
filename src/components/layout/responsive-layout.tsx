import { SimpleGrid, SystemProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends SystemProps {
  children: ReactNode;
}
export function ResponsiveLayout({ children, ...props }: IProps) {
  return (
    <SimpleGrid w="100%" {...props}>
      {children}
    </SimpleGrid>
  );
}
