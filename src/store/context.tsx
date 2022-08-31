import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { Action, InitialStateType, dashboardReducer } from ".";

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
    device: { screen: null, robot: { screen: 1 } },
    type: "full-screen",
  },
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ dashboard }: InitialStateType, action: Action) => ({
  dashboard: dashboardReducer(dashboard, action),
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
