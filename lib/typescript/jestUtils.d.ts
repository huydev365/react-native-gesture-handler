import { ReactTestInstance } from 'react-test-renderer';
import { FlingGestureHandler } from './handlers/FlingGestureHandler';
import {
  ForceTouchGestureHandler,
  ForceTouchGestureHandlerEventPayload,
} from './handlers/ForceTouchGestureHandler';
import {
  BaseGestureHandlerProps,
  GestureEvent,
  HandlerStateChangeEvent,
} from './handlers/gestureHandlerCommon';
import { FlingGesture } from './handlers/gestures/flingGesture';
import { ForceTouchGesture } from './handlers/gestures/forceTouchGesture';
import { BaseGesture, GestureType } from './handlers/gestures/gesture';
import { LongPressGesture } from './handlers/gestures/longPressGesture';
import { NativeGesture } from './handlers/gestures/nativeGesture';
import { PanGesture } from './handlers/gestures/panGesture';
import { PinchGesture } from './handlers/gestures/pinchGesture';
import { RotationGesture } from './handlers/gestures/rotationGesture';
import { TapGesture } from './handlers/gestures/tapGesture';
import {
  LongPressGestureHandler,
  LongPressGestureHandlerEventPayload,
} from './handlers/LongPressGestureHandler';
import {
  NativeViewGestureHandler,
  NativeViewGestureHandlerPayload,
} from './handlers/NativeViewGestureHandler';
import {
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from './handlers/PanGestureHandler';
import {
  PinchGestureHandler,
  PinchGestureHandlerEventPayload,
} from './handlers/PinchGestureHandler';
import {
  RotationGestureHandler,
  RotationGestureHandlerEventPayload,
} from './handlers/RotationGestureHandler';
import {
  TapGestureHandler,
  TapGestureHandlerEventPayload,
} from './handlers/TapGestureHandler';
declare type GestureHandlerTestEvent<
  TEventPayload extends Record<string, unknown> = Record<string, unknown>
> = (
  | GestureEvent<TEventPayload>
  | HandlerStateChangeEvent<TEventPayload>
)['nativeEvent'];
declare type AllGestures =
  | TapGesture
  | PanGesture
  | LongPressGesture
  | RotationGesture
  | PinchGesture
  | FlingGesture
  | ForceTouchGesture
  | NativeGesture;
declare type AllHandlers =
  | TapGestureHandler
  | PanGestureHandler
  | LongPressGestureHandler
  | RotationGestureHandler
  | PinchGestureHandler
  | FlingGestureHandler
  | ForceTouchGestureHandler
  | NativeViewGestureHandler;
declare type ClassComponentConstructor<P> = new (props: P) => React.Component<
  P,
  any,
  any
>;
declare type ExtractPayloadFromProps<T> = T extends BaseGestureHandlerProps<
  infer TPayload
>
  ? TPayload
  : never;
declare type ExtractConfig<T> = T extends BaseGesture<infer TGesturePayload>
  ? TGesturePayload
  : T extends ClassComponentConstructor<infer THandlerProps>
  ? ExtractPayloadFromProps<THandlerProps>
  : Record<string, unknown>;
export declare function fireGestureHandler<
  THandler extends AllGestures | AllHandlers
>(
  componentOrGesture: ReactTestInstance | GestureType,
  eventList?: Partial<GestureHandlerTestEvent<ExtractConfig<THandler>>>[]
): void;
export declare function getByGestureTestId(
  testID: string
):
  | BaseGesture<Record<string, unknown>>
  | BaseGesture<Record<string, never>>
  | BaseGesture<TapGestureHandlerEventPayload>
  | BaseGesture<PanGestureHandlerEventPayload>
  | BaseGesture<LongPressGestureHandlerEventPayload>
  | BaseGesture<RotationGestureHandlerEventPayload>
  | BaseGesture<PinchGestureHandlerEventPayload>
  | BaseGesture<ForceTouchGestureHandlerEventPayload>
  | BaseGesture<NativeViewGestureHandlerPayload>;
export {};
