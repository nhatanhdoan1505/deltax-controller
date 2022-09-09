import { VStack, Text, HStack, Button, GridItem } from "@chakra-ui/react";
import { GridLayout } from "components";
import { NumberInput, SelectButton } from "ui";

export function ConveyorX() {
  const ids = Array.from(Array(10).keys()).map((id) => ({
    type: id,
    name: id.toString(),
  }));
  return (
    <VStack w="100%" justifyContent="flex-start">
      <HStack w="100%">
        <Text fontWeight="bold">ID</Text>
        <SelectButton options={ids} />
      </HStack>
      <HStack w="100%">
        <Button>Connect</Button>
        <Text>COM</Text>
      </HStack>
      <GridLayout gridColumn={4} gridRow={4} gap={2}>
        <GridItem colSpan={1}>
          <Text fontWeight="bold">Control Model</Text>
        </GridItem>
        <GridItem colSpan={3}>
          <SelectButton options={[{ type: "UART", name: "UART" }]} />
        </GridItem>
        <GridItem>
          <Text fontWeight="bold">Moving Mode</Text>
        </GridItem>
        <GridItem colSpan={3}>
          <SelectButton options={[{ type: "Position", name: "Position" }]} />
        </GridItem>
        <GridItem colSpan={1}>
          <Text fontWeight="bold">Value of Moving</Text>
        </GridItem>
        <GridItem colSpan={3}>
          <HStack>
            <NumberInput value={400} />
            <Text>mm</Text>
          </HStack>
        </GridItem>
        <GridItem colSpan={1}>
          <Text fontWeight="bold">Velocity in Position Mode</Text>
        </GridItem>
        <GridItem colSpan={3}>
          <HStack>
            <NumberInput value={50} />
            <Text>mm/s</Text>
          </HStack>
        </GridItem>
      </GridLayout>
    </VStack>
  );
}
