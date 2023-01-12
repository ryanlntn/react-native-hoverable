import type {
  PressableProps as NativePressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface PressableStateCallbackTypeWeb extends PressableStateCallbackType {
  hovered?: boolean;
}

type ChildrenType =
  | React.ReactNode
  | ((state: PressableStateCallbackTypeWeb) => React.ReactNode);

type StylesType =
  | StyleProp<ViewStyle>
  | ((state: PressableStateCallbackTypeWeb) => StyleProp<ViewStyle>);

export interface PressableProps extends Omit<NativePressableProps, 'style'> {
  children: ChildrenType;
  style?: StylesType;
}

export interface HoverableCallbackState {
  hovered: boolean;
}

export interface MouseEventProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseMove?: () => void;
}

export interface HoverableProps
  extends Omit<ViewProps, 'style'>,
    MouseEventProps {
  children?:
    | React.ReactNode
    | ((state: HoverableCallbackState) => React.ReactNode);
  style?:
    | StyleProp<ViewStyle>
    | ((state: HoverableCallbackState) => StyleProp<ViewStyle>);
}
