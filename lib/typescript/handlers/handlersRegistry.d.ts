import { GestureType } from './gestures/gesture';
export declare const handlerIDToTag: Record<string, number>;
export declare function getNextHandlerTag(): number;
export declare function registerHandler(
  handlerTag: number,
  handler: GestureType,
  testID?: string
): void;
export declare function unregisterHandler(
  handlerTag: number,
  testID?: string
): void;
export declare function findHandler(
  handlerTag: number
): GestureType | undefined;
export declare function findHandlerByTestID(
  testID: string
):
  | import('./gestures/gesture').BaseGesture<Record<string, unknown>>
  | import('./gestures/gesture').BaseGesture<Record<string, never>>
  | import('./gestures/gesture').BaseGesture<
      import('./TapGestureHandler').TapGestureHandlerEventPayload
    >
  | import('./gestures/gesture').BaseGesture<
      import('./PanGestureHandler').PanGestureHandlerEventPayload
    >
  | import('./gestures/gesture').BaseGesture<
      import('./LongPressGestureHandler').LongPressGestureHandlerEventPayload
    >
  | import('./gestures/gesture').BaseGesture<
      import('./RotationGestureHandler').RotationGestureHandlerEventPayload
    >
  | import('./gestures/gesture').BaseGesture<
      import('./PinchGestureHandler').PinchGestureHandlerEventPayload
    >
  | import('./gestures/gesture').BaseGesture<
      import('./ForceTouchGestureHandler').ForceTouchGestureHandlerEventPayload
    >
  | import('./gestures/gesture').BaseGesture<
      import('./NativeViewGestureHandler').NativeViewGestureHandlerPayload
    >
  | null;
