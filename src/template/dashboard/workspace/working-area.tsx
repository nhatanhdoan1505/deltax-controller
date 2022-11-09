import { Scene } from "components";
import { useContext } from "react";
import { AppContext } from "store";
import { DeviceTemplate, PluginTemplate } from "template";
import { FullScreen, HorizontalSplit, VerticalSplit } from ".";

export function WorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return !dashboard.device?.screen && !dashboard.plugin?.screen ? (
    <Scene />
  ) : dashboard.type === "full-screen" && // <Scene />
    dashboard.plugin?.screen &&
    !dashboard.device?.screen ? (
    <FullScreen>
      <PluginTemplate />
    </FullScreen>
  ) : dashboard.type === "full-screen" &&
    dashboard.device?.screen &&
    !dashboard.plugin?.screen ? (
    <FullScreen>
      <DeviceTemplate />
    </FullScreen>
  ) : dashboard.type === "horizontal-split" ? (
    <HorizontalSplit
      pluginScreen={<PluginTemplate />}
      deviceScreen={<DeviceTemplate />}
    />
  ) : dashboard.type === "vertical-split" ? (
    <VerticalSplit
      pluginScreen={<PluginTemplate />}
      deviceScreen={<DeviceTemplate />}
    />
  ) : null;
}
