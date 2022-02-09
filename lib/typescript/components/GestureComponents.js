import * as React from 'react';
import { ScrollView as RNScrollView, Switch as RNSwitch, TextInput as RNTextInput, DrawerLayoutAndroid as RNDrawerLayoutAndroid, FlatList as RNFlatList, } from 'react-native';
import createNativeWrapper from '../handlers/createNativeWrapper';
import { nativeViewProps, } from '../handlers/NativeViewGestureHandler';
export const ScrollView = createNativeWrapper(RNScrollView, {
    disallowInterruption: true,
    shouldCancelWhenOutside: false,
});
export const Switch = createNativeWrapper(RNSwitch, {
    shouldCancelWhenOutside: false,
    shouldActivateOnStart: true,
    disallowInterruption: true,
});
export const TextInput = createNativeWrapper(RNTextInput);
export const DrawerLayoutAndroid = createNativeWrapper(RNDrawerLayoutAndroid, { disallowInterruption: true });
export const FlatList = React.forwardRef((props, ref) => {
    const flatListProps = {};
    const scrollViewProps = {};
    for (const [propName, value] of Object.entries(props)) {
        // https://github.com/microsoft/TypeScript/issues/26255
        if (nativeViewProps.includes(propName)) {
            // @ts-ignore - this function cannot have generic type so we have to ignore this error
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            scrollViewProps[propName] = value;
        }
        else {
            // @ts-ignore - this function cannot have generic type so we have to ignore this error
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            flatListProps[propName] = value;
        }
    }
    return (
    // @ts-ignore - this function cannot have generic type so we have to ignore this error
    <RNFlatList ref={ref} {...flatListProps} renderScrollComponent={(scrollProps) => (<ScrollView {...{ ...scrollProps, ...scrollViewProps }}/>)}/>);
});
