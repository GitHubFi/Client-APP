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
  AsyncStorage,
  Alert
} from "react-native";
import { Input, Button, Spinner, Form, Item, Picker, Label } from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");
import Entypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import { signInAc } from '../../Store/Actions/AuthAction'
import User from "./User";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "Pakistan",
      phoneNumber: "",
      loading: false,
      code: "+92"
    };
  }
  static navigationOptions = {
    header: null
  };


  signIn = async () => {

    let { country, phoneNumber, code } = this.state;
    console.log(this.state)
    if (this.state.phoneNumber.length < 10) {
      Alert.alert("Error", "Wrong Phone Number");
    } else {
      this.props.signInAction({
        phoneNumber: code + phoneNumber,
        country: country,
        history: this.props.navigation
      });

    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#008ace",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: width / 4, color: "#fff" }}>hi</Text>
        <Text
          style={{
            fontSize: width / 18,
            color: "#fff",
            marginBottom: 5,
            textAlign: "center"
          }}
        >
          Select Your Country
        </Text>
        <View
          style={{
            color: "#fff",
            backgroundColor: "#fff",
            borderRadius: 10
          }}
        >
          <Item picker style={{ borderColor: "transparent" }}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="md-arrow-down" />}
              style={{ width: width / 2 }}
              selectedValue={this.state.country}
              onValueChange={
                event => this.setState({ country: event })
                // this.onInputChange(event, "country")
              }
            >
              <Picker.Item label="Pakistan" value="ammar" />
              <Picker.Item label="India" value="junaid" />
              <Picker.Item label="America" value="hayat" />
              <Picker.Item label="Newzeland" value="hamza" />
              <Picker.Item label="France" value="arcmage" />
            </Picker>
          </Item>
        </View>
        <View style={{ width: width / 2, marginTop: 10, flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10 }}>
          <Item style={{ borderColor: "transparent", width: width / 6, backgroundColor: "#fff", borderRadius: 10 }}>
            {/* <select>
            </select> */}
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="md-arrow-down" />}
              style={{ width: width / 6 }}
              selectedValue={this.state.code}
              onValueChange={
                event => this.setState({ code: event })
                // this.onInputChange(event, "country")
              }
            >
              <Picker.Item label="+92" value="+92" />
              <Picker.Item label="+91" value="+91" />
              <Picker.Item label="+43" value="+43" />
              <Picker.Item label="+45" value="+45" />
              <Picker.Item label="+30" value="+30" />
            </Picker>
          </Item>
          <Item style={{ width: width / 3, borderColor: "transparent" }}>
            <Input
              style={{ backgroundColor: "#fff", borderRadius: 10, fontSize: width / 24, width: width / 3 }}
              placeholder="Phone Number"
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
              value={this.state.phoneNumber}
            />
          </Item>
        </View>
        {
          this.props.loader ? <Spinner /> :
            <Button
              rounded
              style={{
                alignSelf: "center",
                marginTop: 10,
                backgroundColor: "#008ace"
              }}
              onPress={this.signIn}
            >
              <Text
                style={{
                  width: width / 2,
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Submit
  </Text>
            </Button>
        }
        {
          this.props.errorAc.isError ? Alert.alert("Error", this.props.errorAc.errorTest) : null
        }


        <View style={{ width: width / 2, marginTop: 10 }}>
          <Text
            style={{
              fontSize: width / 24,
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold"
            }}
          >
            We will send you a 6 digit code to verify your Vizkard account
          </Text>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  console.log(state.authReducer)
  return {
    loader: state.authReducer.isProgress,
    errorAc: state.authReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    signInAction: payload => {
      dispatch(signInAc(payload));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
