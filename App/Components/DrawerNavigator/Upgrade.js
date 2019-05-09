import React, { Component } from "react";
import { View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default class Upgrade extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <MaterialCommunityIcons
        name="autorenew"
        size={25}
        style={{ color: "#0071ce" }}
      />
    )
  };
  render() {
    return <View />;
  }
}
