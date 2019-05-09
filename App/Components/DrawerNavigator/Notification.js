import React,{Component} from 'react';
import {View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default class Notification extends Component{
    static navigationOptions = {
        drawerIcon :({tintColor})=>(
            <MaterialCommunityIcons name="bell" size={25} style={{color:'#0071ce'}} />
        )
    }
    render(){
        return(
<View/>
        )
    }
}