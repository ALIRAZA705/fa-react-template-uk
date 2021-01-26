import {
    GET_AUTH_INFO,
    GET_AUTH_INFO_SUCCESS,
    GET_AUTH_INFO_FAILURE
} from '../../constants/auth';

export const getAuthInfo = () => {
    return {
        type: GET_AUTH_INFO,
    };
};
export const getAuthInfoSuccess = payload => {
    return {
        type: GET_AUTH_INFO_SUCCESS,
        payload
    };
};
export const getAuthInfoFailure = payload => {
    return {
        type: GET_AUTH_INFO_FAILURE,
        payload
    };
};