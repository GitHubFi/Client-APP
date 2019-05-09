import Auth from "../actionTypes";
import firebase from "react-native-firebase";
import ActionTypes from '../actionTypes'
import { AsyncStorage, ToastAndroid } from 'react-native'
// export default class AuthAction {
//   static signInAc(obj) {
//     console.log(obj);
//     return {
//       type: Auth.SIGNIN_PROGRESS,
//       payload: obj
//     };
//   }
//   static signInSuccessFul(obj,uid) {
//     console.log(obj);
//     return {
//       type: Auth.SIGNIN_SUCCESSFUL,
//       payload: obj
//     };
//   }
//   static signInRejected(error) {
//     console.log(error);
//     return {
//       type: Auth.SIGNIN_REJECTED,
//       payload: error
//     };
//   }
//   static signInVerify(obj) {
//     console.log(obj)
//     return {
//       type: Auth.SIGNIN_PROGRESS_VERIFY,
//       payload: obj
//     }
//   }
//   static signInVerifySuccessful(obj) {
//     return {
//       type: Auth.SIGNIN_SUCCESSFUL_VERIFY,
//       payload: obj
//     }
//   }
//   static signInVerifyRejected(obj) {
//     return {
//       type: Auth.SIGNIN_REJECTED_VERIFY,
//       payload: obj
//     }
//   }
// }




export function signInAc(payload) {
  console.log(payload)
  return async  dispatch => {
    let phoneNumber = payload.phoneNumber;
    this.history = payload.history;
    firebase.auth()
      .verifyPhoneNumber(payload.phoneNumber
        , 60, true
      )
      .on('state_changed', (phoneAuthSnapshot) => {

        switch (phoneAuthSnapshot.state) {

          case firebase.auth.PhoneAuthState.CODE_SENT: // or 'sent'
            dispatch(signInRequest())
            console.log('code sent');
            ToastAndroid.show('Verification Code Sent', ToastAndroid.SHORT)
            break;

          case firebase.auth.PhoneAuthState.ERROR: // or 'error'
            console.log('verification error');
            ToastAndroid.show('Verification Error', ToastAndroid.SHORT)
            dispatch(signUpError(phoneAuthSnapshot.error))
            console.log(phoneAuthSnapshot.error);
            break;

          case firebase.auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT: // or 'timeout'
            console.log('auto verify on android timed out');
            ToastAndroid.show('Auto verify on android timed out', ToastAndroid.SHORT)
            break;

          case firebase.auth.PhoneAuthState.AUTO_VERIFIED: // or 'verified'
            console.log('auto verified on android');

            const { verificationId, code } = phoneAuthSnapshot;
            const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
            firebase.auth().signInAndRetrieveDataWithCredential(credential).then(async (userCredential) => {
              console.log(userCredential, "user signin user")

              await AsyncStorage.setItem('user', phoneNumber)
              firebase
                .database()
                .ref(`users/${phoneNumber}`).child('userAuth')
                .set(userCredential.user._user.uid);
              console.log(userCredential, userCredential.user._user.uid, phoneNumber)
              dispatch(signUpSucceed(userCredential, userCredential.user._user.uid, phoneNumber));
              setTimeout(() => {

                this.history.navigate("app");
              }, 1000)


            }).catch(err => {
              console.log(err, "user err")
            })
            // console.log(phoneAuthSnapshot);
            // // AsyncStorage.setItem('loggedin', 'true');
            // this.confirmCode(phoneAuthSnapshot.verificationId, phoneAuthSnapshot.code)
            // getCurrentUser(); // Checking if the user is logged-in and it have the user as current user.
            break;
        }
      }, (error) => {
        console.log(error);
        console.log(error.verificationId);
      }, (phoneAuthSnapshot) => {
        console.log(phoneAuthSnapshot, "user signin");
      });





    // firebase.auth().verifyPhoneNumber(payload.phoneNumber)
    // .on('state_changed',(phoneAuthSnapshot)=>{
    //   console.log(phoneAuthSnapshot,"check ")
    // })

    // this.history = payload.history;
    // let phoneNumber = payload.phoneNumber
    // return firebase
    //   .auth()
    //   .signInWithPhoneNumber(payload.phoneNumber)
    //   .then(async confirmResult => {
    //     console.log(confirmResult, "fetch user success")
    //     user = firebase.auth().currentUser;
    //     console.log(user, "check user is still avaialable")
    //     this.history.navigate("verifySignIn");

    //     await AsyncStorage.setItem('user', phoneNumber)
    //     firebase
    //       .database()
    //       .ref(`users/${phoneNumber}`).child('userAuth')
    //       .set(confirmResult._auth._user._user.uid);

    //     dispatch(signUpSucceed(confirmResult, confirmResult._auth._user._user.uid,phoneNumber));


    //   })
    //   .catch(error => {
    //     // return AuthActions.signInRejected(error);
    //     console.log(error, "error when signin ")
    //     dispatch(signUpError(error))
    //   });
  }
}



// function getCurrentUser() {
//   var userId;
//   try {
//     firebase.auth().onAuthStateChanged(function (user) {
//       console.log(user)
//       userId = user.uid;

//     });

//     AsyncStorage.setItem('uid', userId);

//     //  Database.checkFirstLogin(userId, (firstLogin) => {
//     //   this.setState({
//     //     firstLogin: firstLogin
//     // });
//     //   if (this.state.firstLogin == null) {
//     //       Actions.userDetails({uid: userId});
//     //   }  else {
//     //       Actions.dashboard({uid: userId});
//     //     }
//     // });
//   } catch (error) {
//     console.log(error);
//   }
// }



// export function verifylogin(obj) {
//   console.log(obj,"verify data comming")
//   return dispatch => {
//     // if(obj.uid){

//     // // }else{
//     // obj.confirmResult
//     //   .confirm(obj.verifyCodeInput)
//     //   .then(user => {
//     //     console.log(user, 'verify check')
//     //     console.log(obj.uid,'verify user id')
//         this.history.navigate('app')
//       // }).catch((err) => {
//       //   console.log(err,'verify error')
//       // })
//     }
//   // }
// }



//   static verifylogin = action$ =>
//     action$.ofType(Auth.SIGNIN_PROGRESS_VERIFY).switchMap(({ payload }) => {
//       console.log(payload);

//       // console.log(payload)

//       return payload.confirmResult
//         .confirm(payload.verifyCodeInput)
//         .then(user => {
//           // console.log(user)
//           // firebase
//           return AuthActions.signInVerifySuccessful(payload.uid);
//         })
//         .catch(err => {
//           console.log(err);
//         });
//       // return payload
//       // console.log(payload)
//     });
//   // 03402041054
//   // 3102556867
//   //03472197728
// }
function signInRequest() {
  return {
    type: ActionTypes.SIGNIN_PROGRESS
  }
}
function signUpSucceed(data, uid, phoneNumber) {
  console.log(data, uid, "xxxxxxxxxxxxxxxxxxxxxxxxxxxx")
  return {
    type: ActionTypes.SIGNIN_SUCCESSFUL,
    payload: data,
    uid,
    phoneNumber
  }
}
function signUpError(error) {
  return {
    type: ActionTypes.SIGNIN_REJECTED,
    error
  }
}
// export function signUpErrorAlert() {
//     return {
//         type: actionTypes.SIGNUP_ERROR_ALERT
//     }
// }




























///////////////////////////////////////////////// Public Profile Page /////////////////////////////////////
