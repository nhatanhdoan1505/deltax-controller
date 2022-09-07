import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import ChevronDownIcon from "@chakra-ui/icon";
import { SideBar } from "components";
import { useContext, useState } from "react";
import { Draggable, DropResult } from "react-beautiful-dnd";
import { IDevice } from "type";
import { SidebarButton } from "ui";
import { appDispatch, reorder } from "utils";
import { AiFillPlusSquare } from "react-icons/ai";
import { AppContext, DashboardEvent } from "store";

export function DeviceSidebar({ devices }: { devices: IDevice[] }) {
  const { state, dispatch } = useContext(AppContext);
  const moreDevice: { name: string; type: "ROBOT" | "CONVEYOR" | "ENCODER" }[] =
    [
      { name: "Robot", type: "ROBOT" },
      { name: "Conveyor", type: "CONVEYOR" },
      { name: "Encoder", type: "ENCODER" },
    ];

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    // const _devices = reorder({
    //   list: devicesState,
    //   startIndex: result.source.index,
    //   endIndex: result.destination.index,
    // });

    // setDevicesState(_devices);
  };

  const onClickAddDevice = ({
    type,
    name,
  }: {
    type: "ROBOT" | "CONVEYOR" | "ENCODER";
    name: string;
  }) => {
    appDispatch({
      type: DashboardEvent.ADD_MORE_DEVICE,
      payload: { addDevice: type, name },
      state,
      dispatch,
    });
  };

  return (
    <SideBar onDragEnd={onDragEnd} id="device">
      <>
        {devices.map((item, index) => (
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
            index={index + 1}
            // refs={provided.innerRef}
            // {...provided.draggableProps}
            // {...provided.dragHandleProps}
          />
        ))}
        <Menu>
          <MenuButton as="button">
            <AiFillPlusSquare fontSize="2rem" />
          </MenuButton>
          <MenuList>
            {moreDevice.map(({ name, type }) => (
              <MenuItem
                onClick={() => onClickAddDevice({ type, name })}
                key={name}
              >
                {name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </>
    </SideBar>
  );
}
