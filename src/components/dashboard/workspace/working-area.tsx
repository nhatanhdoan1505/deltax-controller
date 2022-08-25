import { useContext } from "react";
import { AppContext } from "store";
import { FullScreen, HorizontalSplit, VerticalSplit } from ".";
import { DeviceWorkingArea, PluginWorkingArea, Scene } from "components";

export function WorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return !dashboard.device.screen && !dashboard.plugin.screen ? (
    <Scene />
  ) : dashboard.type === "full-screen" &&
    dashboard.plugin.screen &&
    !dashboard.device.screen ? (
    <FullScreen>
      <PluginWorkingArea />
    </FullScreen>
  ) : dashboard.type === "full-screen" &&
    dashboard.device.screen &&
    !dashboard.plugin.screen ? (
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
