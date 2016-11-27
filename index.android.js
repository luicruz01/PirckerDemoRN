/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PirckerDemoRN extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import MultipleImagePicker from 'react-native-multiple-image-picker';

const options = {
    maxImagesCount: 9,      // Max number of images user can select; if maxImagesCount == 1, Single mode (i.e. Tap to Select & Finish) will be activated.
    selectedPaths: [
        '/Users/tshen/Library/Developer/CoreSimulator/Devices/8C416B45-F555-4A63-A1B0-09E61109F0A0/data/Containers/Data/Application/A1790255-CDE8-486C-A6BA-1693BA2AA87B/Documents/BB6ADD56-09E7-402C-BF0E-AD79400D3889-7539-000007B93A6B5733/0.jpg',
        '/Users/tshen/Library/Developer/CoreSimulator/Devices/8C416B45-F555-4A63-A1B0-09E61109F0A0/data/Containers/Data/Application/A1790255-CDE8-486C-A6BA-1693BA2AA87B/Documents/BB6ADD56-09E7-402C-BF0E-AD79400D3889-7539-000007B93A6B5733/1.jpg',
        '/Users/tshen/Library/Developer/CoreSimulator/Devices/8C416B45-F555-4A63-A1B0-09E61109F0A0/data/Containers/Data/Application/A1790255-CDE8-486C-A6BA-1693BA2AA87B/Documents/BB6ADD56-09E7-402C-BF0E-AD79400D3889-7539-000007B93A6B5733/2.jpg',
        '/Users/tshen/Library/Developer/CoreSimulator/Devices/8C416B45-F555-4A63-A1B0-09E61109F0A0/data/Containers/Data/Application/A1790255-CDE8-486C-A6BA-1693BA2AA87B/Documents/BB6ADD56-09E7-402C-BF0E-AD79400D3889-7539-000007B93A6B5733/3.jpg'
    ]                       // Currently selected paths, must be from result of previous calls
};
MultipleImagePicker.launchImageGallery(options).then((newSelectedPaths) => {
    // newSelectedPaths will be an Array of String, like [ '/path/1', '/path/2' ], and may be used for `selectedPaths` on the next invocation
});

AppRegistry.registerComponent('PirckerDemoRN', () => PirckerDemoRN);
