import { Platform, findNodeHandle as findNodeHandleRN } from 'react-native';
import { handlerIDToTag } from './handlersRegistry';
import { toArray } from '../utils';
const commonProps = [
    'id',
    'enabled',
    'shouldCancelWhenOutside',
    'hitSlop',
];
const componentInteractionProps = ['waitFor', 'simultaneousHandlers'];
export const baseGestureHandlerProps = [
    ...commonProps,
    ...componentInteractionProps,
    'onBegan',
    'onFailed',
    'onCancelled',
    'onActivated',
    'onEnded',
    'onGestureEvent',
    'onHandlerStateChange',
];
export const baseGestureHandlerWithMonitorProps = [
    ...commonProps,
    'needsPointerData',
    'manualActivation',
];
function isConfigParam(param, name) {
    // param !== Object(param) returns false if `param` is a function
    // or an object and returns true if `param` is null
    return (param !== undefined &&
        (param !== Object(param) ||
            !('__isNative' in param)) &&
        name !== 'onHandlerStateChange' &&
        name !== 'onGestureEvent');
}
export function filterConfig(props, validProps, defaults = {}) {
    const filteredConfig = { ...defaults };
    for (const key of validProps) {
        let value = props[key];
        if (isConfigParam(value, key)) {
            if (key === 'simultaneousHandlers' || key === 'waitFor') {
                value = transformIntoHandlerTags(props[key]);
            }
            else if (key === 'hitSlop' && typeof value !== 'object') {
                value = { top: value, left: value, bottom: value, right: value };
            }
            filteredConfig[key] = value;
        }
    }
    return filteredConfig;
}
function transformIntoHandlerTags(handlerIDs) {
    handlerIDs = toArray(handlerIDs);
    if (Platform.OS === 'web') {
        return handlerIDs
            .map(({ current }) => current)
            .filter((handle) => handle);
    }
    // converts handler string IDs into their numeric tags
    return handlerIDs
        .map((handlerID) => handlerIDToTag[handlerID] || handlerID.current?.handlerTag || -1)
        .filter((handlerTag) => handlerTag > 0);
}
export function findNodeHandle(node) {
    if (Platform.OS === 'web')
        return node;
    return findNodeHandleRN(node);
}
