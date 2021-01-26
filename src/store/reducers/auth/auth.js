import {
    GET_AUTH_INFO,
    GET_AUTH_INFO_SUCCESS,
    GET_AUTH_INFO_FAILURE,
} from '../../constants/auth';
import { GROUPS } from '../../../util/Auth/ability';

const INIT_STATE = {
    user: undefined,
    authInfoLoader: false,
    authInfo: undefined,
    authInfoError: undefined,
    rules: undefined,
    attributes: undefined,
    lastLogin: undefined
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_AUTH_INFO: {
            return {
                ...state,
                authInfoLoader: true,
                authInfo: undefined,
                authInfoError: ''
            };
        }
        case GET_AUTH_INFO_SUCCESS: {
            let { groups, attributes, lastLogin } = action.payload;
            let rules = [];

            localStorage.setItem('override', groups);
            localStorage.setItem('attributesList', JSON.stringify(attributes));

            let attributeRules = [];
            if (attributes.hasOwnProperty('M')) {
                attributes.M.map(att => attributeRules.push({ subject: 'AgeFilter', actions: 'see', conditions: { squad: att, gender: 'M' } }));
            }
            if (attributes.hasOwnProperty('F')) {
                attributes.F.map(att => attributeRules.push({ subject: 'AgeFilter', actions: 'see', conditions: { squad: att, gender: 'F' } }));
            }
            groups.map(group => {
                if (GROUPS.hasOwnProperty(group)) {
                    rules = rules.concat(...rules, GROUPS[group], attributeRules);
                }
            });

            // Loop through each of the groups returned and concat the permissions associated to each group
            groups.map(group => {
                if (GROUPS.hasOwnProperty(group)) {
                    rules = rules.concat(...rules, GROUPS[group], attributeRules);
                }
            });
            return {
                ...state,
                authInfoLoader: false,
                authInfo: rules,
                authInfoError: '',
                rules,
                attributes,
                lastLogin
            };
        }
        case GET_AUTH_INFO_FAILURE: {
            return {
                ...state,
                authInfoLoader: false,
                authInfo: undefined,
                authInfoError: 'Error getting auth info'
            };
        }
        default:
            return state;
    }
}
