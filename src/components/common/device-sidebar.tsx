import { VStack } from "@chakra-ui/react";
import { IDevice } from "type";
import { SidebarButton } from "ui";

export function DeviceSidebar({ device }: { device: IDevice[] }) {
  return (
    <VStack
      h="100%"
      backgroundColor="black"
      color="white"
      p={3}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      maxW="100px"
      alignItems="center"
      borderRadius="8px"
    >
      {device &&
        device.map((item) => <SidebarButton {...item} key={item.name} />)}
    </VStack>
  );
}
