import { Icon } from "@chakra-ui/react";
import { GiRobotLeg } from "react-icons/gi";
import { TbZoomPan } from "react-icons/tb";
import { MainPageTemplate } from "template";

export function MainPage() {
  const defaultValues = {
    plugin: [
      {
        name: "Object Detecting",
        icon: <Icon as={TbZoomPan} color="white" fontSize="2rem" />,
        iconActive: <Icon as={TbZoomPan} />,
      },
    ],
    device: [
      {
        name: "Robot",
        icon: <Icon as={GiRobotLeg} color="white" fontSize="2rem" />,
        iconActive: <Icon as={GiRobotLeg} />,
      },
    ],
  };
  return <MainPageTemplate {...defaultValues} />;
}
