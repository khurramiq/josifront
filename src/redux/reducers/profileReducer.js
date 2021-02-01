import { userConstants, snackBarConstants, navBarConstants } from '../constants';
const { CUErr, CUSuc, URErr, ULErr, UProfile, UList, UListUpt, UListDel, UData } = userConstants;
const { SETCount } = navBarConstants;
const { ShowSnack, HideSnack } = snackBarConstants;
const initialState = { Auth: false, isError: false, isProfile: false, isLoading: true };

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CUErr: return {
            ...state, Auth: false, isLoading: false
        };
        case CUSuc: return {
            ...state, Auth: true, isLoginError: false, isRegError: false
        };
        case ULErr: return {
            ...state, isLoginError: true, errorText: action.payload
        };
        case URErr: return {
            ...state, isRegError: true, errorText: action.payload
        };
        case UProfile: return {
            ...state, isProfile: true, profile: action.payload, isLoading: false
        };
        case UList: return {
            ...state, list: action.payload,
        };
        case UListDel: return {
            ...state, list: state.list && state.list.length > 0 ?
                state.list.filter(item => item._id !== action.payload) : []
        };
        case UData: return {
            ...state, details: action.payload
        };
        case UListUpt: return {
            ...state, list: state.list && state.list.length > 0 ? state.list.map(item => {
                if (item._id === action.payload._id) item = action.payload;
                return item;
            }) : []
        };
        default: return state;
    }
};

export const snackbarReducer = (state = { isShow: false }, action) => {
    switch (action.type) {
        case ShowSnack: return {
            ...state, isShow: true, successText: action.payload
        };
        case HideSnack: return {
            ...state, isShow: false
        };
        default: return state;
    }
};

export const navbarReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case SETCount: return {
            ...state, count: action.payload
        };
        default: return state;
    }
};