import { Text, VStack } from "@chakra-ui/react";
import { SideBar } from "components";
import { IDevice } from "type";
import { SidebarButton } from "ui";

export function DeviceSidebar({ devices }: { devices: IDevice[] }) {
  return (
    <SideBar>
      <VStack h="100%">
        {devices &&
          devices.map((item) => <SidebarButton {...item} key={item.name} />)}
      </VStack>
      <Text fontWeight="semibold" textAlign="center" mt="auto" fontSize="sm">
        Add Device +
      </Text>
    </SideBar>
  );
}
