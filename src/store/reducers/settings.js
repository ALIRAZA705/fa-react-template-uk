import { GET_AUTH_INFO_SUCCESS } from '../constants/auth';

const initialSettings = {
    width: window.innerWidth,
    theme: 'mens'
};

const settings = (state = initialSettings, action) => {
    switch (action.type) {
        case GET_AUTH_INFO_SUCCESS: {
            // Check the attributes, if the logged in user is only allowed 
            // to see womens age groups, automatically switch the theme.
            let { attributes } = action.payload;

            if (attributes) {
                // If the attributes contains a 'M' key then ethe logged in user has at 
                // least mens access so assign the default mens theme.
                if (attributes.hasOwnProperty('M')) {
                    return { ...state, theme: 'mens' };
                } else {
                    // If the user doesn't have a 'M' key on their attributes they must be 
                    // assigned women only. Apply the womens theme.
                    return { ...state, theme: 'womens' };
                }
            }
            // If we've arrived here then there was a problem fetching the 
            // current logged in users attributes, return the default mens theme.
            return {
                ...state,
                theme: 'mens'
            };
        }
        default: {
            return state;
        }
    }
};

export default settings;