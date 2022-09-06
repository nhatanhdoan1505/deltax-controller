import { Text } from "@chakra-ui/react";
import { SideBar } from "components";
import { useState } from "react";
import { Draggable, DropResult } from "react-beautiful-dnd";
import { IDevice } from "type";
import { SidebarButton } from "ui";
import { reorder } from "utils";

export function DeviceSidebar({ devices }: { devices: IDevice[] }) {
  const [devicesState, setDevicesState] = useState<IDevice[]>(devices);
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const _devices = reorder({
      list: devicesState,
      startIndex: result.source.index,
      endIndex: result.destination.index,
    });

    setDevicesState(_devices);
  };
  return (
    <SideBar onDragEnd={onDragEnd} id="">
      <>
        {devicesState.map((item, index) => (
          <Draggable draggableId={index.toString()} index={index} key={index}>
            {(provided) => (
              <SidebarButton
                {...item}
                key={item.name}
                refs={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              />
            )}
          </Draggable>
        ))}
        <Text fontWeight="semibold" textAlign="center" mt="auto" fontSize="sm">
          Add Device +
        </Text>
      </>
    </SideBar>
  );
}
