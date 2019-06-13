import ActionTypes from "../actionTypes";
import firebase from "react-native-firebase";


export function createProfileAction(payload) {
  return dispatch => {
    this.history = payload.history;
    return firebase.database().ref(`users/${payload.phoneNumber}`).child('userDetail').set(payload

      , (err) => {
        if (err) {
          // console.log(err)
          dispatch(createProfileError(err))
          // return AppAction.createProfileError(err)
        } else {
          // console.log("successfull")
          // return firebase.database().ref(`${payload.uid}`).once("value", snapShot => {
          // console.log(snapShot.val())
          dispatch(createProfileSuccess(payload))
          this.history.navigate('Profile')
          // return AppAction.createProfileSuccess("Success")
          // })
        }
      });
  }
}
export function profileAction(obj) {
  return dispatch => {
    console.log(obj, 'phonennnnn')
    dispatch(GetProfileProgress());

    firebase.database().ref(`users`).child(obj).on('child_added', snapshot => {
      let user = snapshot.val();
      console.log(user, 'data')

      dispatch(GetProfileSuccess(user))
    })
  }
}
// export default class AppAction {
//   // create profile //
//   static createProfileProgress(obj) {
//     console.log(obj);
//     return {
//       type: ActionTypes.CREATE_PROFILE_PROGRESS,
//       payload: obj
//     };
//   }
//   static createProfileSuccess(obj) {
//     console.log(obj);
//     return {
//       type: ActionTypes.CREATE_PROFILE_SUCCESS,
//       payload: obj
//     };
//   }
//   static createProfileError(obj) {
//     return {
//       type: ActionTypes.CREATE_PRIFILE_ERROR,
//       payload: obj
//     };
//   }

//   // Get Profile //
//   static GetProfileProgress() {
//     // console.log(obj);
//     return {
//       type: ActionTypes.GET_PROFILE_PROGRESS,
//       payload: "ammar"
//     };
//   }
//   static GetProfileSuccess(obj) {
//     console.log(obj);
//     return {
//       type: ActionTypes.GET_PROFILE_SUCCESS,
//       payload: obj
//     };
//   }
//   static GetProfileError(obj) {
//     return {
//       type: ActionTypes.GET_PROFILE_ERROR,
//       payload: obj
//     };
//   }
// }

function createProfileProgress() {
  return {
    type: ActionTypes.createProfileProgress
  }
}
function createProfileSuccess(obj) {
  return {
    type: ActionTypes.CREATE_PROFILE_SUCCESS,
    payload: obj
  }
}
function createProfileError(err) {
  return {
    type: ActionTypes.CREATE_PRIFILE_ERROR,
    payload: err
  }
}

function GetProfileProgress() {
  // console.log(obj);
  return {
    type: ActionTypes.GET_PROFILE_PROGRESS,
    // payload: "ammar"
  };
}
function GetProfileSuccess(obj) {
  console.log(obj);
  return {
    type: ActionTypes.GET_PROFILE_SUCCESS,
    payload: obj
  };
}
function GetProfileError(obj) {
  return {
    type: ActionTypes.GET_PROFILE_ERROR,
    payload: obj
  };
}
















//////////////////////////////////////// chat /////////////////////////////////


export function UserList() {
  return dispatch => {

  }
}


/////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////// Public Profile Page /////////////////////////////////////
export function getAllUser() {
  return dispatch => {
    firebase.database().ref('users').on('value', (snapshot) => {
      let userList = snapshot.val(),

        userListKeys = Object.keys(userList);
      console.log(userListKeys)
      let arrList = [];
      userListKeys.map(i => {
        let obj = {
          uid: userList[i].userAuth,
          address: userList[i].userDetail.address,
          city: userList[i].userDetail.city,
          company: userList[i].userDetail.company,
          country: userList[i].userDetail.country,
          email: userList[i].userDetail.email,
          name: userList[i].userDetail.name,
          occupation: userList[i].userDetail.occupation,
          phoneNumber: userList[i].userDetail.phoneNumber,
          website: userList[i].userDetail.website
        }

        // 
        arrList.push(obj)
      })

      console.log(arrList, 'userList')
      dispatch(publicProfileSuccess(arrList))
    })
  }
}


function publicProfileSuccess(data) {
  return {
    type: ActionTypes.GET_ALL_USER_PUBLIC_SUCCESS,
    payload: data
  }
}

export function friendRequestAction(){
  
}