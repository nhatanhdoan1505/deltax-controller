import { Button, ButtonGroup, HStack, VStack } from "@chakra-ui/react";
import { AppContext, DashboardEvent } from "store";
import { useContext, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { IMenuButton } from "type";
import { ConfigurationMenu, ImageCrop, ImageViewer, ToolMenu } from ".";
import { appDispatch } from "utils";

export function ViewerWorkingArea({
  configurationMenu,
  toolMenu,
  imageUrl,
}: {
  configurationMenu: IMenuButton[];
  toolMenu: IMenuButton[];
  imageUrl: string;
}) {
  const { state, dispatch } = useContext(AppContext);
  const { dashboard } = state;
  const { width, height, ref } = useResizeDetector();
  const [image, _setImageUrl] = useState<string>(imageUrl);

  const applyCrop = () => {
    appDispatch({
      type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_IS_APPLY_CROP,
      payload: { isApplyCrop: true },
      state,
      dispatch,
    });
    appDispatch({
      type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL,
      payload: { tool: null! },
      state,
      dispatch,
    });
  };

  const cancelCrop = () => {
    appDispatch({
      type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE,
      payload: { crop: null! },
      state,
      dispatch,
    });
    appDispatch({
      type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL,
      payload: { tool: null! },
      state,
      dispatch,
    });
  };

  return (
    <VStack w="100%" h="100%">
      <VStack w="100%" h="100%">
        <HStack w="100%" h="100%">
          <ConfigurationMenu menu={configurationMenu} />
          <VStack
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            ref={ref}
          >
            {dashboard.plugin.objectDetecting.viewer.tool === 4 &&
            width &&
            height ? (
              <VStack>
                <ButtonGroup variant="outline" spacing="6">
                  <Button colorScheme="blue" onClick={applyCrop}>
                    Save
                  </Button>
                  <Button colorScheme="red" onClick={cancelCrop}>
                    Cancel
                  </Button>
                </ButtonGroup>
                <ImageCrop image={image} width={width} height={height} />
              </VStack>
            ) : (
              <ImageViewer
                width={width as number}
                height={height as number}
                imageUrl={imageUrl}
              />
            )}
          </VStack>
        </HStack>
        <ToolMenu menu={toolMenu} />
      </VStack>
    </VStack>
  );
}
