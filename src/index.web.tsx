import React from 'react';
import { Pressable as NativePressable } from 'react-native';
import type { HoverableProps, MouseEventProps, PressableProps } from './types';

export const Hoverable: React.FC<HoverableProps> = ({
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  return (
    <NativePressable
      // @ts-ignore
      onHoverIn={onMouseEnter}
      onHoverOut={onMouseLeave}
      {...props}
    />
  );
};

export default Hoverable;

export const Pressable: React.FC<PressableProps & MouseEventProps> = ({
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  return (
    <NativePressable
      // @ts-ignore
      onHoverIn={onMouseEnter}
      onHoverOut={onMouseLeave}
      {...props}
    />
  );
};
