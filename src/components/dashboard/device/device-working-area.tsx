import { ScreenLayout } from "components";
import { useContext } from "react";
import { AppContext } from "store";
import { RobotWorkingArea } from ".";

export function DeviceWorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return dashboard.device ? (
    <ScreenLayout screen="DEVICE">
      {dashboard.device === 1 ? <RobotWorkingArea /> : null}
    </ScreenLayout>
  ) : null;
}
