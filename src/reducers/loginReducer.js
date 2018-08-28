import { ACCOUNT_LOGGED_IN, ACCOUNT_LOGGED_OUT } from '../constants/action-types';
import { loadLoginState, saveLoginState } from '../util/localStorage';

export default function loginReducer(state = loadLoginState(), action) {
    switch (action.type) {
        case ACCOUNT_LOGGED_IN:
            saveLoginState(action.payload);
            return action.payload;
        case ACCOUNT_LOGGED_OUT:
            saveLoginState(action.payload);
            return action.payload;

        default:
            return state;
    }
}