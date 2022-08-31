import { MenuButton } from "ui";
import { GridLayout } from "components";
import { IMenuButton } from "type";
import { useContext } from "react";
import { AppContext } from "store";

export function ConfigurationMenu({ menu }: { menu: IMenuButton[] }) {
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  return (
    <GridLayout gridRow={menu.length} w="auto" h="100%" gap={2}>
      {menu.map((item, index) => (
        <MenuButton
          {...item}
          key={index}
          rootIndex={dashboard.plugin?.objectDetecting.viewer.configuration!}
        />
      ))}
    </GridLayout>
  );
}
