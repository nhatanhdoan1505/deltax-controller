import { AppContext } from "store";
import { GridLayout } from "components";
import { useContext } from "react";
import { IMenuButton } from "type";
import { MenuButton } from "ui";

export function ObjectDetectingMenu() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;
  const initialValues: IMenuButton[] = [
    { index: 1, name: "Viewer", color: "green" },
    { index: 2, name: "Source", color: "green" },
    { index: 3, name: "Calibration", color: "green" },
    { index: 4, name: "Object", color: "green" },
  ];

  return (
    <GridLayout props={{ gridColumn: initialValues.length, gap: 2 }}>
      {initialValues.map((item, index) => (
        <MenuButton
          {...item}
          key={index}
          rootIndex={dashboard.plugin.objectDetecting.screen!}
        />
      ))}
    </GridLayout>
  );
}
