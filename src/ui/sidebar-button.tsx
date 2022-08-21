import { Tooltip, VStack, Text } from "@chakra-ui/react";
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
        plugin: type === "PLUGIN" ? index : state.dashboard.plugin,
        device: type === "DEVICE" ? index : state.dashboard.device,
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
      <Tooltip label={name} shouldWrapChildren={true}>
        {(type === "PLUGIN" && dashboard.plugin === index) ||
        (type === "DEVICE" && dashboard.device === index)
          ? iconActive
          : icon}
      </Tooltip>
      <Text
        color={
          (dashboard.device === index && type === "DEVICE") ||
          (dashboard.plugin === index && type === "PLUGIN")
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
