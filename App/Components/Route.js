import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  DrawerItems
} from "react-navigation";
// import {  } from "react-native";
import Profile from "./TabNavigator/Profile";
import MessageList from "./TabNavigator/MessageList";
import GlobalSocial from "./TabNavigator/GlobalSocial";
import Videos from "./TabNavigator/Videos";
import SearchFriend from "./TabNavigator/SearchFriend";
import CreateProfile from "./DrawerNavigator/CreateProfile";
import Backup from "./DrawerNavigator/Backup";
import Feedback from "./DrawerNavigator/Feedback";
import Help from "./DrawerNavigator/Help";
import ManageAccount from "./DrawerNavigator/ManageAccount";
import Notification from "./DrawerNavigator/Notification";
import Upgrade from "./DrawerNavigator/Upgrade";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ChatScreen from "./TabNavigator/ChatScreen";
import PublicProfileDetail from './TabNavigator/publicProfileDetail'
const { width, height } = Dimensions.get("window");
import { store } from '../Store'
import firebase from 'react-native-firebase';
// import LogOut from './DrawerNavigator/LogOut';
import {
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
  AsyncStorage,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert
} from "react-native";
const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "#0071ce",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ fontSize: width / 16, fontWeight: "bold", color: "#fff" }}>
        say hi, to {"\n"}
        convenience
      </Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            "Log out",
            "Do you want to logout?",
            [
              {
                text: "Cancel",
                onPress: () => {
                  return null;
                }
              },
              {
                text: "Confirm",
                onPress: () => {
                  // AsyncStorage.clear();
                  firebase.auth().signOut().then(async () => {
                    props.navigation.navigate("signIn");
                    console.log('SIgn out successfull')

                    await AsyncStorage.removeItem('user', (err => {
                      console.log(err, "logout hw")
                    }))
                    await AsyncStorage.removeItem('state', (err => {
                      console.log(err, "remove state")

                    }))
                    await AsyncStorage.removeItem('persist:root', (err => {
                      console.log(err, "remove state persist")

                    }))
                    // store.dispatch({

                    // })
                    props.navigation.navigate('signIn');
                  }).catch((err) => {
                    console.log(err)
                  })
                }
              }
            ],
            { cancelable: false }
          )
        }
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);
const MessageStack = createStackNavigator({
  MessageList: {
    screen: MessageList
  },
  // ChatScreen: {
  //   screen: ChatScreen
  // }
});


const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        drawerIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="home"
            size={25}
            style={{ color: "#0071ce" }}
          />
        ),
        title: "Profile",
        headerStyle: {
          backgroundColor: "#0033a0"
        },
        headerTintColor: "#fff",
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={require("../../assets/Setting.png")}
              resizeMode="contain"
              style={{ width: width / 12, marginLeft: 8, marginRight: -6 }}
            />
          </TouchableOpacity>
        ),
        headerTitleStyle: {
          textAlign: "center",
          flex: 1,
          marginLeft: -12
        }
      };
    }
  }
});
const SocialStack = createStackNavigator({
  Social: {
    screen: GlobalSocial
  },
  PublicProfileDetail: {
    screen: PublicProfileDetail
  }

});

const VideoStack = createStackNavigator({
  Videos: {
    screen: Videos
  }
});
const SearchFriendStack = createStackNavigator({
  SearchFriend: {
    screen: SearchFriend
  }
});
const AppTabNavigator = createBottomTabNavigator(
  {
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../../assets/myprofile.png")}
            resizeMode="contain"
            style={{ width: width / 6 }}
          />
        )
      }
    },
    MessageList: {
      screen: MessageStack,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../../assets/chat.png")}
            resizeMode="contain"
            style={{ width: width / 6 }}
          />
        )
      }
    },
    Social: {
      screen: SocialStack,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../../assets/social.png")}
            resizeMode="contain"
            style={{ width: width / 6 }}
          />
        )
      }
    },

    SearchFriend: {
      screen: SearchFriendStack,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../../assets/allcontacts.png")}
            // viewadds.png
            // ")}
            resizeMode="contain"
            style={{ width: width / 6 }}
          />
        )
      }
    },
    Videos: {
      screen: VideoStack,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../../assets/viewadds.png")}
            resizeMode="contain"
            style={{ width: width / 6 }}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Profile",
    order: ["Videos", "Social", "SearchFriend", "MessageList", "Profile"],
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#c9d6ec"
      },
      activeBackgroundColor: "#a0c0e8"
    }
  }
);

AppTabNavigator.navigationOptions = {
  header: null
};
const AppStackNavigator = createStackNavigator({
  AppTabNavigator
});
const createProfileStack = createStackNavigator({
  CreateProfile: {
    screen: CreateProfile
  }
});
export default (AppDrawerNavigator = createDrawerNavigator(
  {
    Home: AppStackNavigator,
    CreateProfile: createProfileStack,

    Notification: Notification,
    Feedback: Feedback,
    ManageProfile: ManageAccount,
    Upgrade: Upgrade,
    Help: Help,
    Backup: Backup
    // LogOut:LogOut
  },
  {
    // initialRouteName: CreateProfile,
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: "#0071ce"
    }

    //     navigationOptions : ((navigation)=>{
    //         return{
    //             drawerIcon:({  tintColor} )=>(
    // <Button title="Log Out" onPress={ async  ()=> await AsyncStorage.clear()} >
    // <Image source={require('../../assets/logout.png')} resizeMode='contain'/>
    // </Button>
    //             )
    //         }
    //     })
  }
));
