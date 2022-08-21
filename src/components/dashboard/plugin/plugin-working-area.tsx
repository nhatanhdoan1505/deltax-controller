import { ScreenLayout } from "components";
import { useContext } from "react";
import { AppContext } from "store";

export function PluginWorkingArea() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return dashboard.plugin ? (
    <ScreenLayout screen="PLUGIN">
      <></>
    </ScreenLayout>
  ) : null;
}
