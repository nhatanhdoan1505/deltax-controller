import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

export function SideBar({ children }: { children: ReactNode }) {
  return (
    <VStack
      backgroundColor="whiteAlpha.500"
      color="black"
      boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
      alignItems="center"
      borderRadius="base"
      p={2}
    >
      {children}
    </VStack>
  );
}
