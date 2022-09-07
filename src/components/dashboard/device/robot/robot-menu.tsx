import { GridLayout } from "components";
import { useContext } from "react";
import { AppContext, DashboardEvent } from "store";
import { IMenuButton } from "type";
import { MenuButton } from "ui";
import { appDispatch, findDeviceComponent } from "utils";

export function RobotMenu({ menu }: { menu: IMenuButton[] }) {
  const { state, dispatch } = useContext(AppContext);

  return (
    <GridLayout gridColumn={menu.length} w="100%" h="auto" gap={2}>
      {menu.map((item, index) => (
        <MenuButton
          {...item}
          key={index}
          rootIndex={findDeviceComponent({ state })?.screen!}
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
