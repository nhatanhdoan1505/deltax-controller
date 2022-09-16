import { VStack } from "@chakra-ui/react";
import { Source } from "components";
import { useContext } from "react";
import { AppContext } from "store";
import { ObjectDetectingMenuTemplate, ViewerTemplate } from ".";

export function ObjectDetectingTemplate() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return (
    <VStack w="100%" h="100%">
      <ObjectDetectingMenuTemplate />
      {dashboard.plugin?.objectDetecting.screen === 1 ? (
        <ViewerTemplate />
      ) : dashboard.plugin?.objectDetecting.screen === 2 ? (
        <Source />
      ) : null}
    </VStack>
  );
}
