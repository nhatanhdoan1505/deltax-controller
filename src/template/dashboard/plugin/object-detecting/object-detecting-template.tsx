import { VStack } from "@chakra-ui/react";
import { Source } from "components";
import { useContext } from "react";
import { useResizeDetector } from "react-resize-detector";
import { AppContext } from "store";
import { ObjectDetectingMenuTemplate, ViewerTemplate } from ".";

export function ObjectDetectingTemplate() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  const { width, height, ref } = useResizeDetector();

  return (
    <VStack w="100%" h="100%">
      <ObjectDetectingMenuTemplate />
      <VStack w="100%" h="100%" ref={ref}>
        {dashboard.plugin?.objectDetecting.screen === 1 ? (
          <ViewerTemplate />
        ) : dashboard.plugin?.objectDetecting.screen === 2 &&
          width &&
          height ? (
          <Source width={width} height={height} />
        ) : null}
      </VStack>
    </VStack>
  );
}
