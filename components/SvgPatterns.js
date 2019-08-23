import React from 'react';
import {
  Defs, Path, Pattern, Rect,
} from 'react-native-svg';
import { Svg } from 'expo';

class Striped extends React.Component {
  render() {
    return (
      <Svg
        height='100%'
        width='100%'
      >
        <Defs>
          <Pattern id='diagonalHatch' patternUnits='userSpaceOnUse' width='5' height='5'>
            <Path
              d='M 0 0 L 20 20 M 10 -10 L 30 10 M -10 10 L 10 30'
              stroke='white'
              width={1}
            />
          </Pattern>
        </Defs>
        <Rect x='0' y='0' width='100%' height='100%' fill='url(#diagonalHatch)' />
      </Svg>
    );
  }
}

export {
  Striped,
};
