import { Crop } from "react-image-crop";
import { Socket } from "socket.io-client";

export type Action = ReducerAction<Event, Payload>;

export type InitialStateType = {
  module: number;
  dashboard: DashboardType;
  socket: Socket;
};

export type ReducerAction<T, P> = {
  type: T;
  payload: P;
};

export interface Payload extends DashboardPayload {}

export type Event = DashboardEvent | SocketEvent;

export enum DashboardEvent {
  SET_SCREEN = "SET_SCREEN",
  SET_DEVICE_ROBOT_MENU = "SET_DEVICE_ROBOT_MENU",
  SET_DEVICE_ROBOT_JOGGING_STEP = "SET_DEVICE_ROBOT_JOGGING_STEP",
  SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL = "SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL",
  SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE = "SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE",
  SET_PLUGIN_OBJECT_DETECTING_VIEWER_IS_APPLY_CROP = "SET_PLUGIN_OBJECT_DETECTING_VIEWER_IS_APPLY_CROP",
}

export enum SocketEvent {
  MOVE = "MOVE",
}

export enum Direction {
  FORWARD,
  BACKWARD,
  LEFT,
  RIGHT,
  UP,
  DOWN,
}
export interface SocketPayload {
  jogging: {
    direction: Direction;
    step: number;
  };
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
  robot: { screen: number | null; jogging: { speed: number; step: number } };
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
