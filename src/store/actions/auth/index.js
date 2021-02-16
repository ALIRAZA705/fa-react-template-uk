import {
    GET_AUTH_INFO,
    GET_AUTH_INFO_SUCCESS,
    GET_AUTH_INFO_FAILURE,
    GET_CONTACT_WINDOW,
    GET_NEW_CONTACT_WINDOW,
    GET_READ_CONTACT,
    GET_HEADER_DRAWER,
    GET_ENGAGEMENTS_FILTERS,
    GET_NEW_ENGAGEMENTS_WINDOW
    
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
export const getContactWindow = payload => {
    return {
        type: GET_CONTACT_WINDOW,
        payload
    };
};

export const getNewContactWindow = payload => {
    return {
        type: GET_NEW_CONTACT_WINDOW,
        payload
    };
};

export const getReadContact = payload => {
    return {
        type: GET_READ_CONTACT,
        payload
    };
};

export const getHeaderDrawer = payload => {
    return {
        type: GET_HEADER_DRAWER,
        payload
    };
};

export const getEngagementsFilters = payload => {
    return {
        type: GET_ENGAGEMENTS_FILTERS,
        payload
    };
};

export const getNewEngagementWindow = payload => {
    return {
        type: GET_NEW_ENGAGEMENTS_WINDOW,
        payload
    };
};