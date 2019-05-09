import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
  FlatList
} from "react-native";
const { width, height } = Dimensions.get("window");
import { Item, Input, Icon } from "native-base";
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
            onPress={() => navigation.toggleDrawer()}
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

  render() {
    return (
      <FlatList
        data={arrList}
        renderItem={({ item }) => (
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
                source={{ uri: item.imageUrl }}
                // resizeMode="contain"
                style={{ width: width / 3, height: height / 6 }}
              />
            </View>
            <View style={{ flex: 0.6, paddingLeft: width / 24 }}>
              <View style={{ justifyContent: "center" }}>
                <Text style={{ color: "#fff", fontSize: width / 20 }}>
                  {" "}
                  Name
                </Text>
                <Text style={{ color: "#fff" }}>Profession / Company Name</Text>
                <Text style={{ color: "#fff" }}> email - phone number</Text>
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
        )}
      />
    );
  }
}
