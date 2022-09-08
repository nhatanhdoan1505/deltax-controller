import { Dispatch } from "react";
import { Crop } from "react-image-crop";
import {
  Action,
  DashboardEvent,
  DeviceComponentType,
  InitialStateType,
} from "store";
import * as _ from "lodash";

interface IPayload {
  screen?: number;
  tool?: number;
  crop?: Crop;
  isApplyCrop?: boolean;
  optionScreen?:
    | "close"
    | "full-screen"
    | "horizontal-split"
    | "vertical-split";
  step?: string;
  speed?: number;
  addDevice?: "ROBOT" | "CONVEYOR" | "ENCODER";
  name?: string;
  configuration?: number;
}

export function appDispatch({
  type,
  payload,
  metaData,
  state,
  dispatch,
}: {
  state: InitialStateType;
  dispatch: Dispatch<Action>;
  type: DashboardEvent;
  payload: IPayload;
  metaData?: "PLUGIN" | "DEVICE";
}) {
  const { dashboard } = state;
  let component: DeviceComponentType[];
  switch (type) {
    case DashboardEvent.SET_SCREEN:
      if (["PLUGIN", "DEVICE"].includes(metaData!) && !payload.optionScreen) {
        dispatch({
          type: DashboardEvent.SET_SCREEN,
          payload: {
            plugin:
              metaData === "PLUGIN"
                ? { ...state.dashboard.plugin, screen: payload.screen! }
                : { ...state.dashboard.plugin },
            device:
              metaData === "DEVICE"
                ? { ...state.dashboard.device, screen: payload.screen! }
                : { ...state.dashboard.device },
            type: state.dashboard.type,
          },
        });
        break;
      }
      if (
        ["close", "full-screen", "horizontal-split", "vertical-split"].includes(
          payload.optionScreen!
        )
      )
        dispatch({
          type: DashboardEvent.SET_SCREEN,
          payload: {
            plugin:
              (payload.optionScreen === "close" && metaData === "PLUGIN") ||
              (payload.optionScreen === "full-screen" && metaData === "DEVICE")
                ? { ...state.dashboard.plugin, screen: null }
                : { ...state.dashboard.plugin },
            device:
              (payload.optionScreen === "close" && metaData === "DEVICE") ||
              (payload.optionScreen === "full-screen" && metaData === "PLUGIN")
                ? { ...state.dashboard.device, screen: null }
                : { ...state.dashboard.device },
            type:
              payload.optionScreen !== "close"
                ? payload.optionScreen
                : "full-screen",
          },
        });
      break;
    case DashboardEvent.SET_DEVICE_ROBOT_MENU:
      component = dashboard.device.component.map((item, index) => ({
        ...item,
        screen:
          index + 1 === dashboard.device.screen ? payload.screen! : item.screen,
      }));
      dispatch({
        type: DashboardEvent.SET_DEVICE_ROBOT_MENU,
        payload: {
          device: {
            ...dashboard.device,
            component,
          },
        },
      });
      break;
    case DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL:
      dispatch({
        type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL,
        payload: {
          plugin: {
            ...dashboard.plugin,
            objectDetecting: {
              ...dashboard.plugin.objectDetecting,
              viewer: {
                ...dashboard.plugin.objectDetecting.viewer,
                tool: payload.tool!,
              },
            },
          },
        },
      });
      break;
    case DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE:
      dispatch({
        type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE,
        payload: {
          plugin: {
            ...dashboard.plugin,
            objectDetecting: {
              ...dashboard.plugin.objectDetecting,
              viewer: {
                ...dashboard.plugin.objectDetecting.viewer,
                crop: {
                  ...dashboard.plugin.objectDetecting.viewer.crop,
                  crop: payload.crop!,
                },
              },
            },
          },
        },
      });
      break;
    case DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_IS_APPLY_CROP:
      dispatch({
        type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_IS_APPLY_CROP,
        payload: {
          plugin: {
            ...dashboard.plugin,
            objectDetecting: {
              ...dashboard.plugin.objectDetecting,
              viewer: {
                ...dashboard.plugin.objectDetecting.viewer,
                crop: {
                  ...dashboard.plugin.objectDetecting.viewer.crop,
                  isApplyCrop: payload.isApplyCrop!,
                },
              },
            },
          },
        },
      });
      break;
    case DashboardEvent.SET_DEVICE_ROBOT_JOGGING_STEP:
      component = dashboard.device.component.map((item, index) => {
        return item.type === "ROBOT"
          ? {
              ...item,
              jogging: {
                ...item.jogging,
                step:
                  index + 1 === dashboard.device.screen
                    ? +payload.step!
                    : item.jogging.step,
              },
            }
          : item;
      });
      dispatch({
        type: DashboardEvent.SET_DEVICE_ROBOT_JOGGING_STEP,
        payload: {
          device: {
            ...dashboard.device,
            component,
          },
        },
      });
      break;
    case DashboardEvent.SET_DEVICE_ROBOT_JOGGING_SPEED:
      component = dashboard.device.component.map((item, index) => ({
        ...item,
        jogging: {
          ...item.jogging,
          speed:
            index + 1 === dashboard.device.screen
              ? +payload.speed!
              : item.jogging.speed,
        },
      }));
      dispatch({
        type: DashboardEvent.SET_DEVICE_ROBOT_JOGGING_SPEED,
        payload: {
          device: {
            ...dashboard.device,
            component,
          },
        },
      });
      break;
    case DashboardEvent.ADD_MORE_DEVICE:
      const existComponent = state.dashboard.device.component.find(
        (item) => item.type === payload.addDevice!
      );
      const index = _.findLastIndex(
        state.dashboard.device.component,
        (item) => item.type === payload.addDevice!
      );
      existComponent
        ? state.dashboard.device.component.splice(index + 1, 0, {
            ...existComponent,
            name: `${payload.name}${index + 2}`,
          })
        : state.dashboard.device.component.push({
            type: payload.addDevice!,
            name: payload.name,
          } as DeviceComponentType);

      dispatch({
        type: DashboardEvent.ADD_MORE_DEVICE,
        payload: {
          device: {
            ...dashboard.device,
            component: state.dashboard.device.component,
          },
        },
      });
      break;
    case DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_CONFIGURATION:
      dispatch({
        type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_CONFIGURATION,
        payload: {
          plugin: {
            ...dashboard.plugin,
            objectDetecting: {
              ...dashboard.plugin.objectDetecting,
              viewer: {
                ...dashboard.plugin.objectDetecting.viewer,
                configuration: payload.configuration!,
              },
            },
          },
        },
      });
      break;
    case DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_MENU:
      dispatch({
        type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_MENU,
        payload: {
          plugin: {
            ...dashboard.plugin,
            objectDetecting: {
              ...dashboard.plugin.objectDetecting,
              screen: payload.screen!,
            },
          },
        },
      });
      break;
    default:
      break;
  }
}
