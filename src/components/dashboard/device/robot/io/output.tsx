import { HStack, VStack, Text } from "@chakra-ui/react";
import { BoxWithTitle, ResponsiveLayout } from "components";
import { CheckboxButton, NumberInput, SelectButton } from "ui";

export function Output() {
  return (
    <BoxWithTitle title="Output">
      <VStack w="100%">
        <HStack w="100%">
          <Text>Custom</Text>
          <HStack>
            <HStack>
              <CheckboxButton />
              <SelectButton />
            </HStack>
            <HStack>
              <CheckboxButton />
              <SelectButton />
            </HStack>
          </HStack>
        </HStack>
        <HStack w="100%">
          <Text>Digital</Text>
          <ResponsiveLayout>
            <></>
          </ResponsiveLayout>
        </HStack>
        <HStack w="100%">
          <Text>PWM</Text>
          <HStack>
            <Text>P0</Text>
            <NumberInput value={0} />
          </HStack>
          <HStack>
            <Text>P1</Text>
            <NumberInput value={0} />
          </HStack>
          <HStack>
            <Text>P2</Text>
            <NumberInput value={0} />
          </HStack>
        </HStack>
        <HStack w="100%">
          <Text>Rc Servo</Text>
          <HStack>
            <Text>S0</Text>
            <NumberInput value={0} />
          </HStack>
          <HStack>
            <Text>S1</Text>
            <NumberInput value={0} />
          </HStack>
          <HStack>
            <Text>S2</Text>
            <NumberInput value={0} />
          </HStack>
        </HStack>
      </VStack>
    </BoxWithTitle>
  );
}
