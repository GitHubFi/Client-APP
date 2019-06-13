import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
  FlatList,
  Alert,
  AsyncStorage
} from "react-native";
const { width, height } = Dimensions.get("window");
import { Item, Input, Icon } from "native-base";
import firebase from "react-native-firebase";
const arrList = [
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "a"
  },
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "b"
  },
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "c"
  },
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "d"
  },
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "e"
  },
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "f"
  }
];

export default class SearchFriend extends Component {

  state = {
    users: []
  };
  // addUser = ()=>{
  //   Alert.alert(
  //     'Alert Title',
  //     'My Alert Msg',
  //     [
  //       {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //       },
  //       {text: 'OK', onPress: () => console.log('OK Pressed')},
  //     ],
  //     {cancelable: false},
  //   );
  // }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: "#0033a0"
      },
      headerTitle: (
        <Item
          rounded
          style={{
            backgroundColor: "#fff",
            width: width / 2,
            height: height / 18
          }}
        >
          <Input placeholder="Search" />
          <Icon active name="search" style={{ color: "#0033a0" }} />
        </Item>
      ),

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
      headerRight: (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            // onPress={() => navigation.toggleDrawer()}
            onPress={() => Alert.alert(
              'Alert Title',
              'My Alert Msg',
              [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ],
              { cancelable: false },
            )}


            style={{ marginRight: width / 28 }}
          >
            <Image
              source={require("../../../assets/addContact.png")}
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
    return (
      <FlatList
        data={this.state.users}
        renderItem={({ item }) => (
          item.userDetail ?
            <View
              style={{
                flex: 1,
                backgroundColor: "#0071ce",
                flexDirection: "row",
                height: height / 6,
                marginRight: -width / 8
              }}
            >
              <View style={{ flex: 0.3 }}>
                <Image
                  source={{ uri:  "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg"}}
                  // resizeMode="contain"
                  style={{ width: width / 3, height: height / 6 }}
                />
              </View>
              <View style={{ flex: 0.6, paddingLeft: width / 24 }}>
                <View style={{ justifyContent: "center" }}>
                  <Text style={{ color: "#fff", fontSize: width / 20 }}>
                    {" "}
                    {item.userDetail.name.toUpperCase()}
                  </Text>
                  <Text style={{ color: "#fff" }}> {item.userDetail.occupation} / {item.userDetail.company}</Text>
                  <Text style={{ color: "#fff" }}> {item.userDetail.email} -  {item.phone}</Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-end",
                    flexDirection: "row",
                    paddingRight: width / 20,
                    //   backgroundColor:'yellow',
                    height: height / 20,
                    marginTop: width / 24
                  }}
                >
                  <TouchableOpacity
                  // onPress={() => navigation.toggleDrawer()}
                  //   marginTop:width/24,
                  // style={{ paddingTop:width/36 , }}
                  >
                    <Image
                      source={require("../../../assets/Share.png")}
                      style={{
                        width: width / 16,
                        height: height / 30,
                        marginLeft: 8
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                  // onPress={() => navigation.toggleDrawer()}
                  // style={{ marginTop:width/36, }}
                  >
                    <Image
                      source={require("../../../assets/chatPic.png")}
                      style={{
                        width: width / 16,
                        height: height / 30,
                        marginLeft: 8
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                  // onPress={() => navigation.toggleDrawer()}
                  // style={{ paddingTop:width/36 }}
                  >
                    <Image
                      source={require("../../../assets/Favorite.png")}
                      style={{
                        width: width / 16,
                        height: height / 30,
                        marginLeft: 8
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            : null
        )}
        keyExtractor={item => item.phone}
      />
    );
  }
}
