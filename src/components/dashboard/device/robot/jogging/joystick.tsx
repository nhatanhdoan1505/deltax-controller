import { useHeightQuery } from "hook";
import { Joystick as JoystickComponent } from "react-joystick-component";

export function Joystick() {
  const queryHeight460 = useHeightQuery({ value: 450 });

  return (
    <JoystickComponent
      baseColor="#48BB78"
      stickColor="#f8f8f8"
      size={queryHeight460 ? 50 : 100}
    />
  );
}
