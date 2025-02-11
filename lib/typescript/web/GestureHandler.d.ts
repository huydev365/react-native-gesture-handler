import { findNodeHandle } from 'react-native';
import { State } from '../State';
import { EventMap } from './constants';
export declare type HammerInputExt = Omit<
  HammerInput,
  'destroy' | 'handler' | 'init'
>;
export declare type Config = Partial<{
  enabled: boolean;
  minPointers: number;
  maxPointers: number;
  minDist: number;
  minDistSq: number;
  minVelocity: number;
  minVelocitySq: number;
  maxDist: number;
  maxDistSq: number;
  failOffsetXStart: number;
  failOffsetYStart: number;
  failOffsetXEnd: number;
  failOffsetYEnd: number;
  activeOffsetXStart: number;
  activeOffsetXEnd: number;
  activeOffsetYStart: number;
  activeOffsetYEnd: number;
  waitFor: any[] | null;
}>;
declare abstract class GestureHandler {
  handlerTag: any;
  isGestureRunning: boolean;
  view: number | null;
  protected hasCustomActivationCriteria: boolean;
  protected hasGestureFailed: boolean;
  protected hammer: HammerManager | null;
  protected initialRotation: number | null;
  protected __initialX: any;
  protected __initialY: any;
  protected config: Config;
  protected previousState: State;
  private pendingGestures;
  private oldState;
  private lastSentState;
  private gestureInstance;
  private _stillWaiting;
  private propsRef;
  private ref;
  abstract get name(): string;
  get id(): string;
  get isDiscrete(): boolean;
  get shouldEnableGestureOnSetup(): boolean;
  constructor();
  getConfig(): Partial<{
    enabled: boolean;
    minPointers: number;
    maxPointers: number;
    minDist: number;
    minDistSq: number;
    minVelocity: number;
    minVelocitySq: number;
    maxDist: number;
    maxDistSq: number;
    failOffsetXStart: number;
    failOffsetYStart: number;
    failOffsetXEnd: number;
    failOffsetYEnd: number;
    activeOffsetXStart: number;
    activeOffsetXEnd: number;
    activeOffsetYStart: number;
    activeOffsetYEnd: number;
    waitFor: any[] | null;
  }>;
  onWaitingEnded(_gesture: this): void;
  removePendingGesture(id: string): void;
  addPendingGesture(gesture: this): void;
  isGestureEnabledForEvent(
    _config: any,
    _recognizer: any,
    _event: any
  ): {
    failed?: boolean;
    success?: boolean;
  };
  get NativeGestureClass(): RecognizerStatic;
  updateHasCustomActivationCriteria(_config: Config): boolean;
  clearSelfAsPending: () => void;
  updateGestureConfig({
    enabled,
    ...props
  }: {
    [x: string]: any;
    enabled?: boolean | undefined;
  }): Partial<{
    enabled: boolean;
    minPointers: number;
    maxPointers: number;
    minDist: number;
    minDistSq: number;
    minVelocity: number;
    minVelocitySq: number;
    maxDist: number;
    maxDistSq: number;
    failOffsetXStart: number;
    failOffsetYStart: number;
    failOffsetXEnd: number;
    failOffsetYEnd: number;
    activeOffsetXStart: number;
    activeOffsetXEnd: number;
    activeOffsetYStart: number;
    activeOffsetYEnd: number;
    waitFor: any[] | null;
  }>;
  destroy: () => void;
  isPointInView: ({ x, y }: { x: number; y: number }) => boolean;
  getState(type: keyof typeof EventMap): State;
  transformEventData(
    event: HammerInputExt
  ): {
    nativeEvent: {
      handlerTag: any;
      target: any;
      oldState: State;
      numberOfPointers: number;
      state: State;
      pointerInside: boolean;
    };
    timeStamp: number;
  };
  transformNativeEvent(_event: HammerInputExt): {};
  sendEvent: (nativeEvent: HammerInputExt) => void;
  cancelPendingGestures(event: HammerInputExt): void;
  notifyPendingGestures(): void;
  onGestureEnded(event: HammerInputExt): void;
  forceInvalidate(event: HammerInputExt): void;
  cancelEvent(event: HammerInputExt): void;
  onRawEvent({ isFirst }: HammerInputExt): void;
  setView(ref: Parameters<typeof findNodeHandle>['0'], propsRef: any): void;
  setupEvents(): void;
  onStart({ deltaX, deltaY, rotation }: HammerInputExt): void;
  onGestureActivated(ev: HammerInputExt): void;
  onSuccess(): void;
  _getPendingGestures(): any[];
  getHammerConfig(): {
    pointers: number | undefined;
  };
  sync: () => void;
  simulateCancelEvent(_inputData: any): void;
}
export default GestureHandler;
