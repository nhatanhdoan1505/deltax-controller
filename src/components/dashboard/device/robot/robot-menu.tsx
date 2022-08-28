import { AppContext, DashboardEvent } from "store";
import { GridLayout } from "components";
import { useContext } from "react";
import { IMenuButton } from "type";
import { MenuButton } from "ui";

export function RobotMenu() {
  const { state, dispatch } = useContext(AppContext);
  const { dashboard } = state;
  const initialValues: IMenuButton[] = [
    { index: 1, name: "Jogging", color: "green" },
    { index: 2, name: "I/O", color: "green" },
    { index: 3, name: "Parameter", color: "green" },
    { index: 4, name: "Remote", color: "green" },
    { index: 5, name: "Setting", color: "green" },
  ];

  return (
    <GridLayout gridColumn={initialValues.length} w="100%" h="auto" gap={2}>
      {initialValues.map((item, index) => (
        <MenuButton
          {...item}
          key={index}
          rootIndex={dashboard.device?.robot?.screen!}
          onClick={() => {
            console.log("aaa");
            dispatch({
              type: DashboardEvent.SET_ROBOT_MENU,
              payload: {
                device: {
                  ...dashboard.device,
                  robot: { screen: item.index },
                },
              },
            });
          }}
        />
      ))}
    </GridLayout>
  );
}
