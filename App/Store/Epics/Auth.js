// import { Observable } from "rxjs";
// import Auth from "../actionTypes";
// import AuthActions from "../Actions/AuthAction";
// import firebase from "react-native-firebase";
// // import {AsyncStorage} from 'react-native'
// import ActionTypes from "../actionTypes";



// // const returnData = payload => ({ type: Auth.SIGNIN_SUCCESSFUL, payload })
// export default class AuthEpic {
//   static loginEpic = action$ => {
//     // let user = null;
//     return action$.ofType(Auth.SIGNIN_PROGRESS).switchMap(({ payload }) => {
//       // console.log(payload)
//       this.history = payload.history;

//       // firebase
//       //   .database()
//       //   .ref(`users/${payload.phoneNumber}`)
//       //   .set({ name: payload.country })
//       //   .then(data => {
//       //     // console.log(data);
//       //     return firebase
//       //       .database()
//       //       .ref(`users/${payload.phoneNumber}`)
//       //       .once("child_added", val => {
//       //         // console.log(val.value());
//       //         // val.val().then(data => {
//       //         //   console.log(data);
//       //         // });
//       //         return AuthActions.signInSuccessFul(val.val());
//       //       });
//       //   });

//       // return AuthActions.signInSuccessFul('ammar')
      // return firebase
      //   .auth()
      //   .signInWithPhoneNumber(payload.phoneNumber)
      //   .then(confirmResult => {
      //     // console.log(confirmResult)
      //     user = firebase.auth().currentUser;
      //     // console.log(user)
      //     // return confirmResult.update
      //     if (user !== null) {
      //     return user
      //       .updateProfile({
      //         displayName: payload.country
      //       })
      //       .then(() => {
      //         let obj = {
      //           uid: confirmResult._auth._user._user.uid,
      //           countryName: confirmResult._auth._user._user.displayName
      //         };
      //         this.history.navigate("app");
      //         firebase
      //           .database()
      //           .ref(`${confirmResult._auth._user._user.uid}`)
      //           .set(obj);
      //         // console.log(confirmResult._auth._user._user)
      //         return AuthActions.signInSuccessFul(confirmResult, confirmResult._auth._user._user.uid);
      //       }).catch((err)=>{
      //         return AuthActions.signInRejected(err);
      //       })
      //     }
      //   })
      //   .catch(error => {
      //     // console.log(error))
      //     return AuthActions.signInRejected(error);
      //   });
    // });
//   };

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
