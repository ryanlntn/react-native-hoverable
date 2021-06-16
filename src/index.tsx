import { requireNativeComponent, ViewStyle } from 'react-native';

type HoverableProps = {
  color: string;
  style: ViewStyle;
};

export const HoverableViewManager = requireNativeComponent<HoverableProps>(
'HoverableView'
);

export default HoverableViewManager;
