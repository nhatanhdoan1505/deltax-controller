import { useContext } from "react";
import { AppContext } from "store";
import { FullScreen, HorizontalSplit, VerticalSplit } from ".";
import { Scene } from "components";
import { DeviceTemplate, PluginTemplate } from "template";

export function WorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return !dashboard.device?.screen && !dashboard.plugin?.screen ? // <Scene />
  null : dashboard.type === "full-screen" &&
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
