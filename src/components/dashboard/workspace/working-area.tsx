import { useContext } from "react";
import { AppContext } from "store";
import { FullScreen, HorizontalSplit, VerticalSplit } from ".";
import { DeviceWorkingArea, PluginWorkingArea } from "components";

export function WorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return !dashboard.device && !dashboard.plugin ? null : dashboard.type ===
      "full-screen" &&
    dashboard.plugin &&
    !dashboard.device ? (
    <FullScreen>
      <PluginWorkingArea />
    </FullScreen>
  ) : dashboard.type === "full-screen" &&
    dashboard.device &&
    !dashboard.plugin ? (
    <FullScreen>
      <DeviceWorkingArea />
    </FullScreen>
  ) : dashboard.type === "horizontal-split" ? (
    <HorizontalSplit
      pluginScreen={<PluginWorkingArea />}
      deviceScreen={<DeviceWorkingArea />}
    />
  ) : dashboard.type === "vertical-split" ? (
    <VerticalSplit
      pluginScreen={<PluginWorkingArea />}
      deviceScreen={<DeviceWorkingArea />}
    />
  ) : null;
}
