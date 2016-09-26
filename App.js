import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import VectorWidget from './VectorWidget';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VectorWidget />
      </ View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;
