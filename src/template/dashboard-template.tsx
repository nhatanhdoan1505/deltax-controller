import { HStack, Text, Icon } from "@chakra-ui/react";
import { DeviceSidebar, PluginSidebar, WorkingArea } from "components";
import { TbZoomPan } from "react-icons/tb";
import { GiStoneWheel, GiMovementSensor, GiRobotLeg } from "react-icons/gi";
import { IMainPageTemplateProps } from "type";
import { SiCommonworkflowlanguage, SiBlueprint } from "react-icons/si";
import { MdOutlineSource, MdOutlineDraw } from "react-icons/md";
import { GrCloudComputer } from "react-icons/gr";

export function DashboardTemplate() {
  const defaultValues: IMainPageTemplateProps = {
    plugins: [
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
        iconActive: (
          <Icon as={MdOutlineSource} color="#48BB78" fontSize="2rem" />
        ),
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
        iconActive: (
          <Icon as={GrCloudComputer} color="#48BB78" fontSize="2rem" />
        ),
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
    ],
    devices: [
      {
        name: "Robot1",
        icon: (
          <Text>
            <Icon as={GiRobotLeg} color="black" fontSize="2rem" />
          </Text>
        ),
        iconActive: (
          <Text>
            <Icon as={GiRobotLeg} color="#48BB78" fontSize="2rem" />
          </Text>
        ),
        type: "DEVICE",
        index: 1,
      },
      {
        name: "Robot2",
        icon: (
          <Text>
            <Icon as={GiRobotLeg} color="black" fontSize="2rem" />
          </Text>
        ),
        iconActive: (
          <Text>
            <Icon as={GiRobotLeg} color="#48BB78" fontSize="2rem" />
          </Text>
        ),
        type: "DEVICE",
        index: 2,
      },
      {
        name: "Encoder1",
        icon: (
          <Text>
            <Icon as={GiStoneWheel} color="black" fontSize="2rem" />
          </Text>
        ),
        iconActive: (
          <Text>
            <Icon as={GiStoneWheel} color="#48BB78" fontSize="2rem" />
          </Text>
        ),
        type: "DEVICE",
        index: 3,
      },
      {
        name: "Encoder2",
        icon: (
          <Text>
            <Icon as={GiStoneWheel} color="black" fontSize="2rem" />
          </Text>
        ),
        iconActive: (
          <Text>
            <Icon as={GiStoneWheel} color="#48BB78" fontSize="2rem" />
          </Text>
        ),
        type: "DEVICE",
        index: 4,
      },
      {
        name: "Conveyor",
        icon: (
          <Text>
            <Icon as={GiMovementSensor} color="black" fontSize="2rem" />
          </Text>
        ),
        iconActive: (
          <Text>
            <Icon as={GiMovementSensor} color="#48BB78" fontSize="2rem" />
          </Text>
        ),
        type: "DEVICE",
        index: 5,
      },
    ],
  };
  return (
    <HStack w="100vw" h="100%" p={2} overflow="scroll">
      <HStack
        w="100%"
        h="100%"
        justifyContent="space-between"
        overflow="scroll"
        minW="615px"
      >
        <PluginSidebar plugins={defaultValues.plugins} />
        <WorkingArea />
        <DeviceSidebar devices={defaultValues.devices} />
      </HStack>
    </HStack>
  );
}
