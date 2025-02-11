import {
  BaseButtonProps,
  BorderlessButtonProps,
  RawButtonProps,
  RectButtonProps,
} from '../components/GestureButtons';
import {
  GestureEvent,
  GestureEventPayload,
  HandlerStateChangeEvent,
  HandlerStateChangeEventPayload,
} from './gestureHandlerCommon';
import {
  FlingGestureHandlerEventPayload,
  FlingGestureHandlerProps,
} from './FlingGestureHandler';
import {
  ForceTouchGestureHandlerEventPayload,
  ForceTouchGestureHandlerProps,
} from './ForceTouchGestureHandler';
import {
  LongPressGestureHandlerEventPayload,
  LongPressGestureHandlerProps,
} from './LongPressGestureHandler';
import {
  PanGestureHandlerEventPayload,
  PanGestureHandlerProps,
} from './PanGestureHandler';
import {
  PinchGestureHandlerEventPayload,
  PinchGestureHandlerProps,
} from './PinchGestureHandler';
import {
  RotationGestureHandlerEventPayload,
  RotationGestureHandlerProps,
} from './RotationGestureHandler';
import {
  TapGestureHandlerEventPayload,
  TapGestureHandlerProps,
} from './TapGestureHandler';
import {
  NativeViewGestureHandlerPayload,
  NativeViewGestureHandlerProps,
} from './NativeViewGestureHandler';
export declare type GestureHandlerGestureEventNativeEvent = GestureEventPayload;
export declare type GestureHandlerStateChangeNativeEvent = HandlerStateChangeEventPayload;
export declare type GestureHandlerGestureEvent = GestureEvent;
export declare type GestureHandlerStateChangeEvent = HandlerStateChangeEvent;
export declare type NativeViewGestureHandlerGestureEvent = GestureEvent<NativeViewGestureHandlerPayload>;
export declare type NativeViewGestureHandlerStateChangeEvent = HandlerStateChangeEvent<NativeViewGestureHandlerPayload>;
export declare type TapGestureHandlerGestureEvent = GestureEvent<TapGestureHandlerEventPayload>;
export declare type TapGestureHandlerStateChangeEvent = HandlerStateChangeEvent<TapGestureHandlerEventPayload>;
export declare type ForceTouchGestureHandlerGestureEvent = GestureEvent<ForceTouchGestureHandlerEventPayload>;
export declare type ForceTouchGestureHandlerStateChangeEvent = HandlerStateChangeEvent<ForceTouchGestureHandlerEventPayload>;
export declare type LongPressGestureHandlerGestureEvent = GestureEvent<LongPressGestureHandlerEventPayload>;
export declare type LongPressGestureHandlerStateChangeEvent = HandlerStateChangeEvent<LongPressGestureHandlerEventPayload>;
export declare type PanGestureHandlerGestureEvent = GestureEvent<PanGestureHandlerEventPayload>;
export declare type PanGestureHandlerStateChangeEvent = HandlerStateChangeEvent<PanGestureHandlerEventPayload>;
export declare type PinchGestureHandlerGestureEvent = GestureEvent<PinchGestureHandlerEventPayload>;
export declare type PinchGestureHandlerStateChangeEvent = HandlerStateChangeEvent<PinchGestureHandlerEventPayload>;
export declare type RotationGestureHandlerGestureEvent = GestureEvent<RotationGestureHandlerEventPayload>;
export declare type RotationGestureHandlerStateChangeEvent = HandlerStateChangeEvent<RotationGestureHandlerEventPayload>;
export declare type FlingGestureHandlerGestureEvent = GestureEvent<FlingGestureHandlerEventPayload>;
export declare type FlingGestureHandlerStateChangeEvent = HandlerStateChangeEvent<FlingGestureHandlerEventPayload>;
export declare type NativeViewGestureHandlerProperties = NativeViewGestureHandlerProps;
export declare type TapGestureHandlerProperties = TapGestureHandlerProps;
export declare type LongPressGestureHandlerProperties = LongPressGestureHandlerProps;
export declare type PanGestureHandlerProperties = PanGestureHandlerProps;
export declare type PinchGestureHandlerProperties = PinchGestureHandlerProps;
export declare type RotationGestureHandlerProperties = RotationGestureHandlerProps;
export declare type FlingGestureHandlerProperties = FlingGestureHandlerProps;
export declare type ForceTouchGestureHandlerProperties = ForceTouchGestureHandlerProps;
export declare type RawButtonProperties = RawButtonProps;
export declare type BaseButtonProperties = BaseButtonProps;
export declare type RectButtonProperties = RectButtonProps;
export declare type BorderlessButtonProperties = BorderlessButtonProps;
