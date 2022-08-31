import { VStack } from "@chakra-ui/react";
import { ViewerWorkingArea } from "components";
import { useContext } from "react";
import { AppContext } from "store";
import { IMenuButton } from "type";
import { ObjectDetectingMenuTemplate, ViewerTemplate } from ".";

export function ObjectDetectingTemplate() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;
  
  return dashboard.plugin?.objectDetecting.screen === 1 ? (
    <VStack w="100%" h="100%">
      <ObjectDetectingMenuTemplate />
      <ViewerTemplate />
    </VStack>
  ) : null;
}
