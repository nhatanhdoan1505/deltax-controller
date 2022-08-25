import { HStack } from "@chakra-ui/react";
import { AppContext, DashboardEvent } from "store";
import { useContext } from "react";
import { IScreenOption } from "type";

export function OptionButton({ icon, color, type, screen }: IScreenOption) {
  const { state, dispatch } = useContext(AppContext);

  const onClickHandler = () => {
    dispatch({
      type: DashboardEvent.SET_SCREEN,
      payload: {
        plugin:
          (type === "close" && screen === "PLUGIN") ||
          (type === "full-screen" && screen === "DEVICE")
            ? { ...state.dashboard.plugin, screen: null }
            : { ...state.dashboard.plugin },
        device:
          (type === "close" && screen === "DEVICE") ||
          (type === "full-screen" && screen === "PLUGIN")
            ? { ...state.dashboard.device, screen: null }
            : { ...state.dashboard.device },
        type: type !== "close" ? type : "full-screen",
      },
    });
  };
  return (
    <HStack
      w="1.1rem"
      height="1.1rem"
      borderRadius="50%"
      backgroundColor={color}
      justifyContent="center"
      alignItems="center"
      _hover={{ cursor: "pointer" }}
      onClick={onClickHandler}
    >
      {icon}
    </HStack>
  );
}
