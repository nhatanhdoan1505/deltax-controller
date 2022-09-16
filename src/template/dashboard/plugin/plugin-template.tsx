import { AppContext } from "store";
import { useContext } from "react";
import { ScreenLayout } from "components";
import { ObjectDetectingTemplate } from ".";
import { ScriptTemplate } from ".";

export function PluginTemplate() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return dashboard.plugin?.screen ? (
    <ScreenLayout screen="PLUGIN">
      {dashboard.plugin.screen === 3 ? (
        <ObjectDetectingTemplate />
      ) : dashboard.plugin.screen === 2 ? (
        <ScriptTemplate />
      ) : null}
    </ScreenLayout>
  ) : null;
}
