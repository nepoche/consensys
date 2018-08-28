// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import { auth } from '../../firebase';
// import * as routes from '../../constants/routes';

// const ForgotPasswordPage = () => (
//     <div>
//         <h1>Forgot Password Page</h1>
//         <ForgotPasswordForm />
//     </div>
// );

// const byPropKey = (propertyName, value) => () => ({
//     [propertyName]: value,
// });

// const INITIAL_STATE = {
//     email: '',
//     error: null,
// };

// class ForgotPasswordForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = { ...INITIAL_STATE };
//     }

//     onSubmit = (event) => {
//         const { email } = this.state;

//         auth.doPasswordReset(email)
//             .then(() => {
//                 this.setState({ ...INITIAL_STATE });
//             })
//             .catch(error => {
//                 this.setState(byPropKey('error', error));
//             });
//     }

//     render() {
//         const {
//             email,
//             error,
//         } = this.state;

//         const isInvalid = !/^\S+@\S+\.\S+$/.test(email);

//         return (
//             <form onSubmit={this.onSubmit}>
//                 <input
//                     value={email}
//                     onChange={event => this.setState(byPropKey('email', event.target.value))}
//                     type="text"
//                     placeholder="email"
//                 />
//                 <button disabled={isInvalid} type="submit">
//                     Reset My Password
//                 </button>

//                 { error && <p>{error.message}</p> }
//             </form>
//         );
//     }
// }

// const ForgotPasswordLink = () => (
//     <p>
//         <Link to={routes.FORGOT_PASSWORD}>Forgot Password</Link>
//     </p>
// );

// export default ForgotPasswordPage;

// export {
//     ForgotPasswordForm,
//     ForgotPasswordLink,
// };