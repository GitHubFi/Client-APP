import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Button,
  StatusBar,
  Image,
  PixelRatio,
  YellowBox,
  AsyncStorage
} from "react-native";

import { NavigationActions, StackActions } from "react-navigation";
import SignIn from "../SignIn/SignIn";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    setTimeout(() => {
      // this.reset('signIn')
      this.loadApp();

    }, 100)
  }

  // componentWillMount() {
  //     YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
  // }
  loadApp = async () => {
    // await AsyncStorage.clear();
    const userToken = await AsyncStorage.getItem("user");
    await AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiGet(keys)
      .then((result) => {
        console.log(result, 'keys all')
      }));
    console.log(userToken, 'nullll ')
    if (userToken !== null) {
      this.props.navigation.navigate("app");
    } else {
      this.props.navigation.navigate("auth");

    }
  };
  // reset = route => {
  //     return this.props.navigation.dispatch(
  //         StackActions.reset({
  //             index: 0,
  //             actions: [NavigationActions.navigate({routeName: `${route}`})]
  //         })
  //     )
  // }

  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar hidden />

        <Image
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          source={require("../../../assets/logo.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  img: {
    width: "100%",
    height: "100%"
  }
});
