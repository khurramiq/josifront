import { questionConstants } from '../constants';
const { QUESTIONReq, QUESTIONErr, QUESTIONSuc, QUESTIONAdd, QUESTIONDel, QUESTIONUpt, QUESTION_RECENT, ALL_USER_QUESTIONS, ALL_USER_QUESTIONS_REQ, UPDATE_RECENT_QUESTION, QUESTIONAddSuc } = questionConstants;
const initialState = { loading: false, isSuccess: false, isError: false, data: [], recentQuestion: '' };

export const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUESTIONReq: return {
            ...state, isSuccess: false, isError: false, data: []
        };
        case QUESTIONSuc:  
        return {
            ...state, isSuccess: true, isError: false, data: action.payload
        };
        case QUESTIONErr: return {
            ...state, isError: true, errorText: action.payload
        };
        case QUESTION_RECENT: return {
            ...state,  recentQuestion: action.payload
        };
        case UPDATE_RECENT_QUESTION: return {
            ...state,  recentQuestion: action.payload
        };
        case QUESTIONAddSuc: return {
            ...state, isSuccess: true
        };        
        case QUESTIONAdd: return {
            ...state, data: action.payload.concat(state.data), isError: false, isSuccess: false
        };        
        case ALL_USER_QUESTIONS_REQ: return {
            ...state, loading: true
        };
        case ALL_USER_QUESTIONS: return {
            ...state, data: action.payload, loading: false
        };
        case QUESTIONDel: return {
            ...state, data: state.data.filter(survey => survey._id !== action.payload._id)
        }
        case QUESTIONUpt: return {
            ...state, data: state.data.map(question => {
                if (question._id === action.payload._id) question = action.payload;
                return question;
            }), isError: false
        }
        default: return state;
    }
}
