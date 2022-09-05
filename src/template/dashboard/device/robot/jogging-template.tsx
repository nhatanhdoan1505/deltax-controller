import { AppContext } from "store";
import { useContext } from "react";
import { IRobotJogging } from "template";
import { GridItem, VStack } from "@chakra-ui/react";
import { JoggingButton } from "ui";
import {
  AxisController,
  ButtonController,
  StepJogging,
  XYZController,
  GridLayout,
  SpeedController,
} from "components";

export function JoggingTemplate() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  const { xyz, step, axis, speed }: IRobotJogging = {
    xyz: [
      { value: 30, name: "X" },
      { value: 30, name: "Y" },
      { value: 30, name: "Z" },
    ],
    step: [
      { name: "0.5", type: "0.5", color: "gray" },
      { name: "1", type: "1", color: "gray" },
      { name: "10", type: "10", color: "gray" },
      { name: "50", type: "50", color: "gray" },
      { name: "100", type: "100", color: "gray" },
    ],
    axis: [
      { name: "4-Axis", value: 30, color: "green" },
      { name: "5-Axis", value: 30, color: "green" },
      { name: "6-Axis", value: 30, color: "green" },
    ],
    speed: dashboard.device.robot.jogging.speed,
  };
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
      <XYZController xyz={xyz} />
      <ButtonController />
      <AxisController axis={axis} />
    </VStack>
  );
}
