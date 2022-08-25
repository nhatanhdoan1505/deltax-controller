import { VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "store";
import { JoggingWorkingArea } from ".";
import { RobotMenu } from "components";

export function RobotWorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;
  return dashboard.device.robot.screen === 1 ? (
    <VStack w="100%" h="100%">
      <RobotMenu />
      <JoggingWorkingArea />
    </VStack>
  ) : null;
}
