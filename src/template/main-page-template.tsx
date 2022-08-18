import { Container, HStack } from "@chakra-ui/react";
import { DeviceSidebar, PluginSidebar, WorkingArea } from "components";
import { IMainPageTemplateProps } from "type";

export function MainPageTemplate({ plugin, device }: IMainPageTemplateProps) {
  return (
    <HStack w="100vw" h="100vh" p={2}>
      <HStack width="100%" h="100%" justifyContent="space-between">
        <PluginSidebar plugin={plugin} />
        <WorkingArea />
        <DeviceSidebar device={device} />
      </HStack>
    </HStack>
  );
}
