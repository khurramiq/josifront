import { surveyConstants, snackBarConstants } from '../constants';
import api from '../../utils/api';
const { SURVEYAdd, SURVEYDel, SURVEYErr, SURVEYSuc, SURVEYReq, SURVEYUpt } = surveyConstants;
const { ShowSnack } = snackBarConstants;

export const createSurvey = data => async dispatch => {
    try {
        var res = await api.post('/survey/create', data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (res.data.survey && !res.data.error) {
            dispatch({ type: ShowSnack, payload: 'Survey added successfully' });
            dispatch({ type: SURVEYAdd, payload: [res.data.survey] })
        } else {
            dispatch({ type: SURVEYErr, payload: res.data.error });
        }
    } catch (e) { dispatch({ type: SURVEYErr, payload: e.message }); }
};

export const updateSurvey = data => async dispatch => {
    try {
        var res = await api.post('/item/update', data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (res.data.item && !res.data.error) {
            dispatch({ type: ShowSnack, payload: 'Item updated successfully' });
            dispatch({ type: SURVEYUpt, payload: res.data.item })
        } else {
            dispatch({ type: SURVEYErr, payload: res.data.error });
        }
    } catch (e) { dispatch({ type: SURVEYErr, payload: e.message }); }
};

export const deleteSurvey = data => async dispatch => {
    try {
        var res = await api.delete(`/item/delete/${data._id}`, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (!res.data.error) {
            dispatch({ type: ShowSnack, payload: 'Item deleted successfully' });
            dispatch({ type: SURVEYDel, payload: data });
        } else {
            dispatch({ type: SURVEYErr, payload: res.data.error });
        }
    } catch (e) { dispatch({ type: SURVEYErr, payload: e.message }); }
};

export const getAllSurvey = data => async dispatch => {
    try {
        dispatch({ type: SURVEYReq });
        var res = await api.get('/item/getAll', { params: data, headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (!res.data.error) {
            dispatch({ type: SURVEYSuc, payload: res.data.items });
        } else {
            dispatch({ type: SURVEYErr, payload: res.data.error });
        }
    } catch (e) { dispatch({ type: SURVEYErr, payload: e.message }); }
};

export const All = data => async dispatch => {
    try {
        dispatch({ type: SURVEYReq });
        var res = await api.get('/item/All', { params: data, headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (!res.data.error) {
            dispatch({ type: SURVEYSuc, payload: res.data.items });
        } else {
            dispatch({ type: SURVEYErr, payload: res.data.error });
        }
    } catch (e) { dispatch({ type: SURVEYErr, payload: e.message }); }
};