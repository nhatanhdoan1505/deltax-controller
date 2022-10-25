import { HStack, Icon, Text } from "@chakra-ui/react";
import { DeviceSidebar, PluginSidebar } from "components";
import { useContext } from "react";
import { GiMovementSensor, GiRobotLeg } from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
import { MdOutlineDraw, MdOutlineSource } from "react-icons/md";
import { SiBlueprint, SiCommonworkflowlanguage } from "react-icons/si";
import { TbZoomPan } from "react-icons/tb";
import { AppContext } from "store";
import { IDevice, IPlugin } from "type";
import { WorkingArea } from "..";

export function DashboardTemplate() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  const devices: IDevice[] = dashboard.device.component.map(
    ({ name, type }) => ({
      name: name,
      icon:
        type === "ROBOT" ? (
          <Text>
            <Icon as={GiRobotLeg} color="black" fontSize="2rem" />
          </Text>
        ) : type === "ENCODER" ? (
          <Text>
            <Icon as={GiRobotLeg} color="black" fontSize="2rem" />
          </Text>
        ) : (
          <Text>
            <Icon as={GiMovementSensor} color="black" fontSize="2rem" />
          </Text>
        ),
      iconActive:
        type === "ROBOT" ? (
          <Text>
            <Icon as={GiRobotLeg} color="#48BB78" fontSize="2rem" />
          </Text>
        ) : type === "ENCODER" ? (
          <Text>
            <Icon as={GiRobotLeg} color="#48BB78" fontSize="2rem" />
          </Text>
        ) : (
          <Text>
            <Icon as={GiMovementSensor} color="#48BB78" fontSize="2rem" />
          </Text>
        ),
      type: "DEVICE",
      index: 1,
      device: "ROBOT",
    })
  );

  const plugins: IPlugin[] = [
    {
      name: "Workflow",
      icon: <Icon as={SiCommonworkflowlanguage} fontSize="2rem" />,
      iconActive: (
        <Icon as={SiCommonworkflowlanguage} color="#48BB78" fontSize="2rem" />
      ),
      type: "PLUGIN",
      index: 1,
    },
    {
      name: "Script",
      icon: <Icon as={MdOutlineSource} fontSize="2rem" />,
      iconActive: <Icon as={MdOutlineSource} color="#48BB78" fontSize="2rem" />,
      type: "PLUGIN",
      index: 2,
    },
    {
      name: "Object Detecting",
      icon: <Icon as={TbZoomPan} color="black" fontSize="2rem" />,
      iconActive: <Icon as={TbZoomPan} color="#48BB78" fontSize="2rem" />,
      type: "PLUGIN",
      index: 3,
    },
    {
      name: "Deep Learning",
      icon: <Icon as={GrCloudComputer} color="black" fontSize="2rem" />,
      iconActive: <Icon as={GrCloudComputer} color="#48BB78" fontSize="2rem" />,
      type: "PLUGIN",
      index: 4,
    },
    {
      name: "Drawing",
      icon: <Icon as={MdOutlineDraw} color="black" fontSize="2rem" />,
      iconActive: <Icon as={MdOutlineDraw} color="#48BB78" fontSize="2rem" />,
      type: "PLUGIN",
      index: 5,
    },
    {
      name: "3D Printing",
      icon: <Icon as={SiBlueprint} color="black" fontSize="2rem" />,
      iconActive: <Icon as={SiBlueprint} color="#48BB78" fontSize="2rem" />,
      type: "PLUGIN",
      index: 6,
    },
  ];

  return (
    <HStack w="100vw" h="100%" p={2} overflow="scroll">
      <HStack
        w="100%"
        h="100%"
        justifyContent="space-between"
        overflow="scroll"
        minW="615px"
      >
        <PluginSidebar plugins={plugins} />
        <WorkingArea />
        <DeviceSidebar devices={devices} />
      </HStack>
    </HStack>
  );
}
