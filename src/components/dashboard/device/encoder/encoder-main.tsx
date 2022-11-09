import { Button, VStack, Text, HStack } from "@chakra-ui/react";
import { NumberInput, SwitchButton } from "ui";

export function EncoderMain({
  interval,
  position,
  velocity,
}: {
  interval: number;
  position: number;
  velocity: number;
}) {
  return (
    <VStack w="100%" alignItems="flex-start" p={2} gap={2}>
      <Button colorScheme="green">Connect Encoder</Button>
      <VStack alignItems="flex-start">
        <HStack>
          <Text fontWeight="bold">Interval</Text>
          <NumberInput value={interval} min={1} max={20} />
          <Text>(ms)</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Position</Text>
          <Text>{position}</Text>
          <Text>(mm)</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Velocity</Text>
          <Text>{velocity}</Text>
          <Text>(mm/s)</Text>
        </HStack>
        <SwitchButton isHorizontal name="Inverse" onClick={() => {}} />
      </VStack>
      <Button colorScheme="green">Reset</Button>
    </VStack>
  );
}
