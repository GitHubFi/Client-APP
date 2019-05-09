import actionTypes from "../actionTypes";

let INITIAL_STATE = {
    isProgress: false,
    isError: false,
    errorTest: "",
    userDetail: {},
    allUserPublicList: []
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CREATE_PROFILE_PROGRESS:
            return { ...state, isProgress: true };
        case actionTypes.CREATE_PROFILE_SUCCESS:
            return { ...state, isProgress: false, userDetail: action.payload };
        case actionTypes.CREATE_PRIFILE_ERROR:
            return { ...state, isError: true, isProgress: false, errorTest: action.payload };
        case actionTypes.GET_PROFILE_PROGRESS:
            return { ...state, isProgress: true };
        case actionTypes.GET_PROFILE_SUCCESS:
            return { ...state, isProgress: false, userDetail: action.payload };
        case actionTypes.GET_PROFILE_ERROR:
            return { ...state, isError: true, isProgress: false, errorTest: action.payload };
        case actionTypes.GET_ALL_USER_PUBLIC_SUCCESS:
        return { ...state, allUserPublicList: action.payload };
        default:
            return state;
    }
};
