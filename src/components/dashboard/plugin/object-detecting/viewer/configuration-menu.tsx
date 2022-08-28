import { MenuButton } from "ui";
import { GridLayout } from "components";
import { IMenuButton } from "type";
import { useContext } from "react";
import { AppContext } from "store";

export function ConfigurationMenu() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;
  const initialValues: IMenuButton[] = [
    { index: 1, name: "Calib Image", color: "green" },
    { index: 2, name: "Color Filter", color: "green" },
    { index: 3, name: "Origin", color: "green" },
  ];
  return (
    <GridLayout gridRow={initialValues.length} w="auto" h="100%" gap={2}>
      {initialValues.map((item, index) => (
        <MenuButton
          {...item}
          key={index}
          rootIndex={dashboard.plugin?.objectDetecting.viewer.configuration!}
        />
      ))}
    </GridLayout>
  );
}
