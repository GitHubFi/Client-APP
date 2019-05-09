import React, { Component } from "react";
import { View, Dimensions, Image, Text, ScrollView, AsyncStorage } from "react-native";
const { width, height } = Dimensions.get("window");
import { Item, Input, Content } from "native-base";
// import firevase from 
import { connect } from "react-redux";
// import AppAction from "../../Store/Actions/AppAction";
import { profileAction } from '../../Store/Actions/AppAction'
import Users from "../SignIn/User";
import firebase from "react-native-firebase";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (user) {
        console.log(user, "user available")
        console.log(user._auth._user._user.uid, "uid")
        await AsyncStorage.setItem('userPhone', user._auth._user._user.uid)

        // ...
      } else {
        // ...
        console.log('errorss')
      }
    });
    this.props.userDetail.name ? console.log('user.................') : this.props.navigation.navigate('CreateProfile')
  }
  componentDidMount() {
    // this.props.profileData(this.props.userID)
    console.log(this.props.phoneNumber)
    this.props.profileData(this.props.phoneNumber)

  }

  render() {
    const { userDetail } = this.props
    return (
      <ScrollView
        contentContainerStyle={{
          height: height - 80,

          width
        }}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 0.3,
              backgroundColor: "#0033a0",
              flexDirection: "row"
            }}
          >
            <View
              style={{
                flex: 0.5,
                marginTop: width / 20,
                marginLeft: width / 20
              }}
            >
              <Text
                style={{
                  fontSize: width / 18,
                  fontWeight: "bold",
                  color: "#fff"
                }}
              >
                {/* Hamza Khan
                 */}

                {
                  userDetail.name ? userDetail.name : null
                }              </Text>
              <Text
                style={{
                  fontSize: width / 26,
                  fontWeight: "bold",
                  color: "#fff"
                }}
              >
                {/* Graphic Designer
                 */}
                {
                  userDetail.occupation ? userDetail.occupation : null
                }
              </Text>
              <Text
                style={{
                  fontSize: width / 26,
                  fontWeight: "bold",
                  color: "#fff"
                }}
              >
                OO
              </Text>
              <Text
                style={{
                  fontSize: width / 20,
                  fontWeight: "bold",
                  color: "#fff",
                  marginTop: width / 20
                }}
              >
                Say hi,to {userDetail.company ? userDetail.company : null}{"\n"}
                add your tag line
              </Text>
            </View>
            <View
              style={{
                flex: 0.5,
                marginRight: 5,
                marginTop: 10,
                justifyContent: "space-between"
              }}
            >
              <View
                style={{ flex: 0.2, flexWrap: "wrap", alignSelf: "flex-end" }}
              >
                <Text style={{ marginRight: 5, color: "#fff" }}>
                  Upload photo
                </Text>
                <Image
                  source={require("../../../assets/update.png")}
                  resizeMode="contain"
                  style={{ width: width / 14, height: height / 20 }}
                />
              </View>
              <View
                style={{ flex: 0.2, flexWrap: "wrap", alignSelf: "flex-end" }}
              >
                <Text style={{ marginRight: 5, color: "#fff" }}>
                  Share Your Vizkard
                </Text>
                <Image
                  source={require("../../../assets/Share.png")}
                  resizeMode="contain"
                  style={{ width: width / 14, height: height / 20 }}
                />
              </View>
              <View
                style={{ flex: 0.2, flexWrap: "wrap", alignSelf: "flex-end" }}
              >
                <Text style={{ marginRight: 5, color: "#fff" }}>
                  Manage Your Profile
                </Text>
                <Image
                  source={require("../../../assets/complete.png")}
                  resizeMode="contain"
                  style={{ width: width / 14, height: height / 20 }}
                />
              </View>
              <View
                style={{
                  flex: 0.2,
                  flexWrap: "wrap",
                  alignSelf: "flex-end",
                  marginBottom: 10
                }}
              >
                <Text style={{ marginRight: 5, color: "#fff" }}>
                  Promote Your Self
                </Text>
                <Image
                  source={require("../../../assets/promoteyourself.png")}
                  resizeMode="contain"
                  style={{ width: width / 14, height: height / 20 }}
                />
              </View>
            </View>
          </View>
          <View style={{ flex: 0.8, flexDirection: "row" }}>
            <View
              style={{
                flex: 0.4,
                backgroundColor: "#0071ce",
                textAlign: "center",
                alignItems: "center"
              }}
            >
              <View style={{ flex: 0.1, marginTop: 10 }}>
                <Text style={{ color: "#fff" }}>Focus / Skills</Text>
              </View>
              <View
                style={{ flex: 0.3, flexWrap: "wrap", flexDirection: "row" }}
              >
                <Text style={{ color: "#fff", marginTop: 5, marginRight: 4 }}>
                  Add your skills
                </Text>
                <Image
                  source={require("../../../assets/addskill.png")}
                  resizeMode="contain"
                  style={{ width: width / 16, height: height / 20 }}
                />
              </View>
              <View style={{ flex: 0.6 }}>
                <Text style={{ color: "#fff" }}>On the Web</Text>
                <View
                  style={{
                    width: width / 5,
                    marginTop: 10,
                    height: height / 20,
                    flexWrap: "wrap",
                    backgroundColor: "#fff",
                    borderRadius: 10
                  }}
                >
                  <Image
                    source={require("../../../assets/expirence.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 16,
                      height: height / 20,
                      borderRadius: 10
                    }}
                  />
                  <Input
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      fontSize: width / 36
                    }}
                    placeholder="Link"
                  />
                </View>
                <View
                  style={{
                    width: width / 5,
                    marginTop: 10,
                    height: height / 20,
                    flexWrap: "wrap",
                    backgroundColor: "#fff",
                    borderRadius: 10
                  }}
                >
                  <Image
                    source={require("../../../assets/expirence.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 16,
                      height: height / 20,
                      borderRadius: 10
                    }}
                  />
                  <Input
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      fontSize: width / 36
                    }}
                    placeholder="Link"
                  />
                </View>
                <View
                  style={{
                    width: width / 5,
                    marginTop: 10,
                    height: height / 20,
                    flexWrap: "wrap",
                    backgroundColor: "#fff",
                    borderRadius: 10
                  }}
                >
                  <Image
                    source={require("../../../assets/expirence.png")}
                    resizeMode="contain"
                    style={{
                      width: width / 16,
                      height: height / 20,
                      borderRadius: 10
                    }}
                  />
                  <Input
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      fontSize: width / 36
                    }}
                    placeholder="Link"
                  />
                </View>
              </View>
            </View>
            <View style={{ flex: 0.7, marginLeft: 15 }}>
              <Text
                style={{
                  fontSize: width / 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  color: "#0033a0"
                }}
              >
                Work Expirence
              </Text>
              <Text
                style={{
                  fontSize: width / 22,
                  paddingTop: 10,
                  paddingBottom: 10,
                  fontWeight: "bold"
                }}
              >
                JWT - Pakistan
                {"\n"}
                Creative Executive
              </Text>

              <Text
                style={{
                  fontSize: width / 26,
                  paddingTop: 10,
                  paddingBottom: 10
                }}
              >
                Researched on projects - Made Posters, social {"\n"}
                media posts - Assisted on shoots
              </Text>
              <Text>-----------------------------------------------------</Text>
              <Text
                style={{
                  fontSize: width / 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  color: "#0033a0"
                }}
              >
                Add Work Expirence
              </Text>
            </View>
          </View>
        </View>
        {/* {
          userDetail.name !== "" ? null : props.navigation.navigate('CreateProfile')
        } */}
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {

  console.log();
  return {
    userID: state.authReducer.userID,
    userDetail: state.appReducer.userDetail,
    phoneNumber: state.authReducer.phoneNumber
  };
}
function mapDispatchToProps(dispatch) {
  return {
    profileData: (obj) => {
      dispatch(profileAction(obj));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
