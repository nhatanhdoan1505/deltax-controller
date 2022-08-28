import { VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "store";
import { IOWorkingArea, JoggingWorkingArea } from ".";
import { RobotMenu } from "components";

export function RobotWorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;
  return (
    <VStack w="100%" h="100%">
      <RobotMenu />
      {dashboard.device?.robot?.screen === 1 ? (
        <JoggingWorkingArea />
      ) : dashboard.device?.robot?.screen === 2 ? (
        <IOWorkingArea />
      ) : null}
    </VStack>
  );
}
