/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class CarryOn extends React.Component {
  render() {
    return(
      <View>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton}>Add</Text>
          <Text style={styles.toolbarTitle}>The Title</Text>
          <Text style={styles.toolbarButton}>Like</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#08c',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  toolbarButton: {
    width: 50,
    color: '#fff',
    textAlign: 'center'
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  }
});

AppRegistry.registerComponent('CarryOn', () => CarryOn);
