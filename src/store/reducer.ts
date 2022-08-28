import {
  DashboardType,
  DashboardPayload,
  ReducerAction,
  DashboardEvent,
} from ".";

export const dashboardReducer = (
  state: DashboardType,
  action: ReducerAction<DashboardEvent, DashboardPayload>
): DashboardType => {
  switch (action?.type) {
    case DashboardEvent.SET_SCREEN:
      let payload = { ...state, ...action.payload };
      return {
        ...payload,
        type:
          payload.plugin?.screen &&
          payload.device?.screen &&
          payload.type === "full-screen"
            ? "vertical-split"
            : payload.type,
      };
    case DashboardEvent.SET_ROBOT_MENU:
      return {
        ...state,
        device: {
          ...state.device,
          robot: {
            ...state.device?.robot,
            screen: action.payload.device?.robot?.screen!,
          },
        },
      };

    default:
      return state;
  }
};
