import { Button, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import { BoxWithTitle, GridLayout } from "components";
import { IGripper } from "type";
import { NumberInput, SlideInput } from "ui";

export function RcServoGripper({ min, max, value }: IGripper) {
  return (
    <BoxWithTitle title="Rc Servo Gripper">
      <VStack w="100%" h="100%">
        <GridLayout gridColumn={3} gap={1} h="100%">
          <GridItem>
            <VStack w="100%" h="100%" justifyContent="center">
              <Button w="100%">Grid</Button>
            </VStack>
          </GridItem>
          <GridItem colSpan={2}>
            <GridLayout gridRow={2} gap={2}>
              <GridItem>
                <VStack w="100%" h="100%">
                  <HStack w="100%" justifyContent="space-between">
                    <Text fontWeight="bold">Min</Text>
                    <NumberInput value={min} w="100%" />
                  </HStack>
                  <HStack w="100%" justifyContent="space-between">
                    <Text fontWeight="bold">Max</Text>
                    <NumberInput value={max} w="100%" />
                  </HStack>
                </VStack>
              </GridItem>
            </GridLayout>
          </GridItem>
        </GridLayout>
        <SlideInput w="100%" value={value} />
      </VStack>
    </BoxWithTitle>
  );
}
