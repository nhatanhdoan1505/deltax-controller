import { InitialStateType } from ".";
import { TbZoomPan } from "react-icons/tb";
import { Icon } from "@chakra-ui/react";
import { GiRobotLeg } from "react-icons/gi";

export const initialState: InitialStateType = {
  defaultValues: {
    plugin: [
      {
        name: "Object Detecting",
        icon: <Icon as={TbZoomPan} color="white" />,
        iconActive: <Icon as={TbZoomPan} />,
      },
    ],
    device: [
      {
        name: "Robot",
        icon: <Icon as={GiRobotLeg} color="white" />,
        iconActive: <Icon as={GiRobotLeg} />,
      },
    ],
  },
};
