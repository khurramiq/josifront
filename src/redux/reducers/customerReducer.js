import { customerConstants } from '../constants';
const { CUSTErr, CUSTSuc, CUSTDel, CUSTDetails, CUSTReq } = customerConstants;
const initialState = { isError: false };

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CUSTErr: return {
            ...state, isError: true, errorText: action.payload
        };
        case CUSTSuc: return {
            ...state, isError: false, data: action.payload
        };
        case CUSTDel: return {
            ...state, data: state.data.filter(item => item._id !== action.payload._id), isError: false
        }
        case CUSTDetails: return {
            ...state, isError: false, details: action.payload
        };
        case CUSTReq: return {
            ...state, data: []
        }
        default: return state;
    }
}