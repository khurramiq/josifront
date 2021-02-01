import { combineReducers } from 'redux';
import { surveyReducer } from './surveyReducer';

import { userReducer, snackbarReducer, navbarReducer } from './profileReducer';


const CombinedReducers = combineReducers({
    User: userReducer,
    Snackbar: snackbarReducer,    
    Navbar: navbarReducer,
    survey: surveyReducer,
});

export default CombinedReducers;