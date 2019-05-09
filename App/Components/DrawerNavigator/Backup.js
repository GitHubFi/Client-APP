import React,{Component} from 'react';
import {View} from 'react-native';
// import {Icon} from 'native-base';
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
export default class Backup extends Component{
    static navigationOptions = {
        drawerIcon :({tintColor})=>(
<MaterialCommunityIcons name="cloud-upload" size={25} style={{color:'#0071ce'}} />
        )
    }
    render(){
        return(
<View/>
        )
    }
}