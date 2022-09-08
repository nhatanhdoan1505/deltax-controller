import { AppContext, DashboardEvent } from "store";
import { GridLayout } from "components";
import { useContext } from "react";
import { IMenuButton } from "type";
import { MenuButton } from "ui";
import { appDispatch } from "utils";

export function ObjectDetectingMenu({ menu }: { menu: IMenuButton[] }) {
  const { state, dispatch } = useContext(AppContext);
  const { dashboard } = state;

  const onClick = (index: number) => {
    appDispatch({
      type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_MENU,
      payload: { screen: index },
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
          rootIndex={dashboard.plugin?.objectDetecting.screen!}
          onClick={() => onClick(item.index)}
        />
      ))}
    </GridLayout>
  );
}
