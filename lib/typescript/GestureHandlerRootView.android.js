import * as React from 'react';
import { requireNativeComponent } from 'react-native';
const GestureHandlerRootViewNative = requireNativeComponent('GestureHandlerRootView');
export default function GestureHandlerRootView({ children, ...rest }) {
    return (<GestureHandlerRootViewNative {...rest}>
      {children}
    </GestureHandlerRootViewNative>);
}
