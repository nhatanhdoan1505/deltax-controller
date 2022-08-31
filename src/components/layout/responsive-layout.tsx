import { SimpleGrid, SystemProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends SystemProps {
  children: ReactNode;
}
export function ResponsiveLayout({ children, ...props }: IProps) {
  return (
    <SimpleGrid
      w="100%"
      {...props}
      columns={props.gridColumn ? props.gridColumn as number : 1}
    >
      {children}
    </SimpleGrid>
  );
}
