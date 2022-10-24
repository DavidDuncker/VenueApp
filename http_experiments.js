import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { printSomething, getHTTPresponse, printNestedObject } from './helper_functions';


export default class App extends React.Component {

  state = { text: "Open up App.js to start working on your app!"}

  componentDidMount() {
    //printSomething()
    // let url1 = "http://www.google.com/";
    // let response1 = getHTTPresponse(url1);
    // console.log("First HTTP response: ");
    // printNestedObject(response1);

    // let url2 = "https://jsonplaceholder.typicode.com/posts/1/";
    // fetch(url2, 
    //   { method: "GET" })
    //   .then( (response2) => {
    //     console.log("Second HTTP response: ");
    //     printNestedObject(response2);
    //     console.log("Extracting JSON");
    //     return response2.json();
    //   })
    //   .then( (responseJSON) => {
    //     console.log("HTTP JSON response:");
    //     printNestedObject(responseJSON);
    //   })

    // let url3 = "https://jsonplaceholder.typicode.com/posts/1/";
    // console.log("Third HTTP request")
    // fetch(url3, 
    //   { method: "GET" })
    //   .then( (response3) => {
    //     console.log("Third HTTP response: ");
    //     printNestedObject(response3);
    //     console.log("Extracting body");
    //     return response3 .toString();
    //   })
    //   .then( (response3_2) => {
    //     console.log("HTTP response:");
    //     console.log(response3_2);
    //   })
  
    let url4 = "https://www.google.com";
    const request = new XMLHttpRequest();
    console.log("Fourth HTTP request")
    request.responseType = "text"
    request.onload = () => {
      if (request.readyState === request.DONE) {
        if (request.status == 200) {
          console.log(request.response)
          console.log(request.responseText)
        }
      }
    }
    request.open("GET", url4);
    request.send();
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
