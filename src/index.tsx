import React, { useState } from 'react';
import {
  requireNativeComponent,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface HoverableCallbackState {
  hovered: boolean;
}

interface MouseEventProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseMove?: () => void;
}

interface HoverableProps
  extends Omit<ViewProps, 'children' | 'style'>,
    MouseEventProps {
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
  const [hovered, setHovered] = useState(false);

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
