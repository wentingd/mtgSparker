import React from 'react';
import { View, Text } from 'react-native';
// import { Svg } from 'expo';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// const {
//   Circle, Rect, G, Defs, Use,
// } = Svg;

export default class SvgExample extends React.Component {
  render() {
    return (
      <View>
        <Text>S</Text>
      </View>
      // <FontAwesomeIcon icon={faCoffee} color='red' />
      // <View
      //   style={[
      //     StyleSheet.absoluteFill,
      //     { alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' },
      //   ]}
      // >
      //   <Svg
      //     height='100%'
      //     width='100%'
      //     viewBox='0 0 100 100'
      //   >
      //     <Defs>
      //       <G id='shape'>
      //         <G>
      //           <Circle
      //             cx='50'
      //             cy='60'
      //             r='40'
      //           />
      //           <Rect
      //             origin='6, 67'
      //             width='55'
      //             height='55'
      //             strokeWidth='1'
      //             fill='yellow'
      //             rotation='45'
      //           />
      //         </G>
      //       </G>
      //     </Defs>
      //     <Use href='#shape' x='0' y='0' />
      //   </Svg>
      // </View>
    );
  }
}
