import { AppContext } from "store";
import { useContext } from "react";
import { Joystick as JoystickComponent } from "react-joystick-component";
import { useHeightQuery } from "hook";

export function Joystick() {
  const queryHeight460 = useHeightQuery({ value: 560 });
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return (
    <JoystickComponent
      baseColor="#48BB78"
      stickColor="#f8f8f8"
      size={queryHeight460 ? 50 : 100}
    />
  );
}
