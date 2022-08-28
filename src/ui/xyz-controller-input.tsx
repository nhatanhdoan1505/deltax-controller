import { GridItem, HStack, Text } from "@chakra-ui/react";
import { NumberInput } from ".";

export function XYZControllerInput({
  value,
  name,
}: {
  value: number;
  name: string;
}) {
  return (
    <GridItem w="100%">
      <HStack w="100%">
        <Text fontWeight="bold">{name}</Text>
        <NumberInput value={value} />
      </HStack>
    </GridItem>
  );
}
