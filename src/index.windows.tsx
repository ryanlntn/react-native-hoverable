import React, { useState } from 'react';
import { Pressable as NativePressable, View } from 'react-native';
import type { HoverableProps, MouseEventProps, PressableProps } from './types';

export * from './types';

export const Hoverable: React.FC<HoverableProps> = ({
  onMouseEnter,
  onMouseLeave,
  style,
  ...props
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <View
      // @ts-ignore
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
    />
  );
};

export default Hoverable;

export const Pressable: React.FC<PressableProps & MouseEventProps> = ({
  onMouseEnter,
  onMouseLeave,
  style,
  ...props
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <NativePressable
      // @ts-ignore
      onMouseEnter={() => {
        setHovered(true);
        onMouseEnter?.();
      }}
      onMouseLeave={() => {
        setHovered(false);
        onMouseLeave?.();
      }}
      style={(interactionState) => [
        { position: 'relative' },
        typeof style === 'function'
          ? style({ ...interactionState, hovered })
          : style,
      ]}
      {...props}
    />
  );
};
