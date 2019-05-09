import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import firebase from 'react-native-firebase'
import Users from '../SignIn/User'
import { Button, Input } from "native-base";
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
// import AppAction from "../../Store/Actions/AppAction";
import { createProfileAction } from "../../Store/Actions/AppAction"
import { connect } from "react-redux";
class CreateProfile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      occupation: "",
      company: "",
      website: "",
      address: "",
      city: "",
      country: ""
    };
  }
  // static navigationOptions = {
  //   drawerIcon: ({ tintColor }) => (
  //     <MaterialCommunityIcons name="pencil" size={25} style={{ color: '#0071ce' }} />
  //   )
  // }

  static navigationOptions = ({ navigation }) => ({
    title: "Make Your Profile",
    headerStyle: {
      backgroundColor: "#008ace"
    },
    headerTintColor: "#fff",
    headerLeft: (
      <TouchableOpacity onPress={navigation.getParam("openDrawer")}>
        <Image
          source={require("../../../assets/Setting.png")}
          resizeMode="contain"
          style={{ width: width / 12, marginLeft: 8, marginRight: -6 }}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={navigation.getParam("saveProfile")}
          style={{ flex: 0.4 }}
        >
          <Image
            source={require("../../../assets/Save.png")}
            resizeMode="contain"
            style={{ width: width / 12, marginRight: 8 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 0.4 }}>
          <Image
            source={require("../../../assets/Back.png")}
            resizeMode="contain"
            style={{ width: width / 12, marginRight: 8 }}
          />
        </TouchableOpacity>
      </View>
    )
  });
  openDrawer = () => {
    this.props.navigation.openDrawer();
  };
  componentDidMount() {
    this.props.navigation.setParams({
      openDrawer: this.openDrawer,
      saveProfile: this.saveProfile
    });
  }

  saveProfile = () => {
    let {
      name,
      email,
      city,
      company,
      occupation,
      website,
      address,
      country
    } = this.state;
    // console.log(this.state)
    if (name == "") {
      ToastAndroid.show("please fill the name correctly", ToastAndroid.SHORT);
      return;
    } else if (city == "") {
      ToastAndroid.show("please fill the city name correctly", ToastAndroid.SHORT);
      return;

    } else if (address == "") {
      ToastAndroid.show("please fill the address correctly", ToastAndroid.SHORT);
      return;

    } else if (country == "") {
      ToastAndroid.show("please fill the country name correctly", ToastAndroid.SHORT);
      return;


    } else if (occupation == "") {
      ToastAndroid.show("please enter your  occupation correctly", ToastAndroid.SHORT);

    } else if (website == "") {
      ToastAndroid.show("please fill the website address correctly", ToastAndroid.SHORT);

    }
    this.props.createProfile({
      name,
      email,
      city,
      company,
      occupation,
      website,
      address,
      country,
      uid: this.props.userID,
      phoneNumber: this.props.phoneNumber,
      history: this.props.navigation
    });

  };
  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{ flex: 0.2 }}>
          <Image
            source={require("../../../assets/header.png")}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 0.8 }}>
          <ScrollView
            contentContainerStyle={{  }}
            keyboardDismissMode="interactive"
            keyboardShouldPersistTaps="handled"
          >
            <View
              style={{
                width: width / 1.5,
                alignSelf: "center",
                justifyContent: "center",
                backgroundColor:'#dfe35r'
              }}
            >
              <View
                style={{
                  flex: 0.3,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomColor: "#272727",
                  borderBottomWidth: 1,
                  
                }}
              >
                {/* <MaterialCommunityIcons name="email" size={25} color="#272727" /> */}
                <Input
                  placeholderTextColor={"#272727"}
                  placeholder={"Name"}
                  placeholder="Name"
                  style={{ color: "#272727" ,fontStyle:'italic' }}
                  // keyboardType={"email-address"}
                  onChangeText={name => this.setState({ name })}
                />
              </View>
              <View
                style={{
                  flex: 0.3,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomColor: "#272727",
                  borderBottomWidth: 1
                }}
              >
                {/* <MaterialCommunityIcons name="email" size={25} color="#272727" /> */}
                <Input
                  placeholderTextColor={"#272727"}
                  placeholder={"Email"}
                  placeholder="Email"
                  style={{ color: "#272727", fontStyle:'italic' }}
                  keyboardType={"email-address"}
                  onChangeText={email => this.setState({ email })}
                />
              </View>
              <View
                style={{
                  flex: 0.3,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomColor: "#272727",
                  borderBottomWidth: 1
                }}
              >
                {/* <MaterialCommunityIcons name="email" size={25} color="#272727" /> */}
                <Input
                  placeholderTextColor={"#272727"}
                  placeholder={"Occupation"}
                  placeholder="Occupation"
                  style={{ color: "#272727", fontStyle:'italic' }}
                  // keyboardType={"email-address"}
                  onChangeText={occupation => this.setState({ occupation })}
                />
              </View>
              <View
                style={{
                  flex: 0.3,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomColor: "#272727",
                  borderBottomWidth: 1
                }}
              >
                {/* <MaterialCommunityIcons name="email" size={25} color="#272727" /> */}
                <Input
                  placeholderTextColor={"#272727"}
                  placeholder={"Company"}
                  placeholder="Company"
                  style={{ color: "#272727",fontStyle:'italic' }}
                  // keyboardType={"email-address"}
                  onChangeText={company => this.setState({ company })}
                />
              </View>
              <View
                style={{
                  flex: 0.3,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomColor: "#272727",
                  borderBottomWidth: 1
                }}
              >
                {/* <MaterialCommunityIcons name="email" size={25} color="#272727" /> */}
                <Input
                  placeholderTextColor={"#272727"}
                  placeholder={"Website"}
                  placeholder="Website"
                  style={{ color: "#272727",fontStyle:'italic' }}
                  // keyboardType={"email-address"}
                  onChangeText={website => this.setState({ website })}
                />
              </View>
              <View
                style={{
                  flex: 0.3,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomColor: "#272727",
                  borderBottomWidth: 1
                }}
              >
                {/* <MaterialCommunityIcons name="email" size={25} color="#272727" /> */}
                <Input
                  placeholderTextColor={"#272727"}
                  placeholder={"Address"}
                  placeholder="Address"
                  style={{ color: "#272727" ,fontStyle:'italic'}}
                  // keyboardType={"email-address"}
                  onChangeText={address => this.setState({ address })}
                />
              </View>
              <View
                style={{
                  flex: 0.3,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomColor: "#272727",
                  borderBottomWidth: 1
                }}
              >
                {/* <MaterialCommunityIcons name="email" size={25} color="#272727" /> */}
                <Input
                  placeholderTextColor={"#272727"}
                  placeholder={"City"}
                  placeholder="City"
                  style={{ color: "#272727",fontStyle:'italic' }}
                  // keyboardType={"email-address"}
                  onChangeText={city => this.setState({ city })}
                />
              </View>
              <View
                style={{
                  flex: 0.3,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomColor: "#272727",
                  borderBottomWidth: 1,
                  marginBottom: 15
                }}
              >
                {/* <MaterialCommunityIcons name="email" size={25} color="#272727" /> */}
                <Input
                  placeholderTextColor={"#272727"}
                  placeholder={"Country"}
                  placeholder="Country"
                  style={{ color: "#272727",fontStyle:'italic' }}
                  keyboardType={"email-address"}
                  onChangeText={country => this.setState({ country })}
                />
              </View>
            </View>
            <View style={{
              flex: 1,
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text
                style={{
                  color: "#008ace",
                  width: width / 1.5,
                  fontSize: width / 18,
                  marginLeft: 10,
                  marginBottom: 8,
                  // alignContent:'center',
                  // justifyContent:'center',
                  // alignItems:'center'

                }}
              >
                Say Hi, to What You Like To Get The Best Deals
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <Image
                    source={require("../../../assets/Adventure.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      //   backgroundColor: "orange",
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Animals.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Apparel.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Automobiles.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Banking.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Image
                    source={require("../../../assets/Books.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Education.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Electronics.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Food.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Furniture.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Image
                    source={require("../../../assets/Gadgets.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Gifts.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/HomeAppliances.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Jewellery.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Make-up.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Image
                    source={require("../../../assets/RealEstate.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Shoes.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Sports.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Travel.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                  <Image
                    source={require("../../../assets/Adventure.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 8,
                      marginRight: 8,
                      height: height / 10
                    }}
                  />
                </View>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../../../assets/Others_PleaseSpecify.png")}
                  resizeMode="contain"
                  style={{
                    width: width / 1.5,
                    marginRight: 8,
                    height: height / 10
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userID: state.authReducer.userID,
    phoneNumber: state.authReducer.phoneNumber
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createProfile: obj => dispatch(createProfileAction(obj))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProfile);
