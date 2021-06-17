# react-native-hoverable

Hover event support for React Native Catalyst

## Installation

```sh
yarn add react-native-hoverable
```

## Usage

```js
import { Hoverable } from 'react-native-hoverable';

const HoverableView = () => (
  <Hoverable
    onMouseEnter={() => console.log('onMouseEnter')}
    onMouseLeave={() => console.log('onMouseLeave')}
    onMouseMove={() => console.log('onMouseMove')}
    style={({ hovered }) => [
      { padding: hovered ? 20 : 0 },
      { backgroundColor: 'purple' },
    ]}
  >
    {({ hovered }) => (
      <View
        style={{
          backgroundColor: hovered ? 'red' : 'green',
          height: 100,
          width: 100,
        }}
      />
    )}
  </Hoverable>
);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
