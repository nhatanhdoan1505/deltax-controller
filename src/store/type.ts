import { Crop } from "react-image-crop";

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
  SET_DEVICE_ROBOT_MENU = "SET_DEVICE_ROBOT_MENU",
  SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL = "SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL",
  SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE = "SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE",
  SET_PLUGIN_OBJECT_DETECTING_VIEWER_IS_APPLY_CROP = "SET_PLUGIN_OBJECT_DETECTING_VIEWER_IS_APPLY_CROP",
}

export interface PluginType {
  screen: number | null;
  objectDetecting: {
    screen: number | null;
    viewer: {
      configuration: number | null;
      tool: number | null;
      crop: { crop: Crop | null; isApplyCrop: boolean };
    };
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
  type?: "full-screen" | "horizontal-split" | "vertical-split";
}
