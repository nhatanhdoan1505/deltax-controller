import { createContext, Dispatch, ReactNode, useReducer } from "react";
import {
  Action,
  InitialStateType,
  dashboardReducer,
  ReducerAction,
  DashboardPayload,
  DashboardEvent,
} from ".";
import { io } from "socket.io-client";

const initialState: InitialStateType = {
  module: 4,
  dashboard: {
    plugin: {
      screen: null,
      objectDetecting: {
        screen: 1,
        viewer: {
          configuration: 1,
          tool: null,
          crop: { crop: null, isApplyCrop: false },
        },
      },
    },
    device: {
      screen: null,
      component: [
        {
          screen: 1,
          jogging: {
            speed: 70,
            step: 0.5,
            axis: [
              { name: "4-Axis", value: 30 },
              { name: "5-Axis", value: 30 },
              { name: "6-Axis", value: 30 },
            ],
            xyz: [
              { value: 30, name: "X" },
              { value: 30, name: "Y" },
              { value: 30, name: "Z" },
            ],
          },
          name: "Robot1",
          type: "ROBOT",
        },
      ],
    },
    type: "full-screen",
  },
  socket: io(
    `http://${process.env.REACT_APP_SERVER_ADDRESS}:${process.env.REACT_APP_SERVER_PORT}`
  ),
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { dashboard, socket }: InitialStateType,
  action: Action
) => ({
  dashboard: dashboardReducer(
    dashboard,
    action as unknown as ReducerAction<DashboardEvent, DashboardPayload>
  ),
  socket: socket,
  module: 4,
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState as never);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
