import { ObjectDetectingWorkingArea, ScreenLayout } from "components";
import { useContext } from "react";
import { AppContext } from "store";

export function PluginWorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return dashboard.plugin?.screen ? (
    <ScreenLayout screen="PLUGIN">
      {dashboard.plugin.screen === 3 ? <ObjectDetectingWorkingArea /> : null}
    </ScreenLayout>
  ) : null;
}
