import { GridItem, VStack } from "@chakra-ui/react";
import { GridLayout } from "components";
import { useContext } from "react";
import { AppContext } from "store";
import { JoggingButton } from "ui";
import {
  AxisController,
  ButtonController,
  StepJogging,
  XYZController,
} from ".";

export function JoggingWorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return dashboard.type === "full-screen" ? (
    <VStack w="100%" h="100%" justifyContent="space-around">
      <GridLayout columns={5}>
        <GridItem>
          <JoggingButton color="teal" name="HOME" type="HOME" />
        </GridItem>
        <GridItem colSpan={4}>
          <StepJogging />
        </GridItem>
      </GridLayout>
      <XYZController />
      <ButtonController />
      <AxisController />
    </VStack>
  ) : dashboard.type === "horizontal-split" ? (
    <VStack w="100%" h="100%" spacing={8} justifyContent="space-around">
      <VStack w="100%" justifyContent="flex-start" spacing={10}>
        <GridLayout columns={5}>
          <GridItem>
            <JoggingButton color="teal" name="HOME" type="HOME" />
          </GridItem>
          <GridItem colSpan={4}>
            <StepJogging />
          </GridItem>
        </GridLayout>
        <GridLayout columns={2}>
          <GridItem>
            <XYZController />
          </GridItem>
          <GridItem>
            <AxisController />
          </GridItem>
        </GridLayout>
      </VStack>
      <VStack w="100%">
        <ButtonController />
      </VStack>
    </VStack>
  ) : (
    <VStack w="100%" h="100%" justifyContent="space-around" pb={4}>
      <GridLayout columns={7}>
        <GridItem>
          <JoggingButton color="teal" name="HOME" type="HOME" />
        </GridItem>
        <GridItem colSpan={6}>
          <StepJogging />
        </GridItem>
      </GridLayout>
      <XYZController />
      <ButtonController />
      <AxisController />
    </VStack>
  );
}
