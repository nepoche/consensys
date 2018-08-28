import React from 'react';
// import { auth } from '../firebase';
import { accountLoggedOut } from '../actions';
import { store } from "../store";

const handleSubmit = () => {
    // auth.doSignOut();

    // change the persistent state
    store.dispatch(accountLoggedOut());
}

const LogoutButton = () => (
    <button
        type="button"
        onClick={handleSubmit}
    >
        Logout
    </button>
)

export default LogoutButton;