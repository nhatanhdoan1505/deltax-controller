import { HStack, Text } from "@chakra-ui/react";
import { AppContext, DashboardEvent } from "store";
import { useContext } from "react";
import { SlideInput } from "ui";
import { appDispatch } from "utils";
import { NumberInput } from "ui";

export function SpeedController({ value }: { value: number }) {
  const { state, dispatch } = useContext(AppContext);
  const onChange = (value: number) => {
    appDispatch({
      type: DashboardEvent.SET_DEVICE_ROBOT_JOGGING_SPEED,
      payload: { speed: value },
      dispatch,
      state,
    });
  };
  return (
    <HStack w="100%">
      <Text fontWeight="bold">Speed</Text>
      <NumberInput value={value} w="100%" min={1} max={100}/>
    </HStack>
  );
}
