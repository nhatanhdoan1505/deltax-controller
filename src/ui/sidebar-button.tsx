import { HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { IDevice, IPlugin } from "type";

export function SidebarButton({ name, icon, iconActive }: IPlugin | IDevice) {
  return (
    <HStack border="1px solid white" p={1} borderRadius="base">
      <Tooltip label={name} shouldWrapChildren={true}>
        {icon}
      </Tooltip>
    </HStack>
  );
}
