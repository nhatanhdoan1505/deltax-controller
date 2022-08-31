import { AppContext, DashboardEvent } from "store";
import { useContext } from "react";
import { IMenuButton } from "type";
import { GridLayout } from "components";
import { MenuButton } from "ui";
import { appDispatch } from "utils";

export function ToolMenu({ menu }: { menu: IMenuButton[] }) {
  const { state, dispatch } = useContext(AppContext);
  const { dashboard } = state;

  const onClick = ({ index }: { index: number }) => {
    appDispatch({
      type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL,
      payload: { tool: index },
      state,
      dispatch,
    });
  };
  return (
    <GridLayout gridColumn={menu.length} gap={2}>
      {menu.map((item, index) => (
        <MenuButton
          {...item}
          key={index}
          onClick={() => onClick({ index: index + 1 })}
          rootIndex={dashboard.plugin?.objectDetecting.viewer.tool!}
        />
      ))}
    </GridLayout>
  );
}
