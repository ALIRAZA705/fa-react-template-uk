import { combineReducers } from 'redux';

import azureAuth from './auth/azureAuth';
import authInfo from './auth/auth';
import settings from './settings';
import reports from './reports'

const reducers = combineReducers({
    auth: azureAuth,
    authInfo: authInfo,
    reports,
    settings
});

export default reducers;