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
  children,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  style,
  ...props
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <NativePressable
      style={(interactionState) => [
        { position: 'relative' },
        typeof style === 'function'
          ? style({ ...interactionState, hovered })
          : style,
      ]}
      {...props}
    >
      {(interactionState) => (
        <>
          {typeof children === 'function'
            ? children({ ...interactionState, hovered })
            : children}
          <Hoverable
            onMouseEnter={() => {
              setHovered(true);
              onMouseEnter?.();
            }}
            onMouseLeave={() => {
              setHovered(false);
              onMouseLeave?.();
            }}
            onMouseMove={onMouseMove}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </>
      )}
    </NativePressable>
  );
};
