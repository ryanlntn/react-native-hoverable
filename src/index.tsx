import React, { useState } from 'react';
import {
  Pressable as NativePressable,
  PressableStateCallbackType,
  requireNativeComponent,
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

interface PressableProps extends Omit<ViewProps, 'style'> {
  children: ChildrenType;
  style?: StylesType;
}

interface HoverableCallbackState {
  hovered: boolean;
}

interface MouseEventProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseMove?: () => void;
}

interface HoverableProps extends Omit<ViewProps, 'style'>, MouseEventProps {
  children?:
    | React.ReactNode
    | ((state: HoverableCallbackState) => React.ReactNode);
  style?:
    | StyleProp<ViewStyle>
    | ((state: HoverableCallbackState) => StyleProp<ViewStyle>);
}

const HoverableView = requireNativeComponent<ViewProps & MouseEventProps>(
  'HoverableView'
);

export const Hoverable: React.FC<HoverableProps> = ({
  children,
  onMouseEnter,
  onMouseLeave,
  style,
  ...props
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <HoverableView
      onMouseEnter={() => {
        setHovered(true);
        onMouseEnter?.();
      }}
      onMouseLeave={() => {
        setHovered(false);
        onMouseLeave?.();
      }}
      style={typeof style === 'function' ? style({ hovered }) : style}
      {...props}
    >
      {typeof children === 'function' ? children({ hovered }) : children}
    </HoverableView>
  );
};

export default Hoverable;

export const Pressable: React.FC<PressableProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <Hoverable>
      {({ hovered }) => (
        <NativePressable
          style={(interactionState) =>
            typeof style === 'function'
              ? style({ ...interactionState, hovered })
              : style
          }
          children={(interactionState) =>
            typeof children === 'function'
              ? children({ ...interactionState, hovered })
              : children
          }
          {...props}
        />
      )}
    </Hoverable>
  );
};
