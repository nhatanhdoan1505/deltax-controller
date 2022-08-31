import { AppContext, DashboardEvent } from "store";
import { GridLayout } from "components";
import { useContext } from "react";
import { IMenuButton } from "type";
import { MenuButton } from "ui";
import { appDispatch } from "utils";

export function RobotMenu({ menu }: { menu: IMenuButton[] }) {
  const { state, dispatch } = useContext(AppContext);
  const { dashboard } = state;

  return (
    <GridLayout gridColumn={menu.length} w="100%" h="auto" gap={2}>
      {menu.map((item, index) => (
        <MenuButton
          {...item}
          key={index}
          rootIndex={dashboard.device?.robot?.screen!}
          onClick={() => {
            appDispatch({
              type: DashboardEvent.SET_DEVICE_ROBOT_MENU,
              payload: { screen: item.index },
              state,
              dispatch,
            });
          }}
        />
      ))}
    </GridLayout>
  );
}
