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
          payload.plugin && payload.device && payload.type === "full-screen"
            ? "horizontal-split"
            : payload.type,
      };
    default:
      return state;
  }
};
