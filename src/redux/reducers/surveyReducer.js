import { surveyConstants } from '../constants';
const { SURVEYReq, SURVEYErr, SURVEYSuc, SURVEYAdd, SURVEYDel, SURVEYUpt, SURVEY_RECENT, ALL_USER_SURVEYS, ALL_USER_SURVEYS_REQ, UPDATE_RECENT_SURVEY } = surveyConstants;
const initialState = { loading: false, isSuccess: false, isError: false, data: [], recentSurvey: '' };

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
        case SURVEY_RECENT: return {
            ...state,  recentSurvey: action.payload
        };
        case UPDATE_RECENT_SURVEY: return {
            ...state,  recentSurvey: action.payload
        };
        case SURVEYAdd: return {
            ...state, data: action.payload.concat(state.data), isError: false
        };        
        case ALL_USER_SURVEYS_REQ: return {
            ...state, loading: true
        };
        case ALL_USER_SURVEYS: return {
            ...state, data: action.payload, loading: false
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
