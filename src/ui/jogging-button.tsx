import { Button } from "@chakra-ui/react";
import { AppContext, DashboardEvent, Direction } from "store";
import { useClickController } from "hook";
import { useContext, useState } from "react";
import { IJoggingButton } from "type";
import { appDispatch } from "utils";

export function JoggingButton({ type, name, color }: IJoggingButton) {
  const { state, dispatch } = useContext(AppContext);
  const { step, speed } = state.dashboard.device.component.find(
    (item, index) => index + 1 === state.dashboard.device.screen
  )?.jogging as { step: number; speed: number };

  const [isController, _setIsController] = useState<boolean>(
    ["LEFT", "RIGHT", "FORWARD", "BACKWARD", "UP", "DOWN", "HOME"].includes(
      type
    )
  );
  const value: {
    step: number;
    direction: Direction;
  } =
    type === "RIGHT"
      ? { direction: "RIGHT" as unknown as Direction, step }
      : type === "LEFT"
      ? { direction: "LEFT" as unknown as Direction, step }
      : type === "BACKWARD"
      ? { direction: "BACKWARD" as unknown as Direction, step }
      : type === "FORWARD"
      ? { direction: "FORWARD" as unknown as Direction, step }
      : type === "UP"
      ? { direction: "UP" as unknown as Direction, step }
      : { direction: "DOWN" as unknown as Direction, step };

  const { onMouseDown, onMouseUp, onPressHandler } = useClickController({
    value: { jogging: value },
    speed,
  });

  const stepClick = () => {
    appDispatch({
      type: DashboardEvent.SET_DEVICE_ROBOT_JOGGING_STEP,
      payload: {
        step: type as unknown as "0.5" | "1" | "10" | "50" | "100",
      },
      state,
      dispatch,
    });
  };
  return (
    <Button
      colorScheme={color}
      w="100%"
      onClick={isController ? onPressHandler : stepClick}
      onTouchStart={isController ? onMouseDown : () => true}
      onTouchEnd={isController ? onMouseUp : () => true}
      onMouseDown={isController ? onMouseDown : () => true}
      onMouseUp={isController ? onMouseUp : () => true}
      isActive={type === step.toString()}
    >
      {name}
    </Button>
  );
}
