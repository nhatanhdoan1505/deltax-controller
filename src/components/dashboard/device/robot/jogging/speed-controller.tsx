import { HStack, Text } from "@chakra-ui/react";
import { SlideInput } from "ui";

export function SpeedController({ value }: { value: number }) {
  return (
    <HStack w="100%">
      <Text fontWeight="bold">Speed</Text>
      <SlideInput value={value} />
    </HStack>
  );
}
