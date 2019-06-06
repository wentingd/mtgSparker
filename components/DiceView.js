import React, { Component } from 'react';
import Expo from 'expo';
import * as THREE from 'three';
import ExpoTHREE from 'expo-three';

const styles = {
  glView: {
    flex: 1,
    backgroundColor: 'grey',
  },
};

class DiceView extends Component {
  _onGLContextCreate = async(gl) => {
    // Here is where we will define our scene, camera and renderer
  }

  render() {
    return (
      <Expo.GLView
        style={styles.glView}
        onContextCreate={this._onGLContextCreate}
      />
    );
  }
}

export default DiceView;
