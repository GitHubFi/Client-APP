import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  Text,
  AsyncStorage,
  SafeAreaView
} from "react-native";
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
const { width, height, scale, fontScale } = Dimensions.get("window");
import firebase from "react-native-firebase";
import User from "../SignIn/User";
import { connect } from 'react-redux';
const arrList = [
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "a",
    name: "Jill Sanders",
    message: "I’ll meet you at 4 pm",
    timestamp: "07:35 pm"
  },
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "b",
    name: "Jill Sanders",
    message: "I’ll meet you at 4 pm",
    timestamp: "07:35 pm"
  },
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "c",
    name: "Jill Sanders",
    message: "I’ll meet you at 4 pm",
    timestamp: "07:35 pm"
  },
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "d",
    name: "Jill Sanders",
    message: "I’ll meet you at 4 pm",
    timestamp: "07:35 pm"
  },
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "e",
    name: "Jill Sanders",
    message: "I’ll meet you at 4 pm",
    timestamp: "07:35 pm"
  },
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "f",
    name: "Jill Sanders",
    message: "I’ll meet you at 4 pm",
    timestamp: "07:35 pm"
  }
];
class MessageList extends Component {
  state = {
    users: []
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Chats",
      headerStyle: {
        backgroundColor: "#0033a0"
      },
      headerTintColor: "#fff",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require("../../../assets/Setting.png")}
            resizeMode="contain"
            style={{ width: width / 12, marginLeft: 8, marginRight: -6 }}
          />
        </TouchableOpacity>
      ),
      headerTitleStyle: {
        // textAlign: "center",
        flex: 1,
        marginLeft: 12
      },
      headerRight: (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: width / 28 }}
          >
            <Image
              source={require("../../../assets/groupChat.png")}
              resizeMode="contain"
              style={{ width: width / 12, marginLeft: 8, marginRight: -6 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: width / 28 }}
          >
            <Image
              source={require("../../../assets/Back.png")}
              resizeMode="contain"
              style={{ width: width / 12, marginLeft: 8, marginRight: -6 }}
            />
          </TouchableOpacity>
        </View>
      )
    };
  };
  componentWillMount() {
    let dbRef = firebase.database().ref("users");
    // console.log(dbRef);
    dbRef.on("child_added", async val => {
      // console.log(val);
      let person = val.val();
      console.log(person, "all users")
      person.phone = val.key;
      console.log(person.phone, "user phone")
      let userPhone = await AsyncStorage.getItem('user')
      console.log(userPhone, 'async phone')
      if (person.phone === userPhone) {
        // User.name = person.name;
        // console.log(User.name);
      } else {
        console.log(person, "own user");
        this.setState(prevState => {
          return {
            users: [...prevState.users, person]
          };
        });
      }
      // console.log(person)
    });
  }
  render() {
    console.log(this.state.users);
    return (
      <SafeAreaView>
        {/* {this.state.usersuserDetail? */}
        <FlatList
          data={this.state.users}
          renderItem={({ item }) => (
            item.userDetail ?
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  height: height / 4.5,
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  backgroundColor: "#ffffff",
                  // justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {console.log(item)}
                <TouchableOpacity
                  style={{ flex: 0.8, flexDirection: "row" }}
                  onPress={() =>
                    this.props.navigation.navigate("ChatScreen", item)
                  }
                >
                  <View
                    style={{
                      flex: 0.3,
                      paddingLeft: width / 26,
                      //   backgroundColor: "#000"


                    }}
                  >
                    <Image
                      // source={{ uri: item.userDetail.imageUrl }}
                      // resizeMode="contain"
                      style={{
                        width: width / 4,
                        height: height / 8,
                        borderRadius: width / 4
                      }}
                    />
                  </View>
                  <View style={{
                    flex: 0.7, border: 5,
                    borderWidth: 2,
                    borderRadius: 20,
                    marginBottom: 10,
                    marginTop: 10,
                    alignItems: "center",
                    alignContent: 'center',
                    justifyContent: 'center',
                    backgroundColor:'#d3d0d0'
                  }}>
                    <Text
                      style={{
                        color: "black",
                        fontSize: width / 20,
                        paddingLeft: width / 50,
                        // paddingTop:25,
                        // alignItems: "center", 
                        // textAlign: 'left'

                      }}
                    >
                      {item.userDetail.name}
                     

                    </Text>
                    <Text
                      style={{
                        color: "black",
                        fontSize: width / 20,
                        paddingLeft: width / 50,
                        // paddingTop:25,
                        // alignItems: "center", 
                        // textAlign: 'left'

                      }}
                    >
                      {/* {item.userDetail.name} */}
                      {item.userDetail.email}

                    </Text>
                    {/* <Text style={{ paddingLeft: width / 26 }}>{item.message}</Text> */}
                  </View>
                </TouchableOpacity>

              </View>
              : null
          )}
          keyExtractor={item => item.phone}
        />

     
      </SafeAreaView>


    );
  }
}

function mapStateToProps(state) {
  return {
    userdDetail: state.appReducer.userdDetail
  }
}
function mapDispatchToProps(dispatch) {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageList)