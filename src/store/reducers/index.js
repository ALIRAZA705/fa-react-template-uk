import { combineReducers } from 'redux';

import azureAuth from './auth/azureAuth';
import authInfo from './auth/auth';
import settings from './settings';
import reports from './reports'
import FaData from './fadata'

const reducers = combineReducers({
    auth: azureAuth,
    authInfo: authInfo,
    reports,
    settings,
    FaData
});

export default reducers;