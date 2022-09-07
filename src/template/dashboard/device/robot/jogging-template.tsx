import { GridItem, VStack } from "@chakra-ui/react";
import {
  AxisController,
  ButtonController,
  GridLayout,
  SpeedController,
  StepJogging,
  XYZController,
} from "components";
import { useContext } from "react";
import { AppContext } from "store";
import { IStep } from "type";
import { JoggingButton } from "ui";
import { findDeviceComponent } from "utils";

export function JoggingTemplate() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;
  const { xyz, axis, speed } = findDeviceComponent({ state })?.jogging!;
  const step: IStep[] = [
    { name: "0.5", type: "0.5" },
    { name: "1", type: "1" },
    { name: "10", type: "10" },
    { name: "50", type: "50" },
    { name: "100", type: "100" },
  ];

  return dashboard.type === "full-screen" ? (
    <VStack w="100%" h="100%" justifyContent="space-around">
      <GridLayout gridColumn={5} w="100%">
        <GridItem>
          <JoggingButton color="teal" name="HOME" type="HOME" />
        </GridItem>
        <GridItem colSpan={4}>
          <StepJogging step={step} />
        </GridItem>
      </GridLayout>
      <SpeedController value={speed} />
      <XYZController xyz={xyz} />
      <ButtonController />
      <AxisController axis={axis} />
    </VStack>
  ) : dashboard.type === "horizontal-split" ? (
    <VStack w="100%" h="100%" spacing={8} justifyContent="space-around">
      <VStack w="100%" justifyContent="flex-start" spacing={10}>
        <GridLayout gridColumn={5} w="100%">
          <GridItem>
            <JoggingButton color="teal" name="HOME" type="HOME" />
          </GridItem>
          <GridItem colSpan={4}>
            <StepJogging step={step} />
          </GridItem>
        </GridLayout>
        <SpeedController value={speed} />
        <GridLayout gridRow={2} gap={2} w="100%">
          <GridItem>
            <AxisController axis={axis} />
          </GridItem>
          <GridItem>
            <XYZController xyz={xyz} />
          </GridItem>
        </GridLayout>
      </VStack>
      <VStack w="100%">
        <ButtonController />
      </VStack>
    </VStack>
  ) : (
    <VStack w="100%" h="100%" justifyContent="space-around" pb={4}>
      <GridLayout gridColumn={7}>
        <GridItem>
          <JoggingButton color="teal" name="HOME" type="HOME" />
        </GridItem>
        <GridItem colSpan={6}>
          <StepJogging step={step} />
        </GridItem>
      </GridLayout>
      <SpeedController value={speed} />
      <XYZController xyz={xyz} />
      <ButtonController />
      <AxisController axis={axis} />
    </VStack>
  );
}
