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
      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton}>Add</Text>
          <Text style={styles.toolbarTitle}>The Title</Text>
          <Text style={styles.toolbarButton}>Like</Text>
        </View>
        <View style={styles.content}>
          <Text>This is the content...</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</Text>
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
  },
  mainContainer: {
    flex: 1
  },
  content: {
    backgroundColor: '#ebeef0',
    flex: 1,
    padding: 10
  }
});

AppRegistry.registerComponent('CarryOn', () => CarryOn);
