import { questionConstants, snackBarConstants } from '../constants';
import api from '../../utils/api';
const { QUESTIONAdd, QUESTIONDel, QUESTIONErr, QUESTIONUpt, QUESTION_RECENT, ALL_USER_QUESTIONS, UPDATE_RECENT_QUESTION, QUESTIONAddSuc } = questionConstants;
const { ShowSnack } = snackBarConstants;

export const createQuestion = data => async dispatch => {
    try {
        var res = await api.post('/question/create', data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (res.data.question && !res.data.error) {
            dispatch({ type: ShowSnack, payload: 'Question added successfully' });
            dispatch({ type: QUESTIONAddSuc })
            dispatch({ type: QUESTIONAdd, payload: [res.data.question] })
            dispatch({ type: QUESTION_RECENT, payload: res.data.question._id })
        } else {
            dispatch({ type: QUESTIONErr, payload: res.data.error });
        }
    } catch (e) { dispatch({ type: QUESTIONErr, payload: e.message }); }
};

export const recentQuestion = data => async dispatch => {
    try {
        var res = await api.get(`/question/recent_question/${data.surveyId}`, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if ((res.data.recentQuestion && !res.data.error) || res.data.recentQuestion==='') {
            dispatch({ type: QUESTION_RECENT, payload: res.data.recentQuestion })
        } else {
            dispatch({ type: QUESTIONErr, payload: res.data.error });
        }
    } catch (e) { dispatch({ type: QUESTIONErr, payload: e.message }); }
};

export const updateRecentQuestion = (data) => async dispatch => {
    try {
        var res = await api.post('/question/update_recent_question',data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (res.data.recentQuestion && !res.data.error) {
            dispatch({ type: UPDATE_RECENT_QUESTION, payload: res.data.recentQuestion })
        } else {
            dispatch({ type: QUESTIONErr, payload: res.data.error });
        }
    } catch (e) { dispatch({ type: QUESTIONErr, payload: e.message }); }
};

export const getAllSurveyQuestions = data => async dispatch => {
    try {
        var res = await api.get(`/question/all_survey_questions/${data.surveyId}`, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (res.data.questions && !res.data.error) {            
            dispatch({ type: ALL_USER_QUESTIONS, payload: res.data.questions })
        } else {
            dispatch({ type: QUESTIONErr, payload: res.data.error });
        }
    } catch (e) { dispatch({ type: QUESTIONErr, payload: e.message }); }
};

export const updateQuestion = data => async dispatch => {
    try {
        var res = await api.post('/question/update', data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (res.data.question && !res.data.error) {
            dispatch({ type: ShowSnack, payload: 'Question updated successfully' });
            dispatch({ type: QUESTIONUpt, payload: res.data.question })
        } else {
            dispatch({ type: QUESTIONErr, payload: res.data.error });
        }
    } catch (e) { dispatch({ type: QUESTIONErr, payload: e.message }); }
};

export const deleteQuestion = data => async dispatch => {
    try {
        var res = await api.delete(`/question/delete/${data._id}`, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (!res.data.error) {
            dispatch({ type: ShowSnack, payload: 'Question deleted successfully' });
            dispatch({ type: QUESTIONDel, payload: data });
        } else {
            dispatch({ type: QUESTIONErr, payload: res.data.error });
        }
    } catch (e) { dispatch({ type: QUESTIONErr, payload: e.message }); }
};