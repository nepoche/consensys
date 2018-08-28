import { ACCOUNT_LOGGED_IN, ACCOUNT_LOGGED_OUT } from '../constants/action-types';

const accountLoggedIn = (email) => ({
    type: ACCOUNT_LOGGED_IN,
    payload: email
});

const accountLoggedOut = () => ({
    type: ACCOUNT_LOGGED_OUT,
    payload: ""
});

export { accountLoggedIn, accountLoggedOut };