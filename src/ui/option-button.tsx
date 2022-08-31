import { HStack } from "@chakra-ui/react";
import { AppContext, DashboardEvent } from "store";
import { useContext } from "react";
import { IScreenOption } from "type";
import { appDispatch } from "utils";

export function OptionButton({ icon, color, type, screen }: IScreenOption) {
  const { state, dispatch } = useContext(AppContext);

  const onClickHandler = () =>
    appDispatch({
      type: DashboardEvent.SET_SCREEN,
      payload: { optionScreen: type },
      metaData: screen,
      state,
      dispatch,
    });

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
