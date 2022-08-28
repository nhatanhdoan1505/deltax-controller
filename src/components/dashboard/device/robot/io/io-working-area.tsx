import { VStack } from "@chakra-ui/react";
import { EndEffector, Output } from ".";

export function IOWorkingArea() {
  return (
    <VStack w="100%" h="100%">
      <EndEffector />
      <Output />
    </VStack>
  );
}
