import { findDeviceComponent } from "utils";
import { ScreenLayout } from "components";
import { useContext } from "react";
import { AppContext } from "store";
import { RobotTemplate, ConveyorTemplate, EncoderTemplate } from ".";

export function DeviceTemplate() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  const component = findDeviceComponent({ state });

  return dashboard.device?.screen ? (
    <ScreenLayout screen="DEVICE">
      {component?.type === "ROBOT" ? (
        <RobotTemplate robot={component} />
      ) : component?.type === "CONVEYOR" ? (
        <ConveyorTemplate />
      ) : (
        <EncoderTemplate />
      )}
    </ScreenLayout>
  ) : null;
}
