import { AppContext } from "store";
import { useContext } from "react";
import { IMenuButton } from "type";
import { GridLayout } from "components";
import { MenuButton } from "ui";

export function ToolMenu() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;
  const initialValues: IMenuButton[] = [
    { index: 1, name: "Find Chessboard", color: "green" },
    { index: 2, name: "Warp Perspective", color: "green" },
    { index: 3, name: "Calibrating Point Tool", color: "green" },
    { index: 4, name: "Mapping Point Tool", color: "green" },
  ];
  return (
    <GridLayout gridColumn={initialValues.length} gap={2}>
      {initialValues.map((item, index) => (
        <MenuButton
          {...item}
          key={index}
          rootIndex={dashboard.plugin?.objectDetecting.viewer.tool!}
        />
      ))}
    </GridLayout>
  );
}
