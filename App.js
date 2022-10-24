import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { printSomething } from './helper_functions';


export default class App extends React.Component {

  state = { text: "Open up App.js to start working on your app!"}

  componentDidMount() {
    printSomething()
  }

  render() {
    return (
      <View style={styles.container}>
         <Text>{this.state.text}</Text>
         <StatusBar style="auto" />
      </View>
      );

  } ;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
