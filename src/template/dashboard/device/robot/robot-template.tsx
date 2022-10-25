import { AppContext, DeviceComponentType } from "store";
import { useContext } from "react";
import { VStack } from "@chakra-ui/react";
import { ConnectionConfig, RobotMenu } from "components";
import { IoTemplate, JoggingTemplate } from ".";
import { IMenuButton } from "type";

export function RobotTemplate({ robot }: { robot: DeviceComponentType }) {
  const menu: IMenuButton[] = [
    { index: 1, name: "Jogging", color: "green" },
    { index: 2, name: "I/O", color: "green" },
    { index: 3, name: "Parameter", color: "green" },
    { index: 4, name: "Remote", color: "green" },
    { index: 5, name: "Setting", color: "green" },
  ];

  return (
    <VStack w="100%" h="100%">
      <ConnectionConfig />
      <RobotMenu menu={menu} />
      {robot.screen === 1 ? (
        <JoggingTemplate />
      ) : robot.screen === 2 ? (
        <IoTemplate />
      ) : null}
    </VStack>
  );
}
