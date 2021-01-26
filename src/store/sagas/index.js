import { all } from 'redux-saga/effects';
import authInfoSagas from './auth';

export default function* rootSaga(getState) {
    yield all([
        authInfoSagas(),
    ]);
};