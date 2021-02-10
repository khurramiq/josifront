import { combineReducers } from 'redux';
import { surveyReducer } from './surveyReducer';
import { questionReducer } from './questionReducer';

import { userReducer, snackbarReducer, navbarReducer } from './profileReducer';


const CombinedReducers = combineReducers({
    User: userReducer,
    Snackbar: snackbarReducer,    
    Navbar: navbarReducer,
    survey: surveyReducer,
    question: questionReducer,
});

export default CombinedReducers;