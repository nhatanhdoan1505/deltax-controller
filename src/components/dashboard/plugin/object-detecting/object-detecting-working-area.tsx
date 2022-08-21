import { VStack } from "@chakra-ui/react";
import { ScreenOption } from "components";
import { useContext } from "react";
import { AppContext } from "store";
import { ViewerWorkingArea } from ".";

export function ObjectDetectingWorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return dashboard.plugin ? (
    <VStack w="100%" h="100%" p={4} border="2px solid #f8f8f8">
      <ScreenOption screen="PLUGIN" />
      {dashboard.device === 3 ? <ViewerWorkingArea /> : null}
    </VStack>
  ) : null;
}
