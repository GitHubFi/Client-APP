import React,{Component} from 'react';
import {View} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
export default class Feedback extends Component{
    static navigationOptions = {
        drawerIcon :({tintColor})=>(
            <MaterialCommunityIcons name="file-document-box" size={25} style={{color:'#0071ce'}} />
        )
    }
    render(){
        return(
            <View/>
        )
    }
}
{/* <MaterialCommunityIcons name={"account-badge"} size={25} style={{color:'#0071ce'}} /> */}