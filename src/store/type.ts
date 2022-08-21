export type Action = ReducerAction<DashboardEvent, DashboardPayload>;
export type InitialStateType = {
  module: number;
  dashboard: DashboardType;
};

export type ReducerAction<T, P> = {
  type: T;
  payload: P;
};

export enum DashboardEvent {
  SET_SCREEN = "SET_SCREEN",
}
export interface DashboardType {
  deviceMenuItem: number | null;
  plugin: number | null;
  device: number | null;
  type: "full-screen" | "horizontal-split" | "vertical-split";
}

export interface DashboardPayload {
  plugin?: number | null;
  device: number | null;
  deviceMenuItem?: number | null;
  type?: "full-screen" | "horizontal-split" | "vertical-split";
}
