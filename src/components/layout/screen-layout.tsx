import { VStack } from "@chakra-ui/react";
import { ScreenOption } from "components";
import { ReactNode } from "react";

export function ScreenLayout({
  children,
  screen,
}: {
  children: ReactNode;
  screen: "PLUGIN" | "DEVICE";
}) {
  return (
    <VStack w="100%" h="100%" p={4} border="2px solid #f8f8f8">
      <ScreenOption screen={screen} />
      {children}
    </VStack>
  );
}
