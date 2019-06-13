/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import AppDrawerNavigator from "./Route";
import Splash from "./Splash/Splash.js";
import SignIn from "./SignIn/SignIn.js";
import SignUp from "./SignUp/SignUp.js";
import VerifySignIn from "./SignIn/Verify";
import ChatScreen from './TabNavigator/ChatScreen'
import { Provider } from "react-redux";
import { store, persistor } from "../Store/index";
// import { loadState, saveState } from '../Store/stateMaintain'
import { PersistGate } from 'redux-persist/integration/react'
import Icon from "react-native-vector-icons/Ionicons";

const AuthStackNavigator = createStackNavigator(
  {
    signIn: SignIn,
    verifySignIn: VerifySignIn,
    app: AppDrawerNavigator,
    ChatScreen:ChatScreen
  },
  {
    initialRouteName: "signIn"
  }
);

const Switch = createSwitchNavigator({
  splash: Splash,
  auth: AuthStackNavigator,
  app: AppDrawerNavigator,
  ChatScreen:ChatScreen
});

export default class App extends Component {
  renderLoading = () => {
    <View>
      <ActivityIndicator size="large" />
    </View>
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>

          <Switch />
        </PersistGate>

      </Provider>
    );
  }
}
// const AppTabNavigator = createBottomTabNavigator({
//   Home: {
//     screen: Home
//   },
//   Settings: {
//     screen: SettingScreen
//   }
// })
// const AppStackNavigator = createStackNavigator({
//   AppTabNavigator: {
//     screen: AppTabNavigator
//   }
// })
// const AppDrawerNavigator = createDrawerNavigator({
//   Home: AppStackNavigator
// })
// const AuthStackNavigator = createStackNavigator(
//   {
//     signIn: SignIn,
//     // create: CreateProfile,
//     // Profle is in tab but we use here because route is not set we will move later in the yab
//     profile: Profile,

//   },
//   // {
//   //   initialRouteName: "signIn"
//   // }
// );

//////////////////////

// const AppStackNavigator = createStackNavigator({
//   Login:{
//     screen:SignIn
//   },
//   Home:Home
// })

/////////////////////////
// export default createBottomTabNavigator({
//   Home:
//     {
//       screen: Home,
//       navigationOptions: {
//         tabBarLabel: 'Home',
//         tabBarIcon: ({ tintColor })=>(
//           <Icon name="ios-home" size={24} />
//         )
//     }
//   },
// Settings: {
//   screen:SettingScreen,
//   navigationOptions: {
//     tabBarLabel: 'Setting',
//     tabBarIcon: ({ tintColor })=>(
//       <Icon name="ios-settings" size={24} />
//     )
// }

// }})

//////////////////////////

/////
// const Tabs = createBottomTabNavigator(
//   {
//     message: Message,
//     globalSocial: GlobalSocial,
//     search: SearchFriend,
//     videos: Videos
//   },
//   {
//     order: ["videos", "globalSocial", "search", "message",],
//     animationEnabled: true
//   }
// );
// const Drawer = createDrawerNavigator({
//   stack: Auth,
//   tab: Tabs
// });
// const prevGetStateForActionRootStack = Switch.router.getStateForAction;

// Switch.router.getStateForAction = (action, state) => {
//   if (state && action.type === "ReplaceCurrentScreen") {
//     console.log("replace screen action");
//     const routes = state.routes.slice(0, state.routes.length - 1);
//     routes.push(action);
//     return {
//       ...state,
//       routes,
//       index: routes.length - 1
//     };
//   }
//   return prevGetStateForActionRootStack(action, state);
// };
