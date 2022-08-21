import { SideBar } from "components";
import { IPlugin } from "type";
import { SidebarButton } from "ui";

export function PluginSidebar({ plugins }: { plugins: IPlugin[] }) {
  return (
    <SideBar>
      {plugins &&
        plugins.map((item) => <SidebarButton {...item} key={item.name} />)}
    </SideBar>
  );
}
