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

export interface PluginType {
  screen: number | null;
  objectDetecting: {
    screen: number | null;
    viewer: { configuration: number | null; tool: number | null };
  };
}

export interface DevicePlugin {
  screen: number | null;
  robot: { screen: number | null };
}
export interface DashboardType {
  plugin: PluginType;
  device: DevicePlugin;
  type: "full-screen" | "horizontal-split" | "vertical-split";
}

export interface DashboardPayload {
  plugin?: PluginType;
  device?: DevicePlugin;
  type: "full-screen" | "horizontal-split" | "vertical-split";
}
