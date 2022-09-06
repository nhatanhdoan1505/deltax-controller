import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

export function SideBar({
  children,
  onDragEnd,
  id,
}: {
  children: ReactNode;
  onDragEnd: (result: DropResult) => void;
  id: string;
}) {
  return (
    <VStack
      backgroundColor="whiteAlpha.500"
      color="black"
      boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
      alignItems="center"
      borderRadius="base"
      p={2}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={id}>
          {(provided) => (
            <VStack ref={provided.innerRef} {...provided.droppableProps}>
              {children}
              {provided.placeholder}
            </VStack>
          )}
        </Droppable>
      </DragDropContext>
    </VStack>
  );
}
