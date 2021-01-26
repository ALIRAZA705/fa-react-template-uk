import { call, put, takeEvery } from 'redux-saga/effects';

import { getAuthInfoSuccess, getAuthInfoFailure } from '../../actions/auth';
import { GET_AUTH_INFO } from '../../constants/auth';

import { makeRequest } from '../../../util/APIHelper';

export const fetchAuthInfoRequest = async () => {

    const args = { path: `https://${process.env.REACT_APP_AUTH_API_ENDPOINT}/auth/info` };

    return await makeRequest(args)
        .then(response => response)
        .catch(error => { throw error })
};

function* fetchAuthInfo(params) {
    try {
        const response = yield call(fetchAuthInfoRequest);
        yield put(getAuthInfoSuccess(response));
    } catch (error) {
        console.error(error);
        yield put(getAuthInfoFailure(error));
    }
}

export default function* rootSaga() {
    yield takeEvery(GET_AUTH_INFO, fetchAuthInfo);
}