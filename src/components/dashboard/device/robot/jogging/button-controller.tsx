import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { GridLayout } from "components";
import { JoggingButton } from "ui";
import { Joystick } from ".";

export function ButtonController() {
  return (
    <GridLayout columns={4} gap={2}>
      <GridItem colSpan={3}>
        <GridLayout rows={3} columns={3} gap={0}>
          <GridItem></GridItem>
          <GridItem>
            <JoggingButton type="Forward" name="Forward" color="gray" />
          </GridItem>
          <GridItem></GridItem>
          <GridItem>
            <VStack w="100%" h="100%" justifyContent="center">
              <JoggingButton type="Left" name="Left" color="gray" />
            </VStack>
          </GridItem>
          <GridItem>
            <VStack w="100%" h="100%" justifyContent="center" p={3}>
              <Joystick />
            </VStack>
          </GridItem>
          <GridItem>
            <VStack w="100%" h="100%" justifyContent="center">
              <JoggingButton type="Right" name="Right" color="gray" />
            </VStack>
          </GridItem>
          <GridItem></GridItem>
          <GridItem>
            <JoggingButton type="Backward" name="Backward" color="gray" />
          </GridItem>
        </GridLayout>
      </GridItem>
      <GridItem colSpan={1}>
        <GridLayout columns={1} rows={2} gap={2} h="100%">
          <GridItem>
            <VStack w="100%" h="100%" justifyContent="center">
              <JoggingButton type="Up" name="Up" color="gray" />
            </VStack>
          </GridItem>
          <GridItem>
            <VStack w="100%" h="100%" justifyContent="center">
              <JoggingButton type="Down" name="Down" color="gray" />
            </VStack>
          </GridItem>
        </GridLayout>
      </GridItem>
    </GridLayout>
  );
}
