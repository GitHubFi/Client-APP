import ActionTypes from "../actionTypes";
import firebase from "react-native-firebase";
import AppAction from "../Actions/AppAction";
import Users from "../../Components/SignIn/User";
export default class AppEpic {
  /* Create profile */
  static createEpic = action$ => {
    return action$
      .ofType(ActionTypes.CREATE_PROFILE_PROGRESS)
      .switchMap(({ payload }) => {
        // console.log(payload, Users.phone);
        firebase.database().ref(`${payload.uid}`).update(payload

          , (err) => {
          if (err) {
            // console.log(err)
            return AppAction.createProfileError(err)
          } else {
            // console.log("successfull")
            // return firebase.database().ref(`${payload.uid}`).once("value", snapShot => {
              // console.log(snapShot.val())
              return AppAction.createProfileSuccess("Success")
            // })
          }
        });

        // }
        // return firebase
        //   .database()
        //   .ref(`${payload.uid}`)
        //   .once("value", snapShot => {
        //     console.log(snapShot.val());
        //     const result = snapShot.val();
        //     // console.log(result)
        //     return AppAction.createProfileSuccess(result)

        //   });
      });
  };

  static profileEpic = action$ => {
    return action$
      .ofType(ActionTypes.GET_PROFILE_PROGRESS)
      .switchMap(({ payload }) => {
        console.log(payload);
        return firebase
          .database()
          .ref(`users/${Users.phone}`)
          .on("value", snapShot => {
            console.log(snapShot.val());
            const result = snapShot.val();
            return AppAction.GetProfileSuccess(result);
          });
      });
  };
}
