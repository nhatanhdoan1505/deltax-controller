import {
  HStack,
  VStack,
  Text,
  GridItem,
  Button,
  Input,
} from "@chakra-ui/react";
import { GridLayout } from "components";
import { NumberInput, SelectButton } from "ui";

export function IndependentConveyor() {
  const ids = Array.from(Array(10).keys()).map((id) => ({
    type: id,
    name: id.toString(),
  }));
  return (
    <VStack w="100%" alignItems="flex-start">
      <HStack w="100%">
        <Text fontWeight="bold">ID</Text>
        <SelectButton options={ids} />
      </HStack>
      <GridLayout gridColumn={2} gap={3}>
        <GridItem>
          <HStack w="100%">
            <Text fontWeight="bold">MOVE</Text>
            <NumberInput value={10} />
            <Text>mm</Text>
          </HStack>
        </GridItem>
        <GridItem w="100%">
          <HStack>
            <Text fontWeight="bold">Direction</Text>
            <SelectButton
              options={[
                { type: "Forward", name: "Forward" },
                { type: "Backward", name: "Backward" },
              ]}
            />
          </HStack>
        </GridItem>
      </GridLayout>
      <HStack w="100%">
        <Text fontWeight="bold">Control</Text>
        <Text>Gcode Command</Text>
      </HStack>
      <HStack w="100%">
        <Button fontWeight="bold">Forward</Button>
        <Input type="text" value="M03 D0" />
      </HStack>
      <HStack w="100%">
        <Button fontWeight="bold">Backward</Button>
        <Input type="text" value="M03 D1" />
      </HStack>
      <HStack w="100%">
        <Button fontWeight="bold">Turn off</Button>
        <Input type="text" value="M05 D0, M05 D1" />
      </HStack>
      <HStack w="100%">
        <Text fontWeight="bold">Encoder</Text>
        <SelectButton options={ids} />
      </HStack>
    </VStack>
  );
}
