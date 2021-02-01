import { surveyConstants } from '../constants';
const { SURVEYReq, SURVEYErr, SURVEYSuc, SURVEYAdd, SURVEYDel, SURVEYUpt } = surveyConstants;
const initialState = { isSuccess: false, isError: false, data: [] };

export const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SURVEYReq: return {
            ...state, isSuccess: false, isError: false, data: []
        };
        case SURVEYSuc:  
        return {
            ...state, isSuccess: true, isError: false, data: action.payload
        };
        case SURVEYErr: return {
            ...state, isError: true, errorText: action.payload
        };
        case SURVEYAdd: return {
            ...state, data: action.payload.concat(state.data), isError: false
        };
        case SURVEYDel: return {
            ...state, data: state.data.filter(survey => survey._id !== action.payload._id)
        }
        case SURVEYUpt: return {
            ...state, data: state.data.map(survey => {
                if (survey._id === action.payload._id) survey = action.payload;
                return survey;
            }), isError: false
        }
        default: return state;
    }
}
