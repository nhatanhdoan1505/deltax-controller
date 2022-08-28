import { VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "store";
import { ObjectDetectingMenu, ViewerWorkingArea } from ".";

export function ObjectDetectingWorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return dashboard.plugin?.objectDetecting.screen === 1 ? (
    <VStack w="100%" h="100%">
      <ObjectDetectingMenu />
      <ViewerWorkingArea />
    </VStack>
  ) : null;
}
