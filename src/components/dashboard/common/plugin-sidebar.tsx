import { SideBar } from "components";
import { useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { IPlugin } from "type";
import { SidebarButton } from "ui";
import { reorder } from "utils";

export function PluginSidebar({ plugins }: { plugins: IPlugin[] }) {
  const [pluginsState, setPluginsState] = useState<IPlugin[]>(plugins);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const _plugin = reorder({
      list: pluginsState,
      startIndex: result.source.index,
      endIndex: result.destination.index,
    });

    setPluginsState(_plugin);
  };
  return (
    <SideBar onDragEnd={onDragEnd} id="plugin">
      {pluginsState.map((item, index) => (
        // <Draggable draggableId={index.toString()} index={index} key={index}>
        //   {(provided) => (
        //     <SidebarButton
        //       {...item}
        //       key={item.name}
        //       refs={provided.innerRef}
        //       {...provided.draggableProps}
        //       {...provided.dragHandleProps}
        //     />
        //   )}
        // </Draggable>
        <SidebarButton
          {...item}
          key={item.name}
          // refs={provided.innerRef}
          // {...provided.draggableProps}
          // {...provided.dragHandleProps}
        />
      ))}
    </SideBar>
  );
}
