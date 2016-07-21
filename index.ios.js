import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  MapView,
} from 'react-native';

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});


class Weather extends Component {
  onRegionChangeComplete(region) {
    console.log(region);
  }

  render() {
    return (
      <MapView
        style={styles.map}
        onRegionChangeComplete={this.onRegionChangeComplete}
      />
    );
  }
}

AppRegistry.registerComponent('weather', () => Weather);
