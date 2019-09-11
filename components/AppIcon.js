import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function AppIcon({ color, size }) {
  return (
    <FontAwesomeIcon
      icon='fire'
      color={color || '#ff5722'}
      size={size || 16}
    />
  );
}

export default AppIcon;
