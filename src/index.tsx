import { requireNativeComponent, ViewStyle } from 'react-native';

type HoverableProps = {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseMove?: () => void;
  style: ViewStyle;
};

export const Hoverable =
  requireNativeComponent<HoverableProps>('HoverableView');

export default Hoverable;
