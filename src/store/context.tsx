import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { Action, InitialStateType } from ".";

const initialState: InitialStateType = {};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({}: InitialStateType, action: Action) => ({
  //   controller: controllerReducer(controller, action),
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
