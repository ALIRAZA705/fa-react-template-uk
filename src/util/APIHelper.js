import { authProvider } from '../authProvider';

/**
 * Helper function to retrieve the token for the current logged in user.
 */
export const getIdToken = async () => {
    return await authProvider.getIdToken()
        .then(tokenResponse => tokenResponse?.idToken?.rawIdToken);
}

/**
 * Helper function to make an API request, fetching the token of the current logged in user first. 
 * @param {*} args 
 */
export const makeRequest = async (args) => {
    let token = '';

    // Get the current token
    token = await getIdToken();

    // Setup fetch options, adding the token
    const options = {
        ...args,
        headers: {
            ...args.headers,
            Authorization: `Bearer ${token}`
        }
    };

    // Return the fetch response or throw the error.
    return await fetch(options.path, options)
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
};