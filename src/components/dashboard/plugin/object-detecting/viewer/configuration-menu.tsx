import { MenuButton } from "ui";
import { GridLayout } from "components";
import { IMenuButton } from "type";
import { useContext } from "react";
import { AppContext, DashboardEvent } from "store";
import { appDispatch } from "utils";

export function ConfigurationMenu({ menu }: { menu: IMenuButton[] }) {
  const { state, dispatch } = useContext(AppContext);
  const { dashboard } = state;

  const onClick = (index: number) => {
    appDispatch({
      type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_CONFIGURATION,
      payload: { configuration: index },
      state,
      dispatch,
    });
  };
  return (
    <GridLayout gridRow={menu.length} w="auto" h="100%" gap={2}>
      {menu.map((item, index) => (
        <MenuButton
          {...item}
          key={index}
          rootIndex={dashboard.plugin?.objectDetecting.viewer.configuration!}
          onClick={() => onClick(item.index)}
        />
      ))}
    </GridLayout>
  );
}
