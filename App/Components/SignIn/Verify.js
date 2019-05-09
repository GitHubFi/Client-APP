import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    ToastAndroid,
    AsyncStorage
} from "react-native";
import { Input, Button, Spinner, Form, Item, Picker, Label } from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");
import { connect } from 'react-redux';
import { verifylogin } from '../../Store/Actions/AuthAction'

class Verify extends Component {
    state = {
        verifyCodeInput: ''
    }
    static navigationOptions = {
        header: null
    }

    verifyFunc = async () => {
        let { verifyCodeInput } = this.state;
        // console.log(this.props.verifyCode._auth._user)
        // await AsyncStorage.setItem('User',
        //     this.props.verifyCode._auth._user._user.phoneNumber
        // )
        console.log(this.props.verifyCode, "verify code ", this.props.verifyCode._auth._user._user.uid)
        // this.props.navigation.navigate('app')
        this.props.verifyCode._verificationId !== null ?
            this.props.verifyUser({
                verifyCodeInput,
                confirmResult: this.props.verifyCode,
                uid: this.props.verifyCode._auth._user._user.uid
            })
            :
            this.props.navigation.navigate('app')

    }
    render() {
        console.log(this.props.verifyCode)
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#008ace",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        fontSize: width / 18,
                        color: "#fff",
                        marginBottom: 5,
                        textAlign: "center"
                    }}
                >
                    Verify Your Code
            </Text>

                <View style={{ width: width / 2, marginTop: 10 }}>
                    <Item style={{ borderColor: "transparent" }}>
                        <Input
                            style={{ backgroundColor: "#fff", borderRadius: 10 }}
                            placeholder="Enter Code"
                            onChangeText={verifyCodeInput => this.setState({ verifyCodeInput })}
                            value={this.state.verifyCodeInput}
                        />
                    </Item>
                </View>
                <Button
                    rounded
                    style={{
                        alignSelf: "center",
                        marginTop: 10,
                        backgroundColor: "#008ace"
                    }}
                    onPress={this.verifyFunc}
                >
                    <Text
                        style={{
                            width: width / 2,
                            color: "#fff",
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                    >
                        Verify
              </Text>
                </Button>

            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        verifyCode: state.authReducer.currentUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
        verifyUser: obj => {
            dispatch(verifylogin(obj))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Verify);