import { Box, HStack, VStack } from "@chakra-ui/react";
import { useResizeDetector } from "react-resize-detector";
import { ConfigurationMenu, ImageViewer, ToolMenu } from ".";

export function ViewerWorkingArea() {
  const { width, height, ref } = useResizeDetector();

  return (
    <VStack w="100%" h="100%">
      <VStack w="100%" h="100%">
        <HStack w="100%" h="100%">
          <ConfigurationMenu />
          <VStack
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            ref={ref}
          >
            <ImageViewer width={width as number} height={height as number} />
          </VStack>
        </HStack>
        <ToolMenu />
      </VStack>
    </VStack>
  );
}
