import {
  DashboardType,
  DashboardPayload,
  ReducerAction,
  DashboardEvent,
  DeviceComponentType,
} from "store";

export const dashboardReducer = (
  state: DashboardType,
  action: ReducerAction<DashboardEvent, DashboardPayload>
): DashboardType => {
  let component: DeviceComponentType[];
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
    case DashboardEvent.SET_DEVICE_ROBOT_MENU:
      return {
        ...state,
        device: {
          ...state.device,
          component: action.payload.device?.component!,
        },
      };
    case DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL:
      return {
        ...state,
        plugin: {
          ...state.plugin,
          objectDetecting: {
            ...state.plugin.objectDetecting,
            viewer: {
              ...state.plugin.objectDetecting.viewer,
              tool: action.payload.plugin?.objectDetecting.viewer.tool!,
            },
          },
        },
      };
    case DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE:
      return {
        ...state,
        plugin: {
          ...state.plugin,
          objectDetecting: {
            ...state.plugin.objectDetecting,
            viewer: {
              ...state.plugin.objectDetecting.viewer,
              crop: {
                ...state.plugin.objectDetecting.viewer.crop,
                crop: action.payload.plugin?.objectDetecting.viewer.crop.crop!,
              },
            },
          },
        },
      };
    case DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_IS_APPLY_CROP:
      return {
        ...state,
        plugin: {
          ...state.plugin,
          objectDetecting: {
            ...state.plugin.objectDetecting,
            viewer: {
              ...state.plugin.objectDetecting.viewer,
              crop: {
                ...state.plugin.objectDetecting.viewer.crop,
                isApplyCrop:
                  action.payload.plugin?.objectDetecting.viewer.crop
                    .isApplyCrop!,
              },
            },
          },
        },
      };
    case DashboardEvent.SET_DEVICE_ROBOT_JOGGING_STEP:
      return {
        ...state,
        device: {
          ...state.device,
          component: action.payload.device?.component!,
        },
      };
    case DashboardEvent.SET_DEVICE_ROBOT_JOGGING_SPEED:
      return {
        ...state,
        device: {
          ...state.device,
          component: action.payload.device?.component!,
        },
      };
    case DashboardEvent.ADD_MORE_DEVICE:
      return {
        ...state,
        device: {
          ...state.device,
          component: action.payload.device?.component!,
        },
      };
    default:
      return state;
  }
};
