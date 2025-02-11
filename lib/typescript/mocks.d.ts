import {
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  Switch,
  TextInput,
  DrawerLayoutAndroid,
  View,
} from 'react-native';
declare const _default: {
  readonly TouchableHighlight: typeof TouchableHighlight;
  readonly TouchableNativeFeedback: typeof TouchableNativeFeedback;
  readonly TouchableOpacity: typeof TouchableOpacity;
  readonly TouchableWithoutFeedback: typeof TouchableWithoutFeedback;
  readonly ScrollView: typeof ScrollView;
  readonly FlatList: typeof FlatList;
  readonly Switch: typeof Switch;
  readonly TextInput: typeof TextInput;
  readonly DrawerLayoutAndroid: typeof DrawerLayoutAndroid;
  readonly NativeViewGestureHandler: typeof View;
  readonly TapGestureHandler: typeof View;
  readonly ForceTouchGestureHandler: typeof View;
  readonly LongPressGestureHandler: typeof View;
  readonly PinchGestureHandler: typeof View;
  readonly RotationGestureHandler: typeof View;
  readonly FlingGestureHandler: typeof View;
  readonly RawButton: typeof TouchableNativeFeedback;
  readonly BaseButton: typeof TouchableNativeFeedback;
  readonly RectButton: typeof TouchableNativeFeedback;
  readonly BorderlessButton: typeof TouchableNativeFeedback;
  readonly PanGestureHandler: typeof View;
  readonly attachGestureHandler: () => void;
  readonly createGestureHandler: () => void;
  readonly dropGestureHandler: () => void;
  readonly updateGestureHandler: () => void;
  readonly Directions: {
    readonly RIGHT: 1;
    readonly LEFT: 2;
    readonly UP: 4;
    readonly DOWN: 8;
  };
  readonly State: {
    readonly UNDETERMINED: 0;
    readonly FAILED: 1;
    readonly BEGAN: 2;
    readonly CANCELLED: 3;
    readonly ACTIVE: 4;
    readonly END: 5;
  };
};
export default _default;
