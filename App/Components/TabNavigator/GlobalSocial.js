import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  FlatList,
  KeyboardAvoidingView
} from "react-native";
import { Item, Input, Icon } from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");
import { getAllUser } from '../../Store/Actions/AppAction'
import { connect } from "react-redux";
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
  },
  {
    imageUrl:
      "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg",
    key: "g"
  }
];

const numColumns = 3;
class GlobalSocial extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false
    };
  }
  formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }

    return data;
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Public Profiles",
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
              source={require("../../../assets/Filter.png")}
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
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  componentWillMount() {
    this.setModalVisible(true)
    this.props.getAllUserComp()
  }
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return (
        <View
          style={{
            backgroundColor: "#4D243D",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            margin: 1,
            height: Dimensions.get("window").width / numColumns,
            backgroundColor: "transparent"
          }}
        />
      );
    }
   
    return (
      <TouchableOpacity
      key={index}
        style={{
          flex: 1,
          margin: 1
        }}

        onPress={() => this.props.navigation.navigate('PublicProfileDetail', {
          detailUser: item
        })}
      >
        <View style={{ flex: 0.4 }}
        >
          <Image
            source={{ uri: "https://assets.rebelcircus.com/blog/wp-content/uploads/2016/05/facebook-avatar.jpg" }}
            style={{ width: width / 3, height: height / 6 }}
          />
        </View>
        <View
          style={{
            flex: 0.6,
            backgroundColor: "#0071ce",
            paddingLeft: width / 28
          }}
        >
          <Text
            style={{ fontSize: width / 24, color: "#fff", fontWeight: "bold" }}
          >
            {item.name.toUpperCase()}
          </Text>
          <View style={{ lineHeight: 1 }}>
            <Text style={{ fontSize: width / 36, color: "#fff" }}>
              {item.occupation}
            </Text>

            <Text style={{ fontSize: width / 36, color: "#fff" }}>
              {item.city}, {item.pakistan}
            </Text>

            <Text style={{ fontSize: width / 36, color: "#fff" }}>
              {item.email}
            </Text>
            <View style={{ flexDirection: "row", marginTop: width / 36 }}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: width / 24,
                    color: "#fff",
                    fontWeight: "bold",
                    // marginRight:width/38
                  }}
                >
                  320
                </Text>
                <Image
                  source={require("../../../assets/addContact.png")}
                  resizeMode="contain"
                  style={{ width: width / 30, height: height / 30 }}
                />
              </View>
              <View style={{ marginLeft: width / 20 }}>
                <Text style={{ color: '#fff' }}>*******</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
    
    
  
  };
  
  
  render() {
    console.log(this.props.allUserListComp)
    return (
      <View style={{ flex: 1 }}>
        {/* <KeyboardAvoidingView contentContainerStyle={{
          height: height - 20,
          width,
          backgroundColor: "#272727"
        }}
        behavior="position"> */}
        <View
          style={{
            flex: 0.3,
            backgroundColor: "#0033a0",
            flexDirection: "row"
            // height:height
          }}
        >
          <View style={{ paddingTop: width / 14 }}>
            <Item
              rounded
              style={{
                backgroundColor: "#fff",
                width: width / 2,
                height: height / 18
              }}
            >
              <Input placeholder="Name" />
            </Item>
            <Item
              rounded
              style={{
                backgroundColor: "#fff",
                width: width / 2,
                height: height / 18,
                marginTop: width / 14
              }}
            >
              <Input placeholder="Company Name" />
            </Item>
          </View>
          <View style={{ paddingTop: width / 14 }}>
            <Item
              rounded
              style={{
                backgroundColor: "#fff",
                width: width / 2,
                height: height / 18
              }}
            >
              <Input placeholder="Designation" />
            </Item>
            <Item
              rounded
              style={{
                backgroundColor: "#fff",
                width: width / 2,
                height: height / 18,
                marginTop: width / 14
              }}
            >
              <Input placeholder="E-mail" />
            </Item>
          </View>
        </View>
        {/* </KeyboardAvoidingView> */}
        <View style={{ flex: 0.7 }}>
          {this.props.allUserListComp.length !== 0 ?
            <FlatList
              data={this.formatData(this.props.allUserListComp, numColumns)}
              style={{ flex: 1 }}
              renderItem={this.renderItem}
              numColumns={numColumns}
            />
            : null
          }
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={require("../../../assets/backgroundmodal.png")}
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: width / 12,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Say hi, to the world{"\n"}with public profiles.{"\n"}Use filters
                and find{"\n"}ideal professionals{"\n"}from anywhere!
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(false);
                }}
                style={{ marginTop: width / 6 }}
              >
                <Image
                  source={require("../../../assets/dont.png")}
                  resizeMode="contain"
                  style={{
                    width: width / 2,
                    height: height / 12
                  }}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </Modal>

      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    allUserListComp: state.appReducer.allUserPublicList
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getAllUserComp: () => dispatch(getAllUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GlobalSocial);