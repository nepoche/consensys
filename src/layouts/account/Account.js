import React from 'react';

import { ChangePasswordForm } from './ChangePassword';

const AccountPage = ( authUser ) => (
    <div>
        <h1>Account Page</h1>
        <h3>Email: {authUser.email}</h3>
        <ChangePasswordForm />
    </div>
);

export default AccountPage;