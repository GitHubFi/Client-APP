import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage
} from "react-native";
import { Input, Button, Spinner } from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      confirmPassword: ""
    };
  }
  static navigationOptions = {
    headerLeft: <View />,
    title: "SIGN UP",
    headerStyle: {
      backgroundColor: "#272727"
    },
    headerTintColor: "#fff"
  };
  replaceScreen = route => {
    this.props.navigation.dispatch({
      type: "ReplaceCurrentScreen",
      key: `${route}`,
      routeName: `${route}`
    });
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          height: height - 80,
          width,
          backgroundColor: "#272727"
        }}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            flex: 1,
            padding: width / 20,
            justifyContent: "space-around"
          }}
        >
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../../assets/download.jpg")}
              style={{ width: width / 4, height: width / 4, borderRadius: 50 }}
            />
          </View>
          <View style={{ flex: 0.5, justifyContent: "space-around" }}>
            <View
              style={{
                flex: 0.3,
                flexDirection: "row",
                alignItems: "center",
                borderBottomColor: "#fff",
                borderBottomWidth: 1
              }}
            >
              <MaterialCommunityIcons name="email" size={25} color="#fff" />
              <Input
                placeholderTextColor={"#fff"}
                placeholder={"Email"}
                placeholder="email"
                style={{ color: "#fff" }}
                keyboardType={"email-address"}
                onChangeText={email => this.setState({ email })}
              />
            </View>
            <View
              style={{
                flex: 0.3,
                flexDirection: "row",
                alignItems: "center",
                borderBottomColor: "#fff",
                borderBottomWidth: 1
              }}
            >
              <Entypo name={"lock"} size={25} color="#fff" />
              <Input
                placeholderTextColor={"#fff"}
                placeholder={"Password"}
                placeholder="password"
                style={{ color: "#fff" }}
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <View
              style={{
                flex: 0.2,
                flexDirection: "row",
                borderBottomColor: "#fff",
                alignItems: "center",
                borderBottomWidth: 1
              }}
            >
              <Entypo name={"lock"} size={25} color="#fff" />

              <Input
                style={{ color: "#fff" }}
                placeholder="confirm password"
                placeholderTextColor={"#fff"}
                secureTextEntry
                onChangeText={confirmPassword =>
                  this.setState({ confirmPassword })
                }
              />
            </View>
            <View
              style={{
                flex: 0.3,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                style={{
                  marginTop: height / 25,
                  width: width * 0.6,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fafafa",
                  alignSelf: "center",
                  borderRadius: width / 12
                }}
                onPress={this.signIn}
              >
                <Text style={{ color: "#272727" }}>SignUp</Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              flex: 0.1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#0fb9b1" }}>
              Already an account ?
              <Text
                style={{
                  color: "#2bcbba",
                  textDecorationLine: "underline",
                  textDecorationColor: "#fff"
                }}
                onPress={() => this.replaceScreen("signIn")}
              >
                signin
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
