import { InitialStateType } from "store";

export const reorder = ({
  list,
  startIndex,
  endIndex,
}: {
  list: Array<any>;
  startIndex: number;
  endIndex: number;
}) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const findDeviceComponent = ({ state }: { state: InitialStateType }) => {
  return state.dashboard.device.component.find(
    (_item, index) => index + 1 === state.dashboard.device.screen
  );
};
