import { ScreenLayout } from "components";
import { useContext } from "react";
import { AppContext } from "store";
import { RobotWorkingArea } from ".";

export function DeviceWorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return dashboard.device?.screen ? (
    <ScreenLayout screen="DEVICE">
      {dashboard.device.screen === 1 ? <RobotWorkingArea /> : null}
    </ScreenLayout>
  ) : null;
}
