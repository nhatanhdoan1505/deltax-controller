import { Button, GridItem, HStack, VStack, Text } from "@chakra-ui/react";
import { NumberInput, SlideInput } from "ui";
import { BoxWithTitle, GridLayout } from "components";

export function RcServoGripper() {
  return (
    <BoxWithTitle title="Rc Servo Gripper">
      <VStack w="100%" h="100%">
        <GridLayout gridColumn={3} gap={1}>
          <GridItem>
            <Button w="100%">Grid</Button>
          </GridItem>
          <GridItem>
            <GridLayout gridRow={2}>
              <GridItem>
                <HStack w="100%">
                  <Text fontWeight="bold">Min</Text>
                  <NumberInput value={30} />
                </HStack>
                <HStack w="100%">
                  <Text fontWeight="bold">Max</Text>
                  <NumberInput value={30} />
                </HStack>
              </GridItem>
            </GridLayout>
          </GridItem>
        </GridLayout>
        <SlideInput w="100%" />
      </VStack>
    </BoxWithTitle>
  );
}
