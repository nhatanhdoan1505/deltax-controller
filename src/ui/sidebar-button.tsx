import { Text, VStack } from "@chakra-ui/react";
import { appDispatch } from "utils";
import { useContext } from "react";
import { AppContext, DashboardEvent } from "store";
import { IDevice, IPlugin } from "type";

interface IProps extends Omit<IPlugin, "type">, Omit<IDevice, "type"> {
  type: "DEVICE" | "PLUGIN";
  refs?: any;
}

export function SidebarButton({
  name,
  icon,
  iconActive,
  type,
  index,
  refs,
}: IProps) {
  const { state, dispatch } = useContext(AppContext);

  const { dashboard } = state;
  const onClickHandler = () =>
    appDispatch({
      state,
      dispatch,
      type: DashboardEvent.SET_SCREEN,
      payload: { screen: index },
      metaData: type,
    });


  return (
    <VStack
      border="1px solid white"
      p={1}
      borderRadius="base"
      _hover={{ cursor: "pointer" }}
      onClick={onClickHandler}
      ref={refs ? refs : null}
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
