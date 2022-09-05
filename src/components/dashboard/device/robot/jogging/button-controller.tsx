import { GridItem, VStack } from "@chakra-ui/react";
import { GridLayout } from "components";
import { JoggingButton } from "ui";
import { Joystick } from ".";

export function ButtonController() {
  return (
    <GridLayout gridColumn={4} gap={2}>
      <GridItem colSpan={3}>
        <GridLayout gridRow={3} gridColumn={3} gap={0} w="100%">
          <GridItem></GridItem>
          <GridItem>
            <JoggingButton type="FORWARD" name="Forward" color="gray" />
          </GridItem>
          <GridItem></GridItem>
          <GridItem>
            <VStack w="100%" h="100%" justifyContent="center">
              <JoggingButton type="LEFT" name="Left" color="gray" />
            </VStack>
          </GridItem>
          <GridItem>
            <VStack w="100%" h="100%" justifyContent="center" p={3}>
              <Joystick />
            </VStack>
          </GridItem>
          <GridItem>
            <VStack w="100%" h="100%" justifyContent="center">
              <JoggingButton type="RIGHT" name="Right" color="gray" />
            </VStack>
          </GridItem>
          <GridItem></GridItem>
          <GridItem>
            <JoggingButton type="BACKWARD" name="Backward" color="gray" />
          </GridItem>
        </GridLayout>
      </GridItem>
      <GridItem colSpan={1}>
        <GridLayout gridColumn={1} gridRow={2} gap={2} w="100%" h="100%">
          <GridItem>
            <VStack w="100%" h="100%" justifyContent="center">
              <JoggingButton type="UP" name="Up" color="gray" />
            </VStack>
          </GridItem>
          <GridItem>
            <VStack w="100%" h="100%" justifyContent="center">
              <JoggingButton type="DOWN" name="Down" color="gray" />
            </VStack>
          </GridItem>
        </GridLayout>
      </GridItem>
    </GridLayout>
  );
}
