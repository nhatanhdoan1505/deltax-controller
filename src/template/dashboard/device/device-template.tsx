import { ScreenLayout } from "components";
import { useContext } from "react";
import { AppContext } from "store";
import { RobotTemplate } from ".";

export function DeviceTemplate() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return dashboard.device?.screen ? (
    <ScreenLayout screen="DEVICE">
      {dashboard.device.screen === 1 ? <RobotTemplate /> : null}
    </ScreenLayout>
  ) : null;
}
