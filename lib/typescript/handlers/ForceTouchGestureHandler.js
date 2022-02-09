import React from 'react';
import PlatformConstants from '../PlatformConstants';
import createHandler from './createHandler';
import { baseGestureHandlerProps, } from './gestureHandlerCommon';
export const forceTouchGestureHandlerProps = [
    'minForce',
    'maxForce',
    'feedbackOnActivation',
];
class ForceTouchFallback extends React.Component {
    static forceTouchAvailable = false;
    componentDidMount() {
        console.warn('ForceTouchGestureHandler is not available on this platform. Please use ForceTouchGestureHandler.forceTouchAvailable to conditionally render other components that would provide a fallback behavior specific to your usecase');
    }
    render() {
        return this.props.children;
    }
}
export const forceTouchHandlerName = 'ForceTouchGestureHandler';
// eslint-disable-next-line @typescript-eslint/no-redeclare -- backward compatibility; see description on the top of gestureHandlerCommon.ts file
export const ForceTouchGestureHandler = PlatformConstants?.forceTouchAvailable
    ? createHandler({
        name: forceTouchHandlerName,
        allowedProps: [
            ...baseGestureHandlerProps,
            ...forceTouchGestureHandlerProps,
        ],
        config: {},
    })
    : ForceTouchFallback;
ForceTouchGestureHandler.forceTouchAvailable =
    PlatformConstants?.forceTouchAvailable || false;
