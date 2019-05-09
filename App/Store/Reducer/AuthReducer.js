import actionTypes from "../actionTypes";

let INITIAL_STATE = {
  isProgress: false,
  isError: false,
  errorTest: "",
  currentUser: {},
  userID:"",
  phoneNumber:""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_PROGRESS:
      return { ...state, isProgress: true };
    case actionTypes.SIGNIN_SUCCESSFUL:
      return { ...state, isProgress: false, currentUser: action.payload,userID:action.uid,phoneNumber:action.phoneNumber, isError:false }
    case actionTypes.SIGNIN_REJECTED:
      return { ...state, isProgress: false, isError: true, errorTest: action.payload }
      case actionTypes.SIGNIN_PROGRESS_VERIFY:
      return { ...state, isProgress: true };
      case actionTypes.SIGNIN_SUCCESSFUL_VERIFY:
      return {...state,isProgress: false, userID: action.payload}
      case actionTypes.SIGNIN_REJECTED_VERIFY:
      return {...state,isError:true,isProgress:false,errorTest:action.payload}

    default:
      return state;
  }
};
