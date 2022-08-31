import { AppContext } from "store";
import { GridLayout } from "components";
import { useContext } from "react";
import { IMenuButton } from "type";
import { MenuButton } from "ui";

export function ObjectDetectingMenu({ menu }: { menu: IMenuButton[] }) {
  const { state } = useContext(AppContext);
  const { dashboard } = state;
 
  return (
    <GridLayout gridColumn={menu.length} gap={2}>
      {menu.map((item, index) => (
        <MenuButton
          {...item}
          key={index}
          rootIndex={dashboard.plugin?.objectDetecting.screen!}
        />
      ))}
    </GridLayout>
  );
}
