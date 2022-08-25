import { Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext, DashboardEvent } from "store";
import { IDevice, IPlugin } from "type";

export function SidebarButton({
  name,
  icon,
  iconActive,
  type,
  index,
}: IPlugin | IDevice) {
  const { state, dispatch } = useContext(AppContext);

  const { dashboard } = state;
  const onClickHandler = () => {
    dispatch({
      type: DashboardEvent.SET_SCREEN,
      payload: {
        plugin:
          type === "PLUGIN"
            ? { ...state.dashboard.plugin, screen: index }
            : { ...state.dashboard.plugin },
        device:
          type === "DEVICE"
            ? { ...state.dashboard.device, screen: index }
            : { ...state.dashboard.device },
        type: state.dashboard.type,
      },
    });
  };
  return (
    <VStack
      border="1px solid white"
      p={1}
      borderRadius="base"
      _hover={{ cursor: "pointer" }}
      onClick={onClickHandler}
    >
      {(type === "PLUGIN" && dashboard.plugin.screen === index) ||
      (type === "DEVICE" && dashboard.device.screen === index)
        ? iconActive
        : icon}

      <Text
        color={
          (dashboard.device.screen === index && type === "DEVICE") ||
          (dashboard.plugin.screen === index && type === "PLUGIN")
            ? "#48BB78"
            : "black"
        }
        textAlign="center"
        fontSize="sm"
      >
        {name}
      </Text>
    </VStack>
  );
}
