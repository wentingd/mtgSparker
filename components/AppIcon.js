import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class AppIcon extends React.Component {
  render() {
    return (
      <FontAwesomeIcon icon={faCoffee} color='red' />
    );
  }
}
